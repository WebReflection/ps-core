/* c8 ignore next */
export default () => new Worker(URL.createObjectURL(new Blob(["const e=\"object\"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case\"BigInt\":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r=\"\",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if(\"object\"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case\"Array\":return[1,r];case\"Object\":return[2,r];case\"Date\":return[3,r];case\"RegExp\":return[4,r];case\"Map\":return[5,r];case\"Set\":return[6,r]}return s.includes(\"Array\")?[1,s]:s.includes(\"Error\")?[7,s]:[2,s]},a=([e,t])=>0===e&&(\"function\"===t||\"symbol\"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[u,l]=o(n);switch(u){case 0:{let t=n;switch(l){case\"bigint\":u=8,t=n.toString();break;case\"function\":case\"symbol\":if(e)throw new TypeError(\"unable to serialize \"+l);t=null;break;case\"undefined\":return i([-1],n)}return i([u,t],n)}case 1:{if(l)return i([l,[...n]],n);const e=[],t=i([u,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(l)switch(l){case\"BigInt\":return i([l,n.toString()],n);case\"Boolean\":case\"Number\":case\"String\":return i([l,n.valueOf()],n)}if(t&&\"toJSON\"in n)return c(n.toJSON());const r=[],f=i([u,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([u,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([u,{source:e,flags:t}],n)}case 5:{const t=[],r=i([u,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([u,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([u,{name:l,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:u}=JSON,l={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>u(i(e,l))});\n/*! (c) Andrea Giammarchi - ISC */const d=\"a6752de4-137c-4476-9bf6-53391389a8ac\",{Atomics:p,Int32Array:h,Map:w,SharedArrayBuffer:y,Uint16Array:g}=globalThis,{BYTES_PER_ELEMENT:m}=h,{BYTES_PER_ELEMENT:b}=g,{load:v,notify:j,store:k,wait:A}=p,{isArray:S}=Array,{fromCharCode:E}=String,_=new WeakSet,x=new WeakMap;let $=0;const M=(e,{parse:t,stringify:r}=JSON)=>{if(!x.has(e)){const n=(t,...r)=>e.postMessage({[d]:r},{transfer:t});x.set(e,new Proxy(new w,{get:(e,r)=>\"then\"===r?null:(...e)=>{const s=$++;let o=new y(m),a=new h(o),i=[];_.has(e.at(-1)||i)&&_.delete(i=e.pop()),n(i,s,o,r,e),A(a,0);const c=v(a,0),u=b*c;o=new y(u+u%m),a=new h(o),n([],s,o),A(a,0);let l=\"\";for(let e=new g(o),t=0;t<c;t++)l+=E(v(e,t));return t(l)},set(t,n,s){if(!t.size){const n=new w;e.addEventListener(\"message\",(async({data:e})=>{const s=e?.[d];if(S(s)){const[e,o,...a]=s,i=new h(o);if(a.length){const[s,o]=a;if(!t.has(s))throw new Error(`Unsupported action: ${s}`);{const a=r(await t.get(s)(...o));n.set(e,a),k(i,0,a.length)}}else{const t=n.get(e);n.delete(e);for(let e=new g(o),r=0;r<t.length;r++)e[r]=t.charCodeAt(r)}j(i,0)}}))}return!!t.set(n,s)}}))}return x.get(e)},W=e=>M(e,f);W.transfer=M.transfer=(...e)=>(_.add(e),e),Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const P=e=>e.arrayBuffer(),O=e=>e.json(),B=e=>e.text(),{isArray:F}=Array,{all:T,resolve:R}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),I=(e,t=location.href)=>new URL(e,t).href,L=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),N=new WeakMap,U=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return N.set(t,r),t}}},J=e=>{const t=e.split(\"/\");return t.pop(),t.join(\"/\")},z=(e,t)=>{const r=[];for(const n of t.split(\"/\"))r.push(n),n&&e.mkdir(r.join(\"/\"))},C=(e,t)=>{const r=[];for(const e of t.split(\"/\"))switch(e){case\"\":case\".\":break;case\"..\":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join(\"/\").replace(/^\\/+/,\"/\")},q=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,\"\"))).filter((e=>\"\"!==e&&\".\"!==e)).join(\"/\");return e[0].startsWith(\"/\")?`/${t}`:t},D=new WeakMap,Y=(e,t,r)=>T((e=>{for(const{files:t,to_file:r,from:n=\"\"}of e){if(void 0!==t&&void 0!==r)throw new Error(\"Cannot use 'to_file' and 'files' parameters together!\");if(void 0===t&&void 0===r&&n.endsWith(\"/\"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e=\"\",to_folder:t=\".\",to_file:r,files:n})=>{if(F(n))return n.map((r=>({url:q([e,r]),path:q([t,r])})));const s=r||e.slice(1+e.lastIndexOf(\"/\"));return[{url:e,path:q([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(I(t,D.get(e))))(r,n).then(P).then((r=>e.writeFile(t,s,r)))))),G=(e,t)=>e.runPython(L(t)),V=(e,t)=>e.runPythonAsync(L(t));function H(e,t,r){return t=`import js;event=js.__events.get(${r});${t}`,this.run(e,t)}const K=e=>function(t,r,n){return r=`from js import xworker;${r}`,globalThis.xworker=n,this[e](t,r)},Q=K(\"run\"),X=K(\"runAsync\"),Z=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join(\"/\"),new Uint8Array(r),{canOwn:!0})})(e,t,r);let ee=!0;var te={type:[\"micropython\",\"mpy\"],module:()=>\"https://webreflection.github.io/ps-core/micropython/micropython.mjs\",async engine({loadMicroPython:e},t,r){ee&&(ee=!1,globalThis.Promise=class extends Promise{});const{stderr:n,stdout:s,get:o}=U();r=r.replace(/\\.m?js$/,\".wasm\");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Y(this,a,t.fetch),a},run:G,runAsync:V,runEvent:H,runWorker:Q,runWorkerAsync:X,writeFile:Z};var re={type:[\"pyodide\",\"py\"],module:(e=\"0.23.2\")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=U(),a=r.slice(0,r.lastIndexOf(\"/\")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Y(this,i,t.fetch),t.packages){await i.loadPackage(\"micropip\");const e=await i.pyimport(\"micropip\");await e.install(t.packages),e.destroy()}return i},run:G,runAsync:V,runEvent:H,runWorker:Q,runWorkerAsync:X,writeFile:Z};const ne=\"ruby\",se=e=>function(t,r,n){return globalThis.xworker=n,this[e](t,`require \"js\";xworker=JS::eval(\"return xworker\");${r}`)};var oe={experimental:!0,type:[ne,\"rb\"],module:(e=\"2.0.0\")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf(\"/\"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Y(this,o,t.fetch),o},run:(e,t)=>e.eval(L(t)),runAsync:(e,t)=>e.evalAsync(L(t)),runEvent(e,t,r){return this.run(e,`require \"js\";event=JS::eval(\"return __events.get(${r})\");${t}`)},runWorker:se(\"run\"),runWorkerAsync:se(\"runAsync\"),writeFile:()=>{throw new Error(`writeFile is not supported in ${ne}`)}};const ae=e=>function(t,r,n){return t.global.set(\"xworker\",n),this[e](t,r)};var ie={type:[\"wasmoon\",\"lua\"],module:(e=\"1.15.0\")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=U(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,\"print\",s),a.global.setField(e,\"printErr\",n)})),r.fetch&&await Y(this,a,r.fetch),a},run:(e,t)=>e.doStringSync(L(t)),runAsync:(e,t)=>e.doString(L(t)),runEvent(e,t,r){return e.global.set(\"event\",globalThis.__events.get(r)),this.run(e,t)},runWorker:ae(\"run\"),runWorkerAsync:ae(\"runAsync\"),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=C(e,t),z(e,J(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const ce=new Map,ue=new Map,le=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split(\"@\"),s=ce.get(r),o=/^https?:\\/\\//i.test(n)?n[0]:s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ue.set(t,e);const a=e?.fetch;return a&&D.set(a,o),s(n,e,r)}))}}),fe=e=>{for(const t of[].concat(e.type))ce.set(t,e)};for(const e of[te,re,oe,ie])fe(e);const de=async e=>(await import(\"https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js\")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error([\"Unable to use SharedArrayBuffer due insecure environment.\",\"Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements\"].join(\"\\n\"))}let pe,he,we;const ye=(e,t)=>{addEventListener(e,t||(async t=>{const r=await pe;we=t,he(r,`xworker.on${e}(xworker.event);`,ge)}),!!t&&{once:!0})},ge={sync:W(self),onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self),get event(){const e=we;if(!e)throw new Error(\"Unauthorized event access\");return we=void 0,e}};ye(\"message\",(({data:{options:e,code:t}})=>{pe=(async()=>{const{type:r,version:n,config:s,async:o}=e,a=await((e,t)=>{let r={};if(t)if(t.endsWith(\".json\"))r=fetch(t).then(O);else if(t.endsWith(\".toml\"))r=fetch(t).then(B).then(de);else{try{r=JSON.parse(t)}catch(e){r=de(t)}t=I(\"./config.txt\")}return R(r).then((r=>le[e](r,t)))})(((e,t=\"\")=>`${e}@${t}`.replace(/@$/,\"\"))(r,n),s),i=ce.get(r);return he=i[\"runWorker\"+(o?\"Async\":\"\")].bind(i),he(a,t,ge),a})(),ye(\"error\"),ye(\"message\"),ye(\"messageerror\")}));\n"],{type:'application/javascript'})),{type:'module'});