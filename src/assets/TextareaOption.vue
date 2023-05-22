<template>
    <div>
        <textarea name="MemoTest" class="dark-input" @change="$emit('update:MemoTest', $event.target.value)"/>
    </div>
</template>

<script>
export default{
    props:{
        MemoTest:{
            type:String,
            default:''
        }
    },
    setup(){
        return{

        }
    }
}
</script>

<!--<template>-->
<!--    <div>-->
<!--        <textarea-->
<!--                type="text"-->
<!--                class="dark-input"-->
<!--                :value="value"-->
<!--                @input="onChange"-->
<!--                :placeholder="name"-->
<!--                rows="4"-->
<!--        ></textarea>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--    props: ["value", "name"],-->
<!--    data() {},-->
<!--    created() {},-->
<!--    methods: {-->
<!--        onChange($event) {-->
<!--            this.$emit("input", $event.target.value);-->
<!--        }-->
<!--    }-->
<!--};-->
<!--</script>-->