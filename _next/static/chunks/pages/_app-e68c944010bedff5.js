(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(5635)}])},5635:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return v}});var e=c(5893),f=c(7294);c(906);var g=c(9304),h=c(4735),i=c(8868);function j(){let a=(0,f.useRef)(!1);return(0,i.L)(()=>(a.current=!0,()=>{a.current=!1}),[]),a}var k=c(240),l=c(6681);class m extends f.Component{getSnapshotBeforeUpdate(a){let b=this.props.childRef.current;if(b&&a.isPresent&&!this.props.isPresent){let c=this.props.sizeRef.current;c.height=b.offsetHeight||0,c.width=b.offsetWidth||0,c.top=b.offsetTop,c.left=b.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function n({children:a,isPresent:b}){let c=(0,f.useId)(),d=(0,f.useRef)(null),e=(0,f.useRef)({width:0,height:0,top:0,left:0});return(0,f.useInsertionEffect)(()=>{let{width:a,height:f,top:g,left:h}=e.current;if(b||!d.current||!a||!f)return;d.current.dataset.motionPopId=c;let i=document.createElement("style");return document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${f}px !important;
            top: ${g}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[b]),f.createElement(m,{isPresent:b,childRef:d,sizeRef:e},f.cloneElement(a,{ref:d}))}let o=({children:a,initial:b,isPresent:c,onExitComplete:d,custom:e,presenceAffectsLayout:g,mode:h})=>{let i=(0,l.h)(p),j=(0,f.useId)(),m=(0,f.useMemo)(()=>({id:j,initial:b,isPresent:c,custom:e,onExitComplete:a=>{for(let b of(i.set(a,!0),i.values()))if(!b)return;d&&d()},register:a=>(i.set(a,!1),()=>i.delete(a))}),g?void 0:[c]);return(0,f.useMemo)(()=>{i.forEach((a,b)=>i.set(b,!1))},[c]),f.useEffect(()=>{c||i.size||!d||d()},[c]),"popLayout"===h&&(a=f.createElement(n,{isPresent:c},a)),f.createElement(k.O.Provider,{value:m},a)};function p(){return new Map}var q=c(5364),r=c(5411),s=c(6034);let t=a=>a.key||"",u=({children:a,custom:b,initial:c=!0,onExitComplete:d,exitBeforeEnter:e,presenceAffectsLayout:k=!0,mode:l="sync"})=>{e&&(l="wait",(0,s.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[m]=function(){let a=j(),[b,c]=(0,f.useState)(0),d=(0,f.useCallback)(()=>{a.current&&c(b+1)},[b]),e=(0,f.useCallback)(()=>h.ZP.postRender(d),[d]);return[e,b]}(),n=(0,f.useContext)(q.p).forceRender;n&&(m=n);let p=j(),u=function(a){let b=[];return f.Children.forEach(a,a=>{(0,f.isValidElement)(a)&&b.push(a)}),b}(a),v=u,w=new Set,x=(0,f.useRef)(v),y=(0,f.useRef)(new Map).current,z=(0,f.useRef)(!0);if((0,i.L)(()=>{z.current=!1,function(a,b){a.forEach(a=>{let c=t(a);b.set(c,a)})}(u,y),x.current=v}),(0,r.z)(()=>{z.current=!0,y.clear(),w.clear()}),z.current)return f.createElement(f.Fragment,null,v.map(a=>f.createElement(o,{key:t(a),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:k,mode:l},a)));v=[...v];let A=x.current.map(t),B=u.map(t),C=A.length;for(let D=0;D<C;D++){let E=A[D];-1===B.indexOf(E)&&w.add(E)}return"wait"===l&&w.size&&(v=[]),w.forEach(a=>{if(-1!==B.indexOf(a))return;let c=y.get(a);if(!c)return;let e=A.indexOf(a),g=()=>{y.delete(a),w.delete(a);let b=x.current.findIndex(b=>b.key===a);if(x.current.splice(b,1),!w.size){if(x.current=u,!1===p.current)return;m(),d&&d()}};v.splice(e,0,f.createElement(o,{key:t(c),isPresent:!1,onExitComplete:g,custom:b,presenceAffectsLayout:k,mode:l},c))}),v=v.map(a=>{let b=a.key;return w.has(b)?a:f.createElement(o,{key:t(a),isPresent:!0,presenceAffectsLayout:k,mode:l},a)}),"production"!==g.O&&"wait"===l&&v.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),f.createElement(f.Fragment,null,w.size?v:v.map(a=>(0,f.cloneElement)(a)))};var v=function(a){var b,c,g=a.Component,h=a.pageProps,i=a.router;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(u,{mode:"wait",initial:!1,onExitComplete:function(){return window.scrollTo(0,0)},children:(0,f.createElement)(g,(b=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},h),c=(c={key:i.pathname},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))})})}},906:function(){},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},5364:function(a,b,c){"use strict";c.d(b,{p:function(){return e}});var d=c(7294);let e=(0,d.createContext)({})},240:function(a,b,c){"use strict";c.d(b,{O:function(){return e}});var d=c(7294);let e=(0,d.createContext)(null)},1741:function(a,b,c){"use strict";c.d(b,{j:function(){return d}});let d="undefined"!=typeof document},9304:function(a,b,c){"use strict";c.d(b,{O:function(){return e}});var d=c(3454);let e=(void 0===d||d.env,"production")},6681:function(a,b,c){"use strict";c.d(b,{h:function(){return e}});var d=c(7294);function e(a){let b=(0,d.useRef)(null);return null===b.current&&(b.current=a()),b.current}},8868:function(a,b,c){"use strict";c.d(b,{L:function(){return f}});var d=c(7294),e=c(1741);let f=e.j?d.useLayoutEffect:d.useEffect},5411:function(a,b,c){"use strict";c.d(b,{z:function(){return e}});var d=c(7294);function e(a){return(0,d.useEffect)(()=>()=>a(),[])}},6034:function(a,b,c){"use strict";c.d(b,{O:function(){return e}});let d=new Set;function e(a,b,c){a||d.has(b)||(console.warn(b),c&&console.warn(c),d.add(b))}},4735:function(a,b,c){"use strict";c.d(b,{qY:function(){return n},ZP:function(){return t},iW:function(){return o},"$B":function(){return s}});let d=1/60*1e3,e="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),f="undefined"!=typeof window?a=>window.requestAnimationFrame(a):a=>setTimeout(()=>a(e()),d),g=!0,h=!1,i=!1,j={delta:0,timestamp:0},k=["read","update","preRender","render","postRender",],l=k.reduce((a,b)=>(a[b]=function(a){let b=[],c=[],d=0,e=!1,f=!1,g=new WeakSet,h={schedule:(a,f=!1,h=!1)=>{let i=h&&e,j=i?b:c;return f&&g.add(a),-1===j.indexOf(a)&&(j.push(a),i&&e&&(d=b.length)),a},cancel:a=>{let b=c.indexOf(a);-1!==b&&c.splice(b,1),g.delete(a)},process:i=>{if(e){f=!0;return}if(e=!0,[b,c]=[c,b],c.length=0,d=b.length)for(let j=0;j<d;j++){let k=b[j];k(i),g.has(k)&&(h.schedule(k),a())}e=!1,f&&(f=!1,h.process(i))}};return h}(()=>h=!0),a),{}),m=k.reduce((a,b)=>{let c=l[b];return a[b]=(a,b=!1,d=!1)=>(h||r(),c.schedule(a,b,d)),a},{}),n=k.reduce((a,b)=>(a[b]=l[b].cancel,a),{}),o=k.reduce((a,b)=>(a[b]=()=>l[b].process(j),a),{}),p=a=>l[a].process(j),q=a=>{h=!1,j.delta=g?d:Math.max(Math.min(a-j.timestamp,40),1),j.timestamp=a,i=!0,k.forEach(p),i=!1,h&&(g=!1,f(q))},r=()=>{h=!0,g=!0,i||f(q)},s=()=>j;var t=m}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])