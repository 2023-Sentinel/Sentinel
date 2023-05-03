<template>
    <div style="height: 100vh; width: 100vw">
        <baklava-editor :plugin="viewPlugin" />
    </div>
</template>

<script>
import { Editor } from '@baklavajs/core'
import { ViewPlugin } from '@baklavajs/plugin-renderer-vue3'
import { OptionPlugin } from '@baklavajs/plugin-options-vue3'

import { AtkNode } from '@/assets/AtkNode'
import {RouterNode} from '@/assets/RouterNode'
import {PPLNode} from '@/assets/PPLNode'
import {PCNode} from '@/assets/PCNode'
import {SVNode} from '@/assets/ServerNode'
import {FLNode} from '@/assets/FileNode'
import {AcntNode} from '@/assets/AcntNode'


export default {
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
        this.editor.registerNodeType('Account', AcntNode)

    }

}
</script>
