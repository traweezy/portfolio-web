(this["webpackJsonpportfolio-web"]=this["webpackJsonpportfolio-web"]||[]).push([[0],{135:function(e,t,s){},266:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),a=s(38),c=s.n(a),r=(s(135),s(27)),o=s(34),l=s(36),d=s(13),m=s(60),b=s(1),u=function(e){var t=e.name,s=e.isActive?"text-tangerine-500":"text-white";return Object(b.jsx)("div",{className:"relative inline-block my-2 text-3xl font-extrabold ".concat(s," uppercase cursor-pointer underline-animate transition duration-500 ease-in-out"),children:t})},j=s(271),g=s(272),p=function(e){var t=e.name,s=function(){window.open("https://www.google.com","_blank")},n={gitHub:Object(b.jsx)(j.a,{onClick:s}),linkedin:Object(b.jsx)(g.a,{onClick:s})};return Object(b.jsx)("button",{name:t,type:"button",className:"p-2 mr-2 rounded-full ring-4 ring-tangerine-500 ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out",children:n[t]})},h=function(e){var t=e.routes,s=Object(d.e)();return Object(b.jsxs)("nav",{className:"flex-col justify-between hidden h-full p-4 bg-blue-500 lg:flex",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"mb-12",children:Object(b.jsxs)("div",{className:"inline-block text-4xl font-extrabold text-white uppercase",children:["tyler",Object(b.jsx)("br",{}),"schumacher"]})}),Object(b.jsx)("div",{children:t.map((function(e){var t=e.name,n=e.path;return Object(b.jsxs)(m.a,{"data-testid":"".concat(t,"-link"),smooth:!0,to:n,children:[Object(b.jsx)(u,{name:t,isActive:s.hash===n}),Object(b.jsx)("br",{})]},t)}))})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{name:"gitHub"}),Object(b.jsx)(p,{name:"linkedin"})]})]})},x=s(11),f=s(273),v=function(e){var t=e.routes,s=Object(n.useState)(!1),i=Object(x.a)(s,2),a=i[0],c=i[1],r=Object(d.e)(),o=a?"h-full":"h-0";return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"fixed top-0 z-20 w-full px-2  pt-4 pb-5  bg-blue-500 lg:hidden ",children:Object(b.jsxs)("div",{className:"container flex items-center mx-auto",children:[Object(b.jsx)("div",{className:"flex justify-start w-full font-extrabold text-white",children:Object(b.jsx)("a",{className:"text-white no-underline hover:text-white hover:no-underline",href:"/",children:Object(b.jsx)("span",{className:"pl-2 text-2xl",children:"Tyler Schumacher"})})}),Object(b.jsx)("div",{className:"z-50 flex content-center justify-end",children:Object(b.jsx)("button",{type:"button",className:"",children:Object(b.jsx)(f.a,{size:34,toggled:a,toggle:function(){return c(!a)}})})}),Object(b.jsx)("div",{className:"flex items-center justify-center align-center fixed top-20 left-0 z-30 w-full ".concat(o," overflow-y-hidden bg-blue-500 transition-height duration-500 ease-in-out"),children:Object(b.jsx)("div",{className:"-mt-10 text-center",children:t.map((function(e){var t=e.name,s=e.path;return Object(b.jsxs)(m.a,{"data-testid":"".concat(t,"-link"),smooth:!0,to:s,onClick:function(){return c(!1)},children:[Object(b.jsx)(u,{name:t,isActive:r.hash===s}),Object(b.jsx)("br",{})]},t)}))})})]})})})},O=s(117),w=s.n(O),k=function(){return Object(b.jsx)("div",{className:"p-4 text-center text-black bg-white",children:"Copyright \xa9 2021 Tyler Schumacher. All rights reserved."})},y={particle:{particleCount:100,color:"#ffb75f",minSize:2,maxSize:4},velocity:{directionAngle:0,directionAngleVariance:30,minSpeed:.2,maxSpeed:2},opacity:{minOpacity:0,maxOpacity:.5,opacityTransitionTime:5e3}},N=function(e){var t=e.children;return Object(b.jsxs)("div",{className:"w-full overflow-auto",children:[Object(b.jsx)(w.a,{className:"absolute z-0",settings:y}),Object(b.jsxs)("div",{className:"relative w-full",children:[Object(b.jsx)("div",{className:"container w-full p-4 mx-auto",children:Object(b.jsx)("div",{className:"relative z-10 h-full",children:t})}),Object(b.jsx)(k,{})]})]})},S=s(122),z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",s=Object(n.useState)(!1),i=Object(x.a)(s,2),a=i[0],c=i[1];return Object(n.useEffect)((function(){var s=new IntersectionObserver((function(e){var t=Object(x.a)(e,1)[0];c(t.isIntersecting)}),{rootMargin:t});return(null===e||void 0===e?void 0:e.current)&&s.observe(e.current),function(){(null===e||void 0===e?void 0:e.current)&&s.unobserve(e.current)}}),[]),a},T=function(e){var t=e.children,s=e.name,i=e.id,a=Object(n.useState)("#".concat(s)),c=Object(x.a)(a,1)[0],r=Object(n.useRef)(),o=z(r),l=Object(d.e)(),m=Object(S.a)(),u=Object(d.d)();Object(n.useLayoutEffect)((function(){o&&l.hash.includes(c)||o&&!l.hash?u.push(c):!o&&l.hash.includes(c)&&u.push("/")}),[c,u,l.hash,o]);var j=m<1024;return Object(b.jsxs)(b.Fragment,{children:[j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:i,className:"h-2"}),Object(b.jsx)("div",{className:"h-20"})]}):null,Object(b.jsxs)("div",{id:j?"":i,className:"flex flex-col items-center md:mb-60",children:[Object(b.jsxs)("div",{ref:r,className:"w-full mb-10",children:[Object(b.jsx)("div",{className:"h-1 w-9 bg-tangerine-500"}),Object(b.jsx)("div",{className:"text-2xl font-extrabold text-black uppercase",children:s})]}),Object(b.jsx)("div",{className:"w-full p-6 text-black bg-white shadow-xl rounded-xl",children:t})]})]})},E=s.p+"static/media/avatar-hex.ed80e090.png",I=function(){return Object(b.jsxs)("div",{className:"h-screen grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-1 md:gap-0 lg:gap-12",children:[Object(b.jsx)("div",{className:"flex items-center col-span-2",children:Object(b.jsx)("img",{src:E,alt:"Tyler Schumacher",className:"flex items-center justify-center mx-auto"})}),Object(b.jsxs)("div",{className:"flex flex-col justify-center text-black col-span-4",children:[Object(b.jsxs)("div",{className:"mb-4 text-3xl",children:["Hello there, I am"," ",Object(b.jsx)("span",{className:"text-tangerine-500",children:"Tyler Schumacher"})]}),Object(b.jsxs)("p",{className:"mb-2 text-xl ",children:["I'm a"," ",Object(b.jsx)("span",{className:"text-tangerine-500",children:"full stack web developer "}),"passionate about creating beautiful UIs, intuitive UX patterns, and scalable backends."]})]})]})},C=function(){return Object(b.jsxs)("div",{className:"text-lg",children:[Object(b.jsx)("p",{className:"pb-4",children:"My name is Tyler Schumacher, I am a full stack web developer, with over 6 years of experience. I\u2019ve worked for primarily for large financial institutions and fintech companies creating both public facing web application and internal tooling, while keep working on side projects on my own time."}),Object(b.jsx)("p",{children:"I focus on working with creating UI's that look beautiful and UX's patterns that make sense, while working with realtime data. Also creating server side code that is scalable and powerful."})]})},F=function(e){var t=e.item;return Object(b.jsxs)("a",{title:t.name,className:"flex flex-col items-center justify-around p-3 text-center bg-gray-100 border-2 border-gray-300 hover:shadow-xl rounded-xl hover:bg-tangerine-500 transition duration-500 ease-in-out",type:"button",href:t.link,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{className:"w-12 pb-2",src:t.image,alt:t.name}),Object(b.jsx)("span",{className:"font-bold",children:t.name})]})},L=function(e){var t=e.items;return Object(b.jsx)("div",{className:"container mx-auto",children:Object(b.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6",children:t.map((function(e){return Object(b.jsx)(F,{item:e},e.name)}))})})},q=s.p+"static/media/books.426ae468.png",R=s.p+"static/media/bass.ab19fa38.png",B=s.p+"static/media/gaming.5bcde3b4.png",M=[{name:"Books",image:q,link:"https://en.wikipedia.org/wiki/Book"},{name:"Bass Guitar",image:R,link:"https://en.wikipedia.org/wiki/Bass_guitar"},{name:"Motorcycles",image:s.p+"static/media/motorcycles.58fa965a.png",link:"https://en.wikipedia.org/wiki/Motorcycle"},{name:"Motocross",image:s.p+"static/media/motocross.41ee39f0.png",link:"https://en.wikipedia.org/wiki/Motocross"},{name:"Snowmobiles",image:s.p+"static/media/snowmobiles.60dd4859.png",link:"https://en.wikipedia.org/wiki/Snowmobile"},{name:"Gaming",image:B,link:"https://en.wikipedia.org/wiki/Video_game"}],A=function(){return Object(b.jsx)(L,{items:M})},G=s(8),U=s.p+"static/media/example-project.21eed98a.png",P={javascript:s.p+"static/media/javascript.00f3e5cf.svg",typescript:s.p+"static/media/typescript.a6305a73.svg",react:s.p+"static/media/react.e68b35f4.svg",tailwind:s.p+"static/media/tailwind.315d0ac2.svg",nodejs:s.p+"static/media/nodejs.615ffbea.svg",prisma:s.p+"static/media/prisma.671d8645.svg",postgresql:s.p+"static/media/postgresql.ae92b576.svg",discord:s.p+"static/media/discord.5276e84b.svg",html5:s.p+"static/media/html.f318c8b1.svg",css3:s.p+"static/media/css.4e47c312.svg",jquery:s.p+"static/media/jquery.fcc48022.svg"},_=function(e){var t,s,n=e.project,i=[n.links.find((function(e){return"GITHUB"===e.type})),n.links.find((function(e){return"LIVE"===e.type})),n.links.find((function(e){return"SWAGGER"===e.type}))].filter(Boolean),a=n.description.split(".").filter(Boolean);return Object(b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-10",children:[Object(b.jsx)("div",{className:"flex items-center mb-6 col-span-1",children:Object(b.jsx)("img",{src:n.image,alt:n.name})}),Object(b.jsxs)("div",{className:"col-span-1",children:[Object(b.jsx)("div",{className:"pb-6 text-xl font-bold",children:n.name}),Object(b.jsx)("ul",{className:"pb-6 list-disc list-inside",children:a.map((function(e,t){return Object(b.jsx)("li",{className:t===a.length-1?"md:pb-2":"pb-1 md:pb-4",children:e},e)}))}),Object(b.jsx)("div",{className:"flex flex-row items-center pb-6",children:null===n||void 0===n||null===(t=n.technologies)||void 0===t||null===(s=t.filter(Boolean))||void 0===s?void 0:s.map((function(e){return Object(b.jsx)("img",{src:P[e],alt:e,className:"w-10 pr-2"},e)}))}),Object(b.jsx)("div",{className:"flex flex-row",children:i.map((function(e){return Object(b.jsx)("a",{type:"button",href:null===e||void 0===e?void 0:e.url,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("button",{type:"button",className:"px-6 py-3 mr-4 text-base font-bold text-white rounded-lg focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none bg-tangerine-500 hover:bg-tangerine-600 duration-200",children:null===e||void 0===e?void 0:e.type})},null===e||void 0===e?void 0:e.url)}))})]})]})},H=function(){return Object(b.jsx)("div",{className:"flex items-center justify-center",children:Object(b.jsx)("div",{className:"w-32 h-32 border-b-2 rounded-full border-tangerine-900 animate-spin"})})},Q=s(5),J=s(16),D=s(17),V=s(118),W=s.n(V),X=function(e){Object(J.a)(s,e);var t=Object(D.a)(s);function s(){var e;return Object(Q.a)(this,s),(e=t.call(this,"https://tyler-schumacher-portfolio-api.herokuapp.com/rest")).sendEmail=function(t){return e.instance.post("/send-email",t)},e.getProjects=function(){return e.instance.get("/project")},e}return s}((function e(t){var s=this;Object(Q.a)(this,e),this.instance=void 0,this._initializeResponseInterceptor=function(){s.instance.interceptors.response.use(s._handleResponse,s.handleError)},this._handleResponse=function(e){return e.data},this.handleError=function(e){return Promise.reject(e)},this.instance=W.a.create({baseURL:t}),this._initializeResponseInterceptor()})),K=new X,Y=function(){var e,t,s=Object(o.useQuery)("projects",K.getProjects,{onError:function(e){l.b.error(e.message,{position:"bottom-right"})}}),n=s.data,i=s.isLoading;return Object(b.jsx)("div",{children:i?Object(b.jsx)(H,{}):null!==(e=null===n||void 0===n||null===(t=n.sort((function(e,t){return e.id-t.id})))||void 0===t?void 0:t.map((function(e,t){var s=t===n.length-1;return Object(b.jsxs)("div",{className:s?"":"mb-16 md:mb-32",children:[Object(b.jsx)(_,{project:Object(G.a)(Object(G.a)({},e),{},{image:U})}),s?null:Object(b.jsx)("hr",{className:"mt-16  md:mt-32"})]},e.id)})))&&void 0!==e?e:null})},Z=[{name:"HTML5",image:"https://cdn.worldvectorlogo.com/logos/html-1.svg",link:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"},{name:"CSS3",image:"https://cdn.worldvectorlogo.com/logos/css-3.svg",link:"https://developer.mozilla.org/en-US/docs/Glossary/CSS"},{name:"Typescript",image:"https://cdn.worldvectorlogo.com/logos/typescript.svg",link:"https://www.typescriptlang.org/"},{name:"React",image:"https://cdn.worldvectorlogo.com/logos/react-2.svg",link:"https://reactjs.org/"},{name:"Sass",image:"https://cdn.worldvectorlogo.com/logos/sass-1.svg",link:"https://sass-lang.com/"},{name:"Tailwind CSS",image:"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",link:"https://tailwindcss.com/"},{name:"NodeJS",image:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",link:"https://nodejs.org/en/"},{name:"REST API",image:"https://everything1know.files.wordpress.com/2019/09/rest-icon-200x196-1.png",link:"https://developer.mozilla.org/en-US/docs/Glossary/REST"},{name:"GraphQL",image:"https://cdn.worldvectorlogo.com/logos/graphql.svg",link:"https://graphql.org/"},{name:"PostgreSQL",image:"https://cdn.worldvectorlogo.com/logos/postgresql.svg",link:"https://www.postgresql.org/"},{name:"MongoDB",image:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",link:"https://www.mongodb.com/"},{name:"Elasticsearch",image:"https://cdn.worldvectorlogo.com/logos/elastic-elasticsearch.svg",link:"https://www.elastic.co/"},{name:"Windows",image:"https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",link:"https://www.microsoft.com/en-us/windows"},{name:"Linux",image:s.p+"static/media/linux.24a26a2e.png",link:"https://www.linux.org/"},{name:"Rust",image:"https://cdn.worldvectorlogo.com/logos/rust.svg",link:"https://www.rust-lang.org/"},{name:"React Testing Library",image:"https://testing-library.com/img/logo-large.png",link:"https://testing-library.com/"},{name:"Jest",image:"https://nx.dev/documentation/latest/shared/jest-logo.png",link:"https://jestjs.io/"},{name:"Git",image:"https://cdn.worldvectorlogo.com/logos/git-icon.svg",link:"https://git-scm.com/"}],$=function(){return Object(b.jsx)(L,{items:Z})},ee=s(123),te=s(31),se=s(124),ne=s(41),ie=function(e){var t=e.message;return Object(b.jsx)("p",{className:"text-red-400","data-testid":"field-error-message",children:t?t.charAt(0).toUpperCase()+t.slice(1):""})};ie.defaultProps={message:""};var ae=ie,ce=["name","email"],re=new X,oe=ne.a().shape({name:ne.b().required(),email:ne.b().email().required(),subject:ne.b().required(),text:ne.b().required()}),le=function(){var e,t,s,n,i=Object(te.d)({resolver:Object(se.a)(oe)}),a=i.register,c=i.formState.errors,r=i.handleSubmit,d=i.reset,m=i.setError,u=Object(o.useMutation)(re.sendEmail,{onSuccess:function(){l.b.success("Email sent successfully!",{position:"bottom-right"}),d()},onError:function(e){l.b.error(e.message,{position:"bottom-right"}),e.toString().includes("400")&&m("email",{type:"manual",message:"This email address failed validation"},{shouldFocus:!0})}}),j=u.mutate,g=u.isLoading;return Object(b.jsxs)("form",{className:"w-full max-w-4xl mx-auto",onSubmit:r((function(e){var t=function(e){e.name;var t=e.email,s=Object(ee.a)(e,ce);return Object(G.a)(Object(G.a)({},s),{},{from:t,subject:"".concat(e.name," - ").concat(e.subject),to:"tyler.schumacher@protonmail.com"})}(e);return j(t)})),children:[Object(b.jsxs)("div",{className:"flex flex-wrap mb-6 -mx-3",children:[Object(b.jsxs)("div",{className:"w-full pr-3 mb-6 md:w-1/2 md:mb-0",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold tracking-wide capitalize",htmlFor:"form-name",children:["name",Object(b.jsx)("input",Object(G.a)(Object(G.a)({},a("name")),{},{"data-testid":"form-input-name",className:"block w-full py-3 pr-3 mt-2 mb-3 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input",id:"form-name",type:"text"}))]}),(null===(e=c.name)||void 0===e?void 0:e.message)?Object(b.jsx)(ae,{message:c.name.message}):null]}),Object(b.jsxs)("div",{className:"w-full pl-3 md:w-1/2",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold tracking-wide capitalize",htmlFor:"form-email",children:["email",Object(b.jsx)("input",Object(G.a)(Object(G.a)({},a("email")),{},{"data-testid":"form-input-email",className:"block w-full py-3 pl-3 mt-2 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input",id:"form-email",type:"email"}))]}),(null===(t=c.email)||void 0===t?void 0:t.message)?Object(b.jsx)(ae,{message:c.email.message}):null]})]}),Object(b.jsx)("div",{className:"flex flex-wrap mb-6 -mx-3",children:Object(b.jsxs)("div",{className:"w-full",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold tracking-wide capitalize",htmlFor:"form-subject",children:["subject",Object(b.jsx)("input",Object(G.a)(Object(G.a)({},a("subject")),{},{"data-testid":"form-input-subject",className:"block w-full py-3 mt-2 mb-3 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input",id:"form-subject",type:"text"}))]}),(null===(s=c.subject)||void 0===s?void 0:s.message)?Object(b.jsx)(ae,{message:c.subject.message}):null]})}),Object(b.jsx)("div",{className:"flex flex-wrap mb-2 -mx-3",children:Object(b.jsxs)("div",{className:"w-full mb-6",children:[Object(b.jsxs)("label",{className:"block mb-2 text-base font-bold capitalize tracking-wid e",htmlFor:"form-message",children:["message",Object(b.jsx)("textarea",Object(G.a)(Object(G.a)({},a("text")),{},{"data-testid":"form-input-message",id:"form-message",className:"block w-full py-3 mt-2 leading-tight text-black border border-gray-200 rounded appearance-none resize transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-textarea",rows:10}))]}),(null===(n=c.text)||void 0===n?void 0:n.message)?Object(b.jsx)(ae,{message:c.text.message}):null]})}),Object(b.jsx)("button",{"data-testid":"form-submit-button",disabled:g,type:"submit",className:"float-right w-full px-6 py-3 text-base font-bold text-white rounded-lg focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none bg-tangerine-500 hover:bg-tangerine-600 duration-200",children:g?Object(b.jsx)("div",{className:"flex items-center justify-center pr-4",children:Object(b.jsx)("div",{className:"w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin"})}):"SEND"})]})},de=(s(264),s(265),[{name:"about",path:"#about",component:C},{name:"skills",path:"#skills",component:$},{name:"interests",path:"#interests",component:A},{name:"projects",path:"#projects",component:Y},{name:"contact",path:"#contact",component:le}]),me=new o.QueryClient,be=function(){return Object(b.jsxs)(o.QueryClientProvider,{client:me,children:[Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"flex h-full",children:[Object(b.jsx)(v,{routes:de}),Object(b.jsx)(h,{routes:de}),Object(b.jsx)(N,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{}),de.map((function(e){var t=e.name,s=e.path,n=e.component;return Object(b.jsx)(T,{id:s.replace("#",""),name:t,children:Object(b.jsx)(n,{})},t)}))]})})]})}),Object(b.jsx)(l.a,{})]})},ue=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,274)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(be,{})}),document.getElementById("root")),ue()}},[[266,1,2]]]);
//# sourceMappingURL=main.c440bf1e.chunk.js.map