(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),s=n.n(c),a=n(19),o=n.n(a),i=n(14),l=n(13),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PHOTOS":return t.photos;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.errors;default:return e}},d=n(40),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,h=Object(l.e)(Object(l.c)({photos:u,errors:j}),p(Object(l.a)(d.a)));h.subscribe((function(){console.log(h.getState())}));var b=h,O=n(17),f=n(6),m=function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"Photo Gallery App"}),Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)(O.b,{to:"/",className:"link",children:"Home"}),Object(r.jsx)(O.b,{to:"/gallery",className:"link",children:"Gallery"})]})]})},x=n(15),g=n(74),v=n(76),y=n(18),_=n.n(y),N=n(27),E=n(28),S=n.n(E),w="http://localhost:3300",k=function(e){return{type:"GET_ERRORS",errors:e}},T=function(e){return{type:"LOAD_PHOTOS",photos:e}},P=Object(i.b)((function(e){return{photos:e.photos||[],errors:e.errors||{}}}))((function(e){var t=e.errors,n=e.dispatch,a=Object(c.useState)(null),o=Object(x.a)(a,2),i=o[0],l=o[1],u=Object(c.useState)(!1),j=Object(x.a)(u,2),d=j[0],p=j[1],h=Object(c.useState)(null),b=Object(x.a)(h,2),O=b[0],f=b[1];Object(c.useEffect)((function(){f(t)}),[t]),Object(c.useEffect)((function(){f("")}),[]);return Object(r.jsxs)(s.a.Fragment,{children:[O&&O.upload_error?Object(r.jsx)("p",{className:"errorMsg centered-message",children:O.upload_error}):d&&Object(r.jsx)("p",{className:"successMsg centered-message",children:"Photo uploaded successfully."}),Object(r.jsxs)(g.a,{onSubmit:function(e){e.preventDefault(),i&&(f(""),n(function(e){return function(){var t=Object(N.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(r=new FormData).append("photo",e),t.next=5,S.a.post("".concat(w,"/photos"),r,{headers:{"Content-Type":"multipart/form-data"}});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&n(k(t.t0.response.data));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(i)),p(!0))},method:"post",encType:"multipart/form-data",className:"upload-form",children:[Object(r.jsxs)(g.a.Group,{children:[Object(r.jsx)(g.a.Label,{children:"Choose photo to upload"}),Object(r.jsx)(g.a.Control,{type:"file",name:"photo",onChange:function(e){var t=e.target.files[0];l(t)}})]}),Object(r.jsx)(v.a,{variant:"primary",type:"submit",className:"".concat(i?"submit-btn":"disabled submit-btn"),disabled:!i,children:"Upload"})]})]})})),R=function(){return Object(r.jsx)("div",{className:"home-page",children:Object(r.jsx)(P,{})})},D=n(75),C=function(e){var t=e.id;return Object(r.jsx)(D.a,{className:"photo",children:Object(r.jsx)(D.a.Img,{variant:"top",src:"".concat(w,"/photos/").concat(t),alt:"Photo"})})},G=Object(i.b)((function(e){return{photos:e.photos||[],errors:e.errors||{}}}))((function(e){var t=e.errors,n=e.photos,s=e.dispatch,a=Object(c.useState)(!1),o=Object(x.a)(a,2),i=o[0],l=o[1];return Object(c.useEffect)((function(){l(!0),s(function(){var e=Object(N.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(w,"/photos"));case 3:n=e.sent,t(T(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&t(k(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.useEffect)((function(){n.length>0&&l(!1)}),[n]),Object(r.jsxs)("div",{className:"photos-list",children:[t&&t.get_error&&Object(r.jsx)("p",{className:"errorMsg centered-message",children:t.get_error}),i?Object(r.jsx)("div",{className:"loading-msg centered-message",children:"Loading..."}):n.map((function(e){return Object(r.jsx)(C,{id:e._id},e._id)}))]})})),L=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:"Page not found"})})},M=function(){return Object(r.jsx)(O.a,{basename:"/",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsx)("div",{className:"main-content",children:Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{component:R,path:"/",exact:!0}),Object(r.jsx)(f.a,{component:G,path:"/gallery"}),Object(r.jsx)(f.a,{component:L})]})})]})})};n(71),n(72);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(i.a,{store:b,children:Object(r.jsx)(M,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.2471cb20.chunk.js.map