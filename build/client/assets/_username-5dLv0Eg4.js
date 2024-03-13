import{j as e}from"./jsx-runtime-Sh_Ykj9L.js";import{G as m}from"./error-boundary-s-7uL-dj.js";import{S as c}from"./spacer-HzAknbkR.js";import{B as i}from"./button-P80Fawty.js";import{I as d}from"./icon-A96BYhEN.js";import{g as x}from"./misc-c4cT4DYz.js";import{a as u}from"./user-8GWnie8l.js";import{b as p,L as o}from"./components-_HPsJqfq.js";import{F as f}from"./index-HdLrP6Fo.js";import"./hub-A-poxTxS.js";import"./index-rVPpACB_.js";function S(){var l;const s=p(),r=s.user,t=r.name??r.username,n=u(),a=s.user.id===(n==null?void 0:n.id);return e.jsxs("div",{className:"container mb-48 mt-36 flex flex-col items-center justify-center",children:[e.jsx(c,{size:"4xs"}),e.jsxs("div",{className:"container flex flex-col items-center rounded-3xl bg-muted p-12",children:[e.jsx("div",{className:"relative w-52",children:e.jsx("div",{className:"absolute -top-40",children:e.jsx("div",{className:"relative",children:e.jsx("img",{src:x((l=s.user.image)==null?void 0:l.id),alt:t,className:"h-52 w-52 rounded-full object-cover"})})})}),e.jsx(c,{size:"sm"}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4",children:e.jsx("h1",{className:"text-center text-h2",children:t})}),e.jsxs("p",{className:"mt-2 text-center text-muted-foreground",children:["Joined ",s.userJoinedDisplay]}),a?e.jsx(f,{action:"/logout",method:"POST",className:"mt-3",children:e.jsx(i,{type:"submit",variant:"link",size:"pill",children:e.jsx(d,{name:"exit",className:"scale-125 max-md:scale-150",children:"Logout"})})}):null,e.jsx("div",{className:"mt-10 flex gap-4",children:a?e.jsxs(e.Fragment,{children:[e.jsx(i,{asChild:!0,children:e.jsx(o,{to:"notes",prefetch:"intent",children:"My notes"})}),e.jsx(i,{asChild:!0,children:e.jsx(o,{to:"/settings/profile",prefetch:"intent",children:"Edit profile"})})]}):e.jsx(i,{asChild:!0,children:e.jsxs(o,{to:"notes",prefetch:"intent",children:[t,"'s notes"]})})})]})]})]})}const z=({data:s,params:r})=>{const t=(s==null?void 0:s.user.name)??r.username;return[{title:`${t} | Epic Notes`},{name:"description",content:`Profile of ${t} on Epic Notes`}]};function C(){return e.jsx(m,{statusHandlers:{404:({params:s})=>e.jsxs("p",{children:['No user with the username "',s.username,'" exists']})}})}export{C as ErrorBoundary,S as default,z as meta};
//# sourceMappingURL=_username-5dLv0Eg4.js.map