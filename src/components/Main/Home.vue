<template>
  <div>
    <ArticleLists v-if="getTotal" :data="getBlog" />
    <div class="paging" v-if="getTotal">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="getTotal"
        :page-size="getPageSize"
        @current-change="changePage"
        @prev-click="changePage"
        @next-click="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ArticleLists from "./ArticleLists";

export default {
  name: "Home",
  components: {
    ArticleLists
  },
  computed: {
    // 读取博客数据
    getBlog() {
      return this.$store.state.blog.data;
    },
    getTotal() {
      return this.$store.state.blog.total;
    },
    getPageSize() {
      return this.$store.state.blog.pageSize;
    }
  },
  methods: {
    // 改变页码，重新获取数据
    changePage(num) {
      this.$store.commit("blog/updateState", {
        page: num
      });
      // 加载效果
      const loading = this.loading();
      this.againData().then(() => loading.close());
    },
    // 重新获取数据
    againData() {
      const tag = this.$store.state.blog.tag;
      if (tag) {
        return this.$store.dispatch("blog/getBlogByTag");
      } else {
        return this.$store.dispatch("blog/getBlog");
      }
    },
    // 加载中
    loading() {
      return this.$loading({
        text: "拼命加载中...",
        background: "rgba(0, 0, 0, 0.7)"
      });
    }
  },
  created() {
    // 更新头部信息
    this.$store.commit("siteInfo/modifyTitle", {
      title: "Home",
      note: "Keep on going never give up"
    });
  },
  mounted() {
    // 初始化页码
    this.$store.commit("blog/updateState", { page: 1 });
    // 按页获取博客
    this.$store.dispatch("blog/getBlog");
  }
};
</script>

<style>
.paging {
  display: flex;
  justify-content: center;
}
</style>
