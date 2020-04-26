<template>
  <div class="wrap" id='edit'>
    <div class="input">
      <input v-model="name" placeholder="昵称" type="text" />
      <input v-model="email" placeholder="邮箱" type="email" />
    </div>
    <div class="edit">
      <textarea v-model="content" placeholder="欢迎留言交流"> </textarea>
    </div>
    <div class="btn-container">
      <div></div>
      <div>
        <button @click="change()" class="btn">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      name: "",
      email: "",
      content: ""
    };
  },
  methods: {
    /**
     * 留言
     */
    change() {
      if (this.verifyIsNull()) {
        //   发送网络请求
        const datas = {
          name: this.name,
          email: this.email,
          content: this.content
        };
        const commentInfo = this.$store.state.comment.commentInfo;
        // 更新数据
        this.$store.commit("comment/updateState", {
          commentInfo: {
            ...commentInfo,
            ...datas
          }
        });
        // 发送请求
        const result = this.$store.dispatch("comment/addComment");
        result.then(data => {
          if (data) {
            this.$message({
              message: "提交成功",
              type: "success",
              duration: 1000
            });
            this.name = '';
            this.email = '';
            this.content = '';
          }
        });
      }
    },
    /**
     * 验证数据是否为空和邮箱是否正确
     */
    verifyIsNull() {
      if (!this.name || !this.email || !this.content) {
        this.$message({
          message: "内容不可为空，请重新检查后提交",
          type: "error",
          duration: 1000
        });
        return false;
      }
      if (!/[\w]+@[\w]+\.[\w]+/.test(this.email)) {
        this.$message({
          message: "邮箱格式错误，请重新填写",
          type: "error",
          duration: 1000
        });
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
.wrap {
  margin: 20px 0;
  padding: 15px 10px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
}
.input {
  display: flex;
}
.input input {
  box-sizing: border-box;
  padding: 10px 0;
  width: 50%;
  border: none;
  border-bottom: 1px dashed #bfbfbf;
  outline: none;
}
.input input:focus {
  border-bottom-color: #eb5055;
}
.edit {
  margin: 20px 0;
}
.edit textarea {
  width: 100%;
  min-height: 8.75em;
  outline: none;
  background: transparent;
  border: none;
  font: 400 13.3333px Arial;
}
.btn-container {
  display: flex;
  justify-content: space-between;
}
.btn {
  box-sizing: border-box;
  color: #313131;
  background: #ededed;
  border-radius: 0.3em;
  padding: 8px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ededed;
}
.btn:hover {
  background: #fff;
  color: #3090e4;
  border-color: #3090e4;
}
</style>
