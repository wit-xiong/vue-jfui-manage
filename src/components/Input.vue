<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Input</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>输入框，对系统TextFormField的封装</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgInput" fit="contain" />
            </el-col>
        </el-row>
        <h3>代码</h3>
        <pre><code class="code-container">{{ code }}</code></pre>
    </el-watermark>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { onMounted } from 'vue';
import Assets from '../assets.ts';

const code = `
JFInput(
    height: 40,
    placeholder: '请输入内容',
),

// 带初始值
JFInput(
    height: 40,
    margin: const EdgeInsets.only(top: 10),
    textString: '我是初始值',
    placeholder: '请输入内容',
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>