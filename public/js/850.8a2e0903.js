"use strict";(self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[]).push([[850],{850:function(s,e,t){t.r(e),t.d(e,{default:function(){return f}});var i=function(){var s=this,e=s._self._c;return e("div",{staticClass:"display"},[e("display",{attrs:{id:s.issue_id}})],1)},u=[],a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"issue"},[e("h2",[s._v(s._s(s.issue.title))]),e("p",[s._v(s._s(s.issue.desc))])])},l=[],n={props:["id"],data(){return{issue:{}}},methods:{async getIssueDetails(){try{let s=await this.$http.get(`/issue/Issue?id=${this.id}`);this.issue=s.data.Is}catch(s){console.log(s.message)}}},created(){this.getIssueDetails()}},r=n,d=t(1001),c=(0,d.Z)(r,a,l,!1,null,null,null),o=c.exports,h={data(){return{issue_id:""}},components:{display:o},created(){this.issue_id=window.location.search.substring(4)}},p=h,_=(0,d.Z)(p,i,u,!1,null,null,null),f=_.exports}}]);
//# sourceMappingURL=850.8a2e0903.js.map