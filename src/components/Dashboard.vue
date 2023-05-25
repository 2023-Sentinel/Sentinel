<template>

<!--    <p>Scn Title: {{ttitle}}</p>-->
<!--    <SideBar></SideBar>-->

<!--    <div v-for="(item, idx) in list2" :key="idx">-->
<!--&lt;!&ndash;        <div>{{item.title}}</div>&ndash;&gt;-->
<!--        <div>{ttitle}</div>-->

<!--    </div>-->
    <div style="margin: 0 auto; height: 80vh; width: 90vw">
        <br>
        <button
            class="btn btn-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
        >
            SideBar Board
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

                <h2 class = "board_title"> Sentinel Board </h2>
                <br><br>
            </div>
            <div class="offcanvas-body">
                <!--      <BoardPage></BoardPage>-->
                <!--      <TestBoard></TestBoard>-->
                <div style="position: relative; top:-250px; left:-1px;">
                    <iframe
                        src="http://localhost:3000/#/TestBoard"
                        height=1200px,
                        width="400px">
                    </iframe>
                </div>
            </div>
        </div>

<!--        <button class="custom-btn Aplbutton" type="button"><span>Sidebar</span>-->
<!--        </button>-->
<!--        <SideBar></SideBar>-->
        <div class="alert alert-dismissible alert-primary" style="height: 65px"><h1 style="text-align: center">Scn : {{ttitle}}</h1></div>
        <baklava-editor :plugin="viewPlugin" />
    </div>
    <router-view></router-view>
</template>

<script>
import { Editor } from '@baklavajs/core'
import { Engine } from '@baklavajs/plugin-engine'
import { ViewPlugin } from '@baklavajs/plugin-renderer-vue3'
import { OptionPlugin } from '@baklavajs/plugin-options-vue3'
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
// import BoardPage from "@/components/BoardPage.vue";
// import {useRoute} from 'vue-router'
// const route = useRoute()
// let tdatas;
export default {
    name: "Dashboard.vue",
    // components: {BoardPage},
    // components: {SideBar},
    props:{
      scnData: Array,
    },
    setup(){
        // this.$axios
        //     .get("/api/dashboards")
        //     .then((data) => {
        //         console.log(data);
        //         //this.editor.load(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

    },
    data() {
        return {
            editor: new Editor(),
            viewPlugin: new ViewPlugin(),
            engine: new Engine(true),
            nodeInterfaceTypes: new InterfaceTypePlugin(),
            list:{},
            /*list2:{},*/
            ttitle:"",
            // tdatas: testData
            // tdatas: JSON.stringify(testData)

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
    mounted(){
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
        })
    },


}

</script>

<style scoped>
.dashboards{
}
.dashboard_title{
    text-align: center;
    font-size: x-large;
    overflow: hidden;
    border-radius: 0 15px 15px 0;
    border-left: inset;


}
</style>