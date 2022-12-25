<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci">
				<h1 class="text-center">Create a new Issue</h1>
				<form class="border border-primary p-5" style="margin-top:70px;height:auto;padding-top:2rem !important;"
					submit.prevent="handleSubmitForm">
					<label for="title">Title </label>
					<input class="form-control" type="text" name="title" id="title" required v-model="issue.title" placeholder="Enter issue title">

					<label for="desc">Description</label>
					<textarea class="form-control" name="desc" id="desc" cols="60" rows="10" placeholder="Describe your issue in detail."
						resize="vertical" required v-model="issue.desc">
					</textarea>

					<center>
						<button class="btn btn-primary btn-block w-50 my-4">Create Issue</button>
					</center>
				</form>
			</div>
		</div>
	</div>

</template>

<script>
import swal from 'sweetalert';
import "../assets/createIssue.css";

export default {
	data() {
		return {
			issue: {
				title: "",
				desc: "",
			}
		}
	},

	methods: {
		async handleSubmitForm() {
			try {
				let response=await this.$http.post("/issue/create-issue",this.issue);
				if(response.data) {
					swal("Success","Issue was created");
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
		}
	}
}
</script>