<template>
  <div class="container body">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 register">
        <h1>Register to <span id="title">Issues_Page</span></h1>
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="registerUser"
        >
          <input
            type="text"
            id="name"
            class="form-control mb-5"
            placeholder="Name"
            v-model="register.name"
            required
          />
          <input
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="register.email"
            required
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="register.password"
          />
          <p>
            Already have an account? <router-link to="/"
              >Login</router-link
            >
            <!-- Create account button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                Create Account
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import "../../assets/register.css";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/api/user/register", this.register);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/home");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>