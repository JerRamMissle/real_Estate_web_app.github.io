(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{9916:(e,t,r)=>{"use strict";var o=r(1484),n=r(5442),i=r(884),l=r(2441),s=r(8743);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});var a=r(7677),c=r(4848),u=a._(r(6540)),d=a._(r(9626)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var h={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},y=function(e){i(a,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=s(a);return e=t?Reflect.construct(r,arguments,s(this).constructor):r.apply(this,arguments),l(this,e)});function a(){return o(this,a),r.apply(this,arguments)}return n(a,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,o=this.props.title||f[t]||"An unexpected error has occurred";return(0,c.jsxs)("div",{style:h.error,children:[(0,c.jsx)(d.default,{children:(0,c.jsx)("title",{children:t?t+": "+o:"Application error: a client-side exception has occurred"})}),(0,c.jsxs)("div",{style:h.desc,children:[(0,c.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,c.jsx)("h1",{className:"next-error-h1",style:h.h1,children:t}):null,(0,c.jsx)("div",{style:h.wrap,children:(0,c.jsxs)("h2",{style:h.h2,children:[this.props.title||t?o:(0,c.jsx)(c.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}]),a}(u.default.Component);y.displayName="ErrorPage",y.getInitialProps=p,y.origGetInitialProps=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6194:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(9916)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6194)),_N_E=e.O()}]);