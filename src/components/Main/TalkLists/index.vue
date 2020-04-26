<template>
  <div>
    <Intro />
    <Editor />
    <Comments v-if="data" :total="total" :data="data" />
    <div class="paging">
      <el-pagination 
        background 
        layout="prev, pager, next" 
        :total="total"
        :page-size='pageSize'
        @current-change='changePage'
        @prev-click='changePage'
        @next-click='changePage'
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Intro from "./Intro";
import Editor from "./Editor";
import Comments from "./Comments";

export default {
  name: "TalkLists",
  components: {
    Intro,
    Editor,
    Comments
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 5
    }
  },
  methods:{
    changePage(num){
      this.$emit('change', num);
    }
  }
};
</script>

<style>
.paging{
  display: flex;
  justify-content: center;
}
</style>
