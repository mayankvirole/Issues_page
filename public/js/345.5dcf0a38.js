"use strict";(self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[]).push([[345],{3345:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"register"},[t("register")],1)},a=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container body"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 register"},[t("h1",[e._v("Register")]),t("form",{staticClass:"text-center border border-primary p-5",staticStyle:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},on:{submit:function(t){return t.preventDefault(),e.registerUser.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"name",placeholder:"Name",required:""},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"form-control mb-5",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),t("p",[e._v(" Already have an account? "),t("router-link",{attrs:{to:"/"}},[e._v("Login")]),t("center",[t("button",{staticClass:"btn btn-primary btn-block w-75 my-4",attrs:{type:"submit"}},[e._v(" Create Account ")])])],1)])])])])},o=[],n=(r(7658),r(6737)),l=r.n(n),u={data(){return{register:{name:"",email:"",password:""}}},methods:{async registerUser(){try{let e=await this.$http.post("/user/register",this.register),t=e.data.token;t?(localStorage.setItem("jwt",t),this.$router.push("/home"),l()("Success","Registration Was successful","success")):l()("Error","Something Went Wrong","error")}catch(e){let t=e.response;409==t.status?l()("Error",t.data.message,"error"):l()("Error",t.data.err.message,"error")}}}},c=u,m=r(1001),p=(0,m.Z)(c,i,o,!1,null,null,null),d=p.exports,g={components:{register:d}},v=g,f=(0,m.Z)(v,s,a,!1,null,null,null),h=f.exports}}]);
//# sourceMappingURL=345.5dcf0a38.js.map