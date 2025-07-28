export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`Incoming request: ${request.method} ${url.pathname}`);
    
    try {
      // For the new assets approach, we just need a basic worker
      // The assets will be served automatically
      const response = await env.ASSETS.fetch(request);
      console.log(`Response status: ${response.status} for ${url.pathname}`);
      return response;
    } catch (error) {
      console.error(`Error serving request for ${url.pathname}:`, error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};