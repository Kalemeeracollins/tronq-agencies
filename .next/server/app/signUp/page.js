(()=>{var e={};e.id=90,e.ids=[90],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1038:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(7187),t(2029),t(5866);var s=t(3191),a=t(8716),n=t(7922),o=t.n(n),i=t(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["signUp",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7187)),"C:\\Users\\kalem\\OneDrive\\Desktop\\traq\\src\\app\\signUp\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2029)),"C:\\Users\\kalem\\OneDrive\\Desktop\\traq\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\kalem\\OneDrive\\Desktop\\traq\\src\\app\\signUp\\page.jsx"],u="/signUp/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/signUp/page",pathname:"/signUp",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9076:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},9303:()=>{},8966:(e,r,t)=>{Promise.resolve().then(t.bind(t,5683))},5683:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var s=t(326),a=t(7577),n=t(5047),o=t(6562),i=t(4458),l=t(1664),d=t(7299),c=t(1190),u=t(434),p=t(1697);function m(){let e=(0,n.useRouter)(),[r,t]=(0,a.useState)({email:"",username:"",country_code:"254",phone:"",password:""}),m=e=>{let{name:r,value:s}=e.target;t(e=>({...e,[r]:s}))},x=async t=>{t.preventDefault();try{let t=await fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(t.ok){console.log("User signed up successfully");let r=Math.random().toString(36).substr(2);o.Z.set("token",r),e.push("/dashboard")}else console.error("Failed to sign up:",t.statusText)}catch(e){console.error("Error occurred:",e)}};return(0,s.jsxs)("div",{className:"relative h-screen text-white",children:[s.jsx(i.Z,{video:"/signInBg.mp4"}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:s.jsx("div",{className:"text-center",children:(0,s.jsxs)("div",{className:"flex w-full max-w-4xl items-center rounded-lg bg-white p-8 shadow-lg bg-blue-500 bg-opacity-50 p-4",children:[(0,s.jsxs)("div",{className:"flex-1 space-y-6",children:[(0,s.jsxs)("div",{className:"mb-6 text-center",children:[s.jsx("h1",{className:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Sign Up"}),s.jsx("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"Create an account using your email to access our services."})]}),(0,s.jsxs)("form",{onSubmit:x,className:"space-y-4",children:[(0,s.jsxs)("div",{children:[s.jsx(d._,{htmlFor:"email",children:"Email"}),s.jsx(c.I,{id:"email",className:"text-black",placeholder:"name@example.com",required:!0,type:"email",name:"email",value:r.email,onChange:m})]}),(0,s.jsxs)("div",{children:[s.jsx(d._,{htmlFor:"username",children:"Username"}),s.jsx(c.I,{id:"username",className:"text-black",placeholder:"Enter your UserName",required:!0,type:"text",name:"username",value:r.username,onChange:m})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("div",{className:"mr-4",children:[s.jsx(d._,{htmlFor:"country_code",children:"Country Code"}),(0,s.jsxs)("select",{id:"country_code",name:"country_code",className:"block w-full py-2 text-black px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",value:r.country_code,onChange:m,children:[s.jsx("option",{value:"+254",children:"+254 (Kenya)"}),s.jsx("option",{value:"+255",children:"+255 (Tanzania)"}),s.jsx("option",{value:"+256",children:"+256 (Uganda)"}),s.jsx("option",{value:"+250",children:"+250 (Rwanda)"}),s.jsx("option",{value:"+257",children:"+257 (Burundi)"}),s.jsx("option",{value:"+211",children:"+211 (South Sudan)"})]})]}),(0,s.jsxs)("div",{children:[s.jsx(d._,{htmlFor:"phone",children:"Phone Number"}),s.jsx(c.I,{id:"phone",name:"phone",type:"tel",placeholder:"Enter phone number",required:!0,className:"text-black text-black block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",value:r.phone,onChange:m})]})]}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx(d._,{htmlFor:"password",children:"Password"}),s.jsx(c.I,{id:"password",className:"text-black",placeholder:"Enter your password",required:!0,type:"password",name:"password",value:r.password,onChange:m}),(0,s.jsxs)(l.z,{className:"absolute bottom-1 right-1 h-7 w-7",size:"icon",variant:"ghost",children:[s.jsx(g,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Toggle password visibility"})]})]}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx(d._,{htmlFor:"password",children:"Confirm Password"}),s.jsx(c.I,{id:"confirm_password",className:"text-black",placeholder:"Confirm your Password",required:!0,type:"password"}),(0,s.jsxs)(l.z,{className:"absolute bottom-1 right-1 h-7 w-7",size:"icon",variant:"ghost",children:[s.jsx(g,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Toggle password visibility"})]})]}),s.jsx(u.default,{className:"font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",href:"#",children:"Forgot password?"}),s.jsx("div",{className:"flex justify-between items-center",children:s.jsx(l.z,{className:"relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600",type:"submit",children:"Create Account"})}),(0,s.jsxs)("div",{className:"flex items-center justify-between text-sm text-gray-500 dark:text-gray-400",children:[s.jsx(u.default,{className:"font-medium text-gray-1000 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",href:"#",children:"Need help?"}),s.jsx(u.default,{className:"font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",href:"/signIn",children:"Sign In"})]})]})]}),s.jsx("div",{className:"ml-8 hidden rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:block",children:s.jsx(p.default,{alt:"Sign in illustration",className:"aspect-[3/4] object-cover",height:400,src:"/signInImg.jpeg",width:300})})]})})})]})}function g(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}t(9752)},4458:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(326);t(7577);let a=({video:e})=>s.jsx("div",{className:"overflow-hidden absolute inset-0 z-0",children:(0,s.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,className:"overflow-hidden min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:[s.jsx("source",{src:e,type:"video/mp4"}),"Your browser does not support the video tag."]})})},1664:(e,r,t)=>{"use strict";t.d(r,{z:()=>d});var s=t(326),a=t(7577),n=t(4214),o=t(8671),i=t(1223);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...o},d)=>{let c=a?n.g7:"button";return s.jsx(c,{className:(0,i.cn)(l({variant:r,size:t,className:e})),ref:d,...o})});d.displayName="Button"},9752:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>i,SZ:()=>d,Zb:()=>o,aY:()=>c,ll:()=>l});var s=t(326),a=t(7577),n=t(1223);let o=a.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,n.cn)("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",e),...r}));o.displayName="Card";let i=a.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...r}));i.displayName="CardHeader";let l=a.forwardRef(({className:e,...r},t)=>s.jsx("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));l.displayName="CardTitle";let d=a.forwardRef(({className:e,...r},t)=>s.jsx("p",{ref:t,className:(0,n.cn)("text-sm text-gray-500 dark:text-gray-400",e),...r}));d.displayName="CardDescription";let c=a.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,n.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent",a.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter"},1190:(e,r,t)=>{"use strict";t.d(r,{I:()=>o});var s=t(326),a=t(7577),n=t(1223);let o=a.forwardRef(({className:e,type:r,...t},a)=>s.jsx("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",e),ref:a,...t}));o.displayName="Input"},7299:(e,r,t)=>{"use strict";t.d(r,{_:()=>u});var s=t(326),a=t(7577),n=t(5353),o=t(5226);let i=(0,a.forwardRef)((e,r)=>(0,a.createElement)(o.WV.label,(0,n.Z)({},e,{ref:r,onMouseDown:r=>{var t;null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}})));var l=t(8671),d=t(1223);let c=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef(({className:e,...r},t)=>s.jsx(i,{ref:t,className:(0,d.cn)(c(),e),...r}));u.displayName=i.displayName},1223:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(1135),a=t(1009);function n(...e){return(0,a.m6)((0,s.W)(e))}},2029:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>o});var s=t(9510),a=t(5384),n=t.n(a);t(5023);let o={title:"Create Next App",description:"Generated by create next app"};function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:e})})}},7187:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=t(8570);let a=(0,s.createProxy)(String.raw`C:\Users\kalem\OneDrive\Desktop\traq\src\app\signUp\page.jsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`C:\Users\kalem\OneDrive\Desktop\traq\src\app\signUp\page.jsx#default`)},5023:()=>{},6562:(e,r,t)=>{"use strict";/*! js-cookie v3.0.5 | MIT */function s(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)e[s]=t[s]}return e}t.d(r,{Z:()=>a});var a=function e(r,t){function a(e,a,n){if("undefined"!=typeof document){"number"==typeof(n=s({},t,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var i in n)n[i]&&(o+="; "+i,!0!==n[i]&&(o+="="+n[i].split(";")[0]));return document.cookie=e+"="+r.write(a,e)+o}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],s={},a=0;a<t.length;a++){var n=t[a].split("="),o=n.slice(1).join("=");try{var i=decodeURIComponent(n[0]);if(s[i]=r.read(o,i),e===i)break}catch(e){}}return e?s[e]:s}},remove:function(e,r){a(e,"",s({},r,{expires:-1}))},withAttributes:function(r){return e(this.converter,s({},this.attributes,r))},withConverter:function(r){return e(s({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(r)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[935,156,224],()=>t(1038));module.exports=s})();