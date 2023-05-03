<template>
    <button class="custom-btn Aplbutton" type="button" @click="srnSave()"><span>Apply</span>
    </button>
    <button class="Loadbutton" type="button" @click="srnLoad()"><span>Load</span></button>

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
            viewPlugin: new ViewPlugin()
        }
    },
    created() {
        this.editor.use(this.viewPlugin)
        this.viewPlugin.enableMinimap = true
        this.editor.use(new OptionPlugin())

        this.editor.registerNodeType('Attacker', AtkNode)
        this.editor.registerNodeType('Router', RouterNode)
        this.editor.registerNodeType('PC', PCNode)
        this.editor.registerNodeType('Person', PPLNode)
        this.editor.registerNodeType('Server', SVNode)
        this.editor.registerNodeType('File', FLNode)
        this.editor.registerNodeType('Account', AccountNode)

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
//top: 150px;
//left: 475px;
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


</style>