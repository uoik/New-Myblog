<template>
  <div class="blogroll">
    <i class="el-icon-document-delete"></i>
    <p>暂无友情链接</p>
  </div>
</template>

<script>
export default {
  name: "Friends",
  created() {
    // 更新头部信息
    this.$store.commit("siteInfo/modifyTitle", {
      title: "Blogroll",
      note: "Hang in there and you'll get something"
    });
  }
};
</script>

<style scoped>
.blogroll{
  height: 100%;
  text-align: center;
  vertical-align: middle;
  color: #333;
}
.blogroll > i{
  font-size: 100px;
}
</style>
