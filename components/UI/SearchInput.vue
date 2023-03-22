<script setup>

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type:String,
        required: true
    },
    placeholder: {
        type: String,
        default:''
    },
    type: {
        type: String,
        default: 'text'
    }
})
</script>

<template>
    <div>
        <div class="mt-1">
            <input :type="props.type" :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)" class="block px-4 w-72 mr-9 sm:w-40 md:w-40 xl:w-64 border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" :placeholder="props.placeholder"> 
        </div> 
    </div>
</template>

