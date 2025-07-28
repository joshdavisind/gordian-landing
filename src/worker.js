export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Debug endpoint to check what's available
    if (url.pathname === '/debug') {
      const debugInfo = {
        timestamp: new Date().toISOString(),
        url: request.url,
        env_keys: Object.keys(env),
        env_ASSETS: !!env.ASSETS,
        env___STATIC_CONTENT: !!env.__STATIC_CONTENT,
        env___STATIC_CONTENT_MANIFEST: !!env.__STATIC_CONTENT_MANIFEST,
        cwd: typeof __dirname !== 'undefined' ? __dirname : 'not available',
        message: 'Worker is running, checking bindings...'
      };
      
      return new Response(JSON.stringify(debugInfo, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Manual HTML response to confirm worker is running
    return new Response(`
<!DOCTYPE html>
<html>
<head>
    <title>Gordian Development</title>
    <style>
      body { font-family: sans-serif; padding: 2rem; }
      .debug { background: #f0f0f0; padding: 1rem; margin: 1rem 0; }
    </style>
</head>
<body>
    <h1>Gordian Development</h1>
    <p>Worker is running but static assets are not loading.</p>
    
    <div class="debug">
      <h2>Debug Information:</h2>
      <p>Requested: ${url.pathname}</p>
      <p>Time: ${new Date().toISOString()}</p>
      <p>Has ASSETS binding: ${!!env.ASSETS}</p>
      <p>Has __STATIC_CONTENT: ${!!env.__STATIC_CONTENT}</p>
      <p>Environment keys: ${Object.keys(env).join(', ') || 'none'}</p>
    </div>
    
    <p>Visit <a href="/debug">/debug</a> for JSON debug output</p>
    
    <h3>Expected files in web/dist:</h3>
    <ul>
      <li>index.html</li>
      <li>assets/index-*.css</li>
      <li>assets/index-*.js</li>
    </ul>
</body>
</html>
    `, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  },
};