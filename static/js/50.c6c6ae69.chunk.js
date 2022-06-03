"use strict";(self.webpackChunkgoit_react_hw_08_contacts=self.webpackChunkgoit_react_hw_08_contacts||[]).push([[50],{50:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(885),a=n(2791),o=n(9434),i=n(8724),s=n(1614),u=n(4708),d=n(6747),l=n(37),c=n(6072),m=n(7107),f=n(7012),h=n(184);function p(){var e=(0,o.I0)(),t=(0,a.useState)(""),n=(0,r.Z)(t,2),p=n[0],x=n[1],v=(0,a.useState)(""),b=(0,r.Z)(v,2),g=b[0],Z=b[1],S=(0,a.useState)(""),W=(0,r.Z)(S,2),k=W[0],y=W[1],C=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return x(r);case"email":return Z(r);case"password":return y(r);default:return}},w=(0,m.Z)();return(0,h.jsx)(f.Z,{theme:w,children:(0,h.jsxs)(s.Z,{component:"main",maxWidth:"xs",children:[(0,h.jsx)(u.ZP,{}),(0,h.jsxs)(d.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsx)("h1",{children:" Create Account"}),(0,h.jsxs)(d.Z,{component:"form",onSubmit:function(t){t.preventDefault(),e((0,i.z2)({name:p,email:g,password:k})),x(""),Z(""),y("")},autoComplete:"off",oValidate:!0,sx:{mt:1},children:[(0,h.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,value:p,onChange:C}),(0,h.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:g,onChange:C}),(0,h.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:k,onChange:C}),(0,h.jsx)(c.Z,{color:"secondary",type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Create Account"})]})]})]})})}},1614:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(4942),a=n(3366),o=n(7462),i=n(2791),s=n(8182),u=n(7312),d=n(1217),l=n(4419),c=n(7078),m=(0,n(4046).ZP)(),f=n(5080),h=n(184),p=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,f.Z)(),v=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:x})},g=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,u.Z)(String(o))),r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(i,(function(e){return(0,d.Z)(t,e)}),n)};var Z=n(4036),S=n(6934),W=n(1402),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,u=e.useThemeProps,d=void 0===u?b:u,l=e.componentName,c=void 0===l?"MuiContainer":l,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),f=i.forwardRef((function(e,t){var n=d(e),r=n.className,i=n.component,u=void 0===i?"div":i,l=n.disableGutters,f=void 0!==l&&l,x=n.fixed,v=void 0!==x&&x,b=n.maxWidth,Z=void 0===b?"lg":b,S=(0,a.Z)(n,p),W=(0,o.Z)({},n,{component:u,disableGutters:f,fixed:v,maxWidth:Z}),k=g(W,c);return(0,h.jsx)(m,(0,o.Z)({as:u,ownerState:W,className:(0,s.Z)(k.root,r),ref:t},S))}));return f}({createStyledComponent:(0,S.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,W.Z)({props:e,name:"MuiContainer"})}}),y=k},4708:function(e,t,n){var r=n(7462),a=n(2791),o=n(1402),i=n(5502),s=n(184),u=function(e,t){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode})},d=function(e){return(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,o.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,l=t.enableColorScheme,c=void 0!==l&&l;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(i.Z,{styles:function(e){return function(e){var t,n,a={html:u(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},d(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o=null==(t=e.components)||null==(n=t.MuiCssBaseline)?void 0:n.styleOverrides;return o&&(a=[a,o]),a}(e,c)}}),n]})}},7012:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2791),a=n(7462),o=n(8023),i=n(9598),s="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",u=n(184);var d=function(e){var t=e.children,n=e.theme,d=(0,i.Z)(),l=r.useMemo((function(){var e=null===d?n:function(e,t){return"function"===typeof t?t(e):(0,a.Z)({},e,t)}(d,n);return null!=e&&(e[s]=null!==d),e}),[n,d]);return(0,u.jsx)(o.Z.Provider,{value:l,children:t})},l=n(1688),c=n(3459);function m(e){var t=(0,c.Z)();return(0,u.jsx)(l.T.Provider,{value:"object"===typeof t?t:{},children:e.children})}var f=function(e){var t=e.children,n=e.theme;return(0,u.jsx)(d,{theme:n,children:(0,u.jsx)(m,{children:t})})}}}]);
//# sourceMappingURL=50.c6c6ae69.chunk.js.map