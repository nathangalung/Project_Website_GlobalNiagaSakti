import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DUvScwbp.mjs';
import { manifest } from './manifest_Clk-TN2k.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/customer.astro.mjs');
const _page5 = () => import('./pages/disclaimer.astro.mjs');
const _page6 = () => import('./pages/pnp.astro.mjs');
const _page7 = () => import('./pages/product.astro.mjs');
const _page8 = () => import('./pages/tnc.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/contact/index.astro", _page3],
    ["src/pages/customer/index.astro", _page4],
    ["src/pages/disclaimer/index.astro", _page5],
    ["src/pages/pnp/index.astro", _page6],
    ["src/pages/product/index.astro", _page7],
    ["src/pages/tnc/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "f0c9ff44-7c95-40a1-b8a1-d18837d7fe7b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
