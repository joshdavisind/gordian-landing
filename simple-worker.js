// Temporary worker that serves the HTML directly
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`[SimpleWorker] ${request.method} ${url.pathname}`);
    
    // Serve the HTML directly
    return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Gordian Development - Software Development, Technology, and Leadership Consulting. We help organizations navigate complex technical challenges and develop exceptional leadership capabilities." />
    <meta name="keywords" content="software development, technology consulting, leadership development, custom solutions, digital transformation" />
    <meta name="author" content="Gordian Development" />
    <title>Gordian Development - Software Development, Technology & Leadership Consulting</title>
    <style>
      /* Inline the CSS temporarily */
      body { font-family: sans-serif; margin: 0; padding: 20px; }
      h1 { color: #333; }
      .notice { background: #f0f0f0; padding: 20px; border-radius: 5px; margin: 20px 0; }
    </style>
  </head>
  <body>
    <h1>Gordian Development</h1>
    <div class="notice">
      <p><strong>🚧 Site Under Construction</strong></p>
      <p>We're currently setting up our new website. The full site with all features will be available soon.</p>
      <p>For now, you can reach us at: [your contact info]</p>
    </div>
    <p>Software Development, Technology & Leadership Consulting</p>
  </body>
</html>`, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    });
  },
};