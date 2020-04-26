<template>
  <div class="intro">
    <h3>{{ datas.title }}:</h3>
    <ul>
      <li v-for="item in datas.intros" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Chunk',
    props: ['datas']
};
</script>

<style scoped>
.intro{
    padding-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;
}
.intro h3{
    color: gray;
}
.intro ul li{
    color:#404040;
    line-height: 2;
}
</style>
