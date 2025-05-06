<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Dialog</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>Dialog封装，包含中间弹窗、底部弹窗、自定义弹窗</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-dialog1.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-dialog2.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-dialog3.png" fit="contain" />
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
JFDialog.showAlert(
    tag: 'alert1',
    titleText: '温馨提示',
    messageText: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    onConfirm: () {},
);

// 效果二
JFDialog.showSheet(
    actions: [
        JFActionSheetItem('选项一'),
        JFActionSheetItem('选项一'),
        JFActionSheetItem('选项一'),
    ],
);

// 效果三
JFDialog.show(
    tag: 'alert2',
    builder: (ctx) {
        return Container(
            width: 100,
            height: 100,
            color: Colors.red,
        );
    },
);

// 如果需要主动关闭某个弹窗
JFDialog.dismiss(tag: 'alert1');
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>