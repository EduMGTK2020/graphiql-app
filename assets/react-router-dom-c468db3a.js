import{r}from"./react-d84e5e68.js";import{R as m}from"./react-router-1b3d7f17.js";import{c as f}from"./@remix-run-073e1ff6.js";/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(e){let{basename:i,children:c,window:l}=e,o=r.useRef();o.current==null&&(o.current=f({window:l,v5Compat:!0}));let t=o.current,[s,u]=r.useState({action:t.action,location:t.location});return r.useLayoutEffect(()=>t.listen(u),[t]),r.createElement(m,{basename:i,children:c,location:s.location,navigationType:s.action,navigator:t})}var a;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(a||(a={}));var n;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(n||(n={}));export{S as H};
