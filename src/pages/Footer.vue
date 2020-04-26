<template>
  <div class="footer">
    © 2020 ChenJianHui - 个人博客 <a href="http://beian.miit.gov.cn/">粤ICP备20010437号</a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer{
    background: #333;
    height: 100px;
    color: #fff;
    line-height: 100px;
    text-align: center;
    width: 100%;
}
a:hover{
    color: rgba(255,255,255,.8)
}
</style>
