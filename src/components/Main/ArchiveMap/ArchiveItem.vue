<template>
  <div class="archiveItem">
    <span class="time">[{{ item.time }}]</span>
    <router-link :to="'/details/' + item.id"> {{ item.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "ArchiveItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.archiveItem {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.time {
  color: #2424ff;
}
.archiveItem a {
  color: #404040;
}
.archiveItem a:hover {
  color: #0081a1;
}
</style>
