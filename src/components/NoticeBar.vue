<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>NoticeBar</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>通知条效果，内置多种状态，内容可滚动</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgNoticeBar" fit="contain" />
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
JFNoticeBar(
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    noticeStyle: JFNoticeStyles.normalNoticeWithArrow,
),
Padding(
    padding: const EdgeInsets.symmetric(vertical: 10),
    child: JFNoticeBar(
        marquee: true,
        content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
        noticeStyle: JFNoticeStyles.failWithClose,
    ),
),
JFNoticeBar(
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    noticeStyle: JFNoticeStyles.runningWithArrow,
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>