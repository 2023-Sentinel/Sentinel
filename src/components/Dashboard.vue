<template>
  <div style="margin: 0; height: 80vh; width: 79vw">
    <br>
    <!-- 보드 사이드바 영역 -->
    <button
        class="btn btn-warning"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
    >
      Board Sidebar
    </button>
    <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        ></button>
        <h2 class="offcanvas-title"> Sentinel Board </h2>
        <br><br>
      </div>
      <!-- v-show 조건: !붙이면 됨 -->
      <!-- 글쓰기 기능까지 사이드바에 들어가야하면, v-if를 사용해야함 -->
      <!-- v-show가 true면 목록 table, false면 해당 게시글 보여주기 -->

      <div v-if="isTableNow && isTableNow2" class="offcanvas-body">
        <br>
        <div>
          <button v-on:click="GoBoardWrite()"
                  type="button" class="btn btn-secondary">글쓰기
          </button>
          <br><br>
          <div v-if="issave" class="alert alert-dismissible alert-info">
            <button v-on:click="Alertclose()" type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>게시글 작성완료!</strong> 새로고침하여 게시글을 확인할 수 있습니다. 또는 <a href="http://localhost:3000/#/TestBoard">링크</a>에서
            게시글을 확인하세요.
          </div>
        </div>
        <br><br>
        <div v-cloak>
          <table v-if="!boardlist.hidden" class="table table-secondary">
            <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in boardlist.data" :key="item">
              <td>{{ item.id }}</td>
              <td><a v-on:click="getDetailView(item)">{{ item.title }}</a></td>
              <!--      <td><a v-on:click="$router.replace('/TestBoard/' + item.id)">{{ item.title }}</a></td>-->
              <td>{{ String(item.date).split("T")[0] }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 게시판 detail view -->
      <div v-else-if="!isTableNow" class="offcanvas-body">
        <div>
          <br><br><br>
          <div class="card text-white bg-secondary mb-3" style="max-width: 25rem;">
            <div class="card-header">#{{ article.id }}&emsp;|&emsp;{{ String(article.date).split("T")[0] }}</div>
            <div class="card-body">
              <h4 class="card-title">{{ article.title }}</h4>
              <p class="card-text">{{ article.content }}</p>
            </div>
          </div>
          <button v-on:click="isTableNow=!isTableNow"
                  type="button" class="btn btn-secondary">Back
          </button>
        </div>
      </div>
      <!-- 게시판 Write -->
      <div v-else-if="!isTableNow2" class="offcanvas-body">
        <h3> 게시판 글쓰기 </h3>
        <br>
        <div class="board-waring-text"> ※ 음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민, 형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용
          안내]
        </div>
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

        <button @click="writeArticle" v-on:click="isTableNow2=!isTableNow2" type="button"
                class="btn btn-outline-primary me-2">Save
        </button>

        <button v-on:click="isTableNow2=!isTableNow2"
                type="button" class="btn btn-primary me-2">Back
        </button>
      </div>
    </div>
    <!-- 보드 사이드바 영역 종료 -->
    <!-- 통계 사이드바 영역 -->
    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasStats" role="button"
       aria-controls="offcanvasStats">
      Stats Sidebar
    </a>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
         id="offcanvasStats" aria-labelledby="offcanvasStats">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h2 class="offcanvas-title" style="margin: 0 auto" id="offcanvasStats">Scn Stats</h2>
      </div>
      <div class="offcanvas-body" style="margin: 0 auto">
        <div>
          <!-- 통계 내용 들어갈 부분 -->
          <!-- 1번 차트 -->
          <div class="alert alert-dismissible alert-primary">
            <div style="max-width: 400px; max-height: 250px">
              <vue3-chart-js v-bind="{ ...pieChart }" style="margin: 0 auto"/>
            </div>
          </div>
          <!-- 2번 차트 -->
          <div class="alert alert-dismissible alert-primary">
            <div style="max-width: 400px; max-height: 250px">
              <vue3-chart-js v-bind="{ ...pieChart2}" style="margin: 0 auto"/>
            </div>
          </div>
          <!-- 3번 차트 -->
          <div class="alert alert-dismissible alert-primary">
            <div style="max-width: 400px; max-height: 250px">
              <vue3-chart-js v-bind="{ ...pieChart3}" style="margin: 0 auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 통계 사이드바 영역 종료 -->
    <!--        <button class="custom-btn Aplbutton" type="button"><span>Sidebar</span>-->
    <!--        </button>-->
    <!--        <SideBar></SideBar>-->
    <div class="alert alert-dismissible alert-info" style="height: 65px"><h1 style="text-align: center">Scn Title:
      {{ ttitle }}</h1></div>
    <baklava-editor :plugin="viewPlugin"/>
  </div>
  <router-view></router-view>
