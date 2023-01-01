<template>
	<div class="issue">
		<h2>{{ issue.title}}</h2>
		<p>{{ issue.desc }}</p>
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