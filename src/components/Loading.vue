<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Loading</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>加载提示，包含加载中、不同类型加载完成、吐司等</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgLoading1" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgLoading2" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgLoading3" fit="contain" />
            </el-col>
        </el-row>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgLoading4" fit="contain" />
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
// 普通显示
JFLoading.show();

// 自定义文字
JFLoading.show(msg: '加载中...');

// 不同类型
JFLoading.showNotify(msg: '加载成功', type: JFNotifyType.success);

// 吐司
JFLoading.toast('吐司内容...');

// 隐藏
JFLoading.dismiss();
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>