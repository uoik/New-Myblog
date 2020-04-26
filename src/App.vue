<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './pages/Header'
import Footer from './pages/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* 设置通用样式 */
html, body{
  padding: 0;
  margin: 0;
}
a{
  color: #fff;
  text-decoration: none;
}
img{
  width: 100%;
}
</style>
