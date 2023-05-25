<template>
    <div style="margin: 0 auto; height: 80vh; width: 80vw">
        <button v-on:click="$router.replace('/TestBoard/write')"
                type="button" class="btn btn-secondary">글쓰기
        </button>
        <br><br>

        <table class="table table-secondary">
            <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in list" :key="idx">
                <td>{{ item.id }}</td>
                <td><a v-on:click="$router.replace('/TestBoard/' + item.id)">{{ item.title }}</a></td>
                <!--      <td><a v-on:click="$router.replace('/TestBoard/' + item.id)">{{ item.title }}</a></td>-->
                <td>{{ String(item.date).split("T")[0] }}</td>
            </tr>
            </tbody>
        </table>
    </div>


</template>

<script>

import boardTest from "@/components/boardTest";

export default {
    data() {
        return {
            list: {}, //리스트 데이터
            list2: {},
            no: '', //게시판 숫자처리
        }
    },
    mounted() {
        boardTest.getArticle(1)
            .then((res) => {
                console.log("getArticle", res);
                this.list2 = res.data;
            })
            .catch((e) => {
                console.log(e);
            });

        boardTest.getArticles(0)
            .then((res) => {
                console.log("getArticles", res);
                this.list = res.data
            })
            .catch((e) => {
                console.log(e);
            });

        // boardTest.postArticle("title","content")
        //     .then(function (response){
        //       console.log("postArticle", response)
        //     })
        //     .catch(function(e){
        //       console.log(e);
        //     });
    },
    methods: {}
}
</script>

<style scoped>
</style>