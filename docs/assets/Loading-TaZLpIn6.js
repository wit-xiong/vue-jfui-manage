import"./base-DDXUP3tn.js";import{E as _,a as c}from"./el-col-JlPnFV8T.js";import{n as f}from"./el-image-viewer-wy8hT5do.js";import{E as h,a as L}from"./el-divider-BmLOJKtT.js";import{H as y,a as E,E as x}from"./index-Bm_QEFxJ.js";import{A as l}from"./assets-cmOGC0S9.js";import{d as J,m as w,q as F,t as e,l as t,S as n,U as m,u as i,I as b,e as B}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const N=`
// 普通显示
JFLoading.show();

// 自定义文字
JFLoading.show(msg: '加载中...');

// 不同类型
JFLoading.showNotify(msg: '加载成功', type: JFNotifyType.success);

// 吐司
JFLoading.toast('吐司内容...');

// 隐藏
JFLoading.dismiss();
`,U=J({__name:"Loading",setup(k){return w(()=>{y.highlightAll()}),(I,o)=>{const r=E,p=x,u=L,s=f,a=_,d=c,g=h;return B(),F(g,{style:{height:"100%"},content:"JFUI"},{default:e(()=>[t(p,{separator:"/"},{default:e(()=>[t(r,{to:{path:"/"}},{default:e(()=>o[0]||(o[0]=[m("首页")])),_:1}),t(r,null,{default:e(()=>o[1]||(o[1]=[m("通用组件")])),_:1}),t(r,null,{default:e(()=>o[2]||(o[2]=[m("Loading")])),_:1})]),_:1}),t(u),o[3]||(o[3]=n("p",null,"加载提示，包含加载中、不同类型加载完成、吐司等",-1)),o[4]||(o[4]=n("h3",null,"效果",-1)),t(d,{gutter:5},{default:e(()=>[t(a,{span:8},{default:e(()=>[t(s,{style:{height:"667px"},src:i(l).imgLoading1,fit:"contain"},null,8,["src"])]),_:1}),t(a,{span:8},{default:e(()=>[t(s,{style:{height:"667px"},src:i(l).imgLoading2,fit:"contain"},null,8,["src"])]),_:1}),t(a,{span:8},{default:e(()=>[t(s,{style:{height:"667px"},src:i(l).imgLoading3,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t(d,{gutter:5},{default:e(()=>[t(a,{span:8},{default:e(()=>[t(s,{style:{height:"667px"},src:i(l).imgLoading4,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),o[5]||(o[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},b(N))])]),_:1})}}});export{U as default};
