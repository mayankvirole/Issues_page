"use strict";(self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[]).push([[84],{3084:function(t,s,e){e.r(s),e.d(s,{default:function(){return h}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login"},[s("login")],1)},n=[],a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 login"},[s("h1",[t._v("Login")]),s("form",{staticClass:"text-center border border-primary p-5",staticStyle:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},on:{submit:function(s){return s.preventDefault(),t.loginUser.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:t.login.email},on:{input:function(s){s.target.composing||t.$set(t.login,"email",s.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(s){s.target.composing||t.$set(t.login,"password",s.target.value)}}}),s("p",[t._v(" Don't have an account? "),s("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),s("center",[s("button",{staticClass:"btn btn-primary btn-block w-50 my-4",attrs:{type:"submit"}},[t._v(" Sign in ")])])],1)])])])},i=[],r=(e(7658),e(6737)),l=e.n(r),u={data(){return{login:{email:"",password:""}}},methods:{async loginUser(){try{let t=await this.$http.post("/user/login",this.login),s=t.data.token;localStorage.setItem("jwt",s),s&&(l()("Success","Login Successful","success"),this.$router.push("/home"))}catch(t){l()("Error","Something Went Wrong","error"),console.log(t.response)}}}},c=u,p=e(1001),g=(0,p.Z)(c,a,i,!1,null,null,null),m=g.exports,d={components:{login:m}},v=d,f=(0,p.Z)(v,o,n,!1,null,null,null),h=f.exports}}]);
//# sourceMappingURL=84.397a491f.js.map