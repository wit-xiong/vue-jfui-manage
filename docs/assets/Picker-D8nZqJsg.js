import"./base-iFpej8ky.js";import{E as d,a as u}from"./el-col-DqlaDnvv.js";import{n as _}from"./el-image-viewer-BD4g0xdz.js";import{E as f,a as g}from"./el-divider-BxH2mNTd.js";import{H as k,a as x,E}from"./index-CDegeG6m.js";import{d as v,m as h,q as w,t as o,l as e,S as n,U as l,I as b,e as C}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const y=`
// 地址选择器
JFPicker.showAddress(context, onConfirm: (val) => print(val));

// 日期选择器
JFPicker.showDate(context, onConfirm: (val) => print(val));

// 普通选择器
JFPicker.showNormal(
    context,
    datas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    onConfirm: (val) => print(val),
);
`,A=v({__name:"Picker",setup(B){return h(()=>{k.highlightAll()}),(J,t)=>{const s=x,i=E,m=g,r=_,a=d,p=u,c=f;return C(),w(c,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(i,{separator:"/"},{default:o(()=>[e(s,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[l("首页")])),_:1}),e(s,null,{default:o(()=>t[1]||(t[1]=[l("通用组件")])),_:1}),e(s,null,{default:o(()=>t[2]||(t[2]=[l("Picker")])),_:1})]),_:1}),e(m),t[3]||(t[3]=n("p",null,"选择器，包含普通选择器、日期选择器、地址选择器等",-1)),t[4]||(t[4]=n("p",null,"样式可自定义",-1)),t[5]||(t[5]=n("h3",null,"效果",-1)),e(p,{gutter:5},{default:o(()=>[e(a,{span:8},{default:o(()=>[e(r,{style:{height:"667px"},src:"/src/assets/images/img-picker1.png",fit:"contain"})]),_:1}),e(a,{span:8},{default:o(()=>[e(r,{style:{height:"667px"},src:"/src/assets/images/img-picker2.png",fit:"contain"})]),_:1}),e(a,{span:8},{default:o(()=>[e(r,{style:{height:"667px"},src:"/src/assets/images/img-picker3.png",fit:"contain"})]),_:1})]),_:1}),t[6]||(t[6]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},b(y))])]),_:1})}}});export{A as default};
