import"./base-iFpej8ky.js";import{E as p,a as _}from"./el-col-DqlaDnvv.js";import{n as c}from"./el-image-viewer-BD4g0xdz.js";import{E as x,a as f}from"./el-divider-BxH2mNTd.js";import{H as g,a as E,E as I}from"./index-CDegeG6m.js";import{d as h,m as B,q as b,t as o,l as t,S as n,U as l,I as C,e as R}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const V=`
// 已选中
JFRadioButton(
    radioIndex: 1,
    isSelected: true,
    child: Text('选择一'),
    onValueChangedAtIndex: (index, active) {},
),

// 禁用
JFRadioButton(
    radioIndex: 1,
    disable: true,
    child: Text('选择二'),
    onValueChangedAtIndex: (index, active) {},
),

// 未选中
JFRadioButton(
    radioIndex: 1,
    child: Text('选择三'),
    onValueChangedAtIndex: (index, active) {},
),
`,N=h({__name:"Radio",setup(v){return B(()=>{g.highlightAll()}),(J,e)=>{const a=E,r=I,d=f,i=c,s=p,m=_,u=x;return R(),b(u,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[t(r,{separator:"/"},{default:o(()=>[t(a,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[l("首页")])),_:1}),t(a,null,{default:o(()=>e[1]||(e[1]=[l("通用组件")])),_:1}),t(a,null,{default:o(()=>e[2]||(e[2]=[l("Radio")])),_:1})]),_:1}),t(d),e[3]||(e[3]=n("p",null,"单选",-1)),e[4]||(e[4]=n("h3",null,"效果",-1)),t(m,{gutter:5},{default:o(()=>[t(s,{span:8},{default:o(()=>[t(i,{style:{height:"667px"},src:"/src/assets/images/img-radio.png",fit:"contain"})]),_:1})]),_:1}),e[5]||(e[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},C(V))])]),_:1})}}});export{N as default};
