<template>
  <div class="container">
    <div class="content">
      <div class="content-v">
        <div class="tag">
          <el-input placeholder="请输入标签，多个标签逗号分割" v-model="tag">
            <template slot="prepend">标签：</template>
          </el-input>
        </div>

        <div class="title">
          <el-input placeholder="请输入文章标题" v-model="title">
            <template slot="prepend">标题：</template>
          </el-input>
        </div>

        <div class="describe">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="文章描述内容"
            v-model="describe"
          >
          </el-input>
        </div>
      </div>

      <div class="mavon">
        <mavon-editor
          ref="md"
          @imgAdd="imgAdd"
          @imgDel="imgDel"
          v-model="content"
          @change="change"
        />
      </div>
      <div id="btn" class="btn">
        <el-button @click="submit" plain>添加博客</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImgs } from "../services/uploadServices";

export default {
  data() {
    return {
      tag: "",
      title: "",
      describe: "",
      content: "",
      html: "",
      img_files: {}
    };
  },
  methods: {
    // 上传图片
    imgAdd(pos, file) {
      this.img_files[pos] = file; // 缓存图片信息
    },

    // 删除图片
    imgDel(pos) {
      delete this.img_files[pos]; // 删除缓存
    },

    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },

    // 提交
    async submit() {
      // 验证数据是否完整
      if (!this.verifyIsNull()) {
        return;
      }

      // 上传图片
      try {
        await this.uploadImg();
      } catch (err) {
        throw new Error(err);
      }

      // 上传博客数据
      const paramObj = {
        title: this.title,
        tag: this.tag,
        content: this.html,
        describe: this.describe
      }
      const result = this.$store.dispatch("blog/addBlog", paramObj);
      result.then(data => {
        if (data) {
          this.$message({
            message: "提交成功",
            type: "success",
            duration: 1000
          });
          this.$router.push("/home");
        }
      })
    },

    // 上传图片
    async uploadImg() {
      const files = this.img_files;
      const result = await uploadImgs(files).then(data => data.result);
      const res = Object.keys(this.img_files);
      res.forEach((item, i) => {
        this.$refs.md.$img2Url(item, result[i]);
      })
    },

    // 验证是否数据是否为空
    verifyIsNull() {
      if (!this.title || !this.tag || !this.describe || !this.html) {
        this.$message({
          message: "内容不可为空，请重新检查后提交",
          type: "error",
          duration: 1000
        });
        return false;
      }
      return true;
    }
  },

  mounted() {
    // 键盘上下操作滚动条
    document.onkeydown = key => {
      if (key.keyCode === 38) {
        scrollBy(0, -30);
      } else if (key.keyCode === 40) {
        scrollBy(0, 30);
      } else {
        return;
      }
    };

    // 更新头部信息
    this.$store.commit("siteInfo/modifyTitle", {
      title: "博客编辑页",
      note:
        "The great use of a life is to spend it for something that outlasts it"
    });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background: rgba(0, 0, 0, 0.1);
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1170px;
}

.content-v {
  text-align: center;
  width: 720px;
}
.tag {
  width: 500px;
  margin-bottom: 15px;
}
.title {
  width: 610px;
  margin-bottom: 15px;
}
.describe {
  margin-bottom: 15px;
}
.mavon {
  width: 100%;
}
.btn {
  text-align: right;
  margin-top: 10px;
}
</style>
