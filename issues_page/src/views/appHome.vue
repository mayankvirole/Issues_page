<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="user-tag nav-item active">Hi! {{ user.name }}</li>
            <li class="nav-item active">
              <a class="nav-link" @click="logUserOut"> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div class="container mt-5">
        <div class="issue-container">
          <ul>
            <li>
              <h3><span @click="toggle" v-bind:class="{ 'active-pane': !toggleIssues , 'inactive' : toggleIssues} ">All Issues</span>
              </h3>
            </li>
            <li>
              <h3><span @click="toggle" v-bind:class="{ 'active-pane': toggleIssues ,  'inactive' : !toggleIssues} ">My Issues</span></h3>
            </li>
          </ul>
          <div v-if="!toggleIssues">
            <div v-for="issue in issues" :key="issue._id" class="issue">
              <router-link :to="'/Issue?id=' + issue._id">
                <h4>{{ issue.title }}</h4>
              </router-link>
              <h4>Created By {{ issue.author.username }} at {{ issue.createdAt.substring(0, 10) }}</h4>
            </div>

          </div>
          <div v-if="toggleIssues">
            <div v-for="issue in myIssues" :key="issue._id" class="issue">
              <router-link :to="'/Issue?id=' + issue._id">
                <h4>{{ issue.title }}</h4>
              </router-link>
              <h4>Created at {{ issue.createdAt.substring(0, 10) }}</h4>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="container mt-5">
      <div class="issue-container">
        <router-link to="/create_issue" class="bton" style="width : fit-content">+ New Issue</router-link>
      </div>
    </div>
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
      issues: [],
      myIssues: [],
      toggleIssues: false
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
    toggle() {
      this.toggleIssues=!this.toggleIssues;
    },
    async getAllIssues() {
      try {
        let response=await this.$http.get("/issue/all-issues");
        if(response.data) {
          this.issues=response.data.Issues;
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
    async getMyIssues() {
      try {
        let response=await this.$http.post("/issue/my-issues",{username: this.user.name});
        if(response.data.Issues.length>=1) this.myIssues=response.data.Issues;
      }
      catch(err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getUserDetails();
    this.getAllIssues();
    this.getMyIssues();
  }
};
</script>