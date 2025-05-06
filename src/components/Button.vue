<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Button</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>按钮，包含普通按钮、图标文字按钮、边框按钮</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-button.png" fit="contain" />
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
JFButton(text: '按钮'),
Padding(
    padding: const EdgeInsets.symmetric(vertical: 10),
    child: JFIconButton(
        text: '按钮',
        iconWidget: Icon(Icons.search),
    ),
),
JFOutlineButton(text: '按钮'),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>