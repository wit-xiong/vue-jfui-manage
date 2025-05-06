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
import Assets from '../assets.ts';

const list = [
  Assets.imgExample1,
  Assets.imgExample2,
  Assets.imgExample3,
  Assets.imgExample4,
  Assets.imgExample5,
  Assets.imgExample6,
  Assets.imgExample7,
  Assets.imgExample8,
  Assets.imgExample9,
  Assets.imgExample10,
  Assets.imgExample11,
  Assets.imgExample12,
  Assets.imgExample13,
  Assets.imgExample14,
  Assets.imgExample15,
  Assets.imgExample16,
  Assets.imgExample17,
  Assets.imgExample18,
  Assets.imgExample19,
  Assets.imgExample20,
];
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
