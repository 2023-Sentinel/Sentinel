<template>
    <div>
        <button-option name="Memo" @openSidebar="$emit('openSidebar')"></button-option>
        <p>{{ value.testtext }}</p>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import {ButtonOption} from "@baklavajs/plugin-options-vue3";

export default defineComponent({
    name:"TriggerOption",
    components:{
        ButtonOption
    },
    props: {
        value: Object,
    },
    methods:{
        openSidebar(){
            this.$emit('InputOption', this.testtext)
        }
    },
    data(){
        return{
            testtext: ''
        }
    }
})

</script>
