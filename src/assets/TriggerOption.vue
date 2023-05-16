<template>
    <div class="TriggerOption">
        <button-option name="Test Sidebar" @openSidebar="$emit('openSidebar')"></button-option>
        <div>{{ value.testtext }}</div>
        <p>{{memo_test}}</p>
    </div>
</template>
<script>
import {ButtonOption} from "@baklavajs/plugin-options-vue3";
export default{
    name: "TriggerOption",
    components:{
        ButtonOption,
    },
    props:['value', 'memo'],
    computed:{
        memo_test:{
            get(){
                return this.memo;
            },
            set(modelValue){
                this.$emit('update:memo', modelValue);
            }
        }
    },
}

</script>

