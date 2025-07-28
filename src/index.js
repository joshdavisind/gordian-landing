export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`[${new Date().toISOString()}] Incoming request: ${request.method} ${url.pathname}`);
    console.log(`Headers: ${JSON.stringify(Object.fromEntries(request.headers))}`);
    
    try {
      // Log what we're attempting to fetch
      console.log(`Attempting to serve asset: ${url.pathname === '/' ? '/index.html' : url.pathname}`);
      
      // For the new assets approach, we just need a basic worker
      // The assets will be served automatically
      const response = await env.ASSETS.fetch(request);
      
      console.log(`Response status: ${response.status} for ${url.pathname}`);
      console.log(`Content-Type: ${response.headers.get('content-type')}`);
      console.log(`Content-Length: ${response.headers.get('content-length')} bytes`);
      
      // If 404, log available assets (in dev only)
      if (response.status === 404) {
        console.warn(`Asset not found: ${url.pathname}`);
      }
      
      return response;
    } catch (error) {
      console.error(`Error serving request for ${url.pathname}:`, error);
      console.error(`Error stack:`, error.stack);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};