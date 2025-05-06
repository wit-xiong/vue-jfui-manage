<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Image</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>图片显示，可现实本地图片、网络图片、svg等</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-image.png" fit="contain" />
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
JFImage(JFAssets.imgNetworkError, size: 100),
JFImage(
    'https://img0.baidu.com/it/u=3262152585,692414861&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422',
    size: 100,
    margin: const EdgeInsets.only(top: 10),
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>