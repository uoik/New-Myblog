<template>
  <div>
    <Chunk :datas="main" />
    <Chunk :datas="blog" />
    <Chunk :datas="contact" />
  </div>
</template>

<script>
import Chunk from "../Chunk";
export default {
  name: "About",
  data() {
    return {
      main: {
        title: "关于博主",
        intros: [
          "陈健辉，前端开发爱好者"
        ]
      },
      blog: {
        title: "关于博客",
        intros: [
          "博客定位：专注于前端技术",
          "博客搭建：博客使用Vue框架进行搭建，服务器使用Nodejs搭建，数据库使用MySql"
        ]
      },
      contact: {
        title: "联系博主",
        intros: ["微信账号：MIUI0909", "阿里云邮箱：MIUI0909@aliyun.com"]
      }
    };
  },
  components: {
    Chunk
  },
  created() {
    // 更新头部信息
    this.$store.commit("siteInfo/modifyTitle", {
      title: "About",
      note: "All things in their being are good for something"
    });
  }
};
</script>

<style></style>
