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
		<div class="inner">
			<div class="is">
				<h2>{{ issue.title }}</h2>
				<p>{{ issue.desc }}</p>
				<span class="time-tag">Created by {{ issue.author.username }} at {{ issue.createdAt.substring(0, 10) }}</span>
			</div>

			<div v-for="comment in issue.comments" v-bind:key="comment._id">
				<div class="comment">
					<h4>{{ comment.text }}</h4>
					<p>Posted by {{ comment.author.username }}</p>
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

				<button @click="postComment" class="btn btn-primary btn-block w-25 my-4 com">Add Comment</button>
			</div>
			<div class="btons">
			<button v-if ="!isIssueResolved" @click = "markResolved" class="btn btn-primary btn-block w-25 my-4 rs">Mark as Resolved</button>
			<button v-if="!allowComment && !issue.resolved" @click="addComment" class="btn btn-primary btn-block w-25 my-4 com">New
				Comment</button>
			</div>
		</div>
	</div>
</template>

<script>
import "../assets/displayIssue.css";
import Editor from '@tinymce/tinymce-vue';
import swal from 'sweetalert';
import VueJwtDecode from "vue-jwt-decode";

export default {
	props: ['id'],

	data() {
		return {
			user : {},
			issue: {},
			allowComment: false,
			comment: {
				text: "",
				author: {
					id: "",
					username: ""
				}
			},
			isIssueResolved : false
		}
	},

	methods: {
		getUserDetails() {
      let token=localStorage.getItem("jwt");
      let decoded=VueJwtDecode.decode(token);
      this.user=decoded;
    },

		async getIssueDetails() {
			try {
				let response=await this.$http.get(`/issue/Issue?id=${this.id}`);
				this.issue=response.data.Is;
				this.isIssueResolved = this.issue.resolved;
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


		checkIssuesOwnerShip(){
			return (this.user._id === this.issue.author.id)
		},

		async markResolved(){
			if(this.checkIssuesOwnerShip())
			{	this.issue.resolved = true;
				this.updateIssue();
				swal("Success" , "Issue marked resolved" , "success");
			}
			else swal("Error" , "You are not the author of this Issue" , "error");
			this.$router.push("/home");
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
		this.getUserDetails();
		this.getIssueDetails();
		this.checkIssuesOwnerShip();
	}
}
</script>