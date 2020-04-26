<template>
  <div>
    <TalkLists
      @change="change"
      :total="getCommentTotal"
      :pageSize="getPageSize"
      :data="getComment"
    />
  </div>
</template>

<script>
import TalkLists from "./TalkLists";

export default {
  name: "Talk",

  components: {
    TalkLists
  },

  computed: {
    // 从仓库得到留言数据
    getComment() {
      return this.$store.state.comment.data;
    },
    // 从仓库得到留言总数
    getCommentTotal() {
      return this.$store.state.comment.total;
    },
    // 从仓库得到页容量
    getPageSize() {
      return this.$store.state.comment.pageSize;
    }
  },

  methods: {
    // 改变页码，重新获取数据
    change(num) {
      this.$store.commit("comment/updateState", { page: num });
      const loading = this.loading();
      this.againData().then(() => loading.close());
    },
    // 重新获取数据
    againData() {
      return this.$store.dispatch("comment/getComment");
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
      title: "Talk",
      note: "Technical exchange area"
    });
  },

  mounted() {
    // 初始化页码
    this.$store.commit("comment/updateState", { page: 1 });
    // 获取留言数据
    this.$store.dispatch("comment/getComment");
  }
};
</script>

<style></style>
