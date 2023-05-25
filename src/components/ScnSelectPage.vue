<!--<template>-->
<!--    <div class="listWrapper">-->
<!--        <div v-for="(el, index) in scnData" :key="index" class="list">-->
<!--            &lt;!&ndash; 페이지 이동 라우터 &ndash;&gt;-->
<!--            <router-link :to="'/Dashboard/' + el.number">{{ el.title }}</router-link>-->
<!--            <p>{{ el.date }}</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <router-view :el="el"></router-view>-->
<!--</template>-->


<template>
    <div class="container">
        <br><br><br><br>
<!--        <div class="common-buttons">-->
<!--            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>-->
<!--        </div>-->
<!--        <div class="w3-container">-->
        <table class="table table-hover w3-border w3-centered" style="margin: 0 auto; width: 60vw">
            <thead>
            <tr class="table-primary" >
                <th scope="row">No</th>
                <th scope="row">시나리오 제목</th>
                <th scope="row">작성 시간</th>
            </tr>
            </thead>
            <tbody>
            <tr class="w3-hover-red" v-for="(item, idx) in list" :key="idx">
                <td class="table-dark w3-border">{{ item.id }}</td>

                <td class="table-dark w3-border"><a v-on:click="$router.push('/Dashboard/' + item.id)">{{ item.title }}</a></td>
                <td class="table-dark w3-border">{{ String(item.createdAt).split("T")[0] }}</td>
            </tr>
            </tbody>
        </table>
<!--        </div>-->
<!--        <div clas="list-view" v-for="(item, index) in list" :key="index">-->
<!--            <span class="title-view">{{item.title}}</span>-->
<!--        </div>-->

    </div>
</template>

<script>
// import SideBar from "@/components/SideBar.vue"
// import scnData from "@/components/scnData";

export default {
  // components: {SideBar},
    data() { //변수생성
        return {
            requestBody: {}, //리스트 페이지 데이터전송
            list: {}, //리스트 데이터
            no: '', //게시판 숫자처리

        }
    },
    mounted() {
        this.fnGetList()
    },
    methods: {
        // scnData() {
        //     return scnData
        // },
        fnGetList() {
            // this.requestBody = { // 데이터 전송
            //     keyword: this.keyword,
            //     page: this.page,
            //     size: this.size
            // }

            this.$axios.get("/api/dashboards/list", {
                headers: {}
            }).then((res) => {
                this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
                console.log("Success");
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
    }
}
</script>



<!--<script setup>-->
<!--import scnData from "@/components/scnData";-->
<!--</script>-->