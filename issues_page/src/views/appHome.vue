<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Home</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logUserOut"> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name : {{ user.name }}</li>
              <li class="list-group-item">Email : {{ user.email }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div v-for="issue in issues" :key="issue._id">{{ issue.title }}</div>
    </section>
    <p class="btn">
      <router-link to="/create_issue">New Issue</router-link>
    </p>
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
      issues: []  
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    async getAllIssues (){
      try{
        let response = await this.$http.get("/issue/all-issues");
        if(response.data){
          this.issues = response.data.Issues;
          console.log(response.data);
        }
      }
      catch(err){
        let error=err.response;
				if(error.status==409) {
					swal("Error",error.data.message,"error");
				} else {
					swal("Error",error.data.err.message,"error");
				}
      }
    }
  },
  created() {
    this.getUserDetails();
    this.getAllIssues();
  }
};
</script>