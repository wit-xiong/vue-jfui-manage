<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>MarqueeText</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>可滚动的文本组件</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-marqueeText.png" fit="contain" />
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
Container(
    width: double.infinity,
    height: 40,
    color: Colors.blue,
    child: JFMarqueeText(
        text: '床前明月光，疑是地上霜。举头望明月，低头思故乡。床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    ),
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>