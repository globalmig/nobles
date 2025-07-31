// global.d.ts
export {};

declare global {
  interface Window {
    wsa?: any;
    wsa_do?: ((wsa: any) => void) | undefined;
  }
}
