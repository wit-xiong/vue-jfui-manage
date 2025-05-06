<template>
    <div>我是子组件，接收的外部值为{{ props.data1 }}和{{ props.data2 }}</div>
    <div @click="onChange">点击向父组件传值</div>
</template>

<script setup lang="ts">
// 定义组件属性
const props = defineProps({
    // 定义必传属性
    data1: {
        type: String,
        required: true,
    },
    // 定义可选属性
    data2: {
        type: Number,
        default: 1,
    }
})
// 定义组件事件
const emit = defineEmits(['change'])

// 点击事件
const onChange = () => {
    emit('change', '我是子组件')
}
</script>

<style scoped></style>