(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{3394:function(e,t,s){Promise.resolve().then(s.bind(s,1224)),Promise.resolve().then(s.bind(s,1152)),Promise.resolve().then(s.t.bind(s,2505,23))},1224:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(7437),i=s(2265),l=s(1396),r=s.n(l),c=s(4033),a=s(7042),o=s(4769);let d=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,o.m6)((0,a.W)(t))};var h=()=>{let e=function(e){let[t,s]=(0,i.useState)(!1),n=(0,i.useCallback)(()=>{s(window.scrollY>e)},[e]);return(0,i.useEffect)(()=>(window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[n]),(0,i.useEffect)(()=>{n()},[n]),t}(5),t=(0,c.useSelectedLayoutSegment)();return(0,n.jsx)("div",{className:d("sticky header-bar  inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200",{"border-b border-gray-200 bg-white/75 backdrop-blur-lg":e,"border-b border-gray-200 bg-white":t}),children:(0,n.jsxs)("div",{className:"flex h-[47px] items-center justify-between px-4",children:[(0,n.jsx)("div",{className:"flex items-center space-x-4",children:(0,n.jsx)(r(),{href:"/",className:"flex flex-row space-x-3 items-center justify-center md:hidden",children:(0,n.jsxs)("span",{className:"font-bold text-xl flex ",children:["                        ",(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 12c0-3.857 1.286-9 3.857-9c3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12M3 12h2m14 0h2m-5.5 0h1m-9 0h1"})})]})})}),(0,n.jsx)("div",{className:"hidden md:block"})]})})}},1152:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(7437),i=s(2265),l=s(1396),r=s.n(l),c=s(4033),a=s(2627);let o=[{title:"Home",path:"/home",icon:(0,n.jsx)(a.JO,{icon:"lucide:home",width:"24",height:"24"})},{title:"Statistics",path:"/statistics",icon:(0,n.jsx)(a.JO,{icon:"bx:stats",width:"24",height:"24"})},{title:"Generate",path:"/generate",icon:(0,n.jsx)(a.JO,{icon:"jam:key",width:"24",height:"24"}),submenu:!0,subMenuItems:[{title:"Keys",path:"/generate/keys"},{title:"Sha256",path:"/generate/sha"},{title:"Integers",path:"/generate/integers"},{title:"Stream",path:"/generate/stream"}]},{title:"Settings",path:"/settings",icon:(0,n.jsx)(a.JO,{icon:"lucide:settings",width:"24",height:"24"})},{title:"Help",path:"/help",icon:(0,n.jsx)(a.JO,{icon:"lucide:help-circle",width:"24",height:"24"})}];var d=()=>(0,n.jsx)("div",{className:"header-bar md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-6 w-full",children:[(0,n.jsxs)(r(),{href:"/",className:"flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full",children:[(0,n.jsx)("span",{className:"font-bold text-xl hidden md:flex",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 12c0-3.857 1.286-9 3.857-9c3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12M3 12h2m14 0h2m-5.5 0h1m-9 0h1"})})}),"Q-R-N-G"]}),(0,n.jsx)("div",{className:"flex flex-col space-y-2  md:px-6 ",children:o.map((e,t)=>(0,n.jsx)(h,{item:e},t))})]})});let h=e=>{var t;let{item:s}=e,l=(0,c.usePathname)(),[o,d]=(0,i.useState)(!1);return(0,n.jsx)("div",{className:"",children:s.submenu?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{onClick:()=>{d(!o)},className:"flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ".concat(l.includes(s.path)?"bg-zinc-100":""),children:[(0,n.jsxs)("div",{className:"flex flex-row space-x-4 items-center",children:[s.icon,(0,n.jsx)("span",{className:"font-semibold text-xl  flex",children:s.title})]}),(0,n.jsx)("div",{className:"".concat(o?"rotate-180":""," flex"),children:(0,n.jsx)(a.JO,{icon:"lucide:chevron-down",width:"24",height:"24"})})]}),o&&(0,n.jsx)("div",{className:"my-2 ml-12 flex flex-col space-y-4",children:null===(t=s.subMenuItems)||void 0===t?void 0:t.map((e,t)=>(0,n.jsx)(r(),{href:e.path,className:"".concat(e.path===l?"font-bold":""),children:(0,n.jsx)("span",{children:e.title})},t))})]}):(0,n.jsxs)(r(),{href:s.path,className:"flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ".concat(s.path===l?"bg-zinc-100":""),children:[s.icon,(0,n.jsx)("span",{className:"font-semibold text-xl flex",children:s.title})]})})}},2505:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}}},function(e){e.O(0,[932,627,971,472,744],function(){return e(e.s=3394)}),_N_E=e.O()}]);