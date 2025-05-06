<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Alert</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>Cupertino风格系统弹窗的封装</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-alert1.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-alert2.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-alert3.png" fit="contain" />
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
// 效果一
JFAlert.show(
    context,
    title: '提示',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    onConfirm: () {
        print('点击了确定按钮！');
    },
);

// 效果二
JFAlert.showButtons(
    context,
    title: '提示',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    actions: [
        JFAlertAction(text: '按钮一', callback: () => print('点击了按钮一')),
        JFAlertAction(text: '按钮二', callback: () => print('点击了按钮二')),
        JFAlertAction(text: '按钮三', callback: () => print('点击了按钮三')),
    ],
);

// 效果三
JFAlert.showSheet(
    context,
    actions: [
        JFSheetAction(text: '按钮一', onTap: () => print('点击了按钮一')),
        JFSheetAction(text: '按钮二', onTap: () => print('点击了按钮二')),
        JFSheetAction(text: '按钮三', onTap: () => print('点击了按钮三')),
    ],
);
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>