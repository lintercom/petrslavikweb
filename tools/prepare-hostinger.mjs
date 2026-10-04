import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync, cpSync, renameSync, chmodSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { loadEnv } from 'vite';
const root = process.cwd();
const dist = path.join(root,'dist');
if (!existsSync(path.join(dist,'kontakt/index.html')) || !existsSync(path.join(dist,'consultant.php'))) throw new Error('Run npm run build first');
const env = loadEnv('development',root,'');
const privateDirectory = path.join(root,'consultant-private');
mkdirSync(privateDirectory,{recursive:true,mode:0o700});
for (const name of ['runtime.php','config.example.php']) copyFileSync(path.join(root,'server/consultant-php',name),path.join(privateDirectory,name));
for (const name of ['instructions.md','business.md','protocol.md']) copyFileSync(path.join(root,'server/consultant',name),path.join(privateDirectory,name));
// Never overwrite a configuration already reviewed for a hosting account.
if (!existsSync(path.join(privateDirectory,'config.php'))) {
  const values = Object.fromEntries(Object.entries(env).filter(([key])=>['CONSULTANT_MODE','CONSULTANT_MAIL_MODE','GEMINI_API_KEY','GEMINI_MODEL'].includes(key) || /^CONSULTANT_(MAX_|SESSION_|IP_|LEAD_|TIMEOUT_|OUTPUT_|DAILY_|MONTHLY_)/.test(key)));
  values.CONSULTANT_PUBLIC_ENABLED = false;
  const encoded = JSON.stringify(values,null,2);
  writeFileSync(path.join(privateDirectory,'config.php'),`<?php\n// PRIVATE: upload alongside public_html, never inside it.\nreturn json_decode(<<<'CONFIG'\n${encoded}\nCONFIG, true, 512, JSON_THROW_ON_ERROR);\n`,{mode:0o600});
}
chmodSync(path.join(privateDirectory,'config.php'),0o600);
writeFileSync(path.join(privateDirectory,'.htaccess'),'Require all denied\n');
const files = [];
function walk(directory) { for (const entry of readdirSync(directory,{withFileTypes:true})) { const file=path.join(directory,entry.name);entry.isDirectory() ? walk(file) : files.push(file); } }
walk(dist);
const key = env.GEMINI_API_KEY;
for (const file of files) {
  if (key && readFileSync(file).includes(Buffer.from(key))) throw new Error('Secret found in public build');
  if (path.basename(file).startsWith('.env')) throw new Error('Environment file found in public build');
}
const upload = path.join(root,'public_upload');
if (existsSync(upload)) {
  const backup = path.join(os.tmpdir(),`petrslavikweb-upload-${Date.now()}`);
  renameSync(upload,backup);
}
cpSync(dist,upload,{recursive:true});
console.log(`Hostinger package ready: ${files.length} public files, no API key in public_upload. Private server files: consultant-private (upload outside public_html).`);
