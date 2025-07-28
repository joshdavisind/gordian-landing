import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  console.log(`[Worker] ${event.request.method} ${url.pathname}`);

  try {
    // Serve from KV
    const response = await getAssetFromKV(event, {
      waitUntil(promise) {
        return event.waitUntil(promise);
      }
    });
    
    console.log(`[Worker] Served ${url.pathname} - Status: ${response.status}`);
    return response;
  } catch (e) {
    // If not found, try to serve index.html for SPA routing
    if (e.status === 404) {
      console.log(`[Worker] 404 for ${url.pathname}, trying index.html`);
      
      try {
        const response = await getAssetFromKV(event, {
          mapRequestToAsset: () => new Request(`${url.origin}/index.html`, event.request),
          waitUntil(promise) {
            return event.waitUntil(promise);
          }
        });
        
        return new Response(response.body, {
          ...response,
          headers: {
            ...response.headers,
            'content-type': 'text/html;charset=UTF-8',
          }
        });
      } catch (e) {
        console.error('[Worker] Failed to serve index.html:', e);
      }
    }
    
    console.error('[Worker] Error:', e.message || e);
    
    return new Response(`
<!DOCTYPE html>
<html>
<head>
    <title>Error - Gordian Development</title>
</head>
<body>
    <h1>Error Loading Page</h1>
    <p>Path: ${url.pathname}</p>
    <p>Error: ${e.message || e}</p>
    <p>If you're seeing this, the worker is running but having trouble serving static files.</p>
</body>
</html>
    `, {
      status: e.status || 500,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}