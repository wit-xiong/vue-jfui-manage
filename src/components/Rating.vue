<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Rating</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>评价组件</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-rating.png" fit="contain" />
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
// 默认
JFRatingStar(selectedCount: 3, size: 20),

// 自定义样式
Padding(
padding: const EdgeInsets.only(top: 10),
    child: JFRatingStar(
        selectedCount: 3,
        starBuilder: (state) {
            return Container(
                width: 20,
                height: 20,
                color: state == JFRatingState.select ? Colors.amber : Colors.grey,
            );
        },
    ),
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>