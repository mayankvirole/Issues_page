<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark navi">
			<div class="container">
				<router-link to="/home" class="home">Home</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
			</button>
			</div>
		</nav>
		<div class="is">
			<h2>{{ issue.title }}</h2>
			<p>{{ issue.desc }}</p>
		</div>
	</div>
</template>

<script>
import "../assets/displayIssue.css";

export default {
	props: ['id'],

	data() {
		return {
			issue: {}
		}
	},

	methods: {
		async getIssueDetails() {
			try {
				let response=await this.$http.get(`/issue/Issue?id=${this.id}`);
				this.issue=response.data.Is;
			}
			catch(err) {
				console.log(err.message);
			}
		}
	},

	created() {
		this.getIssueDetails();
	}
}
</script>