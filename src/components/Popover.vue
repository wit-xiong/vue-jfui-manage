<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通用组件</el-breadcrumb-item>
            <el-breadcrumb-item>Popover</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>弹出菜单选择器</p>
        <h3>效果</h3>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-image style="height: 667px" :src="Assets.imgPopover" fit="contain" />
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
// 初始化控制器
final JFPopoverController _controller = JFPopoverController();

// 初始化控件
JFPopover(
    controller: _controller,
        child: JFButton(text: 'Popover点击', onTap: () => _controller.toggle()),
        popover: (ctx) {
            return SizedBox(
            width: 100,
            child: Column(
                mainAxisSize: MainAxisSize.min,
                children: List.generate(4, (index) {
                    return Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        child: Text('选项$index'),
                    );
                }),
            ),
        );
    },
),
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>