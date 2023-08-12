# vite-sse-mock

## Usage

```javascript
// vite.config.ts
import VitePluginSseMock from '${plugin_path}';

...
plugins: [
  VitePluginSseMock({
      paths: ['/sse-request-path'],
  })
]
...

```