<template>
    <el-watermark style="height: 100%;" content="JFUI">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>便捷工具</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <p>一些常用工具部分示例</p>
        <h3>平台判断</h3>
        <pre><code class="code-container">{{ code1 }}</code></pre>
        <h3>设备信息获取</h3>
        <pre><code class="code-container">{{ code2 }}</code></pre>
        <h3>包信息获取</h3>
        <pre><code class="code-container">{{ code3 }}</code></pre>
        <h3>打开外链</h3>
        <pre><code class="code-container">{{ code4 }}</code></pre>
        <h3>网络监听</h3>
        <pre><code class="code-container">{{ code5 }}</code></pre>
        <h3>本地缓存</h3>
        <pre><code class="code-container">{{ code6 }}</code></pre>
    </el-watermark>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'
import { onMounted } from 'vue'

const code1 = `
// 平台判断
JFPlatform.isAndroid;
JFPlatform.isIOS;
JFPlatform.isDesktop;
`
const code2 = `
// 设备信息获取
var iosDevice = await JFDeviceInfo.getIosInfo();
var androidDevice = await JFDeviceInfo.getAndroidInfo();
`
const code3 = `
// 包信息获取
var packageInfo = await JFPackageInfo.getInfo();
`
const code4 = `
// 打开外链，如链接、三方app等
JFLauncher.openUrlString('https:www.baidu.com');
`
const code5 = `
// 开启网络监听
JFNetworkService().connectivityStream.listen((res) {
    print('res: $res');
});
// 关闭网络监听
JFNetworkService().dispose();
`
const code6 = `
// 本地缓存
await JFStorage.preInit(); // 合适的位置提前初始化
await JFStorage.setString('key1', 'value1'); // 存储
var res = JFStorage.getString('key1'); // 读取
await JFStorage.remove('key1'); // 删除某个存储
await JFStorage.clear(); // 清空所有存储
`

onMounted(() => {
    hljs.highlightAll();
})
</script>

<style scoped></style>