import"./base-CxlrsnOH.js";import{E as c,a as p}from"./el-divider-L3FCdWci.js";import{H as m,a as u,E as f}from"./index-BXfa59uB.js";import{d as g,m as J,q as v,t as r,l as n,S as e,U as l,I as o,e as F}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const S=`
// 平台判断
JFPlatform.isAndroid;
JFPlatform.isIOS;
JFPlatform.isDesktop;
`,w=`
// 设备信息获取
var iosDevice = await JFDeviceInfo.getIosInfo();
var androidDevice = await JFDeviceInfo.getAndroidInfo();
`,I=`
// 包信息获取
var packageInfo = await JFPackageInfo.getInfo();
`,k=`
// 打开外链，如链接、三方app等
JFLauncher.openUrlString('https:www.baidu.com');
`,b=`
// 开启网络监听
JFNetworkService().connectivityStream.listen((res) {
    print('res: $res');
});
// 关闭网络监听
JFNetworkService().dispose();
`,D=`
// 本地缓存
await JFStorage.preInit(); // 合适的位置提前初始化
await JFStorage.setString('key1', 'value1'); // 存储
var res = JFStorage.getString('key1'); // 读取
await JFStorage.remove('key1'); // 删除某个存储
await JFStorage.clear(); // 清空所有存储
`,U=g({__name:"Utils",setup(_){return J(()=>{m.highlightAll()}),(y,t)=>{const a=u,s=f,i=p,d=c;return F(),v(d,{style:{height:"100%"},content:"JFUI"},{default:r(()=>[n(s,{separator:"/"},{default:r(()=>[n(a,{to:{path:"/"}},{default:r(()=>t[0]||(t[0]=[l("首页")])),_:1}),n(a,null,{default:r(()=>t[1]||(t[1]=[l("便捷工具")])),_:1})]),_:1}),n(i),t[2]||(t[2]=e("p",null,"一些常用工具部分示例",-1)),t[3]||(t[3]=e("h3",null,"平台判断",-1)),e("pre",null,[e("code",{class:"code-container"},o(S))]),t[4]||(t[4]=e("h3",null,"设备信息获取",-1)),e("pre",null,[e("code",{class:"code-container"},o(w))]),t[5]||(t[5]=e("h3",null,"包信息获取",-1)),e("pre",null,[e("code",{class:"code-container"},o(I))]),t[6]||(t[6]=e("h3",null,"打开外链",-1)),e("pre",null,[e("code",{class:"code-container"},o(k))]),t[7]||(t[7]=e("h3",null,"网络监听",-1)),e("pre",null,[e("code",{class:"code-container"},o(b))]),t[8]||(t[8]=e("h3",null,"本地缓存",-1)),e("pre",null,[e("code",{class:"code-container"},o(D))])]),_:1})}}});export{U as default};