</template>

<script>
import {Editor} from '@baklavajs/core'
import {Engine} from '@baklavajs/plugin-engine'
import {ViewPlugin} from '@baklavajs/plugin-renderer-vue3'
import {OptionPlugin} from '@baklavajs/plugin-options-vue3'
import {InterfaceTypePlugin} from '@baklavajs/plugin-interface-types'

import {AtkNode} from '@/assets/AtkNode'
import {RouterNode} from '@/assets/RouterNode'
import {PPLNode} from '@/assets/PPLNode'
import {PCNode} from '@/assets/PCNode'
import {SVNode} from '@/assets/ServerNode'
import {FLNode} from '@/assets/FileNode'
import {AccountNode} from '@/assets/AcntNode'
import {MemoNode} from '@/assets/MemoNode'
// import router from "@/scripts/router"
// import testData from "@/components/testData.json"

//function import
import CustomSidebarOption from "@/assets/CustomSidebarOption"
import TriggerOption from "@/assets/TriggerOption"
import TextareaOption from "@/assets/TextareaOption"
// import SideBar from "@/components/SideBar.vue";
import {CustomNode} from "@/assets/CTypeNode";
import boardTest from "@/components/boardTest";
// import TestBoardWrite from "@/components/TestBoardWrite.vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "Dashboard.vue",
  components: {
    Vue3ChartJs,
  },
  props: {
    scnData: Array,
  },
  setup() {
    // this.$axios
    //     .get("/api/dashboards")
    //     .then((data) => {
    //         console.log(data);
    //         //this.editor.load(data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    const pieChart = {
      type: "pie",
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],//파이 배경색 변경
            borderColor: '#FFFFFF',//테두리 색 변경
            data: [40, 20, 80, 10],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(255, 255, 255)'//label 색상 변경
            }
          }
        }
      }
    };
    pieChart.options.plugins.title = {text: 'First Chart', display: true, color: "#FFFFFF", font: {size: 18}};

    const pieChart2 = {
      type: "pie",
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],//파이 배경색 변경
            borderColor: '#FFFFFF',//테두리 색 변경
            data: [40, 20, 80, 10],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(255, 255, 255)'//label 색상 변경
            }
          }
        }
      }
    };
    pieChart2.options.plugins.title = {text: 'Second Chart', display: true, color: "#FFFFFF", font: {size: 18}};

    const pieChart3 = {
      type: "pie",
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],//파이 배경색 변경
            borderColor: '#FFFFFF',//테두리 색 변경
            data: [40, 20, 80, 10],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(255, 255, 255)'//label 색상 변경
            }
          }
        }
      }
    };
    pieChart3.options.plugins.title = {text: 'Third Chart', display: true, color: "#FFFFFF", font: {size: 18}};

    return {
      pieChart,
      pieChart2,
      pieChart3,
    };
  },
  data() {
    return {
      editor: new Editor(),
      viewPlugin: new ViewPlugin(),
      engine: new Engine(true),
      nodeInterfaceTypes: new InterfaceTypePlugin(),
      list: {},
      boardlist: {
        data:{},
        hidden:true
      },
      boardlist2: {},
      /*list2:{},*/
      ttitle: "",
      isTableNow: true,
      isTableNow2: true,
      detailId: 0,
      article: "",
      title: "",
      content: "",
      issave: false,
      cKey: 0,
      // tdatas: testData
      // tdatas: JSON.stringify(testData)
      frut: [
        {
          value: 30,
          label: "Apples"
        },
        {
          value: 20,
          label: "Oranges"
        },
        {
          value: 10,
          label: "Bananas"
        }
      ]
    }
  },
  created() {
    this.editor.use(this.viewPlugin)
    this.viewPlugin.enableMinimap = true
    this.editor.use(new OptionPlugin())
    this.editor.use(this.nodeInterfaceTypes)

    this.viewPlugin.registerOption("TextareaOption", TextareaOption)
    this.viewPlugin.registerOption("CustomSidebarOption", CustomSidebarOption)
    this.viewPlugin.registerOption("TriggerOption", TriggerOption)

    this.nodeInterfaceTypes.addType("MemoDot", "#BE3455");

    // const token = 1;
    // this.editor.events.beforeAddNode.addListener(token, (obj)=> {
    //     console.log(obj);
    //     return true;
    // })
    // console.log(JSON.stringify(testData))

    this.engine.calculate()
    this.editor.registerNodeType('AtkNode', AtkNode)
    this.editor.registerNodeType('RouterNode', RouterNode)
    this.editor.registerNodeType('PCNode', PCNode)
    this.editor.registerNodeType('PPLNode', PPLNode)
    this.editor.registerNodeType('SVNode', SVNode)
    this.editor.registerNodeType('FileNode', FLNode)
    this.editor.registerNodeType('AccountNode', AccountNode)
    this.editor.registerNodeType('CustomNode', CustomNode)
    this.editor.registerNodeType('MemoNode', MemoNode)


  },
  mounted() {
    // this.editor.load(JSON.parse(JSON.stringify(testData)))

    this.$axios.get("/api/dashboards/" + this.$route.params.id, {
      headers: {}
    }).then((res) => {
      this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
      this.editor.load(JSON.parse(JSON.stringify(JSON.parse(this.list.srn))));
      this.ttitle = res.data.title
      console.log("getSuccess");
      return this.ttitle;
    }).catch((err) => {
      if (err.message.indexOf('Network Error') > -1) {
        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
      }
    });

    boardTest.getArticle(1)
        .then((res) => {
          console.log("getArticle", res);
          this.boardlist2 = res.data;
        })
        .catch((e) => {
          console.log(e);
        });

    boardTest.getArticles(0)
        .then((res) => {
          console.log("getArticles", res);
          this.boardlist.data = res.data;
          this.boardlist.hidden = false;
        })
        .catch((e) => {
          console.log(e);
        });


  },
  methods: {
    getDetailView: function (item) {
      this.isTableNow = !this.isTableNow;
      this.detailId = item.id
      boardTest.getArticle(this.detailId)
          .then((res) => {
            this.article = res.data;
            console.log("article", res);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    GoBoardWrite: function () {
      this.isTableNow2 = !this.isTableNow2;
    },
    Alertclose: function () {
      this.issave = false;
    },
    writeArticle() {
      if (!this.title || !this.content) {
        this.$message.error("제목과 본문을 작성해주세요.");
        return;
      }
      boardTest
          .postArticle(this.title, this.content)
          .then((res) => {
            console.log("postArticle", res);
            // this.$router.push({path: "/TestBoard"}); // 루트로 이동
            // let list2 = [this.list];
            // list2.push(this.content, this.date, this.title);
            // this.list = list2;
            //this.$forceUpdate();
            this.issave = true;

          })
          .catch((e) => {
            console.log(e);
            this.$message.error("게시물 작성 중 에러가 발생하였습니다.")
          })
      boardTest
          .getArticles(0)
          .then((res) => {
            console.log("getArticles", res);
            this.boardlist.data = res.data
            this.boardlist.hidden = false
          })
          .catch((e) => {
            console.log(e);
          });
      this.boardlist.hidden = !this.boardlist.hidden;
      setTimeout(() => console.log("after"), 2000);
    },

  }


}

</script>

<style scoped>
.dashboards {
}

.dashboard_title {
  text-align: center;
  font-size: x-large;
  overflow: hidden;
  border-radius: 0 15px 15px 0;
  border-left: inset;

}
</style>