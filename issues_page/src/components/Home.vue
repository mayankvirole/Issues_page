<template>
  <div class="hello">
    <h1>Home page</h1>
  </div>
</template>

<script>
  import axios from "axios";
  const BASE_PATH = process.env.BASE_PATH;
  export default {
    name: 'IssuesList',
    data(){
      return {
        issuesList : []
      };
    },
    created (){
      axios.get( `${BASE_PATH}`)
        .then(response => {
          this.issuesList = response.data;
          console.log('connected to backend');
        })
        .catch( error => {
          alert(error.message);
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
