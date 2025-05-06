<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Refresh</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>刷新组件</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgRefresh1" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgRefresh2" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgRefresh3" fit="contain" />
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
// 初始化刷新控制器
final JFRefreshController _refreshController = JFRefreshController();

// 初始化刷新组件
JFRefresh(
    controller: _refreshController,
    onRefresh: () {
        Future.delayed(2.seconds, () {
            _refreshController.refreshFinish();
        });
    },
    onLoad: () {
        Future.delayed(2.seconds, () {
            _refreshController.loadFinish();
        });
    },
    child: SingleChildScrollView(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
            ],
        ),
    ),
)
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>