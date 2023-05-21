<template>
    <SideBar></SideBar>
    <div style="margin: 0 auto; height: 80vh; width: 80vw">
        <baklava-editor :plugin="viewPlugin" />
    </div>

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

//function import
import CustomSidebarOption from "@/assets/CustomSidebarOption"
import TriggerOption from "@/assets/TriggerOption"
import TextareaOption from "@/assets/TextareaOption"
import SideBar from "@/components/SideBar.vue";

export default {
    name: "Dashboard.vue",
    components: {SideBar},
    setup(){
        this.$axios
            .get("/api/dashboards")
            .then((data) => {
                console.log(data);
                //this.editor.load(data);
            })
            .catch((error) => {
                console.log(error);
            });

    },
    data() {
        return {
            editor: new Editor(),
            viewPlugin: new ViewPlugin(),
            engine: new Engine(true),
            nodeInterfaceTypes: new InterfaceTypePlugin()
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


        const token = 1;
        this.editor.events.beforeAddNode.addListener(token, (obj)=> {
            console.log(obj);
            return true;
        })

        this.engine.calculate();
    },
    mounted(){
        this.editor.registerNodeType('AtkNode', AtkNode)
        this.editor.registerNodeType('RouterNode', RouterNode)
        this.editor.registerNodeType('PCNode', PCNode)
        this.editor.registerNodeType('PPLNode', PPLNode)
        this.editor.registerNodeType('SVNode', SVNode)
        this.editor.registerNodeType('FileNode', FLNode)
        this.editor.registerNodeType('AccountNode', AccountNode)
        this.editor.registerNodeType('MemoNode', MemoNode)
    }

}
</script>

<style scoped>

</style>