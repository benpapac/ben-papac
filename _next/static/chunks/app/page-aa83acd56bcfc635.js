(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7397:function(e,t,n){Promise.resolve().then(n.bind(n,5767))},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return l}});let s=n(7043),r=n(5346),a=n(5878),i=s._(n(5084));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ben-papac/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=a.Image},5767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(7437),r=n(8461),a=n.n(r),i=n(2265);let l=e=>{let t;let n=new Set,s=(e,s)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=s?s:"object"!=typeof r||null===r)?r:Object.assign({},t,r),n.forEach(n=>n(t,e))}},r=()=>t,a={setState:s,getState:r,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e))},i=t=e(s,r,a);return a},c=e=>e?l(e):l,o=e=>e,d=e=>{let t=c(e),n=e=>(function(e,t=o){let n=i.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return i.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},u=e=>e?d(e):d,m=e=>(t,n,s)=>{let r=s.subscribe;return s.subscribe=(e,t,n)=>{let a=e;if(t){let r=(null==n?void 0:n.equalityFn)||Object.is,i=e(s.getState());a=n=>{let s=e(n);if(!r(i,s)){let e=i;t(i=s,e)}},(null==n?void 0:n.fireImmediately)&&t(i,i)}return r(a)},e(t,n,s)},f=i.createContext(null);function p({map:e,children:t,onChange:n,domElement:s}){let r=e.map(e=>e.name+e.keys).join("-"),a=i.useMemo(()=>u(m(()=>e.reduce((e,t)=>({...e,[t.name]:!1}),{}))),[r]),l=i.useMemo(()=>[a.subscribe,a.getState,a],[r]),c=a.setState;return i.useEffect(()=>{let t=e.map(({name:e,keys:t,up:s})=>({keys:t,up:s,fn:t=>{c({[e]:t}),n&&n(e,t,l[1]())}})).reduce((e,{keys:t,fn:n,up:s=!0})=>(t.forEach(t=>e[t]={fn:n,pressed:!1,up:s}),e),{}),r=({key:e,code:n})=>{let s=t[e]||t[n];if(!s)return;let{fn:r,pressed:a,up:i}=s;s.pressed=!0,(i||!a)&&r(!0)},a=({key:e,code:n})=>{let s=t[e]||t[n];if(!s)return;let{fn:r,up:a}=s;s.pressed=!1,a&&r(!1)},i=s||window;return i.addEventListener("keydown",r,{passive:!0}),i.addEventListener("keyup",a,{passive:!0}),()=>{i.removeEventListener("keydown",r),i.removeEventListener("keyup",a)}},[s,r]),i.createElement(f.Provider,{value:l,children:t})}var h=n(1603);function x(){return(0,s.jsx)(p,{map:[{name:"forward",keys:["ArrowUp","w","W"]},{name:"backward",keys:["ArrowDown","s","S"]},{name:"left",keys:["ArrowLeft","a","A"]},{name:"right",keys:["ArrowRight","d","D"]},{name:"jump",keys:["Space"]}],children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,s.jsx)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,s.jsx)("div",{className:"mx-auto my-2 md:w-1/3 md:h-1/3",children:(0,s.jsx)(a(),{className:"rounded-lg",src:"".concat(h.O,"/Ben Papac.jpg"),unoptimized:!0,alt:"Ben's portrait",width:250,height:250,priority:!0})}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h2",{className:" text-xl md:text-2xl",children:"My name is Ben."}),(0,s.jsx)("p",{className:"mb-10 text-lg md:text-xl",children:"I’m a customer centric full-stack software engineer with a background in acting and community organizing. Scroll down to learn more about my work history."}),(0,s.jsx)("label",{htmlFor:"skills",className:"text-2xl font-bold mb-2",children:"What I do:"}),(0,s.jsxs)("ol",{id:"skills",className:"text-xl space-y-2 mb-10",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"font-bold",children:"I execute"})," thanks to 2+ years experience in React, Javascript / Typescript, Google Maps API, and I’m comfortable in Python."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"font-bold",children:"I thrive"})," in fast-paced, constantly shifting work environments, as I did when I was a Field Organizer for the Democratic Party of Georgia in 2020."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"font-bold",children:"I lead"})," customer research conversations with empathy, curiosity, and active listening. This was an asset when doing customer research at John Deere."]})]}),(0,s.jsx)("h2",{className:"text-xl md:text-2xl mb-2 font-bold",children:"Languages, Frameworks and Technologies"}),(0,s.jsxs)("div",{className:"mb-10 flex flex-row w-full flex-wrap place-items-center space-x-1",children:[(0,s.jsx)(a(),{className:"rounded-lg",src:"".concat(h.O,"/javascript.png"),alt:"Ben's portrait",width:68,height:50,priority:!0}),(0,s.jsx)(a(),{className:"rounded-lg",src:"".concat(h.O,"/typescript.png"),alt:"Ben's portrait",width:68,height:50,priority:!0}),(0,s.jsx)(a(),{className:"rounded-lg",src:"".concat(h.O,"/python.png"),alt:"Ben's portrait",width:58,height:50,priority:!0}),(0,s.jsx)(a(),{className:"rounded-lg",src:"".concat(h.O,"/react.png"),alt:"Ben's portrait",width:58,height:50,priority:!0}),(0,s.jsx)(a(),{className:"rounded-lg",src:"".concat(h.O,"/aws.png"),alt:"Ben's portrait",width:58,height:50,priority:!0})]})]})]})})})})}},1603:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});let s="https://ben-papac.s3.us-east-1.amazonaws.com"}},function(e){e.O(0,[878,971,117,744],function(){return e(e.s=7397)}),_N_E=e.O()}]);