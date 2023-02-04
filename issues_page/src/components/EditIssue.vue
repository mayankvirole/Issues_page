<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci">
				<h1 class="text-center">Edit Issue</h1>
				<form class="border border-primary p-5" @submit.prevent="handleSubmitForm">
					<label for="title">Title </label>
					<input class="form-control" type="text" name="title" id="title" required v-model="issue.title" value ="`${issue.title}`">

					<label for="desc">Description</label>
					<editor 
						api-key="x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw" 
						plugins="code lists" 
						v-model="issue.desc"
						id="desc" 
						output-format="text" 
						:init="{
							selector: '#desc',
            branding: false,
						height : 300,
						placeholder : 'Describe your issue in detail here.'
						}" />
					<center>
						<button class="btn btn-primary btn-block w-50 my-4" type="submit">Update Issue</button>
					</center>
				</form>
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
	props: ['id'],
	data() {
		return {
			issue: {
				title: "",
				desc: "",
				author : {
					id : "",
					username : ""
				}
			}
		}
	},

	methods: {
		async handleSubmitForm() {
			try {
				let response = await this.$http.put(`/api/issue/edit-issue?id=${this.id}`,this.issue);
				if(response.data) {
					swal("Success","Issue was updated", "success");
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
		generateAuth(){
			let token = localStorage.getItem("jwt");
			let decoded = VueJwtDecode.decode(token);
			this.issue.author.id = decoded._id;
			this.issue.author.username = decoded.name;
		},
		async getIssueDetails() {
			try {
				let response=await this.$http.get(`/api/issue/Issue?id=${this.id}`);
				this.issue=response.data.Is;
			}
			catch(err) {
				console.log(err.message);
			}
		}
	},
	components: {
		'editor': Editor
	},
	created () {
		this.getIssueDetails();
		this.generateAuth();
	}
}
</script>