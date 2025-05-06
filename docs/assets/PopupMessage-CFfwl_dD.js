import"./base-DDXUP3tn.js";import{E as _,a as d}from"./el-col-JlPnFV8T.js";import{n as f}from"./el-image-viewer-wy8hT5do.js";import{E as c,a as g}from"./el-divider-BmLOJKtT.js";import{H as y,a as E,E as k}from"./index-Bm_QEFxJ.js";import{A as b}from"./assets-cmOGC0S9.js";import{d as x,m as w,q as B,t as o,l as t,S as n,U as a,u as P,I,e as J}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const M=`
// 初始key
final GlobalKey _key = GlobalKey();

// 初始化控件
JFButton(
    key: _key,
    text: 'Popover点击',
    onTap: () => JFPopupWindow.show(context, popKey: _key, text: '床前明月光，疑是地上霜。'),
),
`,G=x({__name:"PopupMessage",setup(h){return w(()=>{y.highlightAll()}),(v,e)=>{const l=E,s=k,r=g,p=f,m=_,i=d,u=c;return J(),B(u,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[t(s,{separator:"/"},{default:o(()=>[t(l,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[a("首页")])),_:1}),t(l,null,{default:o(()=>e[1]||(e[1]=[a("通用组件")])),_:1}),t(l,null,{default:o(()=>e[2]||(e[2]=[a("PopupMessage")])),_:1})]),_:1}),t(r),e[3]||(e[3]=n("p",null,"弹出消息",-1)),e[4]||(e[4]=n("h3",null,"效果",-1)),t(i,{gutter:5},{default:o(()=>[t(m,{span:8},{default:o(()=>[t(p,{style:{height:"667px"},src:P(b).imgPopupMessage,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),e[5]||(e[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},I(M))])]),_:1})}}});export{G as default};
