(function(n){function e(e){for(var c,u,a=e[0],d=e[1],f=e[2],h=0,i=[];h<a.length;h++)u=a[h],r[u]&&i.push(r[u][0]),r[u]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(i.length)i.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,u=1;u<t.length;u++){var a=t[u];0!==r[a]&&(c=!1)}c&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},u={app:0},r={app:0},o=[];function a(n){return d.p+"js/"+({}[n]||n)+"-legacy."+{"chunk-29efc048":"55fa4163","chunk-2d0ae907":"7f3f5415","chunk-2d0b1dd9":"4d6f8446","chunk-2d0b6abb":"17adc58a","chunk-2d0cbcc1":"47c50088","chunk-2d0cfddc":"961f098a","chunk-2d0d0920":"cad04400","chunk-2d0db121":"a0a6bcc9","chunk-2d0e60f7":"dd03ee1c","chunk-2d0e6ca7":"f29bcc8c","chunk-2d20e863":"bfb955bb","chunk-2d217a98":"47f0b895","chunk-2d217af6":"453b5661","chunk-2d21e6e8":"044184c9","chunk-2d225436":"7f5286df","chunk-2d225bea":"210b17eb","chunk-2d22c142":"f36e0bff","chunk-2d238274":"e18444a6","chunk-3bc2b000":"2f3c678c","chunk-43ffd85f":"08d50146","chunk-4ee0aec1":"511f08d0","chunk-5e905bee":"bdd69578","chunk-dfe49dea":"5a854305"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-29efc048":1,"chunk-3bc2b000":1,"chunk-43ffd85f":1,"chunk-5e905bee":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-29efc048":"13d6f848","chunk-2d0ae907":"31d6cfe0","chunk-2d0b1dd9":"31d6cfe0","chunk-2d0b6abb":"31d6cfe0","chunk-2d0cbcc1":"31d6cfe0","chunk-2d0cfddc":"31d6cfe0","chunk-2d0d0920":"31d6cfe0","chunk-2d0db121":"31d6cfe0","chunk-2d0e60f7":"31d6cfe0","chunk-2d0e6ca7":"31d6cfe0","chunk-2d20e863":"31d6cfe0","chunk-2d217a98":"31d6cfe0","chunk-2d217af6":"31d6cfe0","chunk-2d21e6e8":"31d6cfe0","chunk-2d225436":"31d6cfe0","chunk-2d225bea":"31d6cfe0","chunk-2d22c142":"31d6cfe0","chunk-2d238274":"31d6cfe0","chunk-3bc2b000":"782ebc10","chunk-43ffd85f":"042aedb7","chunk-4ee0aec1":"31d6cfe0","chunk-5e905bee":"b022d8e7","chunk-dfe49dea":"31d6cfe0"}[n]+".css",r=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var f=o[a],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===c||h===r))return e()}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){f=i[a],h=f.getAttribute("data-href");if(h===c||h===r)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete u[n],l.parentNode.removeChild(l),t(o)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)}).then(function(){u[n]=0}));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise(function(e,t){c=r[n]=[e,t]});e.push(c[2]=o);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=a(n),f=function(e){h.onerror=h.onload=null,clearTimeout(i);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,o=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");o.type=c,o.request=u,t[1](o)}r[n]=void 0}};var i=setTimeout(function(){f({type:"timeout",target:h})},12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/clearaki-ui/",d.oe=function(n){throw console.error(n),n};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=e,f=f.slice();for(var i=0;i<f.length;i++)e(f[i]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var c=t("64a9"),u=t.n(c);u.a},"56d7":function(n,e,t){"use strict";t.r(e);t("5df3"),t("1c4c"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-view")},r=[],o={created:function(){sessionStorage.removeItem("color")}},a=o,d=(t("034f"),t("2877")),f=Object(d["a"])(a,u,r,!1,null,null,null),h=f.exports,i=t("7582"),l=(t("a4ef"),t("1487")),b=t.n(l),p=(t("36bb"),t("8c4f"));c["a"].use(p["a"]);var s=[{name:"home",path:"/",component:function(){return t.e("chunk-4ee0aec1").then(t.bind(null,"0cab"))}},{name:"banner",path:"/banner",component:function(){return t.e("chunk-43ffd85f").then(t.bind(null,"19e3"))}},{name:"backdrop",path:"/backdrop",component:function(){return t.e("chunk-3bc2b000").then(t.bind(null,"b0ce"))}},{name:"button",path:"/button",component:function(){return t.e("chunk-2d225436").then(t.bind(null,"e43d"))}},{name:"fab",path:"/fab",component:function(){return t.e("chunk-2d21e6e8").then(t.bind(null,"d611"))}},{name:"fabs",path:"/fabs",component:function(){return t.e("chunk-2d0e6ca7").then(t.bind(null,"99f7"))}},{name:"confirm",path:"/confirm",component:function(){return t.e("chunk-2d0cbcc1").then(t.bind(null,"4aca"))}},{name:"context",path:"/context",component:function(){return t.e("chunk-2d0db121").then(t.bind(null,"6dfc"))}},{name:"counter",path:"/counter",component:function(){return t.e("chunk-dfe49dea").then(t.bind(null,"65ca"))}},{name:"dialog",path:"/dialog",component:function(){return t.e("chunk-29efc048").then(t.bind(null,"aabc"))}},{name:"dropdown",path:"/dropdown",component:function(){return t.e("chunk-2d0ae907").then(t.bind(null,"0b32"))}},{name:"input",path:"/input",component:function(){return t.e("chunk-2d22c142").then(t.bind(null,"f266"))}},{name:"selection",path:"/selection",component:function(){return t.e("chunk-2d217af6").then(t.bind(null,"c87b"))}},{name:"picker",path:"/picker",component:function(){return t.e("chunk-2d0d0920").then(t.bind(null,"6918"))}},{name:"select",path:"/select",component:function(){return t.e("chunk-2d0e60f7").then(t.bind(null,"96ae"))}},{name:"sheetBottom",path:"/sheet/bottom",component:function(){return t.e("chunk-2d20e863").then(t.bind(null,"b076"))}},{name:"snackbar",path:"/snackbar",component:function(){return t.e("chunk-2d0b1dd9").then(t.bind(null,"2258"))}},{name:"step",path:"/step",component:function(){return t.e("chunk-2d0b6abb").then(t.bind(null,"1dc5"))}},{name:"tabs",path:"/tabs",component:function(){return t.e("chunk-2d225bea").then(t.bind(null,"e669"))}},{name:"toolbar",path:"/toolbar",component:function(){return t.e("chunk-2d238274").then(t.bind(null,"fdbb"))}},{name:"topbars",path:"/topbars",component:function(){return t.e("chunk-2d217a98").then(t.bind(null,"c84a"))}},{name:"switch",path:"/switch",component:function(){return t.e("chunk-2d0cfddc").then(t.bind(null,"6617"))}},{name:"icon",path:"/icon",component:function(){return t.e("chunk-5e905bee").then(t.bind(null,"699e"))}}],k=new p["a"]({base:"/clearaki-ui/",routes:s}),m=k;c["a"].use(i["a"]),c["a"].prototype.$hljs=b.a,c["a"].config.productionTip=!1,c["a"].directive("hljs",function(n){var e=n.querySelectorAll("pre code");Array.from(e).forEach(function(n){return b.a.highlightBlock(n)})}),new c["a"]({render:function(n){return n(h)},router:m}).$mount("#app")},"64a9":function(n,e,t){}});
//# sourceMappingURL=app-legacy.0fb2455f.js.map