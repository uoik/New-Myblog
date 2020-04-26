<template>
    <div class="header">
      <Meun />
      <Heading />
    </div>
</template>

<script>
import Meun from '../components/Header/Meun'
import Heading from '../components/Header/Heading'

export default {
  name: "Header",
  components: {
    Meun,
    Heading
  }
};
</script>

<style scoped>
.header{
  background: #333;
  height: 400px;
  color: #fff;
}
</style>
