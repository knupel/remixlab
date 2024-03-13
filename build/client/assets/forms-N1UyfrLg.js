import{r as s,j as o}from"./jsx-runtime-Sh_Ykj9L.js";import{a as H,_ as E}from"./index-rVPpACB_.js";import{a as D,b as S,$ as j,c as w,d as B,e as V}from"./index-ZFFQbiMA.js";import{c as k}from"./misc-c4cT4DYz.js";import{L,I as q}from"./label-Je57Ihep.js";function K(e){return document.forms.namedItem(e)}function F(e,t){var n=e==null?void 0:e.elements.namedItem(t),r=n?n instanceof Element?[n]:Array.from(n.values()):[];return r.filter(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)}function z(e,t,n){var r,i=F(e,t);if(i.length>1){var a=typeof n=="string"?[n]:n;for(var c of i)if(!(typeof a<"u"&&c instanceof HTMLInputElement&&c.type==="checkbox"&&(c.checked?a.includes(c.value):!a.includes(c.value))))return c}return(r=i[0])!==null&&r!==void 0?r:null}function X(e,t,n){var r=document.createElement("select"),i=typeof n=="string"?[n]:n??[];r.name=t,r.multiple=!0,r.dataset.conform="true",r.setAttribute("aria-hidden","true"),r.tabIndex=-1,r.style.position="absolute",r.style.width="1px",r.style.height="1px",r.style.padding="0",r.style.margin="-1px",r.style.overflow="hidden",r.style.clip="rect(0,0,0,0)",r.style.whiteSpace="nowrap",r.style.border="0";for(var a of i)r.options.add(new Option(a,a,!0,!0));return e.appendChild(r),r}function N(e){return e.dataset.conform==="true"}function W(e,t){if(e instanceof HTMLInputElement&&(e.type==="checkbox"||e.type==="radio"))e.checked=Array.isArray(t)?t.includes(e.value):e.value===t;else if(e instanceof HTMLSelectElement&&e.multiple){var n=Array.isArray(t)?[...t]:[t];for(var r of e.options){var i=n.indexOf(r.value),a=i>-1;r.selected=a,a&&n.splice(i,1)}if(N(e))for(var c of n)e.options.add(new Option(c,c,!1,!0))}else if(e.value!==t){var{set:u}=Object.getOwnPropertyDescriptor(e,"value")||{},d=Object.getPrototypeOf(e),{set:f}=Object.getOwnPropertyDescriptor(d,"value")||{};if(f&&u!==f)f.call(e,t);else if(u)u.call(e,t);else throw new Error("The given element does not have a value setter")}}function G(){var e=s.useRef(null),t=s.useRef({change:!1,focus:!1,blur:!1});return s.useEffect(()=>{var n=c=>u=>{var d=e.current;d&&u.target===d&&(t.current[c]=!0)},r=n("change"),i=n("focus"),a=n("blur");return document.addEventListener("input",r,!0),document.addEventListener("focusin",i,!0),document.addEventListener("focusout",a,!0),()=>{document.removeEventListener("input",r,!0),document.removeEventListener("focusin",i,!0),document.removeEventListener("focusout",a,!0)}},[e]),s.useMemo(()=>({change(n){if(!t.current.change){t.current.change=!0;var r=e.current;r&&(W(r,n),r.dispatchEvent(new InputEvent("input",{bubbles:!0})),r.dispatchEvent(new Event("change",{bubbles:!0})))}t.current.change=!1},focus(){if(!t.current.focus){t.current.focus=!0;var n=e.current;n&&(n.dispatchEvent(new FocusEvent("focusin",{bubbles:!0})),n.dispatchEvent(new FocusEvent("focus")))}t.current.focus=!1},blur(){if(!t.current.blur){t.current.blur=!0;var n=e.current;n&&(n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})),n.dispatchEvent(new FocusEvent("blur")))}t.current.blur=!1},register(n){e.current=n}}),[])}function J(e){var t=()=>{var c;return typeof e.initialValue=="string"?e.initialValue:(c=e.initialValue)===null||c===void 0?void 0:c.map(u=>u??"")},[n,r]=s.useState(e.key),[i,a]=s.useState(t);return n!==e.key&&(a(t),r(e.key)),[i,a]}function Q(e){var[t,n]=J(e),r=s.useRef(!1),{register:i,change:a,focus:c,blur:u}=G();return s.useEffect(()=>{var d=K(e.formId);if(!d){console.warn("useInputControl is unable to find form#".concat(e.formId," and identify if a dummy input is required"));return}var f=z(d,e.name);return!f&&typeof t<"u"&&(!Array.isArray(t)||t.length>0)&&(f=X(d,e.name,t)),i(f),r.current?a(t??""):r.current=!0,()=>{i(null);var h=F(d,e.name);for(var l of h)N(l)&&l.remove()}},[e.formId,e.name,t,a,i]),{value:t,change:n,focus:c,blur:u}}function U(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const R="Checkbox",[Y,de]=D(R),[Z,P]=Y(R),ee=s.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:c,disabled:u,value:d="on",onCheckedChange:f,...h}=e,[l,b]=s.useState(null),p=H(t,v=>b(v)),g=s.useRef(!1),I=l?!!l.closest("form"):!0,[m=!1,y]=S({prop:i,defaultProp:a,onChange:f}),_=s.useRef(m);return s.useEffect(()=>{const v=l==null?void 0:l.form;if(v){const $=()=>y(_.current);return v.addEventListener("reset",$),()=>v.removeEventListener("reset",$)}},[l,y]),s.createElement(Z,{scope:n,state:m,disabled:u},s.createElement(j.button,E({type:"button",role:"checkbox","aria-checked":x(m)?"mixed":m,"aria-required":c,"data-state":M(m),"data-disabled":u?"":void 0,disabled:u,value:d},h,{ref:p,onKeyDown:w(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:w(e.onClick,v=>{y($=>x($)?!0:!$),I&&(g.current=v.isPropagationStopped(),g.current||v.stopPropagation())})})),I&&s.createElement(re,{control:l,bubbles:!g.current,name:r,value:d,checked:m,required:c,disabled:u,style:{transform:"translateX(-100%)"}}))}),te="CheckboxIndicator",ne=s.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...i}=e,a=P(te,n);return s.createElement(B,{present:r||x(a.state)||a.state===!0},s.createElement(j.span,E({"data-state":M(a.state),"data-disabled":a.disabled?"":void 0},i,{ref:t,style:{pointerEvents:"none",...e.style}})))}),re=e=>{const{control:t,checked:n,bubbles:r=!0,...i}=e,a=s.useRef(null),c=U(n),u=V(t);return s.useEffect(()=>{const d=a.current,f=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(f,"checked").set;if(c!==n&&l){const b=new Event("click",{bubbles:r});d.indeterminate=x(n),l.call(d,x(n)?!1:n),d.dispatchEvent(b)}},[c,n,r]),s.createElement("input",E({type:"checkbox","aria-hidden":!0,defaultChecked:x(n)?!1:n},i,{tabIndex:-1,ref:a,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function x(e){return e==="indeterminate"}function M(e){return x(e)?"indeterminate":e?"checked":"unchecked"}const O=ee,ae=ne,T=s.forwardRef(({className:e,...t},n)=>o.jsx(O,{ref:n,className:k("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:o.jsx(ae,{className:k("flex items-center justify-center text-current"),children:o.jsx("svg",{viewBox:"0 0 8 8",children:o.jsx("path",{d:"M1,4 L3,6 L7,2",stroke:"currentcolor",strokeWidth:"1",fill:"none"})})})}));T.displayName=O.displayName;const A=s.forwardRef(({className:e,...t},n)=>o.jsx("textarea",{className:k("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-input-invalid",e),ref:n,...t}));A.displayName="Textarea";function C({id:e,errors:t}){const n=t==null?void 0:t.filter(Boolean);return n!=null&&n.length?o.jsx("ul",{id:e,className:"flex flex-col gap-1",children:n.map(r=>o.jsx("li",{className:"text-[10px] text-foreground-destructive",children:r},r))}):null}function le({labelProps:e,inputProps:t,errors:n,className:r}){const i=s.useId(),a=t.id??i,c=n!=null&&n.length?`${a}-error`:void 0;return o.jsxs("div",{className:r,children:[o.jsx(L,{htmlFor:a,...e}),o.jsx(q,{id:a,"aria-invalid":c?!0:void 0,"aria-describedby":c,...t}),o.jsx("div",{className:"min-h-[32px] px-4 pb-3 pt-1",children:c?o.jsx(C,{id:c,errors:n}):null})]})}function fe({labelProps:e,textareaProps:t,errors:n,className:r}){const i=s.useId(),a=t.id??t.name??i,c=n!=null&&n.length?`${a}-error`:void 0;return o.jsxs("div",{className:r,children:[o.jsx(L,{htmlFor:a,...e}),o.jsx(A,{id:a,"aria-invalid":c?!0:void 0,"aria-describedby":c,...t}),o.jsx("div",{className:"min-h-[32px] px-4 pb-3 pt-1",children:c?o.jsx(C,{id:c,errors:n}):null})]})}function ve({labelProps:e,buttonProps:t,errors:n,className:r}){const{key:i,defaultChecked:a,...c}=t,u=s.useId(),d=t.value??"on",f=Q({key:i,name:t.name,formId:t.form,initialValue:a?d:void 0}),h=t.id??u,l=n!=null&&n.length?`${h}-error`:void 0;return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"flex gap-2",children:[o.jsx(T,{...c,id:h,"aria-invalid":l?!0:void 0,"aria-describedby":l,checked:f.value===d,onCheckedChange:b=>{var p;f.change(b.valueOf()?d:""),(p=t.onCheckedChange)==null||p.call(t,b)},onFocus:b=>{var p;f.focus(),(p=t.onFocus)==null||p.call(t,b)},onBlur:b=>{var p;f.blur(),(p=t.onBlur)==null||p.call(t,b)},type:"button"}),o.jsx("label",{htmlFor:h,...e,className:"self-center text-body-xs text-muted-foreground"})]}),o.jsx("div",{className:"px-4 pb-3 pt-1",children:l?o.jsx(C,{id:l,errors:n}):null})]})}export{ve as C,C as E,le as F,fe as T,A as a};
//# sourceMappingURL=forms-N1UyfrLg.js.map