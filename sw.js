if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>i(e,r),l={module:{uri:r},exports:t,require:c};s[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-b833909e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.css",revision:null},{url:"assets/index.js",revision:null},{url:"icebreakers-logo.png",revision:"5302816ce97a605b07c6f3b5e28ed465"},{url:"index.html",revision:"12e12f64b501c67c7b5ff5efb75f5e75"},{url:"manifest.json",revision:"2b367a798b58e67d0cea3a47eed5c0cc"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"social-preview.png",revision:"0653144bc902d736203af61f4072f3be"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
