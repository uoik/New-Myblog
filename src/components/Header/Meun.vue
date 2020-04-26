<template>
  <div class="container">
    <div class="left">
      <router-link to="/editBlog">EditBlog</router-link>
    </div>
    <div class="right">
      <router-link to="/home">首页</router-link>
      <router-link to="/archive">目录</router-link>
      <router-link to="/talk">留言区</router-link>
      <router-link to="/about">关于我</router-link>
      <router-link to="/friends">链接</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meun"
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  min-height: 64px;
  line-height: 64px;
}
.left a {
  font-weight: 900;
  font-size: 18px;
  padding: 20px;
}
.right a {
  font-size: 12px;
  font-weight: bold;
  padding: 20px;
}
a:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>
