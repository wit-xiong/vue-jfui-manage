<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Accordion</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>手风琴效果</p>
        <h3>效果</h3>
        <el-image style="height: 667px" src="/src/assets/images/img-accordion.png" fit="contain" />
        <h3>代码</h3>
        <pre><code class="code-container">{{ code }}</code></pre>
    </el-watermark>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { onMounted } from 'vue';

const code = `
JFAccordion<String>(
    children: [
        JFAccordionItem(value: '1', title: Text('静夜诗'), child: Text('床前明月光，疑是地上霜。举头望明月，低头思故乡。')),
        JFAccordionItem(value: '2', title: Text('春晓'), child: Text('春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。')),
    ],
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>