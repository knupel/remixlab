import{j as r}from"./jsx-runtime-Sh_Ykj9L.js";import{F as a,E as d}from"./forms-N1UyfrLg.js";import{B as p}from"./button-P80Fawty.js";import{I as l}from"./icon-A96BYhEN.js";import{S as u}from"./status-button-90R1EB0H.js";import{u as c}from"./misc-c4cT4DYz.js";import{a as w}from"./user-validation-jMhO3qPJ.js";import{a as f,L as P}from"./components-_HPsJqfq.js";import{u as h,g as x,a as e}from"./helpers-wg4fqsUl.js";import{g}from"./constraint-zXtMoCF6.js";import{p as j}from"./parse-k_gbqDJY.js";import{F as C}from"./index-HdLrP6Fo.js";import"./index-rVPpACB_.js";import"./index-ZFFQbiMA.js";import"./label-Je57Ihep.js";import"./tooltip-mNaDE02G.js";import"./index-_I1O5d5t.js";const V={breadcrumb:r.jsx(l,{name:"dots-horizontal",children:"Password"}),getSitemapEntries:()=>null},i=w;function W(){const t=f(),m=c(),[s,o]=h({id:"password-create-form",constraint:g(i),lastResult:t==null?void 0:t.result,onValidate({formData:n}){return j(n,{schema:i})},shouldRevalidate:"onBlur"});return r.jsxs(C,{method:"POST",...x(s),className:"mx-auto max-w-md",children:[r.jsx(a,{labelProps:{children:"New Password"},inputProps:{...e(o.password,{type:"password"}),autoComplete:"new-password"},errors:o.password.errors}),r.jsx(a,{labelProps:{children:"Confirm New Password"},inputProps:{...e(o.confirmPassword,{type:"password"}),autoComplete:"new-password"},errors:o.confirmPassword.errors}),r.jsx(d,{id:s.errorId,errors:s.errors}),r.jsxs("div",{className:"grid w-full grid-cols-2 gap-6",children:[r.jsx(p,{variant:"secondary",asChild:!0,children:r.jsx(P,{to:"..",children:"Cancel"})}),r.jsx(u,{type:"submit",status:m?"pending":s.status??"idle",children:"Create Password"})]})]})}export{W as default,V as handle};
//# sourceMappingURL=profile.password_.create-l99ilgAl.js.map
