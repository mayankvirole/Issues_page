<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navi">
      <div class="container">
        <router-link to="/home" class="home">Issues Page</router-link>
        <ul class="navbar-nav">
          <li class="res-link"><router-link to="/resolved-issues">Resolved Issues</router-link></li>
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
            <div>
            <li>
              <h3><span @click="toggle" v-bind:class="{ 'active-pane': !toggleIssues, 'inactive': toggleIssues }">All
                  Issues</span>
              </h3>
            </li>
            <li>
              <h3><span @click="toggle" v-bind:class="{ 'active-pane': toggleIssues, 'inactive': !toggleIssues }">My
                  Issues</span></h3>
            </li>
            </div>
            <li class="search-bar">
              <div>
                <label for="sbar"><img src="../assets/images/search.png"
                      class="sicon" /></label>
                <span><input type="search" name="sbar" id="sbar" v-model="issueSearch"
                    v-on:change="updateSearches($event)"></span>
                </div>
              <select v-on:change="changeRoute($event)">
                <option v-for="issue in searchIssues" :key="issue._id" class="issue" v-bind:value="issue._id">
                  {{ issue.title }}
                </option>
              </select>
            </li>
          </ul>

          <div v-if="!toggleIssues">
            <div v-for="issue in issues" :key="issue._id" class="issue">
              <router-link :to="'/Issue?id=' + issue._id" class="link">
                <h4>{{ issue.title }}</h4>
              </router-link>
              <p>Created By {{ issue.author.username }} at {{ issue.createdAt.substring(0, 10) }}</p>

            </div>

          </div>
          <div v-if="toggleIssues">
            <div v-for="issue in myIssues" :key="issue._id" class="issue">
              <div>
                <router-link :to="'/Issue?id=' + issue._id" class="link">
                  <h4>{{ issue.title }}</h4>
                </router-link>
                <p>Created at {{ issue.createdAt.substring(0, 10) }}</p>
              </div>
              <div class="icons">
                <span v-if="issue.resolved" class="check-span"><img src="../assets/images/check-mark.png"
                    class="check" /></span>
                <span class="del-span" @click="deleteIssue(`${issue._id}`)"><img class="del"
                    src="../assets/images/delete.png" /></span>
                <span v-if="!issue.resolved" class="edit-span"><router-link :to="'/edit-issue?id=' + issue._id"
                    class="bton"><img src="../assets/images/edit.png" class="edit" /></router-link></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="container">
      <div class="issue-container">
        <router-link to="/create_issue" class="bton">+ New Issue</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/home.css";
import VueJwtDecode from "vue-jwt-decode";
import swal from 'sweetalert';

export default {
  data() {
    return {
      user: {},
      issues: [],
      myIssues: [],
      searchIssues: [],
      toggleIssues: false,
      issueSearch: ""
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
        let response=await this.$http.get("/api/issue/all-issues");
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
        let response=await this.$http.post("/api/issue/my-issues",{username: this.user.name});
        if(response.data.Issues.length>=1) this.myIssues=response.data.Issues;
      }
      catch(err) {
        console.log(err);
      }
    },

    async deleteIssue(id) {
      try {
        let response=await this.$http.delete(`/api/issue/delete-issue?id=${id}`);
        if(response.status===201)
          this.getMyIssues();
      }
      catch(err) {
        console.log(err.message);
      }
    },

    changeRoute(e) {
      this.$router.push(`/Issue?id=${e.target.value}`);
    },

    updateSearches(e) {
      console.log(e.target.value);
      this.searchIssues=[];
      this.searchIssues=this.issues.filter(function(issue) {
        return issue.title.includes(e.target.value);
      });
    }
  },

  created() {
    this.getUserDetails();
    this.getAllIssues();
    this.getMyIssues();
  },

};
</script>