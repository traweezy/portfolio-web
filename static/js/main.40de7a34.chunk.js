(this["webpackJsonpportfolio-web"]=this["webpackJsonpportfolio-web"]||[]).push([[0],{21:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(14),r=n.n(a),o=(n(21),n(10)),s=n(2),l=n(15),j=n.n(l),b=n(1),d=function(e){var t=e.name,n=e.isActive?"text-tangerine":"text-black";return Object(b.jsx)("div",{className:"relative inline-block my-2 text-3xl font-extrabold ".concat(n," uppercase cursor-pointer underline-animate transition duration-500 ease-in-out"),children:t})},u=n(35),p=function(e){var t=e.name;return Object(b.jsxs)("button",{type:"button",className:"p-2 rounded-full ring-4 ring-tangerine ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out",children:[t,Object(b.jsx)(u.a,{onClick:function(){window.open("https://www.google.com","_blank")}})]})},x=function(e){var t=e.routes,n=Object(s.f)();return Object(b.jsxs)("div",{className:"h-full p-4",children:[Object(b.jsx)("div",{className:"mb-12",children:Object(b.jsxs)("div",{className:"inline-block text-4xl font-extrabold text-black uppercase",children:["tyler",Object(b.jsx)("br",{}),"schumacher"]})}),Object(b.jsx)("div",{children:t.map((function(e){var t=e.name,c=e.path;return Object(b.jsxs)(o.b,{"data-testid":"".concat(t,"-link"),to:c,children:[Object(b.jsx)(d,{name:t,isActive:n.pathname===c}),Object(b.jsx)("br",{})]},t)}))}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{name:"marklar"})})]})},m={particle:{particleCount:100,color:"#ffb75f",minSize:2,maxSize:4},velocity:{directionAngle:0,directionAngleVariance:30,minSpeed:.2,maxSpeed:2},opacity:{minOpacity:0,maxOpacity:.5,opacityTransitionTime:5e3}},h=[{name:"about",path:"/",exact:!0,component:function(){return Object(b.jsx)("h2",{children:"About"})}},{name:"projects",path:"/projects",exact:!0,component:function(){return Object(b.jsx)("h2",{children:"Projects"})}},{name:"contact",path:"/contact",exact:!0,component:function(){return Object(b.jsx)("h2",{children:"Contact"})}}],O=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"flex h-full",children:[Object(b.jsx)("div",{className:"border-r-2 border-black w-80 md:col-span-3 lg:col-span-1p",children:Object(b.jsx)(x,{routes:h})}),Object(b.jsxs)("div",{className:"w-full",children:[Object(b.jsx)(s.c,{children:h.map((function(e){var t=e.name,n=e.path,c=e.exact,i=e.component;return Object(b.jsx)(s.a,{path:n,exact:c,children:Object(b.jsx)(i,{})},t)}))}),Object(b.jsx)(j.a,{settings:m})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.40de7a34.chunk.js.map