<template>
    <div class="CustomSidebarOption">
        <h1>Memo Option</h1>
        <p>This is an advanced option</p>
        <p>Memo: {{memo}} {{mvalue.testtext}}</p>
        <custom-input-event v-model="memo" label="Memo:" type="memo"></custom-input-event>
<!--        <input-option v-model="mvalue.testtext"></input-option>-->
    </div>
</template>

<script>
import {ref} from 'vue'
import customInputEvent from './customInputEvent'
// import InputOption from '@baklavajs/plugin-options-vue3'
export default {
    name: 'CustomSidebarOption',

    // model:{
    //   prop:'value'
    // },
    components: {
        customInputEvent,
        // InputOption,
    },
    props: {
      // value:{
      //     type: Object,
      //     required: true,
      // },
    },
    data(){
        return{
            mvalue:{testtext:""},
        };
    },
    computed:{

      // memo_test:{
      //     get(){
      //         return this.value;
      //     },
      //     set(tValuet){
      //         this.$emit('input', tValuet);
      //     }
      // }
    },

    created(){
      this.mvalue = {...this.value};
    },
    setup() {
        const memo = ref('')
        return {
            memo
        }
    },

}
</script>

<!--<script>-->
<!--import {InputOption} from "@baklavajs/plugin-options-vue3";-->
<!--export default{-->
<!--    class: "SidebarOption",-->
<!--    name: "SidebarOption",-->
<!--    components:{-->
<!--        InputOption-->
<!--    },-->
<!--    props:{-->
<!--      value:{-->
<!--          type: Object,-->
<!--          required: true,-->
<!--      }-->
<!--    },-->
<!--    methods:{-->
<!--        updateValue(key, value){-->
<!--            this.$emit("input", {...this.value, [key]:value})-->
<!--        },-->
<!--    },-->
<!--}-->

<!--</script>-->

<!--<script>-->
<!--import {ref} from 'vue';-->
<!--import {InputOption} from "@baklavajs/plugin-options-vue3";-->
<!--export default{-->
<!--    name:CustomSidebarOption,-->
<!--    setup(){-->
<!--        let data = ref("");-->
<!--        return{-->
<!--            data,-->
<!--        };-->
<!--    },-->
<!--    methods:{-->
<!--        Submit(){-->
<!--            this.$emit("childEvent");-->
<!--        },-->
<!--    },-->


<!--};-->
<!--</script>-->

<!--<script>-->
<!--import {ref} from 'vue'-->
<!--// import TriggerOption from "@/assets/TriggerOption";-->
<!--export default{-->
<!--    name: "SidebarOption",-->
<!--    // components:{-->
<!--    //     TriggerOption,-->
<!--    // },-->
<!--    setup(){-->
<!--      const data = ref('ABC')-->
<!--    },-->
<!--    // data(){-->
<!--    //     return{-->
<!--    //         parenttext: 'this'-->
<!--    //     };-->
<!--    // }-->
<!--}-->
<!--</script>-->