<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navi">
      <div class="container">
        <router-link to="/home" class="home">Issues Page</router-link>
        <ul class="navbar-nav">
					<li><router-link to="/resolved-issues" class="rs">Resolved Issues</router-link></li>
          <li class="user-tag nav-item active">Hi! {{ user.name }}</li>
          <li class="nav-item active">
            <a class="logout" @click="logUserOut"> Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <section>
      <div class="container">
        <div class="issue-container">
          <ul>
            <li>
              <h3><span @click="toggle" class="active-pane" >My Resolved Issues</span></h3>
            </li>
          </ul>
          <div v-if="toggleIssue">
            <div v-for="issue in myIssues" :key="issue._id" class="issue">
              <div>
                <router-link :to="'/Issue?id=' + issue._id" class="link">
                  <h4>{{ issue.title }}</h4>
                </router-link>
                <p>Created at {{ issue.createdAt.substring(0, 10) }}</p>
              </div>
              <div class="icons">
                <span class="del-span" @click="deleteIssue(`${issue._id}`)"><img class="del"
                    src="../assets/images/delete.png" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "../../../issues_page/src/assets/home.css"
import VueJwtDecode from "vue-jwt-decode";
import swal from 'sweetalert';

export default {
  data() {
    return {
      user: {},
      myIssues: [],
      toggleIssue : false
    };
  },
  methods: {
    getUserDetails() {
      let token=localStorage.getItem("jwt");
      let decoded=VueJwtDecode.decode(token);
      this.user=decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    async getMyIssues() {
      try {
        let response=await this.$http.get("/issue/all-issues");
        if(response.data) {
          this.myIssues=response.data.Issues;
        }
      }
      catch(err) {
        let error=err.response;
        if(error.status==409) {
          swal("Error",error.data.message,"error");
        } else {
          swal("Error",error.data.err.message,"error");
        }
      }
    },

    async deleteIssue(id) {
      try {
        let response=await this.$http.delete(`/issue/delete-issue?id=${id}`);
        if(response.status===201)
          this.getMyIssues();
      }
      catch(err) {
        console.log(err.message);
      }
    }
  },

  toggle(){
    this.toggleIssue = !this.toggleIssue
    console.log(this.toggleIssue);
  },

  async created() {
    this.getUserDetails();
    console.log("myIssues ",this.myIssues);
    await this.getMyIssues();
    console.log("myIssues from resolved issues",this.myIssues);
  }
};
</script>