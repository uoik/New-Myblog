<template>
  <div>
    <div class="title">Blogs</div>
    <ArchiveItem v-for="item in data" :key="item.id" :item='item' />
  </div>
</template>

<script>
import ArchiveItem from "./ArchiveItem";

export default {
  name: "ArchiveMap",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    ArchiveItem
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
  color: #333;
  padding: 0 0 20px;
  border-bottom: 1px solid #eee;
}
</style>
