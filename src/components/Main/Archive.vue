<template>
  <div>
    <ArchiveMap v-if="getAllBlog" :data="getAllBlog" />
  </div>
</template>

<script>
import ArchiveMap from "./ArchiveMap";

export default {
  name: "Archive",
  components: {
    ArchiveMap
  },
  computed: {
    getAllBlog(){
      return this.$store.state.blog.AllBlog;
    }
  },
  created() {
    // 更新头部信息
    this.$store.commit("siteInfo/modifyTitle", {
      title: "Navigation",
      note: "Here is the information you need"
    });
  },
  mounted(){
    // 请求全部博客
    this.$store.dispatch('blog/getAllBlog');
  }
};
</script>

<style></style>
