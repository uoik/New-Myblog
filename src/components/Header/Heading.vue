<template>
  <div class="container">
    <div :class="getClass ? 'details' : 'ordinary'">
      <div class="title">{{ getTitle }}</div>
      <div class="note">{{ getNote }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  computed: {
    getTitle() {
      return this.$store.state.siteInfo.title;
    },
    getNote() {
      return this.$store.state.siteInfo.note;
    },
    getClass() {
      return this.$route.name === "Details";
    }
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 1170px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ordinary,
.details {
  text-align: center;
  width: 750px;
  padding-top: 90px;
  flex-direction: column;
}
.title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 15px;
}

.details {
  text-align: left;
}
.details .note {
  font-style: italic;
  font-family: Lora, "Times New Roman", serif;
  font-size: 20px;
}
</style>
