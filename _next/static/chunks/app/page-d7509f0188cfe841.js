(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7397:function(e,t,s){Promise.resolve().then(s.bind(s,5767))},8461:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return l}});let r=s(7043),n=s(5346),a=s(5878),i=r._(s(5084));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ben-papac/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=a.Image},5767:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var r=s(7437),n=s(8461),a=s.n(n),i=s(2265);let l=e=>{let t;let s=new Set,r=(e,r)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=r?r:"object"!=typeof n||null===n)?n:Object.assign({},t,n),s.forEach(s=>s(t,e))}},n=()=>t,a={setState:r,getState:n,getInitialState:()=>i,subscribe:e=>(s.add(e),()=>s.delete(e))},i=t=e(r,n,a);return a},o=e=>e?l(e):l,c=e=>e,d=e=>{let t=o(e),s=e=>(function(e,t=c){let s=i.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return i.useDebugValue(s),s})(t,e);return Object.assign(s,t),s},m=e=>e?d(e):d,u=e=>(t,s,r)=>{let n=r.subscribe;return r.subscribe=(e,t,s)=>{let a=e;if(t){let n=(null==s?void 0:s.equalityFn)||Object.is,i=e(r.getState());a=s=>{let r=e(s);if(!n(i,r)){let e=i;t(i=r,e)}},(null==s?void 0:s.fireImmediately)&&t(i,i)}return n(a)},e(t,s,r)},f=i.createContext(null);function h({map:e,children:t,onChange:s,domElement:r}){let n=e.map(e=>e.name+e.keys).join("-"),a=i.useMemo(()=>m(u(()=>e.reduce((e,t)=>({...e,[t.name]:!1}),{}))),[n]),l=i.useMemo(()=>[a.subscribe,a.getState,a],[n]),o=a.setState;return i.useEffect(()=>{let t=e.map(({name:e,keys:t,up:r})=>({keys:t,up:r,fn:t=>{o({[e]:t}),s&&s(e,t,l[1]())}})).reduce((e,{keys:t,fn:s,up:r=!0})=>(t.forEach(t=>e[t]={fn:s,pressed:!1,up:r}),e),{}),n=({key:e,code:s})=>{let r=t[e]||t[s];if(!r)return;let{fn:n,pressed:a,up:i}=r;r.pressed=!0,(i||!a)&&n(!0)},a=({key:e,code:s})=>{let r=t[e]||t[s];if(!r)return;let{fn:n,up:a}=r;r.pressed=!1,a&&n(!1)},i=r||window;return i.addEventListener("keydown",n,{passive:!0}),i.addEventListener("keyup",a,{passive:!0}),()=>{i.removeEventListener("keydown",n),i.removeEventListener("keyup",a)}},[r,n]),i.createElement(f.Provider,{value:l,children:t})}function p(){return(0,r.jsx)(h,{map:[{name:"forward",keys:["ArrowUp","w","W"]},{name:"backward",keys:["ArrowDown","s","S"]},{name:"left",keys:["ArrowLeft","a","A"]},{name:"right",keys:["ArrowRight","d","D"]},{name:"jump",keys:["Space"]}],children:(0,r.jsx)("div",{className:"flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,r.jsx)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,r.jsx)("div",{className:"mx-auto my-2 md:w-1/3 md:h-1/3",children:(0,r.jsx)(a(),{className:"rounded-lg",src:"/Ben Papac.jpg",alt:"Ben's portrait",width:250,height:250,priority:!0})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h2",{className:" text-xl md:text-2xl",children:"My name is Ben."}),(0,r.jsx)("p",{className:"mb-10 text-lg md:text-xl",children:"I’m a customer centric full-stack software engineer with a background in acting and community organizing. Scroll down to learn more about my work history."}),(0,r.jsx)("label",{htmlFor:"skills",className:"text-2xl font-bold mb-2",children:"What I do:"}),(0,r.jsxs)("ol",{id:"skills",className:"text-xl space-y-2 mb-10",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"font-bold",children:"I execute"})," thanks to 2+ years experience in React, Javascript / Typescript, Google Maps API, and I’m comfortable in Python."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"font-bold",children:"I thrive"})," in fast-paced, constantly shifting work environments, as I did when I was a Field Organizer for the Democratic Party of Georgia in 2020."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"font-bold",children:"I lead"})," customer research conversations with empathy, curiosity, and active listening. This was an asset when doing customer research at John Deere."]})]}),(0,r.jsx)("h2",{className:"text-xl md:text-2xl mb-2 font-bold",children:"Languages, Frameworks and Technologies"}),(0,r.jsxs)("div",{className:"mb-10 flex flex-row w-full flex-wrap place-items-center space-x-1",children:[(0,r.jsx)(a(),{className:"rounded-lg",src:"/javascript.png",alt:"Ben's portrait",width:68,height:50,priority:!0}),(0,r.jsx)(a(),{className:"rounded-lg",src:"/typescript.png",alt:"Ben's portrait",width:68,height:50,priority:!0}),(0,r.jsx)(a(),{className:"rounded-lg",src:"/python.png",alt:"Ben's portrait",width:58,height:50,priority:!0}),(0,r.jsx)(a(),{className:"rounded-lg",src:"/react.png",alt:"Ben's portrait",width:58,height:50,priority:!0}),(0,r.jsx)(a(),{className:"rounded-lg",src:"/aws.png",alt:"Ben's portrait",width:58,height:50,priority:!0})]})]})]})})})})}}},function(e){e.O(0,[878,971,117,744],function(){return e(e.s=7397)}),_N_E=e.O()}]);