<template>
  <div>
    <Chunk :datas="intro" />
    <Chunk :datas="instr" />
  </div>
</template>

<script>
import Chunk from "../../Chunk";

export default {
  name: "Intro",
  data() {
    return {
      intro: {
        title: "留言区",
        intros: [
          "如果您对本博客有其它建设性意见",
          "如果您对博客中的文章有其它见解",
          "如果您想分享自己的经验或感悟",
          "如果您在工作中遇到的困惑",
          "这里可以是您提出意见、分享经验、宣泄困惑的地方"
        ]
      },
      instr: {
        title: "说明",
        intros: ["请使用文明用语，感谢配合", "定期回复留言"]
      }
    };
  },
  components: {
    Chunk
  }
};
</script>

<style></style>
