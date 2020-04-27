<template>
  <div class="main">
    <div class="row">
      <div class="content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
      <div class="side">
        <Tag v-if="getAllTag" @change="change" :tags="getAllTag" />
        <HotArticle v-if="getHotBlog" :data="getHotBlog" />
        <NewInfo v-if="getNewComment" :data="getNewComment" />
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Side/Tag";
import HotArticle from "../components/Side/HotArticle";
import NewInfo from "../components/Side/NewInfo";

export default {
  name: "Main",

  components: {
    Tag,
    HotArticle,
    NewInfo,
  },

  computed: {
    // 从仓库得到全部标签
    getAllTag() {
      return this.$store.state.tag.tags;
    },
    // 从仓库得到热门文章
    getHotBlog() {
      return this.$store.state.blog.HotBlog;
    },
    // 从仓库得到最新留言
    getNewComment() {
      return this.$store.state.comment.newComment;
    },
  },

  methods: {
    // 点击事件
    change(param) {
      if (this.$route.path !== "/home") {
        this.$router.push("/home");
      }
      // 设置tag
      this.$store.commit("blog/updateState", { tag: param });
      const loading = this.loading();
      // 请求数据
      this.againData().then(() => loading.close());
    },
    // 重新获取数据
    againData() {
      return this.$store.dispatch("blog/getBlogByTag");
    },
    // 加载中
    loading() {
      return this.$loading({
        text: "努力加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
    },
  },

  mounted() {
    // 获取全部标签
    this.$store.dispatch("tag/queryAllTag");

    // 获取热门文章
    this.$store.dispatch("blog/HotBlog");

    // 获取最新留言
    this.$store.dispatch("comment/NewComment");
  },
};
</script>

<style scoped>
.main {
  position: relative;
}
.row {
  display: flex;
  justify-content: space-between;
  width: 1170px;
  margin: 20px auto;
}
.content {
  width: 780px;
  margin: 20px 10px;
  padding-left: 50px;
}
.side {
  width: 290px;
  margin: 20px 10px;
}
</style>
