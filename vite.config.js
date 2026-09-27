// Modified by PenguinEino (2026): ship licenses with the static site. See NOTICE.
import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

export default defineConfig({
  base: '', // this allows deployment to a subdirectory (e.g. https://tinytapeout.github.io/tinytapeout_gds_viewer/)

  plugins: [
    {
      name: 'distribute-license-notices',
      generateBundle() {
        for (const fileName of ['LICENSE', 'NOTICE', 'THIRD_PARTY_NOTICES.md']) {
          const source = readFileSync(new URL(fileName, import.meta.url), 'utf8').replaceAll(
            '(public/licenses/',
            '(licenses/',
          );
          this.emitFile({ type: 'asset', fileName, source });
        }
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const fileName = req.url?.split('?')[0].slice(1);
          if (!['LICENSE', 'NOTICE', 'THIRD_PARTY_NOTICES.md'].includes(fileName)) return next();
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(readFileSync(new URL(fileName, import.meta.url), 'utf8'));
        });
      },
    },
    {
      name: 'watch-gds-files',
      handleHotUpdate({ file, server }) {
        // this allows hot-reloading of .gds files
        if (file.endsWith('.gds')) {
          server.ws.send({
            type: 'custom',
            event: 'my-gds-change', // viewer.js listens for this event
            data: {},
          });
        }
      },
    },
  ],

  worker: {
    format: 'es',
  },
});
