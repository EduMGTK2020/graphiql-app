import{r as c,j as s}from"./react-d84e5e68.js";function x(e){return s.jsx("svg",Object.assign({},e,{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:s.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})}))}function i({text:e}){const[t,n]=c.useState(!1),r=a=>{a.stopPropagation(),navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),3e3)};return t?s.jsxs("svg",Object.assign({className:"json-view--copy",style:{display:"inline-block"},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},{children:[s.jsx("path",{stroke:"#A1E3CB",d:"m10.933 13.519-2.226-2.226-1.414 1.414 3.774 3.774 5.702-6.84-1.538-1.282z"}),s.jsx("path",{d:"M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"})]})):s.jsx("svg",Object.assign({onClick:r,className:"json-view--copy",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},{children:s.jsx("path",{d:"M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"})}))}const o=c.createContext({collapseStringsAfterLength:99,collapseObjectsAfterLength:20,enableClipboard:!0});function v({src:e,collapseStringsAfterLength:t=99,collapseObjectsAfterLength:n=20,enableClipboard:r=!0}){return s.jsx(o.Provider,Object.assign({value:{collapseStringsAfterLength:t,collapseObjectsAfterLength:n,enableClipboard:r}},{children:s.jsx("code",Object.assign({className:"json-view"},{children:s.jsx(h,{node:e})}))}))}function h({node:e}){const t=c.useContext(o);return Array.isArray(e)||j(e)?s.jsx(p,{node:e}):typeof e=="number"?s.jsxs(s.Fragment,{children:[s.jsx("span",Object.assign({className:"json-view--number"},{children:e})),t.enableClipboard&&s.jsx(i,{text:String(e)})]}):typeof e=="string"?e.length>t.collapseStringsAfterLength?s.jsxs(s.Fragment,{children:[s.jsx(u,{str:e}),t.enableClipboard&&s.jsx(i,{text:String(e)})]}):s.jsxs(s.Fragment,{children:[s.jsxs("span",Object.assign({className:"json-view--string"},{children:['"',e,'"']})),t.enableClipboard&&s.jsx(i,{text:String(e)})]}):typeof e=="boolean"?s.jsxs(s.Fragment,{children:[s.jsx("span",Object.assign({className:"json-view--boolean"},{children:String(e)})),t.enableClipboard&&s.jsx(i,{text:String(e)})]}):e===null?s.jsxs(s.Fragment,{children:[s.jsx("span",Object.assign({className:"json-view--null"},{children:"null"})),t.enableClipboard&&s.jsx(i,{text:String(e)})]}):s.jsx("span",Object.assign({className:"json-view--string"},{children:String(e)}))}function p({node:e}){const t=c.useContext(o),[n,r]=c.useState(Array.isArray(e)&&e.length>t.collapseObjectsAfterLength?!0:!!(j(e)&&Object.keys(e).length>t.collapseObjectsAfterLength));return Array.isArray(e)?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"["}),!n&&s.jsx(x,{onClick:()=>r(!0),className:"jv-chevron"}),!n&&t.enableClipboard&&s.jsx(i,{text:JSON.stringify(e)}),n?s.jsx("button",Object.assign({onClick:()=>r(!1),className:"jv-button"},{children:"..."})):s.jsx("div",Object.assign({className:"jv-indent"},{children:e.map((a,l)=>s.jsx(g,{name:l,value:a},l))})),s.jsx("span",{children:"]"})]}):j(e)?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"{"}),!n&&s.jsx(x,{onClick:()=>r(!0),className:"jv-chevron"}),!n&&t.enableClipboard&&s.jsx(i,{text:JSON.stringify(e)}),n?s.jsx("button",Object.assign({onClick:()=>r(!1),className:"jv-button"},{children:"..."})):s.jsx("div",Object.assign({className:"jv-indent"},{children:Object.entries(e).map(([a,l])=>s.jsx(g,{name:a,value:l},a))})),s.jsx("span",{children:"}"})]}):null}function u({str:e}){if(e.length<=10)return s.jsxs("span",Object.assign({className:"json-view--string"},{children:['"',e,'"']}));const[t,n]=c.useState(!0);return s.jsxs("span",Object.assign({onClick:()=>n(!t),className:"json-view--string cursor-pointer"},{children:['"',t?e.slice(0,6)+"..."+e.slice(-4):e,'"']}))}function g({name:e,value:t}){return s.jsxs("div",Object.assign({className:"json-view--pair"},{children:[s.jsx("span",Object.assign({className:typeof e=="number"?"json-view--index":"json-view--property"},{children:e})),":"," ",s.jsx(h,{node:t})]}))}function j(e){return Object.prototype.toString.call(e)==="[object Object]"}export{v as J};
