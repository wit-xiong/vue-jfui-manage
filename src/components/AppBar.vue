<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>AppBar</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>页面顶部导航栏封装，包含Cupertino风格和Material风格</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-appBar1.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-appBar2.png" fit="contain" />
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
// 效果一，Cupertino风格
JFAppBarCupertino(title: 'JFUI', back: true, trailing: Icon(Icons.search, size: 24))

// 效果二，Material风格
JFAppBar(title: 'JFUI', back: true, trailing: Icon(Icons.search, size: 24))
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>