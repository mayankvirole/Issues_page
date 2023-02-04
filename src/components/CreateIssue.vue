<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark navi">
			<div class="container">
				<router-link to="/home" class="home">Issues Page</router-link>
				<ul class="navbar-nav">
					<li class="res-link"><router-link to="/resolved-issues">Resolved Issues</router-link></li>
					<li class="nav-item active">
						<a class="logout" @click="logUserOut"> Logout</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci">
					<h1 class="text-center">Create a new Issue</h1>
					<form class="border border-primary p-5" @submit.prevent="handleSubmitForm">
						<label for="ti">Title </label>
						<input class="form-control" type="text" name="title" id="ti" required v-model="issue.title"
							placeholder="Enter issue title">

						<label for="desc">Description</label>
						<editor api-key="x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw" plugins="code lists" v-model="issue.desc"
							id="desc" output-format="text" :init="{
								selector: '#desc',
								branding: false,
								width: auto,
								height: 300,
								placeholder: 'Describe your issue in detail here.'
							}" />

						<!-- <label for="image">
							Related Image :
						</label>
						<input type="file" name="files" id="image" multiple @change="getFiles($event)" /> -->
						<center>
							<button class="btn btn-primary btn-block w-50 my-4" type="submit">Create Issue</button>
						</center>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import swal from 'sweetalert';
import "../assets/createIssue.css";
import Editor from '@tinymce/tinymce-vue';
import VueJwtDecode from "vue-jwt-decode";

export default {
	data() {
		return {
			issue: {
				title: "",
				desc: "",
				author: {
					id: "",
					username: ""
				},
				images: []
			},
			// files: null
		}
	},

	methods: {
		async handleSubmitForm() {
			try {
				this.handleUpload(this.files);
				let response=await this.$http.post("api/issue/create-issue",this.issue);
				if(response.data) {
					swal("Success","Issue was created","success");
					this.$router.push("/home");
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
		generateAuth() {
			let token=localStorage.getItem("jwt");
			let decoded=VueJwtDecode.decode(token);
			this.issue.author.id=decoded._id;
			this.issue.author.username=decoded.name;
		},

		// async handleUpload(files) {
		// 	let res=await this.$http.post("/api/issue/upload",files);
		// 	console.log(res);
		// },

		// getFiles(e){
		// 	this.files = e.target.files;
		// },

		logUserOut() {
			localStorage.removeItem("jwt");
			this.$router.push("/");
		}
	},
	components: {
		'editor': Editor
	},
	created() {
		this.generateAuth();
	}
}
</script>