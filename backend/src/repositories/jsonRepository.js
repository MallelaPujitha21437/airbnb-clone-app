import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(process.cwd(),'data');
export async function readJson(file){return JSON.parse(await fs.readFile(path.join(root,file),'utf8'));}
export async function writeJson(file,data){await fs.writeFile(path.join(root,file),JSON.stringify(data,null,2));return data;}
