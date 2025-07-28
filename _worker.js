// Cloudflare Pages _worker.js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`[_worker.js] ${request.method} ${url.pathname}`);
    
    // Debug info
    if (url.pathname === '/debug') {
      return new Response(JSON.stringify({
        type: 'Cloudflare Pages _worker.js',
        env_keys: Object.keys(env),
        has_ASSETS: !!env.ASSETS,
        timestamp: new Date().toISOString()
      }, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Try to serve from ASSETS
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    
    return new Response('_worker.js is running but no ASSETS binding found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};