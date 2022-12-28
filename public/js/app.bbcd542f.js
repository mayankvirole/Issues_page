(function(){"use strict";var e={2705:function(e,t,r){var n=r(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=r(1001),o={},u=(0,i.Z)(o,s,a,!1,null,null,null),l=u.exports,c=r(8345),d=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t("div",{staticClass:"container"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Home")]),e._m(0),t("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"user-tag nav-item active"},[e._v("Hi! "+e._s(e.user.name))]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",on:{click:e.logUserOut}},[e._v(" Logout")])])])])])]),t("section",[t("div",{staticClass:"container mt-5"},[t("div",{staticClass:"issue-container"},[t("h3",{staticClass:"all"},[e._v("All Issues")]),e._l(e.issues,(function(r){return t("div",{key:r._id,staticClass:"issue"},[t("h4",[e._v(e._s(r.title))]),t("h4",[e._v("Created By "+e._s(r.author.username)+" at "+e._s(r.createdAt))])])})),t("router-link",{staticClass:"bton",staticStyle:{width:"fit-content"},attrs:{to:"/create_issue"}},[e._v("+ New Issue")])],2)])])])},f=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],p=(r(7658),r(6040)),v=r.n(p),h=r(6737),m=r.n(h),g={data(){return{user:{},issues:[]}},methods:{getUserDetails(){let e=localStorage.getItem("jwt"),t=v().decode(e);this.user=t},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")},async getAllIssues(){try{let e=await this.$http.get("/issue/all-issues");e.data&&(this.issues=e.data.Issues)}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},openIssue(){}},created(){this.getUserDetails(),this.getAllIssues()}},b=g,y=(0,i.Z)(b,d,f,!1,null,null,null),_=y.exports,C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"create-issue"},[t("create_issue")],1)},w=[],k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci"},[t("h1",{staticClass:"text-center"},[e._v("Create a new Issue")]),t("form",{staticClass:"border border-primary p-5",on:{submit:function(t){return t.preventDefault(),e.handleSubmitForm.apply(null,arguments)}}},[t("label",{attrs:{for:"title"}},[e._v("Title ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.issue.title,expression:"issue.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title",required:"",placeholder:"Enter issue title"},domProps:{value:e.issue.title},on:{input:function(t){t.target.composing||e.$set(e.issue,"title",t.target.value)}}}),t("label",{attrs:{for:"desc"}},[e._v("Description")]),t("editor",{attrs:{"api-key":"x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw",plugins:"code lists",id:"desc","output-format":"text",init:{selector:"#desc",branding:!1,height:300,placeholder:"Describe your issue in detail here."}},model:{value:e.issue.desc,callback:function(t){e.$set(e.issue,"desc",t)},expression:"issue.desc"}}),t("center",[t("button",{staticClass:"btn btn-primary btn-block w-50 my-4",attrs:{type:"submit"}},[e._v("Create Issue")])])],1)])])])},j=[],x=r(396),S={data(){return{issue:{title:"",desc:"",author:{id:"",username:""}}}},methods:{async handleSubmitForm(){try{let e=await this.$http.post("/issue/create-issue",this.issue);e.data&&(m()("Success","Issue was created","success"),this.$router.push("/home"))}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},generateAuth(){let e=localStorage.getItem("jwt"),t=v().decode(e);this.issue.author.id=t._id,this.issue.author.username=t.name}},components:{editor:x.Z},created(){this.generateAuth()}},A=S,E=(0,i.Z)(A,k,j,!1,null,null,null),O=E.exports,I={components:{create_issue:O}},P=I,N=(0,i.Z)(P,C,w,!1,null,null,null),T=N.exports;n.ZP.use(c.ZP);const Z=[{path:"/home",name:"home",component:_,meta:{requiresAuth:!0}},{path:"/",name:"login",component:()=>r.e(84).then(r.bind(r,3084))},{path:"/register",name:"register",component:()=>r.e(323).then(r.bind(r,4323))},{path:"/create_issue",name:"create_issue",component:T}],$=new c.ZP({mode:"history",base:"/",routes:Z});$.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAuth))&&null==localStorage.getItem("jwt")?r({path:"/"}):r()}));var D=$,L=r(594);const q=L.Z.create({baseURL:"/"});n.ZP.prototype.$http=q,n.ZP.config.productionTip=!1,new n.ZP({router:D,render:e=>e(l)}).$mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var o=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(o=!1,a<i&&(i=a));if(o){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{84:"397a491f",323:"4c8fccbc"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{84:"5d1a6e60",323:"b4a2b1ea"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="issues_page:";r.l=function(n,s,a,i){if(e[n])e[n].push(s);else{var o,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+a),o.src=n),e[n]=[s];var f=function(t,r){o.onerror=o.onload=null,clearTimeout(p);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,s){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,a.parentNode.removeChild(a),s(u)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var s=r[n],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===t))return s}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){s=i[n],a=s.getAttribute("data-href");if(a===e||a===t)return s}},n=function(n){return new Promise((function(s,a){var i=r.miniCssF(n),o=r.p+i;if(t(i,o))return s();e(n,o,null,s,a)}))},s={143:0};r.f.miniCss=function(e,t){var r={84:1,323:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(r,n){s=e[t]=[r,n]}));n.push(s[2]=a);var i=r.p+r.u(t),o=new Error,u=function(n){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,s[1](o)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,i=n[0],o=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(u)var c=u(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2705)}));n=r.O(n)})();
//# sourceMappingURL=app.bbcd542f.js.map