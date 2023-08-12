"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{3250:function(a,b,c){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d=c(7294),e="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},f=d.useState,g=d.useEffect,h=d.useLayoutEffect,i=d.useDebugValue;function j(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!e(a,c)}catch(d){return!0}}function k(a,b){return b()}var l="undefined"==typeof window|| void 0===window.document|| void 0===window.document.createElement?k:function(a,b){var c=b(),d=f({inst:{value:c,getSnapshot:b}}),e=d[0].inst,k=d[1];return h(function(){e.value=c,e.getSnapshot=b,j(e)&&k({inst:e})},[a,c,b]),g(function(){return j(e)&&k({inst:e}),a(function(){j(e)&&k({inst:e})})},[a]),i(c),c};b.useSyncExternalStore=void 0!==d.useSyncExternalStore?d.useSyncExternalStore:l},1688:function(a,b,c){a.exports=c(3250)},9734:function(a,b,c){c.d(b,{ZP:function(){return ai}});var d,e=c(7294),f=c(1688);let g=()=>{},h=g(),i=Object,j=a=>a===h,k=a=>"function"==typeof a,l=(a,b)=>({...a,...b}),m=a=>k(a.then),n=new WeakMap,o=0,p=a=>{let b=typeof a,c=a&&a.constructor,d=c==Date,e,f;if(i(a)!==a||d||c==RegExp)e=d?a.toJSON():"symbol"==b?a.toString():"string"==b?JSON.stringify(a):""+a;else{if(e=n.get(a))return e;if(e=++o+"~",n.set(a,e),c==Array){for(f=0,e="@";f<a.length;f++)e+=p(a[f])+",";n.set(a,e)}if(c==i){e="#";let g=i.keys(a).sort();for(;!j(f=g.pop());)j(a[f])||(e+=f+":"+p(a[f])+",");n.set(a,e)}}return e},q=new WeakMap,r={},s={},t="undefined",u=typeof window!=t,v=typeof document!=t,w=()=>u&& typeof window.requestAnimationFrame!=t,x=(a,b)=>{let c=q.get(a);return[()=>!j(b)&&a.get(b)||r,d=>{if(!j(b)){let e=a.get(b);b in s||(s[b]=e),c[5](b,l(e,d),e||r)}},c[6],()=>!j(b)&&b in s?s[b]:!j(b)&&a.get(b)||r]},y=!0,[z,A]=u&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[g,g],B=()=>{let a=v&&document.visibilityState;return j(a)||"hidden"!==a},C=a=>(v&&document.addEventListener("visibilitychange",a),z("focus",a),()=>{v&&document.removeEventListener("visibilitychange",a),A("focus",a)}),D=a=>{let b=()=>{y=!0,a()},c=()=>{y=!1};return z("online",b),z("offline",c),()=>{A("online",b),A("offline",c)}},E={initFocus:C,initReconnect:D},F=!e.useId,G=!u||"Deno"in window,H=a=>w()?window.requestAnimationFrame(a):setTimeout(a,1),I=G?e.useEffect:e.useLayoutEffect,J="undefined"!=typeof navigator&&navigator.connection,K=!G&&J&&(["slow-2g","2g"].includes(J.effectiveType)||J.saveData),L=a=>{if(k(a))try{a=a()}catch(b){a=""}let c=a;return[a="string"==typeof a?a:(Array.isArray(a)?a.length:a)?p(a):"",c]},M=0,N=()=>++M;var O={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function P(...a){let[b,c,d,e]=a,f=l({populateCache:!0,throwOnError:!0},"boolean"==typeof e?{revalidate:e}:e||{}),g=f.populateCache,i=f.rollbackOnError,n=f.optimisticData,o=!1!==f.revalidate,p=a=>"function"==typeof i?i(a):!1!==i,r=f.throwOnError;if(k(c)){let s=c,t=[],u=b.keys();for(let v of u)!/^\$(inf|sub)\$/.test(v)&&s(b.get(v)._k)&&t.push(v);return Promise.all(t.map(w))}return w(c);async function w(c){let[e]=L(c);if(!e)return;let[f,i]=x(b,e),[l,s,t,u]=q.get(b),v=()=>{let a=l[e];return o&&(delete t[e],delete u[e],a&&a[0])?a[0](2).then(()=>f().data):f().data};if(a.length<3)return v();let w=d,y,z=N();s[e]=[z,0];let A=!j(n),B=f(),C=B.data,D=B._c,E=j(D)?C:D;if(A&&(n=k(n)?n(E,C):n,i({data:n,_c:E})),k(w))try{w=w(E)}catch(F){y=F}if(w&&m(w)){if(w=await w.catch(a=>{y=a}),z!==s[e][0]){if(y)throw y;return w}y&&A&&p(y)&&(g=!0,i({data:E,_c:h}))}if(g&&!y)if(k(g)){let G=g(w,E);i({data:G,error:h,_c:h})}else i({data:w,error:h,_c:h});if(s[e][1]=N(),Promise.resolve(v()).then(()=>{i({_c:h})}),y){if(r)throw y;return}return w}}let Q=(a,b)=>{for(let c in a)a[c][0]&&a[c][0](b)},R=(a,b)=>{if(!q.has(a)){let c=l(E,b),d={},e=P.bind(h,a),f=g,i={},j=(a,b)=>{let c=i[a]||[];return i[a]=c,c.push(b),()=>c.splice(c.indexOf(b),1)},k=(b,c,d)=>{a.set(b,c);let e=i[b];if(e)for(let f of e)f(c,d)},m=()=>{if(!q.has(a)&&(q.set(a,[d,{},{},{},e,k,j]),!G)){let b=c.initFocus(setTimeout.bind(h,Q.bind(h,d,0))),g=c.initReconnect(setTimeout.bind(h,Q.bind(h,d,1)));f=()=>{b&&b(),g&&g(),q.delete(a)}}};return m(),[a,e,m,f]}return[a,q.get(a)[4]]},S=(a,b,c,d,e)=>{let f=c.errorRetryCount,g=e.retryCount,h=~~((Math.random()+.5)*(1<<(g<8?g:8)))*c.errorRetryInterval;(j(f)||!(g>f))&&setTimeout(d,h,e)},T=(a,b)=>p(a)==p(b),[U,V]=R(new Map),W=l({onLoadingSlow:g,onSuccess:g,onError:g,onErrorRetry:S,onDiscarded:g,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:K?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:K?5e3:3e3,compare:T,isPaused:()=>!1,cache:U,mutate:V,fallback:{}},{isOnline:()=>y,isVisible:B}),X=(a,b)=>{let c=l(a,b);if(b){let{use:d,fallback:e}=a,{use:f,fallback:g}=b;d&&f&&(c.use=d.concat(f)),e&&g&&(c.fallback=l(e,g))}return c},Y=(0,e.createContext)({}),Z=a=>{let{value:b}=a,c=(0,e.useContext)(Y),d=k(b),f=(0,e.useMemo)(()=>d?b(c):b,[d,c,b]),g=(0,e.useMemo)(()=>d?f:X(c,f),[d,c,f]),i=f&&f.provider,j=(0,e.useRef)(h);i&&!j.current&&(j.current=R(i(g.cache||U),f));let m=j.current;return m&&(g.cache=m[0],g.mutate=m[1]),I(()=>{if(m)return m[2]&&m[2](),m[3]},[]),(0,e.createElement)(Y.Provider,l(a,{value:g}))},$=u&&window.__SWR_DEVTOOLS_USE__,_=$?window.__SWR_DEVTOOLS_USE__:[],aa=a=>k(a[1])?[a[0],a[1],a[2]||{}]:[a[0],null,(null===a[1]?a[2]:a[1])||{}],ab=()=>l(W,(0,e.useContext)(Y)),ac=a=>(b,c,d)=>a(b,c&&((...a)=>{let[d]=L(b),[,,,e]=q.get(U);if(d.startsWith("$inf$"))return c(...a);let f=e[d];return j(f)?c(...a):(delete e[d],f)}),d),ad=_.concat(ac),ae=(a,b,c)=>{let d=b[a]||(b[a]=[]);return d.push(c),()=>{let a=d.indexOf(c);a>=0&&(d[a]=d[d.length-1],d.pop())}};$&&(window.__SWR_DEVTOOLS_REACT__=e);let af=e.use||(a=>{if("pending"===a.status)throw a;if("fulfilled"===a.status)return a.value;if("rejected"===a.status)throw a.reason;throw a.status="pending",a.then(b=>{a.status="fulfilled",a.value=b},b=>{a.status="rejected",a.reason=b}),a}),ag={dedupe:!0},ah=(a,b,c)=>{let{cache:d,compare:g,suspense:i,fallbackData:m,revalidateOnMount:n,revalidateIfStale:o,refreshInterval:p,refreshWhenHidden:r,refreshWhenOffline:s,keepPreviousData:t}=c,[u,v,w,y]=q.get(d),[z,A]=L(a),B=(0,e.useRef)(!1),C=(0,e.useRef)(!1),D=(0,e.useRef)(z),E=(0,e.useRef)(b),J=(0,e.useRef)(c),K=()=>J.current,M=()=>K().isVisible()&&K().isOnline(),[Q,R,S,T]=x(d,z),U=(0,e.useRef)({}).current,V=j(m)?c.fallback[z]:m,W=(a,b)=>{for(let c in U){let d=c;if("data"===d){if(!g(a[d],b[d])&&(!j(a[d])||!g(ad,b[d])))return!1}else if(b[d]!==a[d])return!1}return!0},X=(0,e.useMemo)(()=>{let a=!!z&&!!b&&(j(n)?!K().isPaused()&&!i&&(!!j(o)||o):n),c=b=>{let c=l(b);return(delete c._k,a)?{isValidating:!0,isLoading:!0,...c}:c},d=Q(),e=T(),f=c(d),g=d===e?f:c(e),h=f;return[()=>{let a=c(Q()),b=W(a,h);return b?(h.data=a.data,h.isLoading=a.isLoading,h.isValidating=a.isValidating,h.error=a.error,h):(h=a,a)},()=>g]},[d,z]),Y=(0,f.useSyncExternalStore)((0,e.useCallback)(a=>S(z,(b,c)=>{W(c,b)||a()}),[d,z]),X[0],X[1]),Z=!B.current,$=u[z]&&u[z].length>0,_=Y.data,aa=j(_)?V:_,ab=Y.error,ac=(0,e.useRef)(aa),ad=t?j(_)?ac.current:_:aa,ah=(!$||!!j(ab))&&(Z&&!j(n)?n:!K().isPaused()&&(i?!j(aa)&&o:j(aa)||o)),ai=!!(z&&b&&Z&&ah),aj=j(Y.isValidating)?ai:Y.isValidating,ak=j(Y.isLoading)?ai:Y.isLoading,al=(0,e.useCallback)(async a=>{let b=E.current;if(!z||!b||C.current||K().isPaused())return!1;let d,e,f=!0,i=a||{},l=!w[z]||!i.dedupe,m=()=>F?!C.current&&z===D.current&&B.current:z===D.current,n={isValidating:!1,isLoading:!1},o=()=>{R(n)},p=()=>{let a=w[z];a&&a[1]===e&&delete w[z]},q={isValidating:!0};j(Q().data)&&(q.isLoading=!0);try{if(l&&(R(q),c.loadingTimeout&&j(Q().data)&&setTimeout(()=>{f&&m()&&K().onLoadingSlow(z,c)},c.loadingTimeout),w[z]=[b(A),N()]),[d,e]=w[z],d=await d,l&&setTimeout(p,c.dedupingInterval),!w[z]||w[z][1]!==e)return l&&m()&&K().onDiscarded(z),!1;n.error=h;let r=v[z];if(!j(r)&&(e<=r[0]||e<=r[1]||0===r[1]))return o(),l&&m()&&K().onDiscarded(z),!1;let s=Q().data;n.data=g(s,d)?s:d,l&&m()&&K().onSuccess(d,z,c)}catch(t){p();let x=K(),{shouldRetryOnError:y}=x;!x.isPaused()&&(n.error=t,l&&m()&&(x.onError(t,z,x),(!0===y||k(y)&&y(t))&&M()&&x.onErrorRetry(t,z,x,a=>{let b=u[z];b&&b[0]&&b[0](O.ERROR_REVALIDATE_EVENT,a)},{retryCount:(i.retryCount||0)+1,dedupe:!0})))}return f=!1,o(),!0},[z,d]),am=(0,e.useCallback)((...a)=>P(d,D.current,...a),[]);if(I(()=>{E.current=b,J.current=c,j(_)||(ac.current=_)}),I(()=>{if(!z)return;let a=al.bind(h,ag),b=0,c=(c,d={})=>{if(c==O.FOCUS_EVENT){let e=Date.now();K().revalidateOnFocus&&e>b&&M()&&(b=e+K().focusThrottleInterval,a())}else if(c==O.RECONNECT_EVENT)K().revalidateOnReconnect&&M()&&a();else if(c==O.MUTATE_EVENT)return al();else if(c==O.ERROR_REVALIDATE_EVENT)return al(d)},d=ae(z,u,c);return C.current=!1,D.current=z,B.current=!0,R({_k:A}),ah&&(j(aa)||G?a():H(a)),()=>{C.current=!0,d()}},[z]),I(()=>{let a;function b(){let b=k(p)?p(Q().data):p;b&& -1!==a&&(a=setTimeout(c,b))}function c(){!Q().error&&(r||K().isVisible())&&(s||K().isOnline())?al(ag).then(b):b()}return b(),()=>{a&&(clearTimeout(a),a=-1)}},[p,r,s,z]),(0,e.useDebugValue)(ad),i&&j(aa)&&z){if(!F&&G)throw Error("Fallback data is required when using suspense in SSR.");E.current=b,J.current=c,C.current=!1;let an=y[z];if(!j(an)){let ao=am(an);af(ao)}if(j(ab)){let ap=al(ag);j(ad)||(ap.status="fulfilled",ap.value=!0),af(ap)}else throw ab}return{mutate:am,get data(){return U.data=!0,ad},get error(){return U.error=!0,ab},get isValidating(){return U.isValidating=!0,aj},get isLoading(){return U.isLoading=!0,ak}}};i.defineProperty(Z,"defaultValue",{value:W});let ai=(d=ah,function(...a){let b=ab(),[c,e,f]=aa(a),g=X(b,f),h=d,{use:i}=g,j=(i||[]).concat(ad);for(let k=j.length;k--;)h=j[k](h);return h(c,e||g.fetcher||null,g)})}}])