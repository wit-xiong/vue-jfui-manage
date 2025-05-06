<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Picker</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>选择器，包含普通选择器、日期选择器、地址选择器等</p>
        <p>样式可自定义</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-picker1.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-picker2.png" fit="contain" />
            </el-col>
            <el-col :span="8">
                <el-image style="height: 667px" src="/src/assets/images/img-picker3.png" fit="contain" />
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
// 地址选择器
JFPicker.showAddress(context, onConfirm: (val) => print(val));

// 日期选择器
JFPicker.showDate(context, onConfirm: (val) => print(val));

// 普通选择器
JFPicker.showNormal(
    context,
    datas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    onConfirm: (val) => print(val),
);
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>