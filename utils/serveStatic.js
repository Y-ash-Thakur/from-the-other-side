import path from 'node:path';
import { sendReasponse } from './sendResponse.js';
import fs from 'node:fs/promises';

export async function serveStatic(req, res, baseDir) {
  
  const filePath = path.join(baseDir, 'public', 'index.html');
  
  try {
    const content = await fs.readFile(filePath)
    sendReasponse(res, 200, 'text/html', content)
  } catch (err) {
      console.log(err);
  }
}