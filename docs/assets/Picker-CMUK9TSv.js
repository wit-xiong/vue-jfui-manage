import"./base-CxlrsnOH.js";import{E as _,a as f}from"./el-col-DqohpRXi.js";import{n as g,A as s}from"./assets-e2ht6Zd-.js";import{E as k,a as x}from"./el-divider-L3FCdWci.js";import{H as E,a as v,E as P}from"./index-BXfa59uB.js";import{d as h,m as w,q as b,t as o,l as e,S as n,U as i,u as m,I as C,e as y}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const B=`
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
`,U=h({__name:"Picker",setup(J){return w(()=>{E.highlightAll()}),(A,t)=>{const l=v,p=P,u=x,r=g,a=_,c=f,d=k;return y(),b(d,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(p,{separator:"/"},{default:o(()=>[e(l,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[i("首页")])),_:1}),e(l,null,{default:o(()=>t[1]||(t[1]=[i("通用组件")])),_:1}),e(l,null,{default:o(()=>t[2]||(t[2]=[i("Picker")])),_:1})]),_:1}),e(u),t[3]||(t[3]=n("p",null,"选择器，包含普通选择器、日期选择器、地址选择器等",-1)),t[4]||(t[4]=n("p",null,"样式可自定义",-1)),t[5]||(t[5]=n("h3",null,"效果",-1)),e(c,{gutter:5},{default:o(()=>[e(a,{span:8},{default:o(()=>[e(r,{style:{height:"667px"},src:m(s).imgPicker1,fit:"contain"},null,8,["src"])]),_:1}),e(a,{span:8},{default:o(()=>[e(r,{style:{height:"667px"},src:m(s).imgPicker2,fit:"contain"},null,8,["src"])]),_:1}),e(a,{span:8},{default:o(()=>[e(r,{style:{height:"667px"},src:m(s).imgPicker3,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t[6]||(t[6]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},C(B))])]),_:1})}}});export{U as default};
