(this["webpackJsonpportfolio-web"]=this["webpackJsonpportfolio-web"]||[]).push([[0],{134:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(35),c=n.n(i),r=(n(134),n(24)),o=n(43),l=n(45),d=n(13),m=n(58),b=n(1),u=function(e){var t=e.name,n=e.isActive?"text-tangerine-500":"text-white";return Object(b.jsx)("div",{className:"relative inline-block my-2 text-3xl font-extrabold ".concat(n," uppercase cursor-pointer underline-animate transition duration-500 ease-in-out"),children:t})},g=n(270),j=n(271),h=function(e){var t=e.name,n=function(){window.open("https://www.google.com","_blank")},s={gitHub:Object(b.jsx)(g.a,{onClick:n}),linkedin:Object(b.jsx)(j.a,{onClick:n})};return Object(b.jsx)("button",{name:t,type:"button",className:"p-2 mr-2 rounded-full ring-4 ring-tangerine-500 ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out",children:s[t]})},p=function(e){var t=e.routes,n=Object(d.e)();return Object(b.jsxs)("nav",{className:"flex-col justify-between hidden h-full p-4 bg-blue-500 lg:flex",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"mb-12",children:Object(b.jsxs)("div",{className:"inline-block text-4xl font-extrabold text-white uppercase",children:["tyler",Object(b.jsx)("br",{}),"schumacher"]})}),Object(b.jsx)("div",{children:t.map((function(e){var t=e.name,s=e.path;return Object(b.jsxs)(m.a,{"data-testid":"".concat(t,"-link"),smooth:!0,to:s,children:[Object(b.jsx)(u,{name:t,isActive:n.hash===s}),Object(b.jsx)("br",{})]},t)}))})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{name:"gitHub"}),Object(b.jsx)(h,{name:"linkedin"})]})]})},x=n(10),f=n(272),v=function(e){var t=e.routes,n=Object(s.useState)(!1),a=Object(x.a)(n,2),i=a[0],c=a[1],r=Object(d.e)(),o=i?"h-full":"h-0";return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"fixed top-0 z-20 w-full px-2  pt-4 pb-5  bg-blue-500 lg:hidden ",children:Object(b.jsxs)("div",{className:"container flex items-center mx-auto",children:[Object(b.jsx)("div",{className:"flex justify-start w-full font-extrabold text-white",children:Object(b.jsx)("a",{className:"text-white no-underline hover:text-white hover:no-underline",href:"/",children:Object(b.jsx)("span",{className:"pl-2 text-2xl",children:"Tyler Schumacher"})})}),Object(b.jsx)("div",{className:"z-50 flex content-center justify-end",children:Object(b.jsx)("button",{type:"button",className:"",children:Object(b.jsx)(f.a,{size:34,toggled:i,toggle:function(){return c(!i)}})})}),Object(b.jsx)("div",{className:"flex items-center justify-center align-center fixed top-0 left-0 z-30 w-full ".concat(o," overflow-y-hidden bg-blue-500 transition-height duration-500 ease-in-out"),children:Object(b.jsx)("div",{className:"-mt-10 text-center",children:t.map((function(e){var t=e.name,n=e.path;return Object(b.jsxs)(m.a,{"data-testid":"".concat(t,"-link"),smooth:!0,to:n,onClick:function(){return c(!1)},children:[Object(b.jsx)(u,{name:t,isActive:r.hash===n}),Object(b.jsx)("br",{})]},t)}))})})]})})})},O=n(114),w=n.n(O),k=function(){return Object(b.jsx)("div",{className:"p-4 text-center text-black bg-white",children:"Copyright \xa9 2021 Tyler Schumacher. All rights reserved."})},y={particle:{particleCount:100,color:"#ffb75f",minSize:2,maxSize:4},velocity:{directionAngle:0,directionAngleVariance:30,minSpeed:.2,maxSpeed:2},opacity:{minOpacity:0,maxOpacity:.5,opacityTransitionTime:5e3}},N=function(e){var t=e.children;return Object(b.jsxs)("div",{className:"w-full overflow-auto",children:[Object(b.jsx)(w.a,{className:"absolute z-0",settings:y}),Object(b.jsxs)("div",{className:"relative w-full",children:[Object(b.jsx)("div",{className:"container w-full p-4 mx-auto",children:Object(b.jsx)("div",{className:"relative z-10 h-full",children:t})}),Object(b.jsx)(k,{})]})]})},S=n(119),z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(s.useState)(!1),a=Object(x.a)(n,2),i=a[0],c=a[1];return Object(s.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(x.a)(e,1)[0];c(t.isIntersecting)}),{rootMargin:t});return(null===e||void 0===e?void 0:e.current)&&n.observe(e.current),function(){(null===e||void 0===e?void 0:e.current)&&n.unobserve(e.current)}}),[]),i},T=function(e){var t=e.children,n=e.name,a=e.id,i=Object(s.useState)("#".concat(n)),c=Object(x.a)(i,1)[0],r=Object(s.useRef)(),o=z(r),l=Object(d.e)(),m=Object(S.a)(),u=Object(d.d)();Object(s.useLayoutEffect)((function(){o&&l.hash.includes(c)||o&&!l.hash?u.push(c):!o&&l.hash.includes(c)&&u.push("/")}),[c,u,l.hash,o]);var g=m<1024;return Object(b.jsxs)(b.Fragment,{children:[g?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:a,className:"h-2"}),Object(b.jsx)("div",{className:"h-20"})]}):null,Object(b.jsxs)("div",{id:g?"":a,className:"flex flex-col items-center mb-60",children:[Object(b.jsxs)("div",{ref:r,className:"w-full mb-10",children:[Object(b.jsx)("div",{className:"h-1 w-9 bg-tangerine-500"}),Object(b.jsx)("div",{className:"text-2xl font-extrabold text-black uppercase",children:n})]}),Object(b.jsx)("div",{className:"w-full p-6 text-black bg-white shadow-xl rounded-xl",children:t})]})]})},C=n.p+"static/media/avatar-hex.ed80e090.png",I=function(){return Object(b.jsxs)("div",{className:"h-screen grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-1 md:gap-0 lg:gap-12",children:[Object(b.jsx)("div",{className:"flex items-center col-span-2",children:Object(b.jsx)("img",{src:C,alt:"Tyler Schumacher",className:"flex items-center justify-center mx-auto"})}),Object(b.jsxs)("div",{className:"flex flex-col justify-center text-black col-span-4",children:[Object(b.jsxs)("div",{className:"mb-4 text-3xl",children:["Hello there, I am"," ",Object(b.jsx)("span",{className:"text-tangerine-500",children:"Tyler Schumacher"})]}),Object(b.jsxs)("p",{className:"mb-2 text-xl ",children:["I'm a"," ",Object(b.jsx)("span",{className:"text-tangerine-500",children:"full stack web developer "}),"passionate about creating beautiful UIs, intuitive UX patterns, and scalable backends."]})]})]})},E=function(){return Object(b.jsxs)("div",{className:"text-lg",children:[Object(b.jsx)("p",{className:"pb-4",children:"My name is Tyler Schumacher, I am a full stack web developer, with over 6 years of experience. I\u2019ve worked for primarily for large financial institutions and fintech companies creating both public facing web application and internal tooling, while keep working on side projects on my own time."}),Object(b.jsx)("p",{children:"I focus on working with creating UI's that look beautiful and UX's patterns that make sense, while working with realtime data. Also creating server side code that is scalable and powerful."})]})},F=function(e){var t=e.item;return Object(b.jsxs)("a",{title:t.name,className:"flex flex-col items-center justify-around p-3 text-center bg-gray-100 border-2 border-gray-300 hover:shadow-xl rounded-xl hover:bg-tangerine-500 transition duration-500 ease-in-out",type:"button",href:t.link,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{className:"w-12 pb-2",src:t.image,alt:t.name}),Object(b.jsx)("span",{className:"font-bold",children:t.name})]})},L=function(e){var t=e.items;return Object(b.jsx)("div",{className:"container mx-auto",children:Object(b.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",children:t.map((function(e){return Object(b.jsx)(F,{item:e},e.name)}))})})},M=n.p+"static/media/books.426ae468.png",R=n.p+"static/media/bass.ab19fa38.png",A=n.p+"static/media/gaming.5bcde3b4.png",U=[{name:"Books",image:M,link:"https://en.wikipedia.org/wiki/Book"},{name:"Bass Guitar",image:R,link:"https://en.wikipedia.org/wiki/Bass_guitar"},{name:"Motorcycles",image:n.p+"static/media/motorcycles.58fa965a.png",link:"https://en.wikipedia.org/wiki/Motorcycle"},{name:"Motocross",image:n.p+"static/media/motocross.41ee39f0.png",link:"https://en.wikipedia.org/wiki/Motocross"},{name:"Snowmobiles",image:n.p+"static/media/snowmobiles.60dd4859.png",link:"https://en.wikipedia.org/wiki/Snowmobile"},{name:"Gaming",image:A,link:"https://en.wikipedia.org/wiki/Video_game"}],q=function(){return Object(b.jsx)(L,{items:U})},_=function(){return Object(b.jsx)("div",{children:"coming soon"})},B=[{name:"HTML5",image:"https://cdn.worldvectorlogo.com/logos/html-1.svg",link:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"},{name:"CSS3",image:"https://cdn.worldvectorlogo.com/logos/css-3.svg",link:"https://developer.mozilla.org/en-US/docs/Glossary/CSS"},{name:"Typescript",image:"https://cdn.worldvectorlogo.com/logos/typescript.svg",link:"https://www.typescriptlang.org/"},{name:"React",image:"https://cdn.worldvectorlogo.com/logos/react-2.svg",link:"https://reactjs.org/"},{name:"Sass",image:"https://cdn.worldvectorlogo.com/logos/sass-1.svg",link:"https://sass-lang.com/"},{name:"Tailwind CSS",image:"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",link:"https://tailwindcss.com/"},{name:"NodeJS",image:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",link:"https://nodejs.org/en/"},{name:"REST API",image:"https://everything1know.files.wordpress.com/2019/09/rest-icon-200x196-1.png",link:"https://developer.mozilla.org/en-US/docs/Glossary/REST"},{name:"GraphQL",image:"https://cdn.worldvectorlogo.com/logos/graphql.svg",link:"https://graphql.org/"},{name:"PostgreSQL",image:"https://cdn.worldvectorlogo.com/logos/postgresql.svg",link:"https://www.postgresql.org/"},{name:"MongoDB",image:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",link:"https://www.mongodb.com/"},{name:"Elasticsearch",image:"https://cdn.worldvectorlogo.com/logos/elastic-elasticsearch.svg",link:"https://www.elastic.co/"},{name:"Windows",image:"https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",link:"https://www.microsoft.com/en-us/windows"},{name:"Linux",image:n.p+"static/media/linux.24a26a2e.png",link:"https://www.linux.org/"},{name:"Rust",image:"https://cdn.worldvectorlogo.com/logos/rust.svg",link:"https://www.rust-lang.org/"},{name:"React Testing Library",image:"https://testing-library.com/img/logo-large.png",link:"https://testing-library.com/"},{name:"Jest",image:"https://nx.dev/documentation/latest/shared/jest-logo.png",link:"https://jestjs.io/"},{name:"Git",image:"https://cdn.worldvectorlogo.com/logos/git-icon.svg",link:"https://git-scm.com/"}],G=function(){return Object(b.jsx)(L,{items:B})},P=n(9),H=n(120),J=n(30),Q=n(121),D=n(38),V=function(e){var t=e.message;return Object(b.jsx)("p",{className:"text-red-400","data-testid":"field-error-message",children:t?t.charAt(0).toUpperCase()+t.slice(1):""})};V.defaultProps={message:""};var X=V,W=n(4),K=n(15),Y=n(16),Z=n(118),$=n.n(Z),ee=["name","email"],te=new(function(e){Object(K.a)(n,e);var t=Object(Y.a)(n);function n(){var e;return Object(W.a)(this,n),(e=t.call(this,"https://tyler-schumacher-portfolio-api.herokuapp.com/rest")).sendEmail=function(t){return e.instance.post("/send-email",t)},e}return n}((function e(t){var n=this;Object(W.a)(this,e),this.instance=void 0,this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n.handleError)},this._handleResponse=function(e){return e.data},this.handleError=function(e){return Promise.reject(e)},this.instance=$.a.create({baseURL:t}),this._initializeResponseInterceptor()}))),ne=D.a().shape({name:D.b().required(),email:D.b().email().required(),subject:D.b().required(),text:D.b().required()}),se=function(){var e,t,n,s,a=Object(J.d)({resolver:Object(Q.a)(ne)}),i=a.register,c=a.formState.errors,r=a.handleSubmit,d=a.reset,m=a.setError,u=Object(o.useMutation)(te.sendEmail,{onSuccess:function(){l.b.success("Email sent successfully!",{position:"bottom-right"}),d()},onError:function(e){l.b.error(e.message,{position:"bottom-right"}),e.toString().includes("400")&&m("email",{type:"manual",message:"This email address failed validation"},{shouldFocus:!0})}}),g=u.mutate,j=u.isLoading;return Object(b.jsxs)("form",{className:"w-full max-w-4xl mx-auto",onSubmit:r((function(e){var t=function(e){e.name;var t=e.email,n=Object(H.a)(e,ee);return Object(P.a)(Object(P.a)({},n),{},{from:t,subject:"".concat(e.name," - ").concat(e.subject),to:"tyler.schumacher@protonmail.com"})}(e);return g(t)})),children:[Object(b.jsxs)("div",{className:"flex flex-wrap mb-6 -mx-3",children:[Object(b.jsxs)("div",{className:"w-full pr-3 mb-6 md:w-1/2 md:mb-0",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold tracking-wide capitalize",htmlFor:"form-name",children:["name",Object(b.jsx)("input",Object(P.a)(Object(P.a)({},i("name")),{},{"data-testid":"form-input-name",className:"block w-full py-3 pr-3 mt-2 mb-3 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input",id:"form-name",type:"text"}))]}),(null===(e=c.name)||void 0===e?void 0:e.message)?Object(b.jsx)(X,{message:c.name.message}):null]}),Object(b.jsxs)("div",{className:"w-full pl-3 md:w-1/2",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold tracking-wide capitalize",htmlFor:"form-email",children:["email",Object(b.jsx)("input",Object(P.a)(Object(P.a)({},i("email")),{},{"data-testid":"form-input-email",className:"block w-full py-3 pl-3 mt-2 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input",id:"form-email",type:"email"}))]}),(null===(t=c.email)||void 0===t?void 0:t.message)?Object(b.jsx)(X,{message:c.email.message}):null]})]}),Object(b.jsx)("div",{className:"flex flex-wrap mb-6 -mx-3",children:Object(b.jsxs)("div",{className:"w-full",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold tracking-wide capitalize",htmlFor:"form-subject",children:["subject",Object(b.jsx)("input",Object(P.a)(Object(P.a)({},i("subject")),{},{"data-testid":"form-input-subject",className:"block w-full py-3 mt-2 mb-3 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input",id:"form-subject",type:"text"}))]}),(null===(n=c.subject)||void 0===n?void 0:n.message)?Object(b.jsx)(X,{message:c.subject.message}):null]})}),Object(b.jsx)("div",{className:"flex flex-wrap mb-2 -mx-3",children:Object(b.jsxs)("div",{className:"w-full mb-6",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold capitalize tracking-wid e",htmlFor:"form-message",children:["message",Object(b.jsx)("textarea",Object(P.a)(Object(P.a)({},i("text")),{},{"data-testid":"form-input-message",id:"form-message",className:"block w-full py-3 mt-2 leading-tight text-black border border-gray-200 rounded appearance-none resize transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-textarea",rows:10}))]}),(null===(s=c.text)||void 0===s?void 0:s.message)?Object(b.jsx)(X,{message:c.text.message}):null]})}),Object(b.jsx)("button",{"data-testid":"form-submit-button",disabled:j,type:"submit",className:"float-right w-full px-6 py-3 text-base font-bold text-white rounded-lg focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none bg-tangerine-500 hover:bg-tangerine-600 duration-200",children:j?Object(b.jsx)("div",{className:"flex items-center justify-center pr-4",children:Object(b.jsx)("div",{className:"w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin"})}):"Send"})]})},ae=(n(263),n(264),[{name:"about",path:"#about",component:E},{name:"skills",path:"#skills",component:G},{name:"interests",path:"#interests",component:q},{name:"projects",path:"#projects",component:_},{name:"contact",path:"#contact",component:se}]),ie=new o.QueryClient,ce=function(){return Object(b.jsxs)(o.QueryClientProvider,{client:ie,children:[Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"flex h-full",children:[Object(b.jsx)(v,{routes:ae}),Object(b.jsx)(p,{routes:ae}),Object(b.jsx)(N,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{}),ae.map((function(e){var t=e.name,n=e.path,s=e.component;return Object(b.jsx)(T,{id:n.replace("#",""),name:t,children:Object(b.jsx)(s,{})},t)}))]})})]})}),Object(b.jsx)(l.a,{})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,273)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ce,{})}),document.getElementById("root")),re()}},[[265,1,2]]]);
//# sourceMappingURL=main.f3195219.chunk.js.map