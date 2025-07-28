export default {
  async fetch(request, env, ctx) {
    // For the new assets approach, we just need a basic worker
    // The assets will be served automatically
    return env.ASSETS.fetch(request);
  },
};