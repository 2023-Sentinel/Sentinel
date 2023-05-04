<template>
    <div>
        <h1>Memo Option</h1>
        <p>This is the Memo Option</p>
        <p>{{ value.testtext }}</p>
        <input-option v-model="value.testtext"></input-option>
    </div>
</template>

<script>
import {InputOption} from "@baklavajs/plugin-options-vue3";

    export default{
    name:"CustomSideBarOption",
    components:{
        InputOption
    },
    props:['testtext'],
    data() {
        return {
            value: ''
        }
    }

}
</script>
