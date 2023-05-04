<template>
    <button class="custom-btn Aplbutton" type="button" @click="srnSave()"><span>Apply</span>
    </button>
    <button class="custom-btn Ldbutton" type="button" @click="srnLoad()"><span>Load</span></button>

    <div style="height: 80vh; width: 80vw">
        <baklava-editor :plugin="viewPlugin" />
    </div>

</template>

<script>
import { Editor } from '@baklavajs/core'
import { ViewPlugin } from '@baklavajs/plugin-renderer-vue3'
import { OptionPlugin } from '@baklavajs/plugin-options-vue3'

import {AtkNode} from '@/assets/AtkNode'
import {RouterNode} from '@/assets/RouterNode'
import {PPLNode} from '@/assets/PPLNode'
import {PCNode} from '@/assets/PCNode'
import {SVNode} from '@/assets/ServerNode'
import {FLNode} from '@/assets/FileNode'
import {AccountNode} from '@/assets/AcntNode'
import {Memotest} from '@/assets/Memotest'
import CustomSideBarOption from '@/assets/CustomSidebarOption'
import TriggerOption from '@/assets/TriggerOption'

export default {
    methods: {
        srnSave: function() {
            const IState=this.editor.save()
            console.log(IState)
        },
        srnLoad: function() {
            let IState2=this.editor.save()
            console.log(this.editor.load(IState2))
        }
    },
    data() {
        return {
            editor: new Editor(),
            viewPlugin: new ViewPlugin(),
            optionPlugin: new OptionPlugin()
        }
    },
    created() {
        this.editor.use(this.viewPlugin)
        this.viewPlugin.enableMinimap = true
        this.editor.use(this.optionPlugin)

        this.viewPlugin.registerOption("TestSidebarOption", CustomSideBarOption)
        this.viewPlugin.registerOption("TriggerOption", TriggerOption)


    },
    mounted(){
        this.editor.registerNodeType('AtkNode', AtkNode)
        this.editor.registerNodeType('RouterNode', RouterNode)
        this.editor.registerNodeType('PCNode', PCNode)
        this.editor.registerNodeType('PPLNode', PPLNode)
        this.editor.registerNodeType('SVNode', SVNode)
        this.editor.registerNodeType('FileNode', FLNode)
        this.editor.registerNodeType('AccountNode', AccountNode)
        this.editor.registerNodeType('Memo node', Memotest)

    }

}
</script>

<style scoped>

.custom-btn {
    width: 150px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
}

.Aplbutton {
    background: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%);
    line-height: 42px;
    padding: 0;
    border: none;
    margin-right: 3px;
    position: relative;
}
.Aplbutton span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}
.Aplbutton:before,
.Aplbutton:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: rgba(251,75,2,1);
    box-shadow:
        -7px -7px 20px 0px rgba(255,255,255,.9),
        -4px -4px 5px 0px rgba(255,255,255,.9),
        7px 7px 20px 0px rgba(0,0,0,.2),
        4px 4px 5px 0px rgba(0,0,0,.3);
    transition: all 0.3s ease;
}
.Aplbutton:before{
    height: 0%;
    width: 2px;
}
.Aplbutton:after {
    width: 0%;
    height: 2px;
}
.Aplbutton:hover{
    color: rgba(251,75,2,1);
    background: transparent;
}
.Aplbutton:hover:before {
    height: 100%;
}
.Aplbutton:hover:after {
    width: 100%;
}
.Aplbutton span:before,
.Aplbutton span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: rgba(251,75,2,1);
    box-shadow:
        -7px -7px 20px 0px rgba(255,255,255,.9),
        -4px -4px 5px 0px rgba(255,255,255,.9),
        7px 7px 20px 0px rgba(0,0,0,.2),
        4px 4px 5px 0px rgba(0,0,0,.3);
    transition: all 0.3s ease;
}
.Aplbutton span:before {
    width: 2px;
    height: 0%;
}
.Aplbutton span:after {
    height: 2px;
    width: 0%;
}
.Aplbutton span:hover:before {
    height: 100%;
}
.Aplbutton span:hover:after {
    width: 100%;
}

.Ldbutton {
    background: rgb(0,172,238);
    background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
    width: 150px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    margin-right: 3px;
    position: relative;

}
.Ldbutton span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}
.Ldbutton:before,
.Ldbutton:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
}
.Ldbutton:before {
    height: 0%;
    width: 2px;
}
.Ldbutton:after {
    width: 0%;
    height: 2px;
}
.Ldbutton:hover{
    background: transparent;
    box-shadow: none;
}
.Ldbutton:hover:before {
    height: 100%;
}
.Ldbutton:hover:after {
    width: 100%;
}
.Ldbutton span:hover{
    color: rgba(2,126,251,1);
}
.Ldbutton span:before,
.Ldbutton span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
}
.Ldbutton span:before {
    width: 2px;
    height: 0%;
}
.Ldbutton span:after {
    width: 0%;
    height: 2px;
}
.Ldbutton span:hover:before {
    height: 100%;
}
.Ldbutton span:hover:after {
    width: 100%;
}

</style>