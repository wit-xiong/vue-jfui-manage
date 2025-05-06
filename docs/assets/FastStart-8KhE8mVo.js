import"./base-DDXUP3tn.js";import{E as p,a as u}from"./el-divider-BmLOJKtT.js";import{H as c,E as m,a as g}from"./index-Bm_QEFxJ.js";import{d as f,m as b,q as C,t as l,e as x,l as n,S as t,U as r,I as o}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const y=`// pubspec.yaml中
dependencies:
  jfui: 
    git: 仓库地址
`,A="import 'package:jf_ui/jf_ui.dart';",B=`// main.dart中
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
`,F=`// 顶部导航栏的使用示例
return Scaffold(
    appBar: JFAppBar(title: 'JFUI'),
);
`,J=`// 配置主题色
var config = JFConfig(
    /** 主题色 */
    primaryColor: Colors.blue,
    ...
);
JFConfiguration.instance.initConfig(config);
`,L=`// 如：新增西班牙语
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
`,I=f({__name:"FastStart",setup(M){return b(()=>{c.highlightAll()}),(S,e)=>{const a=g,s=m,i=u,d=p;return x(),C(d,{style:{height:"100%"},content:"JFUI"},{default:l(()=>[n(s,{separator:"/"},{default:l(()=>[n(a,{to:{path:"/"}},{default:l(()=>e[0]||(e[0]=[r("首页")])),_:1}),n(a,null,{default:l(()=>e[1]||(e[1]=[r("快速开始")])),_:1})]),_:1}),n(i),e[2]||(e[2]=t("h3",null,"一、安装",-1)),t("pre",null,[t("code",{class:"code-container"},o(y))]),e[3]||(e[3]=t("h3",null,"二、使用",-1)),e[4]||(e[4]=t("h4",null,"1、引入",-1)),t("pre",null,[t("code",{class:"code-container"},o(A))]),e[5]||(e[5]=t("h4",null,"2、初始化",-1)),t("pre",null,[t("code",{class:"code-container"},o(B))]),e[6]||(e[6]=t("h4",null,"3、具体使用",-1)),t("pre",null,[t("code",{class:"code-container"},o(F))]),e[7]||(e[7]=t("h3",null,"三、可选配置",-1)),e[8]||(e[8]=t("h4",null,"1、主题配置",-1)),t("pre",null,[t("code",{class:"code-container"},o(J))]),e[9]||(e[9]=t("h4",null,"2、国际化配置",-1)),e[10]||(e[10]=t("p",null,"内置支持英文、中文简体、中文繁体（香港），可根据需要自行扩展",-1)),t("pre",null,[t("code",{class:"code-container"},o(L))])]),_:1})}}});export{I as default};
