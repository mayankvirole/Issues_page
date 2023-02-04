(function(){"use strict";var e={9180:function(e,t,s){var a=s(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],n=s(1001),o={},u=(0,n.Z)(o,i,r,!1,null,null,null),l=u.exports,c=s(8345),d=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navi"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"home",attrs:{to:"/home"}},[e._v("Issues Page")]),t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"res-link"},[t("router-link",{attrs:{to:"/resolved-issues"}},[e._v("Resolved Issues")])],1),t("li",{staticClass:"user-tag nav-item active"},[e._v("Hi! "+e._s(e.user.name))]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"logout",on:{click:e.logUserOut}},[e._v(" Logout")])])])],1)]),t("section",[t("div",{staticClass:"container"},[t("div",{staticClass:"issue-container"},[t("ul",[t("div",[t("li",[t("h3",[t("span",{class:{"active-pane":!e.toggleIssues,inactive:e.toggleIssues},on:{click:e.toggle}},[e._v("All Issues")])])]),t("li",[t("h3",[t("span",{class:{"active-pane":e.toggleIssues,inactive:!e.toggleIssues},on:{click:e.toggle}},[e._v("My Issues")])])])]),t("li",{staticClass:"search-bar"},[t("div",[e._m(0),t("span",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.issueSearch,expression:"issueSearch"}],attrs:{type:"search",name:"sbar",id:"sbar"},domProps:{value:e.issueSearch},on:{change:function(t){return e.updateSearches(t)},input:function(t){t.target.composing||(e.issueSearch=t.target.value)}}})])]),t("select",{on:{change:function(t){return e.changeRoute(t)}}},e._l(e.searchIssues,(function(s){return t("option",{key:s._id,staticClass:"issue",domProps:{value:s._id}},[e._v(" "+e._s(s.title)+" ")])})),0)])]),e.toggleIssues?e._e():t("div",e._l(e.issues,(function(s){return t("div",{key:s._id,staticClass:"issue"},[t("router-link",{staticClass:"link",attrs:{to:"/Issue?id="+s._id}},[t("h4",[e._v(e._s(s.title))])]),t("p",[e._v("Created By "+e._s(s.author.username)+" at "+e._s(s.createdAt.substring(0,10)))])],1)})),0),e.toggleIssues?t("div",e._l(e.myIssues,(function(a){return t("div",{key:a._id,staticClass:"issue"},[t("div",[t("router-link",{staticClass:"link",attrs:{to:"/Issue?id="+a._id}},[t("h4",[e._v(e._s(a.title))])]),t("p",[e._v("Created at "+e._s(a.createdAt.substring(0,10)))])],1),t("div",{staticClass:"icons"},[a.resolved?t("span",{staticClass:"check-span"},[t("img",{staticClass:"check",attrs:{src:s(9405)}})]):e._e(),t("span",{staticClass:"del-span",on:{click:function(t){return e.deleteIssue(`${a._id}`)}}},[t("img",{staticClass:"del",attrs:{src:s(9936)}})]),a.resolved?e._e():t("span",{staticClass:"edit-span"},[t("router-link",{staticClass:"bton",attrs:{to:"/edit-issue?id="+a._id}},[t("img",{staticClass:"edit",attrs:{src:s(8518)}})])],1)])])})),0):e._e()])])]),t("div",{staticClass:"container"},[t("div",{staticClass:"issue-container"},[t("router-link",{staticClass:"bton",attrs:{to:"/create_issue"}},[e._v("+ New Issue")])],1)])])},h=[function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"sbar"}},[t("img",{staticClass:"sicon",attrs:{src:s(7561)}})])}],g=(s(7658),s(6040)),p=s.n(g),v=s(6737),m=s.n(v),f={data(){return{user:{},issues:[],myIssues:[],searchIssues:[],toggleIssues:!1,issueSearch:""}},methods:{getUserDetails(){let e=localStorage.getItem("jwt"),t=p().decode(e);this.user=t},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")},toggle(){this.toggleIssues=!this.toggleIssues},async getAllIssues(){try{let e=await this.$http.get("/api/issue/all-issues");e.data&&(this.issues=e.data.Issues)}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},async getMyIssues(){try{let e=await this.$http.post("/api/issue/my-issues",{username:this.user.name});e.data.Issues.length>=1&&(this.myIssues=e.data.Issues)}catch(e){console.log(e)}},async deleteIssue(e){try{let t=await this.$http.delete(`/api/issue/delete-issue?id=${e}`);201===t.status&&this.getMyIssues()}catch(t){console.log(t.message)}},changeRoute(e){this.$router.push(`/Issue?id=${e.target.value}`)},updateSearches(e){console.log(e.target.value),this.searchIssues=[],this.searchIssues=this.issues.filter((function(t){return t.title.includes(e.target.value)}))}},created(){this.getUserDetails(),this.getAllIssues(),this.getMyIssues()}},_=f,b=(0,n.Z)(_,d,h,!1,null,null,null),y=b.exports,C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"create-issue"},[t("create_issue")],1)},I=[],k=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navi"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"home",attrs:{to:"/home"}},[e._v("Issues Page")]),t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"res-link"},[t("router-link",{attrs:{to:"/resolved-issues"}},[e._v("Resolved Issues")])],1),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"logout",on:{click:e.logUserOut}},[e._v(" Logout")])])])],1)]),t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci"},[t("h1",{staticClass:"text-center"},[e._v("Create a new Issue")]),t("form",{staticClass:"border border-primary p-5",on:{submit:function(t){return t.preventDefault(),e.handleSubmitForm.apply(null,arguments)}}},[t("label",{attrs:{for:"ti"}},[e._v("Title ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.issue.title,expression:"issue.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"ti",required:"",placeholder:"Enter issue title"},domProps:{value:e.issue.title},on:{input:function(t){t.target.composing||e.$set(e.issue,"title",t.target.value)}}}),t("label",{attrs:{for:"desc"}},[e._v("Description")]),t("editor",{attrs:{"api-key":"x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw",plugins:"code lists",id:"desc","output-format":"text",init:{selector:"#desc",branding:!1,width:e.auto,height:300,placeholder:"Describe your issue in detail here."}},model:{value:e.issue.desc,callback:function(t){e.$set(e.issue,"desc",t)},expression:"issue.desc"}}),t("label",{attrs:{for:"image"}},[e._v(" Related Image : ")]),t("input",{attrs:{type:"file",name:"files",id:"image",multiple:""},on:{change:function(t){return e.getFiles(t)}}}),t("center",[t("button",{staticClass:"btn btn-primary btn-block w-50 my-4",attrs:{type:"submit"}},[e._v("Create Issue")])])],1)])])])])},w=[],S=s(396),x={data(){return{issue:{title:"",desc:"",author:{id:"",username:""},images:[]},files:null}},methods:{async handleSubmitForm(){try{this.handleUpload(this.files);let e=await this.$http.post("api/issue/create-issue",this.issue);e.data&&(m()("Success","Issue was created","success"),this.$router.push("/home"))}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},generateAuth(){let e=localStorage.getItem("jwt"),t=p().decode(e);this.issue.author.id=t._id,this.issue.author.username=t.name},addToIssue(){},async handleUpload(e){let t=await this.$http.post("/api/issue/upload",e);console.log(t)},getFiles(e){this.files=e.target.files},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")}},components:{editor:S.Z},created(){this.generateAuth()}},$=x,j=(0,n.Z)($,k,w,!1,null,null,null),A=j.exports,O={components:{create_issue:A}},E=O,P=(0,n.Z)(E,C,I,!1,null,null,null),U=P.exports,N=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navi"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"home",attrs:{to:"/home"}},[e._v("Issues Page")]),t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"res-link"},[t("router-link",{attrs:{to:"/resolved-issues"}},[e._v("Resolved Issues")])],1),t("li",{staticClass:"user-tag nav-item active"},[e._v("Hi! "+e._s(e.user.name))]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"logout",on:{click:e.logUserOut}},[e._v(" Logout")])])])],1)]),t("section",[t("div",{staticClass:"container"},[t("div",{staticClass:"issue-container"},[e._m(0),e.myIssues.length>0?t("div",e._l(e.myIssues,(function(a){return t("div",{key:a._id,staticClass:"issue"},[a.resolved?t("div",[t("router-link",{staticClass:"link",attrs:{to:"/Issue?id="+a._id}},[t("h4",[e._v(e._s(a.title))])]),t("p",[e._v("Created at "+e._s(a.createdAt.substring(0,10)))])],1):e._e(),t("div",{staticClass:"icons"},[e._m(1,!0),t("span",{staticClass:"del-span",on:{click:function(t){return e.deleteIssue(`${a._id}`)}}},[t("img",{staticClass:"del",attrs:{src:s(9936)}})])])])})),0):e._e(),0==e.myIssues.length?t("div",[t("h4",[e._v("Nothing to see here. Create a new issue to get started")])]):e._e()])])]),t("div",{staticClass:"container"},[t("div",{staticClass:"issue-container"},[t("router-link",{staticClass:"bton",attrs:{to:"/create_issue"}},[e._v("+ New Issue")])],1)])])},Z=[function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("h3",[t("span",{staticClass:"active-pane"},[e._v("Resolved Issues")])])])])},function(){var e=this,t=e._self._c;return t("span",{staticClass:"check-span"},[t("img",{staticClass:"check",attrs:{src:s(9405)}})])}],T={data(){return{user:{},issues:[],myIssues:[],toggleIssues:!1}},methods:{getUserDetails(){let e=localStorage.getItem("jwt"),t=p().decode(e);this.user=t},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")},toggle(){this.toggleIssues=!this.toggleIssues},async getAllIssues(){try{let e=await this.$http.get("/api/issue/all-issues");e.data&&(this.issues=e.data.Issues)}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},async getMyIssues(){try{let e=await this.$http.post("/api/issue/my-issues",{username:this.user.name});e.data.Issues.length>=1&&(this.myIssues=e.data.Issues)}catch(e){console.log(e)}},async deleteIssue(e){try{let t=await this.$http.delete(`/api/issue/delete-issue?id=${e}`);201===t.status&&(this.getMyIssues(),this.$router.push("/home"))}catch(t){console.log(t.message)}}},created(){this.getUserDetails(),this.getAllIssues(),this.getMyIssues()}},M=T,D=(0,n.Z)(M,N,Z,!1,null,null,null),L=D.exports;a.ZP.use(c.ZP);const F=[{path:"/home",name:"home",component:y,meta:{requiresAuth:!0}},{path:"/",name:"login",component:()=>s.e(943).then(s.bind(s,8943))},{path:"/register",name:"register",component:()=>s.e(438).then(s.bind(s,1438))},{path:"/create_issue",name:"create_issue",component:U},{path:"/Issue",name:"display_issue",component:()=>s.e(740).then(s.bind(s,6740))},{path:"/edit-issue",name:"edit-issue",component:()=>s.e(749).then(s.bind(s,4749))},{path:"/resolved-issues",name:"resolved-issues",component:L}],R=new c.ZP({mode:"history",base:"/",routes:F});R.beforeEach(((e,t,s)=>{e.matched.some((e=>e.meta.requiresAuth))&&null==localStorage.getItem("jwt")?s({path:"/"}):s()}));var q=R,B=s(594);const H=B.Z.create({baseURL:"/"});a.ZP.prototype.$http=H,a.ZP.config.productionTip=!1,new a.ZP({router:q,render:e=>e(l)}).$mount("#app")},9405:function(e,t,s){e.exports=s.p+"img/check-mark.8d81aac9.png"},9936:function(e,t,s){e.exports=s.p+"img/delete.b2059be2.png"},8518:function(e,t,s){e.exports=s.p+"img/edit.fdcbae7f.png"},7561:function(e,t,s){e.exports=s.p+"img/search.06245733.png"}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,a,i,r){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],r=e[c][2];for(var o=!0,u=0;u<a.length;u++)(!1&r||n>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[u])}))?a.splice(u--,1):(o=!1,r<n&&(n=r));if(o){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,i,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,a){return s.f[a](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{438:"bc94bf8b",740:"5fcff480",749:"bb837718",943:"0ae70d80"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+"."+{438:"3d39350c",740:"39026a17",943:"8a6d2eb1"}[e]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="issues_page:";s.l=function(a,i,r,n){if(e[a])e[a].push(i);else{var o,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",t+r),o.src=a),e[a]=[i];var h=function(t,s){o.onerror=o.onload=null,clearTimeout(g);var i=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(s)})),t)return t(s)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,s,a,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=function(s){if(r.onerror=r.onload=null,"load"===s.type)a();else{var n=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=o,r.parentNode.removeChild(r),i(u)}};return r.onerror=r.onload=n,r.href=t,s?s.parentNode.insertBefore(r,s.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){i=n[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=function(a){return new Promise((function(i,r){var n=s.miniCssF(a),o=s.p+n;if(t(n,o))return i();e(a,o,null,i,r)}))},i={143:0};s.f.miniCss=function(e,t){var s={438:1,740:1,943:1};i[e]?t.push(i[e]):0!==i[e]&&s[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};s.f.j=function(t,a){var i=s.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(s,a){i=e[t]=[s,a]}));a.push(i[2]=r);var n=s.p+s.u(t),o=new Error,u=function(a){if(s.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,i[1](o)}};s.l(n,u,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,n=a[0],o=a[1],u=a[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(u)var c=u(s)}for(t&&t(a);l<n.length;l++)r=n[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},a=self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9180)}));a=s.O(a)})();
//# sourceMappingURL=app.b5f62b5f.js.map