<template>
  <div class="display">
    <display :id= issue_id />
  </div>
</template>
<script>
import display from "@/components/DisplayIssue";
export default {
 data(){
  return {
    issue_id : ''
  }
 },
  components: {
    display
  },
  created(){
    this.issue_id = window.location.search.substring(4);
  }
};
</script>