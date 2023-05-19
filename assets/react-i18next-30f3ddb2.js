import{r as f}from"./react-d84e5e68.js";import{g as R,a as K,c as q,j as J,e as M}from"./@babel-8f34527c.js";function W(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var T={};function S(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&T[e[0]]||(typeof e[0]=="string"&&(T[e[0]]=new Date),W.apply(void 0,e))}var U=function(e,t){return function(){if(e.isInitialized)t();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),t()};e.on("initialized",r)}}};function k(n,e,t){n.loadNamespaces(e,U(n,t))}function F(n,e,t,r){typeof t=="string"&&(t=[t]),t.forEach(function(i){n.options.ns.indexOf(i)<0&&n.options.ns.push(i)}),n.loadLanguages(e,U(n,r))}function _(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.languages[0],i=e.options?e.options.fallbackLng:!1,l=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var a=function(d,p){var b=e.services.backendConnector.state["".concat(d,"|").concat(p)];return b===-1||b===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(r,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(r,n)&&(!i||a(l,n)))}function $(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return S("i18n.languages were undefined or empty",e.languages),!0;var r=e.options.ignoreJSONStructure!==void 0;return r?e.hasLoadedNamespace(n,{lng:t.lng,precheck:function(l,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!a(l.isLanguageChangingTo,n))return!1}}):_(n,e,t)}var Y=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,G={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Q=function(e){return G[e]},X=function(e){return e.replace(Y,Q)};function z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function D(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?z(Object(t),!0).forEach(function(r){R(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var j={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:X};function Z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};j=D(D({},j),n)}function V(){return j}var A;function ee(n){A=n}function ne(){return A}var oe={type:"3rdParty",init:function(e){Z(e.options.react),ee(e)}},te=f.createContext(),re=function(){function n(){q(this,n),this.usedNamespaces={}}return K(n,[{key:"addUsedNamespaces",value:function(t){var r=this;t.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),n}();function H(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?H(Object(t),!0).forEach(function(r){R(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var ae=function(e,t){var r=f.useRef();return f.useEffect(function(){r.current=t?r.current:e},[e,t]),r.current};function ue(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,r=f.useContext(te)||{},i=r.i18n,l=r.defaultNS,a=t||i||ne();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new re),!a){S("You will need to pass in an i18next instance by using initReactI18next");var w=function(c,o){return typeof o=="string"?o:o&&M(o)==="object"&&typeof o.defaultValue=="string"?o.defaultValue:Array.isArray(c)?c[c.length-1]:c},d=[w,{},!1];return d.t=w,d.i18n={},d.ready=!1,d}a.options.react&&a.options.react.wait!==void 0&&S("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=P(P(P({},V()),a.options.react),e),b=p.useSuspense,x=p.keyPrefix,s=n||l||a.options&&a.options.defaultNS;s=typeof s=="string"?[s]:s||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(s);var m=(a.isInitialized||a.initializedStoreOnce)&&s.every(function(u){return $(u,a,p)});function v(){return a.getFixedT(e.lng||null,p.nsMode==="fallback"?s:s[0],x)}var B=f.useState(v),C=J(B,2),I=C[0],h=C[1],y=s.join();e.lng&&(y="".concat(e.lng).concat(y));var E=ae(y),g=f.useRef(!0);f.useEffect(function(){var u=p.bindI18n,c=p.bindI18nStore;g.current=!0,!m&&!b&&(e.lng?F(a,e.lng,s,function(){g.current&&h(v)}):k(a,s,function(){g.current&&h(v)})),m&&E&&E!==y&&g.current&&h(v);function o(){g.current&&h(v)}return u&&a&&a.on(u,o),c&&a&&a.store.on(c,o),function(){g.current=!1,u&&a&&u.split(" ").forEach(function(N){return a.off(N,o)}),c&&a&&c.split(" ").forEach(function(N){return a.store.off(N,o)})}},[a,y]);var L=f.useRef(!0);f.useEffect(function(){g.current&&!L.current&&h(v),L.current=!1},[a,x]);var O=[I,a,m];if(O.t=I,O.i18n=a,O.ready=m,m||!m&&!b)return O;throw new Promise(function(u){e.lng?F(a,e.lng,s,function(){return u()}):k(a,s,function(){return u()})})}export{oe as i,ue as u};
