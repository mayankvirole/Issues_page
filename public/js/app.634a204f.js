(function(){"use strict";var e={7600:function(e,t,s){var r=s(144),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=s(1001),o={},u=(0,i.Z)(o,n,a,!1,null,null,null),l=u.exports,c=s(8345),d=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t("div",{staticClass:"container"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Home")]),e._m(0),t("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"user-tag nav-item active"},[e._v("Hi! "+e._s(e.user.name))]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",on:{click:e.logUserOut}},[e._v(" Logout")])])])])])]),t("section",[t("div",{staticClass:"container mt-5"},[t("div",{staticClass:"issue-container"},[t("h3",{staticClass:"all"},[t("span",{class:{"active-pane":!e.toggleIssues},on:{click:e.toggle}},[e._v("All Issues")]),e._v(" "),t("span",{class:{"active-pane":e.toggleIssues},on:{click:e.toggle}},[e._v("My Issues")])]),e.toggleIssues?e._e():t("div",e._l(e.issues,(function(s){return t("div",{key:s._id,staticClass:"issue"},[t("h4",[e._v(e._s(s.title))]),t("h4",[e._v("Created By "+e._s(s.author.username)+" at "+e._s(s.createdAt.substring(0,10)))])])})),0),e.toggleIssues?t("div",e._l(e.myIssues,(function(s){return t("div",{key:s._id,staticClass:"issue"},[t("h4",[e._v(e._s(s.title))]),t("h4",[e._v("Created at "+e._s(s.createdAt.substring(0,10)))])])})),0):e._e()])])]),t("div",{staticClass:"container mt-5"},[t("div",{staticClass:"issue-container"},[t("router-link",{staticClass:"bton",staticStyle:{width:"fit-content"},attrs:{to:"/create_issue"}},[e._v("+ New Issue")])],1)])])},f=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],p=(s(7658),s(6040)),v=s.n(p),h=s(6737),g=s.n(h),m={data(){return{user:{},issues:[],myIssues:[],toggleIssues:!1}},methods:{getUserDetails(){let e=localStorage.getItem("jwt"),t=v().decode(e);this.user=t},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")},toggle(){this.toggleIssues=!this.toggleIssues},async getAllIssues(){try{let e=await this.$http.get("/issue/all-issues");e.data&&(this.issues=e.data.Issues)}catch(e){let t=e.response;409==t.status?g()("Error",t.data.message,"error"):g()("Error",t.data.err.message,"error")}},async getMyIssues(){try{let e=await this.$http.post("/issue/my-issues",{username:this.user.name});e.data.Issues.length>=1&&(this.myIssues=e.data.Issues)}catch(e){console.log(e)}}},created(){this.getUserDetails(),this.getAllIssues(),this.getMyIssues()}},b=m,y=(0,i.Z)(b,d,f,!1,null,null,null),_=y.exports,C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"create-issue"},[t("create_issue")],1)},w=[],k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci"},[t("h1",{staticClass:"text-center"},[e._v("Create a new Issue")]),t("form",{staticClass:"border border-primary p-5",on:{submit:function(t){return t.preventDefault(),e.handleSubmitForm.apply(null,arguments)}}},[t("label",{attrs:{for:"title"}},[e._v("Title ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.issue.title,expression:"issue.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title",required:"",placeholder:"Enter issue title"},domProps:{value:e.issue.title},on:{input:function(t){t.target.composing||e.$set(e.issue,"title",t.target.value)}}}),t("label",{attrs:{for:"desc"}},[e._v("Description")]),t("editor",{attrs:{"api-key":"x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw",plugins:"code lists",id:"desc","output-format":"text",init:{selector:"#desc",branding:!1,height:300,placeholder:"Describe your issue in detail here."}},model:{value:e.issue.desc,callback:function(t){e.$set(e.issue,"desc",t)},expression:"issue.desc"}}),t("center",[t("button",{staticClass:"btn btn-primary btn-block w-50 my-4",attrs:{type:"submit"}},[e._v("Create Issue")])])],1)])])])},I=[],j=s(396),x={data(){return{issue:{title:"",desc:"",author:{id:"",username:""}}}},methods:{async handleSubmitForm(){try{let e=await this.$http.post("/issue/create-issue",this.issue);e.data&&(g()("Success","Issue was created","success"),this.$router.push("/home"))}catch(e){let t=e.response;409==t.status?g()("Error",t.data.message,"error"):g()("Error",t.data.err.message,"error")}},generateAuth(){let e=localStorage.getItem("jwt"),t=v().decode(e);this.issue.author.id=t._id,this.issue.author.username=t.name}},components:{editor:j.Z},created(){this.generateAuth()}},A=x,S=(0,i.Z)(A,k,I,!1,null,null,null),E=S.exports,O={components:{create_issue:E}},P=O,N=(0,i.Z)(P,C,w,!1,null,null,null),T=N.exports;r.ZP.use(c.ZP);const Z=[{path:"/home",name:"home",component:_,meta:{requiresAuth:!0}},{path:"/",name:"login",component:()=>s.e(84).then(s.bind(s,3084))},{path:"/register",name:"register",component:()=>s.e(323).then(s.bind(s,4323))},{path:"/create_issue",name:"create_issue",component:T}],$=new c.ZP({mode:"history",base:"/",routes:Z});$.beforeEach(((e,t,s)=>{e.matched.some((e=>e.meta.requiresAuth))&&null==localStorage.getItem("jwt")?s({path:"/"}):s()}));var D=$,L=s(594);const q=L.Z.create({baseURL:"/"});r.ZP.prototype.$http=q,r.ZP.config.productionTip=!1,new r.ZP({router:D,render:e=>e(l)}).$mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],a=e[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](r[u])}))?r.splice(u--,1):(o=!1,a<i&&(i=a));if(o){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{84:"397a491f",323:"4c8fccbc"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+"."+{84:"5d1a6e60",323:"b4a2b1ea"}[e]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="issues_page:";s.l=function(r,n,a,i){if(e[r])e[r].push(n);else{var o,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",t+a),o.src=r),e[r]=[n];var f=function(t,s){o.onerror=o.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(s)})),t)return t(s)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,s,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(s){if(a.onerror=a.onload=null,"load"===s.type)r();else{var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=i,a.href=t,s?s.parentNode.insertBefore(a,s.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var n=s[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=function(r){return new Promise((function(n,a){var i=s.miniCssF(r),o=s.p+i;if(t(i,o))return n();e(r,o,null,n,a)}))},n={143:0};s.f.miniCss=function(e,t){var s={84:1,323:1};n[e]?t.push(n[e]):0!==n[e]&&s[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};s.f.j=function(t,r){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(s,r){n=e[t]=[s,r]}));r.push(n[2]=a);var i=s.p+s.u(t),o=new Error,u=function(r){if(s.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}};s.l(i,u,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],o=r[1],u=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(u)var c=u(s)}for(t&&t(r);l<i.length;l++)a=i[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},r=self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7600)}));r=s.O(r)})();
//# sourceMappingURL=app.634a204f.js.map