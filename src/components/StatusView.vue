<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>StatusView</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>状态页面</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-statusView1.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-statusView2.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-statusView3.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-statusView4.png" fit="contain" />
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
// 初始化控制器
final JFStatusController _statusController = JFStatusController();

// 初始化控件
JFStatusView(
    builder: (context) {
        return Center(
            child: Text('真实页面'),
        );
    },
    controller: _statusController,
)

// 改变状态
_statusController.showLoading();
_statusController.showEmpty();
_statusController.showFailed();
_statusController.showLoaded();
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>