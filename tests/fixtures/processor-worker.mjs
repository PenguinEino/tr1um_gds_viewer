// Run the actual browser worker and shipped WASM with a Node transport.
import { parentPort } from 'node:worker_threads';
import { readFile } from 'node:fs/promises';

globalThis.self = globalThis;
globalThis.location = { href: new URL('../../src/gds_processor_worker.js', import.meta.url).href };
globalThis.postMessage = (message) => parentPort.postMessage(message);
const networkFetch = globalThis.fetch;
globalThis.fetch = async (url, options) => {
  if (String(url).startsWith('file:')) {
    return new Response(await readFile(new URL(url)), {
      headers: { 'Content-Type': 'application/wasm' },
    });
  }
  return networkFetch(url, options);
};
parentPort.on('message', (data) => self.onmessage({ data }));
await import('../../src/gds_processor_worker.js');
