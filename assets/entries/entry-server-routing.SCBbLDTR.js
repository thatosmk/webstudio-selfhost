const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_about.C6_XIKqf.js","assets/chunks/chunk-B7LsfynM.js","assets/static/index.BsQSgzZC.css","assets/entries/pages_index.D9bYQKaK.js","assets/entries/pages_pricing.-8Hwqz0u.js"])))=>i.map(i=>d[i]);
function Ee(e){return Array.from(new Set(e))}const Fe="0.4.182",Z={projectName:"Vike",projectVersion:Fe},ie=`_${Z.projectName.toLowerCase()}`;function R(e,t){const n=Ie();return n[e]=n[e]||t}function Ie(){return globalThis[ie]=globalThis[ie]||{}}const E=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),$=R("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),We="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",ve="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function be(){{const e=Ee($.instances);De(e.length<=1,`vike@${E.bold(e[0])} and vike@${E.bold(e[1])} loaded but only one version should be loaded`)}$.checkSingleInstance&&$.instances.length>1&&Y(!1,ve,{onlyOnce:!0,showStackTrace:!0})}function Ae(e){Y($.isClientRouting!==!0,We,{onlyOnce:!0,showStackTrace:!0}),Y($.isClientRouting===void 0,ve,{onlyOnce:!0,showStackTrace:!0}),$.isClientRouting=!1,e&&($.checkSingleInstance=!0),be()}function ze(){$.instances.push(Z.projectVersion),be()}function De(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function Y(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=$,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ve(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function z(e,t){const n=new Error(e);return Ve()&&(n.stack=Be(n.stack,t)),n}function Be(e,t){if(!e)return e;const n=He(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Ue(s)?(r++,!1):!0).join(`
`)}function Ue(e){return e.startsWith("    at ")}function He(e){return e.split(/\r?\n/)}function w(e){return typeof e=="object"&&e!==null}const b=R("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});ze();const Ne="[vike]",Ge=`[vike@${Z.projectVersion}]`,D=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const c=typeof t=="string"?t:JSON.stringify(t);return E.dim(`Debug info (for Vike maintainers; you can ignore this): ${c}`)})();let i=[`You stumbled upon a Vike bug. Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");i=B(i),i=V(i,"Bug"),i=U(i,!0);const s=z(i,D);throw(a=b.onBeforeLog)==null||a.call(b),s}function m(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||b.alwaysShowStackTrace,t=B(t),t=V(t,"Wrong Usage"),t=U(t);const r=z(t,D);throw n&&b.showStackTraceList.add(r),(i=b.onBeforeLog)==null||i.call(b),r}function Je(e){return e=B(e),e=V(e,"Error"),e=U(e),z(e,D)}function _(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||b.alwaysShowStackTrace,t=B(t),t=V(t,"Warning"),t=U(t),n){const{alreadyLogged:s}=b,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=b.onBeforeLog)==null||i.call(b),r){const s=z(t,D);b.showStackTraceList.add(s),b.logger(s,"warn")}else b.logger(t,"warn")}}function V(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=E.bold(E[r](n)),`${n}${e}`}function B(e){return e.startsWith("[")?e:` ${e}`}function U(e,t=!1){return`${t?Ge:Ne}${e}`}function ee(){return typeof window<"u"&&typeof window.scrollY=="number"}const se=R("utils/assertRouterType.ts",{});function Ye(){Me(se.isClientRouting!==!0),se.isClientRouting=!1}function Me(e){m(ee(),`${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),_(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function W(e,t,n){return typeof e=="string"?oe(e.split(""),t,n).join(""):oe(e,t,n)}function oe(e,t,n){const r=[];let i=t>=0?t:e.length+t;o(i>=0&&i<=e.length);let s=n>=0?n:e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function qe(e,t){o(it(e),e),o(t.startsWith("/"));const[n,...r]=e.split("#");o(n!==void 0);const i=["",...r].join("#")||null;o(i===null||i.startsWith("#"));const s=i===null?"":Se(i.slice(1)),[a,...c]=n.split("?");o(a!==void 0);const l=["",...c].join("?")||null;o(l===null||l.startsWith("?"));const u={},g={};Array.from(new URLSearchParams(l||"")).forEach(([C,O])=>{u[C]=O,g[C]=[...g.hasOwnProperty(C)?g[C]:[],O]});let{protocol:v,origin:f,pathnameAbsoluteWithBase:d}=Xe(a,t);const h=a.slice((f||"").length);rt(e,f,h,l,i);let{pathname:p,hasBaseServer:S}=tt(d,t);const L=Pe(f,p,l,i),P=f?f.slice(v.length):null,{hostname:N,port:G}=Qe(P,e);return p=Ke(p),o(p.startsWith("/")),{href:L,protocol:v,hostname:N,port:G,origin:f,pathname:p,pathnameOriginal:h,hasBaseServer:S,search:u,searchAll:g,searchOriginal:l,hash:s,hashOriginal:i}}function Se(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ke(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>Se(t).split("/").join("%2F")).join("/"),e}function Xe(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{protocol:r,origin:i,pathname:s}=ae(e);if(i)return{protocol:r,origin:i,pathnameAbsoluteWithBase:s};o(s===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const r=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let i;return r?i=ae(r.split("?")[0]).pathname:i=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:et(e,i)}}}function ae(e){if($e(e)){const{protocol:t,uriWithoutProtocol:n}=we(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function Qe(e,t){const n={hostname:null,port:null};if(!e)return n;const[r,...i]=e.split(":");if(n.hostname=r,i.length>0){o(i.length===1,t);const s=i[0],a=parseInt(s,10);o(a||a===0,t),n.port=a}return n}function we(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function Ze(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function et(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const c=r[a];c==""&&a==="0"||c!="."&&(c==".."?n.pop():(i=!1,n.push(c)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function tt(e,t){o(e.startsWith("/")),o(nt(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===W(t,0,-1)&&(r=W(t,0,-1),o(n===r)),n.startsWith(r)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function nt(e){return e.startsWith("/")}function rt(e,t,n,r,i){const s=Pe(t,n,r,i);o(e===s)}function Pe(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function it(e){return $e(e)||e.startsWith("/")||st(e)}function st(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function $e(e){const{protocol:t}=we(e);return!!t&&Ze(t)}function x(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function H(e){return e instanceof Function||typeof e=="function"}function ot(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function at(e){return ot(t=>{const n=e(t);return n===null?null:!n})}function k(e){return Array.isArray(e)}function lt(e){return k(e)&&e.every(t=>typeof t=="string")}function ct(e){return w(e)&&Object.values(e).every(t=>typeof t=="string")}function y(e,t,n){if(!w(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?k(r):n==="object"?w(r):n==="string[]"?lt(r):n==="string{}"?ct(r):n==="function"?H(r):k(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function ut(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ft=e=>e!=null;function Te(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const dt=["clientRouting"];function gt(e){dt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const _e=["render","clientRouting","prerender","doNotPrerender"];function ht(e,t){m(!_e.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function pt(e){const t=".page.",n=W(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function j(e){Te(e)}function te(e,t){return o(!e.includes("\\")),e.includes("/_error")}function mt(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return te(e)}const xe=["js","ts","cjs","cts","mjs","mts"],yt=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],Ce=["vue","svelte","marko","md","mdx"],Et=[...xe,...yt,...Ce];function Re(e){const t=Et.some(n=>e.endsWith("."+n));return vt(e)&&o(t),t}function vt(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=xe.some(r=>e.endsWith("."+r));return o(t===n),t}function bt(e){return Ce.some(t=>e.endsWith("."+t))}const St=[".page",".page.server",".page.route",".page.client",".css"];function wt(e){if(Te(e),e.endsWith(".css"))return".css";o(Re(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function ke(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(le(i.filePath)||Pt(s,i.filePath)),n=wt(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:M(e),isRendererPageFile:n!==".css"&&M(e)&&le(e),isErrorPageFile:te(e),pageId:pt(e)};return i}function M(e){return j(e),te(e)?!1:e.includes("/_default")}function le(e){return j(e),e.includes("/renderer/")}function Pt(e,t){j(e),j(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(M(t));const n=W(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function $t(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(c=>{i=`${i} { ${c}`,s=` }${s}`}),i+s}function Tt(e,t,n){return`${q(e,t)} at ${A(n,t)}`}function _t(e,t,n){return n?`${q(e,t)} at ${A(n,t)}`:`${q(e,t)} internally`}function q(e,t){return`${e} ${E.cyan(t)} defined`}function A(e,t){let n;return k(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let c=s;const l=$t(a,t);return l&&(c=`${c} > ${E.cyan(l)}`),c}).join(" / ")}const xt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function je(e){const t=JSON.parse(e);return ne(t)}function ne(e){return typeof e=="string"?Ct(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ne(n)}),e)}function Ct(e){for(const{match:t,deserialize:n}of xt)if(t(e))return n(e,je);return e}const Rt=["$$registrations","_rerender_only"],kt=[".md",".mdx"];function jt(e,t,n){const r=Object.keys(e).filter(u=>!Rt.includes(u)),i=u=>u==="default"||u===n,s=r.filter(i),a=r.filter(u=>!i(u));if(s.length===1&&a.length===0)return;const c=E.code("export default"),l=E.code(`export { ${n} }`);s.length===0&&m(!1,`${t} should have a ${l} or ${c}`),s.length===2&&_(!1,`${t} is ambiguous: remove ${c} or ${l}`,{onlyOnce:!0}),o(s.length===1),o(a.length>0),kt.some(u=>t.endsWith(u))||a.forEach(u=>{_(!1,`${t} unexpected ${E.cyan(`export { ${u} }`)}`,{onlyOnce:!0})})}function K(e){return Ft(e)}function Lt(e,t){const n=e.map(i=>{const s=K(i.configValuesSerialized),{pageId:a,isErrorPage:c,routeFilesystem:l,loadConfigValuesAll:u}=i;return Ot(s),{pageId:a,isErrorPage:c,routeFilesystem:l,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=K(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Ot(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=Tt("Config",t,i);m(s==="string"||H(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function Ft(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...c}=i;s={value:a.map((u,g)=>{const{value:v,sideExports:f}=ce(u,r,()=>{const d=i.definedAtData[g];return o(d),d});return n(f),v}),...c}}else{const{valueSerialized:a,...c}=i,{value:l,sideExports:u}=ce(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(u),s={value:l,...c}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function ce(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=ne(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;jt(i,r.filePathToShowToUser,t);let s,a=!1;const c=[];return Object.entries(i).forEach(([l,u])=>{l!=="default"&&l!==t?c.push({configName:l,configValue:{type:"standard",value:u,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[l]}}}):(s=u,o(!a),a=!0)}),o(a),{value:s,sideExports:c}}o(!1)}function It(e){o(y(e,"pageFilesLazy","object")),o(y(e,"pageFilesEager","object")),o(y(e,"pageFilesExportNamesLazy","object")),o(y(e,"pageFilesExportNamesEager","object")),o(y(e.pageFilesLazy,".page")),o(y(e.pageFilesLazy,".page.client")||y(e.pageFilesLazy,".page.server")),o(y(e,"pageFilesList","string[]")),o(y(e,"pageConfigsSerialized")),o(y(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;Wt(t),At(n);const{pageConfigs:r,pageConfigGlobal:i}=Lt(t,n),s={};F(e.pageFilesLazy).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;ue(g),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await g(),gt(l))}}),F(e.pageFilesExportNamesLazy).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;ue(g),l.loadExportNames=async()=>{if(!("exportNames"in l)){const v=await g();o(y(v,"exportNames","string[]"),l.filePath),l.exportNames=v.exportNames}}}),F(e.pageFilesEager).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;o(w(g)),l.fileExports=g}),F(e.pageFilesExportNamesEager).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;o(w(g)),o(y(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}),e.pageFilesList.forEach(c=>{s[c]=s[c]??ke(c)});const a=Object.values(s);return a.forEach(({filePath:c})=>{o(!c.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function F(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(St.includes(n)),o(w(r)),Object.entries(r).forEach(([i,s])=>{const a=ke(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ue(e){o(H(e))}function Wt(e){o(k(e)),e.forEach(t=>{o(w(t)),o(y(t,"pageId","string")),o(y(t,"routeFilesystem")),o(y(t,"configValuesSerialized"))})}function At(e){o(y(e,"configValuesSerialized"))}const T=R("setPageFiles.ts",{});function zt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=It(e);T.pageFilesAll=t,T.pageConfigs=n,T.pageConfigGlobal=r}async function Dt(e,t){e?(o(!T.pageFilesGetter),o(t===void 0)):(o(T.pageFilesGetter),o(typeof t=="boolean"),(!T.pageFilesAll||!t)&&await T.pageFilesGetter());const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=T;o(n&&r&&i);const s=Vt(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Vt(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=Ee(n),i=t.map(s=>s.pageId);return[...r,...i]}function Bt(e,t){return Ut(e,t,!0)}function Ut(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",i=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(Ht(n,t)),s=d=>{const h=i.filter(S=>S.pageId===t&&S.isEnv(d?"CLIENT_AND_SERVER":r));m(h.length<=1,`Merge the following files into a single file: ${h.map(S=>S.filePath).join(" ")}`);const p=h[0];return o(p===void 0||!p.isDefaultPageFile),p},a=s(!1),c=s(!0),l=d=>i.filter(h=>h.isRendererPageFile&&h.isEnv(d?"CLIENT_AND_SERVER":r))[0],u=l(!1),g=l(!0),v=i.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,c,...v,u,g].filter(ft)}function Ht(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,i=1,s=0;return(a,c)=>{if(!a.isDefaultPageFile&&c.isDefaultPageFile)return r;if(!c.isDefaultPageFile&&a.isDefaultPageFile)return i;{const l=a.isRendererPageFile,u=c.isRendererPageFile;if(!l&&u)return r;if(!u&&l)return i;o(l===u)}{const l=fe(t,a.filePath),u=fe(t,c.filePath);if(l<u)return r;if(u<l)return i;o(l===u)}{if(a.isEnv(n)&&c.isEnv("CLIENT_AND_SERVER"))return r;if(c.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i}return s}}function fe(e,t){j(e),j(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}function Nt(e){if(!e||k(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function Gt(e,t){const n={},r={},i={};e.forEach(f=>{Jt(f).forEach(({exportName:h,exportValue:p,isFromDefaultExport:S})=>{o(h!=="default"),i[h]=i[h]??[],i[h].push({exportValue:p,exportSource:`${f.filePath} > ${S?`\`export default { ${h} }\``:`\`export { ${h} }\``}`,filePath:f.filePath,_filePath:f.filePath,_fileType:f.fileType,_isFromDefaultExport:S})})});const s={},a={},c=(f,d)=>{s[d]=f,a[d]??(a[d]=[]),a[d].push(f)},l={configsStandard:{},configsCumulative:{},configsComputed:{}};t&&Object.entries(t.configValues).forEach(([f,d])=>{const{value:h}=d,p=Nt(d.definedAtData),S=_t("Config",f,d.definedAtData);if(r[f]=r[f]??h,n[f]=n[f]??[],o(n[f].length===0),n[f].push({configValue:h,configDefinedAt:S,configDefinedByFile:p}),d.type==="standard"){const P={type:"configsStandard",value:d.value,definedAt:A(d.definedAtData,f)};c(P,f),l.configsStandard[f]=P}if(d.type==="cumulative"){const P={type:"configsCumulative",values:d.value.map((N,G)=>{const C=d.definedAtData[G];o(C);const O=A(C,f);return{value:N,definedAt:O}})};c(P,f),l.configsCumulative[f]=P}if(d.type==="computed"){const P={type:"configsComputed",value:d.value};c(P,f),l.configsComputed[f]=P}const L=f;i[L]=i[L]??[],i[L].push({exportValue:h,exportSource:S,filePath:p,_filePath:p,_fileType:null,_isFromDefaultExport:null})});const u=Yt(),g={};return Object.entries(i).forEach(([f,d])=>{d.forEach(({exportValue:h,_fileType:p,_isFromDefaultExport:S})=>{g[f]=g[f]??h,p===".page"&&!S&&(f in u||(u[f]=h))})}),o(!("default"in g)),o(!("default"in i)),{from:l,source:s,sources:a,config:r,configEntries:n,exports:g,exportsAll:i,pageExports:u}}function Jt(e){const{filePath:t,fileExports:n}=e;o(n),o(Re(t));const r=[];return Object.entries(n).sort(at(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(bt(t))i="Page";else{m(w(s),`The ${E.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([c,l])=>{ht(c,t),r.push({exportName:c,exportValue:l,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&_e.includes(i)))}),r}function Yt(){return new Proxy({},{get(...e){return ee()||_(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const Mt="modulepreload",qt=function(e){return"/"+e},de={},J=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=qt(l),l in de)return;de[l]=!0;const u=l.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===l&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${g}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Mt,u||(f.as="script",f.crossOrigin=""),f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},re={},Kt={},Xt={},Qt={},Zt=[],Le={},en=[{pageId:"/pages/about",isErrorPage:void 0,routeFilesystem:{routeString:"/about",definedBy:"/pages/about/"},loadConfigValuesAll:()=>J(()=>import("./pages_about.C6_XIKqf.js"),__vite__mapDeps([0,1,2])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>J(()=>import("./pages_index.D9bYQKaK.js"),__vite__mapDeps([3,1,2])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/pricing",isErrorPage:void 0,routeFilesystem:{routeString:"/pricing",definedBy:"/pages/pricing/"},loadConfigValuesAll:()=>J(()=>import("./pages_pricing.-8Hwqz0u.js"),__vite__mapDeps([4,1,2])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}}],tn={configValuesSerialized:{}},nn=Object.assign({}),rn={...nn};re[".page"]=rn;const sn=Object.assign({}),on={...sn};re[".page.client"]=on;const an=Object.assign({}),ln={...an};Le[".page.server"]=ln;const cn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Le,pageConfigGlobalSerialized:tn,pageConfigsSerialized:en,pageFilesEager:Kt,pageFilesExportNamesEager:Qt,pageFilesExportNamesLazy:Xt,pageFilesLazy:re,pageFilesList:Zt},Symbol.toStringTag,{value:"Module"}));zt(cn);function un(){o(ee())}function fn(){un()}function ge(e){const t=e/1e3;if(t<120){const n=he(t);return`${n} second${pe(n)}`}{const n=t/60,r=he(n);return`${r} minute${pe(r)}`}}function he(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function pe(e){return e==="1"?"":"s"}const X=R("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function dn(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let c,l;const u=new Promise((d,h)=>{c=p=>{g(),d(p)},l=p=>{g(),h(p)}}),g=()=>{v&&clearTimeout(v),f&&clearTimeout(f)},v=me(a)&&setTimeout(()=>{_(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${ge(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),f=me(s)&&setTimeout(()=>{const d=Je(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${ge(s)} (https://vike.dev/hooksTimeout)`);l(d)},s);return(async()=>{try{gn(n);const d=await e();c(d)}catch(d){w(d)&&X.userHookErrors.set(d,{hookName:r,hookFilePath:i}),l(d)}})(),u}function me(e){return!!e&&e!==1/0}function gn(e){X.pageContext=e,Promise.resolve().then(()=>{X.pageContext=null})}function Oe(e){const t=window.location.href,{searchOriginal:n,hashOriginal:r,pathname:i}=qe(t,"/");let s;return e!=null&&e.withoutHash?s=`${i}${n||""}`:s=`${i}${n||""}${r||""}`,o(s.startsWith("/")),s}function hn(e){return typeof e=="string"&&pn(e)?`.${e}`:`[${JSON.stringify(e)}]`}function pn(e){return/^[a-z0-9\$_]+$/i.test(e)}fn();function mn(){const e="vike_pageContext",t=document.getElementById(e);m(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=je(n);return o(y(r,"_pageId","string")),o(y(r,"routeParams","string{}")),r}function yn(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function En(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=K(n.configValuesSerialized);return Object.assign(e.configValues,r),x(e,{isAllLoaded:!0}),e}const vn="__whileFetchingAssets";async function bn(e,t,n){const r=Bt(t,e),i=yn(n,e);let s;const a=!1;try{s=(await Promise.all([i&&En(i,a),...r.map(g=>{var v;return(v=g.loadFile)==null?void 0:v.call(g)})]))[0]}catch(u){throw Sn(u)&&Object.assign(u,{[vn]:!0}),u}const c=Gt(r,s),l={};return x(l,c),x(l,{_pageFilesLoaded:r}),l}function Sn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}const ye=Oe({withoutHash:!0});async function wn(){const e=mn();return x(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),x(e,await $n(e._pageId)),Pn(),e}function Pn(){const e=Oe({withoutHash:!0});m(ye===e,`The URL was manipulated before the hydration finished ('${ye}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function $n(e){const t={},{pageFilesAll:n,pageConfigs:r}=await Dt(!0);return x(t,{_pageFilesAll:n,_pageConfigs:r}),x(t,await bn(e,t._pageFilesAll,t._pageConfigs)),n.filter(i=>i.fileType!==".page.server").forEach(i=>{var s;_(!((s=i.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Tn=R("getHook.ts",{isPrerendering:!1});function Q(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Cn(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),xn(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function _n(e,t){Q(e,t)}function xn(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),m(H(e),`Hook ${t}() defined by ${n} should be a function`)}function Cn(e,t){const n=Rn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=kn(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function Rn(e){if(e===void 0)return{};if(e===!1)return!1;m(w(e),`Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}m(w(r),`Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const c=r[a];if(c===void 0||c===!1)return c;const l=`Setting ${E.cyan(`hooksTimeout.${n}.${a}`)} should be`;return m(typeof c=="number",`${l} ${E.cyan("false")} or a number`),m(c>0,`${l} a positive number`),c});t[n]={error:i,warning:s}}),t}function kn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Tn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}function jn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>ut(n,r))),Object.defineProperties(e,t)}function Ln(e){On(e),Fn(e)}function On(e){mt(e._pageId,e._pageConfigs)&&o(y(e,"is404","boolean"))}function Fn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!w(t)){_(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const In="not-serializable",I=R("getPageContextProxyForUser.ts",{});function Wn(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=hn(n);return m(r!==In,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),An(e,n,i),r}})}function An(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?_(!1,r,{onlyOnce:!1,showStackTrace:!0}):m(!1,r)}const zn=["then","toJSON"];function Dn(e){return!!(zn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return I.prev===e||I.prev==="__v_raw"?!0:(I.prev=e,window.setTimeout(()=>{I.prev=void 0},0),!1)}function Bn(e,t){if(t){const i=e;o([!0,!1].includes(i.isHydration)),o([!0,!1,null].includes(i.isBackwardNavigation))}else{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(w(e.pageExports));const n=e.exports.Page;x(e,{Page:n}),Un(e),jn(e);const r=Wn(e);return Ln(e),r}function Un(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function Hn(e,t){const n=Bn(e,t);let r=null,i;r=Q(e,"render"),i="render";{const c=Q(e,"onRenderClient");c&&(r=c,i="onRenderClient")}if(!r){const c=Nn(e);if(o(c),e._pageConfigs.length>0)m(!1,`No onRenderClient() hook defined for URL '${c}', but it's needed, see https://vike.dev/onRenderClient`);else{const l=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;l.length===0?u="No file `*.page.client.*` found for URL "+c:u="One of the following files should export a render() hook: "+l.map(g=>g.filePath).join(" "),m(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await dn(()=>s(n),r,e);m(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Nn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Ye();const Gn=!0;Ae(Gn);Jn();async function Jn(){var t,n;const e=await wn();await Hn(e,!1),_n(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
