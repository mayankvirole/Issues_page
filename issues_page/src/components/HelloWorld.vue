<template>
  <div class="hello">
    <h1>Hello sirs and madames</h1>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'IssuesList',
    data(){
      return {
        issuesList : []
      };
    },
    created (){
      axios.get( `http://localhost:3000/`)
        .then(response => {
          this.issuesList = response.data;
          console.log(this.issuesList);
        })
        .catch( error => {
          alert(error.message);
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
