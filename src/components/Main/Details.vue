<template>
  <div class="container" v-if="result" v-html="result.content">
    <mavon-editor />
  </div>
</template>

<script>

export default {
  name: "Details",

  data() {
    return {
      result: null
    };
  },

  watch: {
    $route(to) {
      const id = to.params.id;
      this.getBlogId(id);
    }
  },

  methods: {
    async getBlogId(id) {
      const result = await this.$store.dispatch("blog/getBlogById", id);
      this.result = result[0];
      this.result.time = new Date(this.result.ctime * 1000).toDateString();
      // 更新头部信息
      this.$store.commit("siteInfo/modifyTitle", {
        title: this.result.title,
        note: `Posted by ChenJianHui on ${this.result.time}`
      });
    }
  },

  mounted() {
    const id = this.$route.params.id;
    this.getBlogId(id);
  }
};
</script>

<style scoped>
.container{
  padding-left: 60px;
}
.container img{
  width: 100%;
}
</style>
