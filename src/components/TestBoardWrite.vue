<template>
  <div style="margin: 0 auto; height: 80vh; width: 80vw">
    <h3> 게시글 작성 </h3>
    <div class="form-floating">
      <input v-model="title" class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
      <label for="floatingTextarea">제목</label>
    </div>
    <br>
    <div class="form-floating">
      <input v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px">
      <label for="floatingTextarea2">내용</label>
    </div>
    <br>
    <button @click="writeArticle"
            type="button" class="btn btn-secondary"> Save
    </button>

    <button v-on:click="$router.replace('/TestBoard')"
            type="button" class="btn btn-secondary"> Back
    </button>
  </div>
</template>

<script>
import boardTest from "@/components/boardTest";

export default {
  name: "TestBoardWrite",
  data() {
    return {
      title: "",
      content: "",
    }
  },

  methods: {
    writeArticle() {
      if (!this.title || !this.content) {
        this.$message.error("제목과 본문을 작성해주세요.");
        return;
      }

      boardTest
          .postArticle(this.title, this.content)
          .then((res) => {
            console.log("postArticle",res);
            this.$router.push({path: "/TestBoard"}); // 루트로 이동
          })
          .catch((e) => {
            console.log(e);
            this.$message.error("게시물 작성 중 에러가 발생하였습니다.")
          })
    }
  }
}
</script>

<style scoped>

</style>