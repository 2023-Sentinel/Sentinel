<template>
  <div style="margin: 0 auto; height: 80vh; width: 80vw">
    <!-- 게시판 UI는 좋은 것 갖다쓸까 -->
    <br><br><br><br>
    <div class="card text-white bg-secondary mb-3" style="max-width: 55rem;">
      <div class="card-header">#{{ article.id }}&emsp;|&emsp;{{ String(article.date).split("T")[0] }}</div>
      <div class="card-body">
        <h4 class="card-title">{{ article.title }}</h4>
        <p class="card-text">{{ article.content }}</p>
      </div>
    </div>
<!--    <p>id : {{ article.id }}</p>-->
<!--    <p>title : {{ article.title }}</p>-->
<!--    <p>content : {{ article.content }}</p>-->
<!--    <p>date : {{ article.date }}</p>-->

    <!--    뒤로가기 버튼-->
    <button v-on:click="$router.replace('/TestBoard')"
            type="button" class="btn btn-secondary">Back
    </button>
  </div>
</template>

<script>

import boardTest from "@/components/boardTest";

export default {
  name: "TestBoardDetail.vue",
  data() {
    return {
      article: "",
    }
  },

  mounted() {
    boardTest.getArticle(this.$route.params.id)
        .then((res) => {
          this.article = res.data;
          console.log("article", res);
        })
        .catch((e) => {
          console.log(e);
        });
  },


}
</script>

<style scoped>

</style>