<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>CitySelect</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>城市单选</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-citySelect.png" fit="contain" />
            </el-col>
        </el-row>
        <h3>代码</h3>
        <pre><code class="code-container">{{ code }}</code></pre>
    </el-watermark>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { onMounted } from 'vue';

const code = `
JFSingleSelectCityPage(
    locationText: '合肥',
    hotCityList: [
        JFSelectCityModel(name: '上海'),
    ],
)
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>