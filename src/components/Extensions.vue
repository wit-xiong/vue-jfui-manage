<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>系统扩展</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>一些常用扩展部分示例</p>
        <h3>颜色扩展</h3>
        <pre><code class="code-container">{{ code1 }}</code></pre>
        <h3>Context扩展</h3>
        <pre><code class="code-container">{{ code2 }}</code></pre>
        <h3>num扩展</h3>
        <pre><code class="code-container">{{ code3 }}</code></pre>
        <h3>Text扩展</h3>
        <pre><code class="code-container">{{ code4 }}</code></pre>
        <h3>Widget扩展</h3>
        <pre><code class="code-container">{{ code5 }}</code></pre>
        <h3>Decoration扩展</h3>
        <pre><code class="code-container">{{ code6 }}</code></pre>
    </el-watermark>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'
import { onMounted } from 'vue'

const code1 = `
// 以前获取颜色的透明度
var color1 = Colors.red.withValues(alpha: 0.5);
// 现在获取颜色的透明度
var color2 = Colors.red.alphaVal(0.5);
`
const code2 = `
// 获取尺寸
var size = context.sizeVal;
var width = context.screenWidth;
var height = context.screenHeight;
`
const code3 = `
// Duration(milliseconds: 10);
10.milliseconds;

// Duration(seconds: 10);
10.seconds;

// Duration(minutes: 10);
10.minutes;

// SizedBox(width: 10);
10.width;

// SizedBox(height: 10);
10.height;
`
const code4 = `
// 以前的写法
Text(
    '这是一段文字',
    style: TextStyle(
        color: Colors.red,
        fontSize: 14,
        fontWeight: FontWeight.bold,
    ),
);

// 现在的写法1
Text('这是一段文字').color(Colors.red).fontSize(14).bold;

// 现在的写法2
'这是一段文字'.toText.color(Colors.red).fontSize(14).bold;
`
const code5 = `
// 添加Padding - 之前的做法
Padding(
    padding: const EdgeInsets.only(top: 10),
    child: Text('文字添加Padding'),
);
// 添加Padding - 现在的做法
Text('文字添加Padding').paddingTop(10);

// 设置宽度 - 之前的做法
SizedBox(
    height: 40,
    child: Text('文字添加Padding'),
);
// 设置宽度 - 现在的做法
Text('文字添加Padding').height(40);
`
const code6 = `
// 设置边框和圆角 - 之前的做法
BoxDecoration(
    border: Border.all(color: Colors.red),
    borderRadius: BorderRadius.all(Radius.circular(12)),
);
// 设置边框和圆角 - 现在的做法
BoxDecoration()
    ..borderAll(color: Colors.red)
    ..radiusAll(12);
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>