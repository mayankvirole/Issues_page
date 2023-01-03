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

		<div v-for="comment in issue.comments" v-bind:key="comment._id">
			<div class="comment">
				{{ comment }}
			</div>
		</div>

		<div v-if="allowComment" class="addComment">
			<label for="comm"></label>
			<editor 
				api-key="x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw" 
				v-model="comment"
				id="comm" 
				output-format="text" 
				:init="{
					selector: '#comm',
					branding: false,
					height: 300,
					placeholder: 'Enter your comment here.'
				}" />

				<button @click = "postComment">Add Comment</button>
		</div>
		<button @click="addComment">New Comment</button>
	</div>
</template>

<script>
import "../assets/displayIssue.css";
import Editor from '@tinymce/tinymce-vue';

export default {
	props: ['id'],

	data() {
		return {
			issue: {},
			allowComment: false,
			comment : ""
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
		},

		addComment(){
			this.allowComment = !this.allowComment;
		},

		async postComment() {
			try{
				const data = { ...this.issue, comment : this.comment};
				let response = await this.$http.post('/comment/add-comment', data);
				console.log(response);
			}
			catch(err){
				console.log(err.message);
			}
		}
	},

	components: {
		'editor': Editor
	},

	created() {
		this.getIssueDetails();
	}
}
</script>