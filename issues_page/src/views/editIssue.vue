<template>
  <div class="edit_issue">
    <edit :id=issue_id />
  </div>
</template>
<script>
import edit from "@/components/EditIssue";
export default {
  data() {
    return {
      issue_id: ''
    }
  },
  components: {
    edit
  },
  created() {
    this.issue_id=window.location.search.substring(4);
  }
};
</script>