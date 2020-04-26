<template>
  <div class="container">
    <div class="item">
      <img :src="getUrl" alt="" />
      <div class="vcontent">
        <div class="name">
          {{ item.name }}
          <span v-if="item.parent_name">@{{ item.parent_name }}</span>
        </div>
        <div class="time-vat">
          <span class="time">{{ item.time }}</span
          ><span @click='handleClick(item)' class="vat">回复</span>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
    </div>
    <div class="children" v-if="item.children.length !== 0">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item>
          <template slot="title">
            <div class="collapse">{{ title }}</div>
          </template>
          <CommentItem v-for="i in item.children" :key="i.id" :item="i" />
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import T1 from "../../../assets/001.jpg";
import T2 from "../../../assets/002.jpg";
import T3 from "../../../assets/003.jpg";
import T4 from "../../../assets/004.jpg";
import T5 from "../../../assets/005.jpg";

export default {
  name: "CommentItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgs: [T1, T2, T3, T4, T5],
      activeNames: ["1"],
      title: "展开留言..."
    };
  },
  computed: {
    getUrl() {
      let i = this.item.name.length % this.imgs.length;
      return this.imgs[i];
    }
  },
  methods: {
    // 折叠面板标题
    handleChange(val) {
      if (val[1]) {
        this.title = "折叠";
      } else {
        this.title = "展开留言...";
      }
    },
    handleClick(item){
      // 跳转锚点
      document.querySelector('#edit').scrollIntoView(false);
      const datas = {
        fatherId: item.id,
        parentName: item.name,
        isChildren: 1
      }
      const commentInfo = this.$store.state.comment.commentInfo;
      this.$store.commit('comment/updateState', {
        commentInfo: {
          ...commentInfo,
          ...datas
        }
      })
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.item {
  display: flex;
}
.item img {
  width: 50px;
  height: 50px;
  border: 1px solid #f5f5f5;
  border-radius: 50%;
}
.vcontent {
  width: 100%;
  margin: 0 0 20px 10px;
}
.name {
  color: #1abc9c;
}
.time-vat {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 12px;
}
.vat {
  color: #ef2f11;
  font-size: 14px;
  cursor: pointer;
}
.content {
  padding: 20px 0;
  color: #4a4a4a;
  line-height: 2;
  font-size: 14px;
  border-bottom: 1px solid #e2e1e1;
}

.children {
  padding-left: 60px;
  box-sizing: border-box;
}

.collapse {
  width: 100%;
  text-align: center;
  color: #bfbfbf;
}
</style>
