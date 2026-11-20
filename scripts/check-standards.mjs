#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const results = [];
let failed = 0;

function check(name, run) {
  try {
    const detail = run();
    results.push({ name, ok: true, detail: detail || 'ok' });
  } catch (error) {
    failed += 1;
    results.push({ name, ok: false, detail: error.message });
  }
}

function fail(message) {
  throw new Error(message);
}

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

function walk(dir, out = []) {
  for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
}

const files = walk('assets').concat(['index.html']);
const html = read('index.html');
const css = files.filter((f) => f.endsWith('.css'));
const svgs = files.filter((f) => f.endsWith('.svg'));

const HEX = /#[0-9a-fA-F]{3}(?![0-9a-zA-Z])|#[0-9a-fA-F]{6}(?![0-9a-zA-Z])/;
const RGB = /\brgba?\s*\(/;

check('tokens: nenhum valor de cor literal fora de tokens.css', () => {
  const offenders = [];
  for (const file of css.concat(['index.html'])) {
    if (file.endsWith('tokens.css')) continue;
    read(file)
      .split('\n')
      .forEach((line, index) => {
        if (line.includes('name="theme-color"')) return;
        if (HEX.test(line) || RGB.test(line)) offenders.push(`${file}:${index + 1}`);
      });
  }
  if (offenders.length) fail(`cor literal em ${offenders.join(', ')}`);
  return `${css.length} css + html sem cor literal`;
});

check('tokens: tokens.css define as três camadas', () => {
  const tokens = read('assets/css/tokens.css');
  for (const layer of ['--global-', '--alias-', '--comp-']) {
    if (!tokens.includes(layer)) fail(`camada ${layer} ausente`);
  }
  return 'global, alias e comp presentes';
});

check('rede: nenhuma requisição a domínio externo', () => {
  const allowed = ['wa.me', 'anapaulamello.vercel.app', 'ana-paula-mello-landing.vercel.app', 'schema.org', 'www.w3.org'];
  const offenders = [];
  for (const file of css.concat(['index.html'])) {
    const matches = read(file).match(/https?:\/\/[^\s"'()<>]+/g) || [];
    for (const url of matches) {
      if (!allowed.some((host) => url.includes(host))) offenders.push(`${file} → ${url}`);
    }
  }
  if (offenders.length) fail(offenders.join('; '));
  return `${allowed.length} hosts na allowlist`;
});

check('svg: sem <text> e sem referência remota', () => {
  for (const file of svgs) {
    const body = read(file);
    if (/<text[\s>]/.test(body)) fail(`${file} usa <text>`);
    if (/xlink:href\s*=\s*["']https?:/.test(body)) fail(`${file} referencia remoto`);
    if (/@import/.test(body)) fail(`${file} usa @import`);
    if (!/viewBox=/.test(body)) fail(`${file} sem viewBox`);
  }
  return `${svgs.length} svg auditados`;
});

check('svg: peso abaixo de 8 KB por arquivo', () => {
  for (const file of svgs) {
    const size = statSync(join(root, file)).size;
    if (size > 8192) fail(`${file} tem ${size} bytes`);
  }
  return svgs.map((f) => `${f.split('/').pop()} ${statSync(join(root, f)).size}B`).join(', ');
});

check('html: um h1 e hierarquia sem salto', () => {
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1 = levels.filter((l) => l === 1).length;
  if (h1 !== 1) fail(`${h1} elementos h1`);
  if (levels[0] !== 1) fail('primeiro heading não é h1');
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] > levels[i - 1] + 1) fail(`salto de h${levels[i - 1]} para h${levels[i]}`);
  }
  return `${levels.length} headings, 1 h1`;
});

check('html: nove seções na ordem prevista', () => {
  const ids = ['hero-title', 'reconhece-title', 'como-title', 'direitos-title', 'docs-title', 'sobre-title', 'faq-title', 'contato-title'];
  const positions = ids.map((id) => html.indexOf(`id="${id}"`));
  if (positions.some((p) => p < 0)) fail('seção ausente');
  for (let i = 1; i < positions.length; i += 1) {
    if (positions[i] < positions[i - 1]) fail(`ordem quebrada em ${ids[i]}`);
  }
  if (!html.includes('<footer')) fail('rodapé ausente');
  return `${ids.length} seções + rodapé`;
});

check('conteúdo: nenhum termo vedado pela OAB', () => {
  const banned = [
    /garant/i,
    /melhor advogad/i,
    /gr[áa]tis/i,
    /honor[áa]rio/i,
    /\bs[óo]\s+paga\b/i,
    /[êe]xito/i,
    /desconto/i,
    /promo[çc][ãa]o/i,
    /consulta gr[áa]tuita/i,
  ];
  const targets = ['index.html', 'assets/js/main.js'].filter((f) => existsSync(join(root, f)));
  const offenders = [];
  for (const file of targets) {
    const body = read(file);
    for (const pattern of banned) {
      const hit = body.match(pattern);
      if (hit) offenders.push(`${file}: ${hit[0]}`);
    }
  }
  if (offenders.length) fail(offenders.join('; '));
  return `${banned.length} padrões em ${targets.length} arquivos`;
});

check('links: nenhum caminho relativo quebrado', () => {
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  const local = refs.filter((r) => !/^(https?:|mailto:|#|data:)/.test(r));
  for (const ref of local) {
    if (!existsSync(join(root, ref))) fail(`${ref} não existe`);
  }
  return `${local.length} referências locais resolvidas`;
});

check('peso: orçamento de arquivo', () => {
  const budget = { 'index.html': 61440, css: 40960 };
  const size = statSync(join(root, 'index.html')).size;
  if (size > budget['index.html']) fail(`index.html com ${size} bytes`);
  for (const file of css) {
    const s = statSync(join(root, file)).size;
    if (s > budget.css) fail(`${file} com ${s} bytes`);
  }
  return `index.html ${size}B`;
});

check('docs: AGENTS.md em até 120 linhas', () => {
  const lines = read('AGENTS.md').split('\n').length;
  if (lines > 120) fail(`AGENTS.md com ${lines} linhas`);
  return `${lines} linhas`;
});

check('docs: cada docs/*.md em até 150 linhas', () => {
  const docs = readdirSync(join(root, 'docs')).filter((f) => f.endsWith('.md'));
  for (const file of docs) {
    const lines = read(`docs/${file}`).split('\n').length;
    if (lines > 150) fail(`docs/${file} com ${lines} linhas`);
  }
  return docs.map((f) => `${f} ${read(`docs/${f}`).split('\n').length}`).join(', ');
});

check('adr: índice aponta para arquivos existentes', () => {
  const index = JSON.parse(read('docs/adr/ADR-INDEX.json'));
  for (const adr of index.adrs) {
    if (!existsSync(join(root, 'docs/adr', adr.arquivo))) fail(`${adr.arquivo} ausente`);
    if (!Array.isArray(adr.touches) || !adr.touches.length) fail(`${adr.id} sem touches`);
  }
  return `${index.adrs.length} adrs`;
});

check('segredos: nenhum valor sensível versionado', () => {
  const targets = ['index.html', 'assets/js/main.js', 'AGENTS.md', 'README.md'];
  for (const file of targets) {
    const body = read(file);
    if (/(api[_-]?key|secret|token)\s*[:=]\s*["'][A-Za-z0-9_-]{16,}/i.test(body)) {
      fail(`${file} parece conter segredo`);
    }
  }
  return `${targets.length} arquivos varridos`;
});

for (const item of results) {
  const mark = item.ok ? 'PASS' : 'FAIL';
  console.log(`${mark}  ${item.name} — ${item.detail}`);
}

console.log(`\n${results.length - failed}/${results.length} checagens aprovadas`);
process.exit(failed === 0 ? 0 : 1);
