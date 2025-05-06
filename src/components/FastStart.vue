<template>
  <el-watermark style="height: 100%;" content="JFUI">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>快速开始</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
    <h3>一、安装</h3>
    <pre><code class="code-container">{{ code1 }}</code></pre>
    <h3>二、使用</h3>
    <h4>1、引入</h4>
    <pre><code class="code-container">{{ code2 }}</code></pre>
    <h4>2、初始化</h4>
    <pre><code class="code-container">{{ code3 }}</code></pre>
    <h4>3、具体使用</h4>
    <pre><code class="code-container">{{ code4 }}</code></pre>
    <h3>三、可选配置</h3>
    <h4>1、主题配置</h4>
    <pre><code class="code-container">{{ code5 }}</code></pre>
    <h4>2、国际化配置</h4>
    <p>内置支持英文、中文简体、中文繁体（香港），可根据需要自行扩展</p>
    <pre><code class="code-container">{{ code6 }}</code></pre>
  </el-watermark>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'
import { onMounted } from 'vue'

const code1 = `// pubspec.yaml中
dependencies:
  jfui: 
    git: 仓库地址
`
const code2 = `import 'package:jf_ui/jf_ui.dart';`
const code3 = `// main.dart中
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      builder: JFConfiguration.init(),
      ...
    );
  }
}
`
const code4 = `// 顶部导航栏的使用示例
return Scaffold(
    appBar: JFAppBar(title: 'JFUI'),
);
`
const code5 = `// 配置主题色
var config = JFConfig(
    /** 主题色 */
    primaryColor: Colors.blue,
    ...
);
JFConfiguration.instance.initConfig(config);
`
const code6 = `// 如：新增西班牙语
// 1、实现资源，新增西班牙语翻译
class XiResource extends JFBaseResource {
  @override
  String get cancel => 'Cancelación';
  ...
}

// 2、配置资源
void main() {
  JFIntl.add(Locale('es', 'MX'), XiResource());
  runApp(const MyApp());
}
  
// 3、app配置
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: Locale('zh', 'CN'),
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        JFLocalizations.delegate,
      ],
      supportedLocales: [
        Locale('en', 'US'),
        Locale('zh', 'CN'),
        Locale('zh', 'HK'),
      ],
      ...
    );
  }
}
`

onMounted(() => {
  hljs.highlightAll();
})
</script>

<style scoped></style>