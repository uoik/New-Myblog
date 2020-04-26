<template>
  <div class="tags">
    <p>标签</p>
    <div>
      <a @click='change(item.tag)' v-for="item in tags" :key="item.id">{{ item.tag }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  methods: {
    change(tag){
      this.$emit('change', tag);
    }
  }
};
</script>

<style scoped>
.tags {
  border-top: 1px solid #ececec;
  padding-bottom: 15px;
}
p {
  color: gray;
  font-weight: bold;
}
a {
  display: inline-block;
  border: 1px solid #bfbfbf;
  color: #bfbfbf;
  border-radius: 999em;
  padding: 0 10px;
  line-height: 24px;
  font-size: 12px;
  text-decoration: none;
  margin: 0 8px 0 0;
  margin-bottom: 6px;
  cursor: pointer;
}
a:hover {
  color: #0085a1;
  border-color: #0085a1;
}
</style>
