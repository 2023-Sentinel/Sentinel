<template>
  <div style="margin: 0 auto; height: 80vh; width: 80vw">
    <h3> 게시판 글쓰기 </h3>
    <br>
    <div class="board-waring-text"> ※ 음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민, 형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]</div>
    <br>
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


    <button @click="writeArticle" type="button" class="btn btn-outline-primary me-2">Save</button>
    <button v-on:click="$router.replace('/TestBoard')"
            type="button" class="btn btn-primary me-2">Back
    </button>

<!--    분홍색 버튼 -->
<!--      <button @click="writeArticle"-->
<!--              type="button" class="btn btn-secondary"> Save-->
<!--      </button>-->
<!--      <button v-on:click="$router.replace('/TestBoard')"-->
<!--              type="button" class="btn btn-secondary"> Back-->
<!--      </button>-->

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
            console.log("postArticle", res);
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
.board-waring-text{
  font-size: 2pt;
}
</style>