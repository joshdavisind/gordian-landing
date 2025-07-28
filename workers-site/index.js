import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {})
  } catch (e) {
    // If asset not found, return index.html for SPA routing
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: () => new Request(`${event.request.url.split('?')[0]}/index.html`, event.request),
      })
    } catch (e) {
      return new Response('Not found', { status: 404 })
    }
  }
}