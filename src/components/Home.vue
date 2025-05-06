<template>
  <el-watermark style="height: 100%;" content="JFUI">
    <h2>Flutter UI库</h2>
    <p>包含：常用组件封装、系统组件扩展、常用工具类等</p>
    <el-divider />
    <h3>效果图</h3>
    <div class="list-container">
      <el-image class="list-image" v-for="item in list" :key="item" :src="item" fit="contain" />
    </div>
  </el-watermark>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const list = ref<String[]>([]);

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    list.value.push(`/src/assets/images/img-example${i + 1}.png`);
  }
})
</script>

<style scoped>
.list-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .list-image {
    width: 240px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
