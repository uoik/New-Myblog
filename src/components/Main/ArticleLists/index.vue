<template>
  <div>
    <ArticleItem v-for="item in data" :key="item.id" :item='item'/>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";

export default {
  name: "ArticleLists",
  components: {
    ArticleItem
  },
  props:{
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
