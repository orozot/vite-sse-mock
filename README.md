# vite-sse-mock

## Usage

```javascript
// vite.config.ts
import VitePluginSseMock from 'vite-sse-mock';

...
plugins: [
  VitePluginSseMock({
      paths: ['/sse-request-path'],
  })
]
...

```