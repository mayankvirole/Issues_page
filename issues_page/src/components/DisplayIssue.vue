<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark navi">
			<div class="container">
				<router-link to="/home" class="home">Home</router-link>
				<ul class="navbar-nav">
					<li class="user-tag nav-item active">Hi! {{ issue.author.username }}</li>
					<li class="nav-item active">
						<a class="logout" @click="logUserOut"> Logout</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="inner">
			<div class="is">
				<h2>{{ issue.title }}</h2>
				<p>{{ issue.desc }}</p>
			</div>

			<div v-for="comment in issue.comments" v-bind:key="comment._id">
				<div class="comment">
					<h4>{{ comment.text }}</h4>
					<h4>Posted by {{ comment.author.username }}</h4>
				</div>
			</div>

			<div v-if="allowComment" class="addComment">
				<label for="comm"></label>
				<editor api-key="x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw" v-model="comment.text" id="comm"
					output-format="text" :init="{
	selector: '#comm',
	branding: false,
	height: 300,
	placeholder: 'Enter your comment here.'
}" />

				<button @click="postComment" class="btn btn-primary btn-block w-25 my-4">Add Comment</button>
			</div>
			<button v-if="!allowComment" @click="addComment" class="btn btn-primary btn-block w-25 my-4">New Comment</button>
		</div>
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
			comment: {
				text: "",
				author: {
					id: "",
					username: ""
				}
			}
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

		addComment() {
			this.allowComment=!this.allowComment;
		},

		async postComment() {
			try {
				this.comment.author=this.issue.author;
				let response=await this.$http.post('/comment/add-comment',this.comment);
				this.issue.comments.push(response.data.data);
				this.updateIssue();
				this.addComment();
			}
			catch(err) {
				console.log(err.message);
			}
		},

		async updateIssue() {
			try {
				let response=await this.$http.put('/issue/update-issue',this.issue);
				console.log("response =>",response);
			}
			catch(err) {
				console.log(err.message);
			}
		},

		logUserOut() {
			localStorage.removeItem("jwt");
			this.$router.push("/");
		},
	},

	components: {
		'editor': Editor
	},

	created() {
		this.getIssueDetails();
	}
}
</script>