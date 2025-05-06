<!-- 页面组件存放位置 -->
<template>
    <div class="container">页面</div>
    <test-components :data1="data1" @change="onChange" />
</template>

<!-- 页面事件存放位置 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TestComponents from '../components/TestComponents.vue';

const data1 = ref('123');

// 子组件的事件回调
const onChange = (data: string) => {
    console.log('子组件传值', data)
}

onMounted(() => {
    console.log('页面挂载完成')
})
</script>

<!-- 页面样式存放位置 -->
<style scoped>
.container {
    color: red;
}
</style>