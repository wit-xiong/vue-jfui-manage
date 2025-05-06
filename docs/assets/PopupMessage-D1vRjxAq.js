import"./base-CxlrsnOH.js";import{E as _,a as d}from"./el-col-DqohpRXi.js";import{n as f,A as c}from"./assets-e2ht6Zd-.js";import{E as g,a as y}from"./el-divider-L3FCdWci.js";import{H as E,a as k,E as b}from"./index-BXfa59uB.js";import{d as x,m as w,q as B,t as o,l as t,S as n,U as a,u as P,I,e as J}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const M=`
// 初始key
final GlobalKey _key = GlobalKey();

// 初始化控件
JFButton(
    key: _key,
    text: 'Popover点击',
    onTap: () => JFPopupWindow.show(context, popKey: _key, text: '床前明月光，疑是地上霜。'),
),
`,D=x({__name:"PopupMessage",setup(h){return w(()=>{E.highlightAll()}),(v,e)=>{const l=k,s=b,r=y,p=f,m=_,u=d,i=g;return J(),B(i,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[t(s,{separator:"/"},{default:o(()=>[t(l,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[a("首页")])),_:1}),t(l,null,{default:o(()=>e[1]||(e[1]=[a("通用组件")])),_:1}),t(l,null,{default:o(()=>e[2]||(e[2]=[a("PopupMessage")])),_:1})]),_:1}),t(r),e[3]||(e[3]=n("p",null,"弹出消息",-1)),e[4]||(e[4]=n("h3",null,"效果",-1)),t(u,{gutter:5},{default:o(()=>[t(m,{span:8},{default:o(()=>[t(p,{style:{height:"667px"},src:P(c).imgPopupMessage,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),e[5]||(e[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},I(M))])]),_:1})}}});export{D as default};
