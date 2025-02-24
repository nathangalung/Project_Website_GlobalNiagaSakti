import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_C3zvv3EJ.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_CFDtuJ1z.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DuVZ8JyH.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/","cacheDir":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/node_modules/.astro/","outDir":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/dist/","srcDir":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/","publicDir":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/public/","buildClientDir":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/dist/client/","buildServerDir":"file:///C:/Users/Bryan%20Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"},{"type":"inline","content":"img[data-astro-cid-fwdcsva6]{image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges}@media (max-width: 640px){.text-justify[data-astro-cid-fwdcsva6]{text-align:justify!important}}\n"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"},{"type":"inline","content":"img[data-astro-cid-scl7df5v]{image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges}@media (max-width: 768px){.grid[data-astro-cid-scl7df5v]{padding-left:0!important;padding-right:0!important}}\n"}],"routeData":{"route":"/customer","isIndex":true,"type":"page","pattern":"^\\/customer\\/?$","segments":[[{"content":"customer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/customer/index.astro","pathname":"/customer","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"}],"routeData":{"route":"/disclaimer","isIndex":true,"type":"page","pattern":"^\\/disclaimer\\/?$","segments":[[{"content":"disclaimer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/disclaimer/index.astro","pathname":"/disclaimer","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"}],"routeData":{"route":"/pnp","isIndex":true,"type":"page","pattern":"^\\/pnp\\/?$","segments":[[{"content":"pnp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pnp/index.astro","pathname":"/pnp","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"},{"type":"inline","content":"img[data-astro-cid-rnqo2yuk]{image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges}\n"}],"routeData":{"route":"/product","isIndex":true,"type":"page","pattern":"^\\/product\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/product/index.astro","pathname":"/product","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"}],"routeData":{"route":"/tnc","isIndex":true,"type":"page","pattern":"^\\/tnc\\/?$","segments":[[{"content":"tnc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tnc/index.astro","pathname":"/tnc","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BAsAQwqA.css"},{"type":"inline","content":"img[data-astro-cid-j7pv25f6]{image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges}@media (max-width: 1024px){.from-primary-1[data-astro-cid-j7pv25f6]{--tw-gradient-from: rgb(6 13 85 / .9)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/customer/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/disclaimer/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/pnp/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/product/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/tnc/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/customer/index@_@astro":"pages/customer.astro.mjs","\u0000@astro-page:src/pages/disclaimer/index@_@astro":"pages/disclaimer.astro.mjs","\u0000@astro-page:src/pages/pnp/index@_@astro":"pages/pnp.astro.mjs","\u0000@astro-page:src/pages/product/index@_@astro":"pages/product.astro.mjs","\u0000@astro-page:src/pages/tnc/index@_@astro":"pages/tnc.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_h4acTw1V.mjs","\u0000@astrojs-manifest":"manifest_DyjXMKjo.mjs","C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.7Mi0rreG.js","C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.DJpqD0gs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BAsAQwqA.css","/favicon.svg","/_astro/Footer.astro_astro_type_script_index_0_lang.DJpqD0gs.js","/_astro/Header.astro_astro_type_script_index_0_lang.7Mi0rreG.js","/_astro/language.DuT3yGzB.js","/images/about/Harbour.png","/images/customer/IAP.png","/images/customer/IMC.png","/images/customer/KAS.png","/images/customer/KASEN.png","/images/customer/Niterra.png","/images/customer/Pelita.png","/images/customer/SPN.png","/images/logo/Color.png","/images/logo/White.png","/images/product/Cabin.png","/images/product/Deck.png","/images/product/Electric.png","/images/product/Engine.png","/images/product/Lubricants.png","/images/product/Medical.png","/images/product/Safety.png","/images/product/Sealing.png","/images/home/MESPAS.png","/images/home/Sea.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"EpqM+/cGE2jdm+fI42qy5HvkSp2ffc//crHJRX0CpDA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
