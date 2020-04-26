<template>
  <div class="container">
    <h1 class="title">
      <router-link :to="'/details/' + item.id">{{ item.title }}</router-link>
    </h1>
    <div class="describe">
      <router-link :to="'/details/' + item.id">{{ item.describe }}</router-link>
    </div>
    <p>Posted by ChenJianHui on {{ item.time }}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 25px;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 25px;
}
.title {
  margin: 0 0 10px;
}
.title a {
  font-size: 30px;
  font-weight: bold;
  color: #333;
}
.describe a {
  color: #a3a3a3;
  font-style: oblique;
}
.container a:hover {
  color: #0085a1;
}
.container p {
  font-style: italic;
  font-family: Lora, "Times New Roman", serif;
  margin: 8px 0;
  color: gray;
  font-size: 16px;
}
</style>
