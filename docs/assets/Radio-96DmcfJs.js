import"./base-CxlrsnOH.js";import{E as p,a as _}from"./el-col-DqohpRXi.js";import{n as c,A as f}from"./assets-e2ht6Zd-.js";import{E as x,a as g}from"./el-divider-L3FCdWci.js";import{H as E,a as I,E as h}from"./index-BXfa59uB.js";import{d as B,m as b,q as R,t as o,l as t,S as n,U as l,u as A,I as C,e as V}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const v=`
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
`,H=B({__name:"Radio",setup(J){return b(()=>{E.highlightAll()}),(k,e)=>{const a=I,r=h,d=g,i=c,s=p,m=_,u=x;return V(),R(u,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[t(r,{separator:"/"},{default:o(()=>[t(a,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[l("首页")])),_:1}),t(a,null,{default:o(()=>e[1]||(e[1]=[l("通用组件")])),_:1}),t(a,null,{default:o(()=>e[2]||(e[2]=[l("Radio")])),_:1})]),_:1}),t(d),e[3]||(e[3]=n("p",null,"单选",-1)),e[4]||(e[4]=n("h3",null,"效果",-1)),t(m,{gutter:5},{default:o(()=>[t(s,{span:8},{default:o(()=>[t(i,{style:{height:"667px"},src:A(f).imgRadio,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),e[5]||(e[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},C(v))])]),_:1})}}});export{H as default};
