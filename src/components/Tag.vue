<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Tag</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>标签组件</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-tag.png" fit="contain" />
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
JFTag(text: '标签1', backgroundColor: Colors.black12),
Padding(
    padding: const EdgeInsets.only(top: 10),
    child: JFTag(
        text: '标签2',
        backgroundColor: Colors.black12,
        deleteIcon: Icon(
            Icons.close,
            size: 20,
            color: Colors.red,
        ),
        onDeleted: () {},
    ),
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>