export const isServer = () => {
  return typeof window === 'undefined' || 'Deno' in globalThis;
};
