<template>
  <div class="container">
    <p><span>{{ total }}</span> 评论</p>
    <div>
      <CommentItem v-for="item in data" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";

export default {
  name: "Comments",
  props: {
    data:{
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  components: {
    CommentItem
  }
};
</script>

<style scoped>
.container span {
  font-size: 18px;
  font-weight: bold;
}
.container p {
  color: #333;
}
</style>
