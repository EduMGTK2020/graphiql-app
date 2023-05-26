import{r as k}from"./react-dom-8b7ac5e7.js";import"./hoist-non-react-statics-23d96a9a.js";import{r as f,a as U}from"./react-d84e5e68.js";import{w as V}from"./use-sync-external-store-2f415742.js";function B(e){e()}let L=B;const F=e=>L=e,I=()=>L,a=f.createContext(null);function P(){return f.useContext(a)}const j=()=>{throw new Error("uSES not initialized!")};let R=j;const H=e=>{R=e},W=(e,r)=>e===r;function q(e=a){const r=e===a?P:()=>f.useContext(e);return function(n,u=W){const{store:o,subscription:l,getServerState:c}=r(),d=R(l.addNestedSub,o.getState,c||o.getState,n,u);return f.useDebugValue(d),d}}const ne=q();var t={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=Symbol.for("react.element"),E=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),m=Symbol.for("react.context"),O=Symbol.for("react.server_context"),x=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),N;N=Symbol.for("react.module.reference");function i(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case w:switch(e=e.type,e){case p:case b:case S:case h:case g:return e;default:switch(e=e&&e.$$typeof,e){case O:case m:case x:case v:case C:case y:return e;default:return r}}case E:return r}}}t.ContextConsumer=m;t.ContextProvider=y;t.Element=w;t.ForwardRef=x;t.Fragment=p;t.Lazy=v;t.Memo=C;t.Portal=E;t.Profiler=b;t.StrictMode=S;t.Suspense=h;t.SuspenseList=g;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return i(e)===m};t.isContextProvider=function(e){return i(e)===y};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===w};t.isForwardRef=function(e){return i(e)===x};t.isFragment=function(e){return i(e)===p};t.isLazy=function(e){return i(e)===v};t.isMemo=function(e){return i(e)===C};t.isPortal=function(e){return i(e)===E};t.isProfiler=function(e){return i(e)===b};t.isStrictMode=function(e){return i(e)===S};t.isSuspense=function(e){return i(e)===h};t.isSuspenseList=function(e){return i(e)===g};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===p||e===b||e===S||e===h||e===g||e===A||typeof e=="object"&&e!==null&&(e.$$typeof===v||e.$$typeof===C||e.$$typeof===y||e.$$typeof===m||e.$$typeof===x||e.$$typeof===N||e.getModuleId!==void 0)};t.typeOf=i;function T(){const e=I();let r=null,s=null;return{clear(){r=null,s=null},notify(){e(()=>{let n=r;for(;n;)n.callback(),n=n.next})},get(){let n=[],u=r;for(;u;)n.push(u),u=u.next;return n},subscribe(n){let u=!0,o=s={callback:n,next:null,prev:s};return o.prev?o.prev.next=o:r=o,function(){!u||r===null||(u=!1,o.next?o.next.prev=o.prev:s=o.prev,o.prev?o.prev.next=o.next:r=o.next)}}}}const M={notify(){},get:()=>[]};function G(e,r){let s,n=M;function u(D){return d(),n.subscribe(D)}function o(){n.notify()}function l(){$.onStateChange&&$.onStateChange()}function c(){return!!s}function d(){s||(s=r?r.addNestedSub(l):e.subscribe(l),n=T())}function z(){s&&(s(),s=void 0,n.clear(),n=M)}const $={addNestedSub:u,notifyNestedSubs:o,handleChangeWrapper:l,isSubscribed:c,trySubscribe:d,tryUnsubscribe:z,getListeners:()=>n};return $}const J=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K=J?f.useLayoutEffect:f.useEffect;function re({store:e,context:r,children:s,serverState:n}){const u=f.useMemo(()=>{const c=G(e);return{store:e,subscription:c,getServerState:n?()=>n:void 0}},[e,n]),o=f.useMemo(()=>e.getState(),[e]);K(()=>{const{subscription:c}=u;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),o!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[u,o]);const l=r||a;return U.createElement(l.Provider,{value:u},s)}function _(e=a){const r=e===a?P:()=>f.useContext(e);return function(){const{store:n}=r();return n}}const Q=_();function X(e=a){const r=e===a?Q:_(e);return function(){return r().dispatch}}const oe=X();H(V.useSyncExternalStoreWithSelector);F(k.unstable_batchedUpdates);export{re as P,ne as a,oe as u};
