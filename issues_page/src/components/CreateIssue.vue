<template>
	<div class="container">
		<div class="row">
			<h3 class="text-center">Create a new Issue</h3>
			<form @submit.prevent="handleSubmitForm">
				<label for="title">
					<input type="text" name="title" id="title" required v-model="issue.title" placeholder="Enter issue title">
				</label>
				<label for="desc">
					<textarea name="desc" id="desc" cols="30" rows="5" placeholder="Describe your issue in detail."
						resize="vertical" required v-model="issue.desc">
					</textarea>
				</label>
				<button>Create Issue</button>
			</form>
		</div>
	</div>

</template>

<script>
import swal from 'sweetalert';
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