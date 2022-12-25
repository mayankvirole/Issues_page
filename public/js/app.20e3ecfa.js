(function(){"use strict";var e={9180:function(e,t,r){var n=r(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],i=r(1001),o={},u=(0,i.Z)(o,a,s,!1,null,null,null),l=u.exports,c=r(8345),d=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t("div",{staticClass:"container"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Navbar")]),e._m(0),t("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",on:{click:e.logUserOut}},[e._v(" Logout")])])])])])]),t("section",[t("div",{staticClass:"container mt-5"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("ul",{staticClass:"list-group"},[t("li",{staticClass:"list-group-item"},[e._v("Name : "+e._s(e.user.name))]),t("li",{staticClass:"list-group-item"},[e._v("Email : "+e._s(e.user.email))])])])])])])])},f=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],p=(r(7658),r(6040)),v=r.n(p),m={data(){return{user:{}}},methods:{getUserDetails(){let e=localStorage.getItem("jwt"),t=v().decode(e);this.user=t},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")}},created(){this.getUserDetails()}},h=m,g=(0,i.Z)(h,d,f,!1,null,"0075c318",null),b=g.exports,y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"create-issue"},[t("create_issue")],1)},C=[],_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci"},[t("h1",{staticClass:"text-center"},[e._v("Create a new Issue")]),t("form",{staticClass:"border border-primary p-5",on:{submit:function(t){return t.preventDefault(),e.handleSubmitForm.apply(null,arguments)}}},[t("label",{attrs:{for:"title"}},[e._v("Title ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.issue.title,expression:"issue.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title",required:"",placeholder:"Enter issue title"},domProps:{value:e.issue.title},on:{input:function(t){t.target.composing||e.$set(e.issue,"title",t.target.value)}}}),t("label",{attrs:{for:"desc"}},[e._v("Description")]),t("editor",{attrs:{"api-key":"x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw",plugins:"code lists",id:"desc","output-format":"text",init:{selector:"#desc",branding:!1,height:300,placeholder:"Describe your issue in detail here."}},model:{value:e.issue.desc,callback:function(t){e.$set(e.issue,"desc",t)},expression:"issue.desc"}}),t("center",[t("button",{staticClass:"btn btn-primary btn-block w-50 my-4",attrs:{type:"submit"}},[e._v("Create Issue")])])],1)])])])},w=[],k=r(6737),x=r.n(k),j=r(396),O={data(){return{issue:{title:"",desc:""}}},methods:{async handleSubmitForm(){try{console.log("entered");let e=await this.$http.post("/issue/create-issue",this.issue);e.data&&(x()("Success","Issue was created"),this.$router.push("/home"))}catch(e){let t=e.response;409==t.status?x()("Error",t.data.message,"error"):x()("Error",t.data.err.message,"error")}}},components:{editor:j.Z}},E=O,S=(0,i.Z)(E,_,w,!1,null,null,null),N=S.exports,P={components:{create_issue:N}},T=P,Z=(0,i.Z)(T,y,C,!1,null,null,null),A=Z.exports;n.ZP.use(c.ZP);const D=[{path:"/home",name:"home",component:b,meta:{requiresAuth:!0}},{path:"/",name:"login",component:()=>r.e(600).then(r.bind(r,4600))},{path:"/register",name:"register",component:()=>r.e(323).then(r.bind(r,3323))},{path:"/create_issue",name:"create_issue",component:A}],I=new c.ZP({mode:"history",base:"/",routes:D});I.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAuth))&&null==localStorage.getItem("jwt")?r({path:"/"}):r()}));var L=I,$=r(594);const q=$.Z.create({baseURL:"/"});n.ZP.prototype.$http=q,n.ZP.config.productionTip=!1,new n.ZP({router:L,render:e=>e(l)}).$mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var o=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(o=!1,s<i&&(i=s));if(o){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{323:"c1429a68",600:"4293aacf"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{323:"b4a2b1ea",600:"5d1a6e60"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="issues_page:";r.l=function(n,a,s,i){if(e[n])e[n].push(a);else{var o,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+s),o.src=n),e[n]=[a];var f=function(t,r){o.onerror=o.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(r){if(s.onerror=s.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,s.parentNode.removeChild(s),a(u)}};return s.onerror=s.onload=i,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=function(n){return new Promise((function(a,s){var i=r.miniCssF(n),o=r.p+i;if(t(i,o))return a();e(n,o,null,a,s)}))},a={143:0};r.f.miniCss=function(e,t){var r={323:1,600:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=s);var i=r.p+r.u(t),o=new Error,u=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,a[1](o)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,i=n[0],o=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(u)var c=u(r)}for(t&&t(n);l<i.length;l++)s=i[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},n=self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9180)}));n=r.O(n)})();
//# sourceMappingURL=app.20e3ecfa.js.map