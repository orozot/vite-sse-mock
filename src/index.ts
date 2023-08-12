import * as http from 'http';
import { ViteDevServer, Connect } from 'vite';

export interface MockOptions {
  paths?: string[];
}

const PLUGIN_NAME = 'vite-plugin-sse-mock';

const addSse = (req: Connect.IncomingMessage, res: http.ServerResponse) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  countdown(res, 10);
};

function countdown(res: http.ServerResponse, count: number) {
  res.write(`data: ${count}\n\n`);
  if (count) setTimeout(() => countdown(res, count - 1), 3000);
  else res.end();
}

export default function VitePluginSseMock(options?: MockOptions) {
  return {
    name: PLUGIN_NAME,
    enforce: 'post',
    configureServer(server: ViteDevServer) {
      if (options?.paths && options?.paths.length > 0) {
        options?.paths.forEach((path) => {
          server.middlewares.use(path, (req, res) => {
            addSse(req, res);
          });
        });
      }
    },
  };
}
