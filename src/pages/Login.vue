<template>
  <div class="container">
    <div class="content">
      <div>
        <el-input v-model="loginUser">
          <template slot="prepend">账号：</template>
        </el-input>
      </div>
      <div>
        <el-input v-model="passWord" show-password>
          <template slot="prepend">密码：</template>
        </el-input>
      </div>

      <div>
        <el-button class="btn" @click="change">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUser: "",
      passWord: "",
    };
  },
  methods: {
    change() {
      if (!this.loginUser || !this.passWord) {
        this.$message({
          message: "账号或密码为空",
          type: "warning",
          duration: 1000,
        });
        return;
      }
      const loginInfo = {
        loginUser: this.loginUser,
        passWord: this.passWord,
      };
      const result = this.$store.dispatch("loginUser/login", loginInfo);
      result.then((data) => {
        if (data == "登录成功") {
          this.$message({
            message: data,
            type: "success",
            duration: 1000,
          });
          this.$router.push("/editBlog");
        } else {
          this.$message({
            message: data,
            type: "error",
            duration: 1000,
          });
        }
      });
    },
  },
  mounted() {
    this.$store.commit("siteInfo/modifyTitle", {
      title: "Login",
      note: "Study hard and you will reap the rewards",
    });

    document.onkeydown = (key) => {
      if (key.keyCode === 13) {
        this.change();
      }
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px 0;
}

.content {
  padding: 20px;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.content div {
  margin: 5px 0;
}

.btn {
  width: 500px;
}
</style>
