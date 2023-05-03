<template>
    <div style="height: 100vh; width: 100vw">
        <baklava-editor :plugin="viewPlugin" />
    </div>
</template>

<script>
import { Editor } from '@baklavajs/core'
import { ViewPlugin } from '@baklavajs/plugin-renderer-vue3'
//import { OptionPlugin } from '@baklavajs/plugin-options-vue'
import { mathNode } from '@/MathNode'

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

        this.editor.registerNodeType('Math Node', mathNode)
    }
}
</script>
