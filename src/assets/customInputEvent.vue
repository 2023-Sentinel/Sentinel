<template>
    <input
            type="text"
            class="dark-input"
            @input="onChanged"
            :value="modelValue"
            :placeholder="name" />
</template>

<script>
// InputText.vue
import { defineComponent } from "vue"

export default defineComponent({
    name: 'InputText',

    emits: ['update:modelValue'],

    props: {
        modelValue: String,
        name: {
            type: String,
            default: ''
        },
        additionalClass: {
            type: String,
            default: ''
        }
    },

    setup(props, { emit }) {
        function onChanged(e) {
            emit('update:modelValue', e.currentTarget.value);
        }

        return {
            onChanged
        }
    }
})
</script>


<!--<template>-->
<!--    <div>-->
<!--        <input-->
<!--            class="dark-input"-->
<!--            v-bind="$attrs"-->
<!--            :value="modelValue"-->
<!--            @input="$emit('update:modelValue', $event.target.value)"-->
<!--        />-->
<!--    </div>-->
<!--</template>-->


<!--<script>-->
<!--  export default{-->
<!--      inheritAttrs:false,-->
<!--      props: {-->
<!--          modelValue: {-->
<!--              type: String,-->
<!--              default:''-->
<!--          }-->
<!--      },-->
<!--      label: {-->
<!--          type: String,-->
<!--          default: null-->
<!--      }-->
<!--  }-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->