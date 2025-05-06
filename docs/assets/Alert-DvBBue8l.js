import"./base-CxlrsnOH.js";import{E as d,a as f}from"./el-col-DqohpRXi.js";import{n as A,A as s}from"./assets-e2ht6Zd-.js";import{E as x,a as g}from"./el-divider-L3FCdWci.js";import{H as h,a as J,E}from"./index-BXfa59uB.js";import{d as F,m as b,q as k,t as n,l as e,S as o,U as i,u as p,I as w,e as S}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const B=`
// 效果一
JFAlert.show(
    context,
    title: '提示',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    onConfirm: () {
        print('点击了确定按钮！');
    },
);

// 效果二
JFAlert.showButtons(
    context,
    title: '提示',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    actions: [
        JFAlertAction(text: '按钮一', callback: () => print('点击了按钮一')),
        JFAlertAction(text: '按钮二', callback: () => print('点击了按钮二')),
        JFAlertAction(text: '按钮三', callback: () => print('点击了按钮三')),
    ],
);

// 效果三
JFAlert.showSheet(
    context,
    actions: [
        JFSheetAction(text: '按钮一', onTap: () => print('点击了按钮一')),
        JFSheetAction(text: '按钮二', onTap: () => print('点击了按钮二')),
        JFSheetAction(text: '按钮三', onTap: () => print('点击了按钮三')),
    ],
);
`,U=F({__name:"Alert",setup(y){return b(()=>{h.highlightAll()}),(C,t)=>{const l=J,c=E,m=g,r=A,a=d,u=f,_=x;return S(),k(_,{style:{height:"100%"},content:"JFUI"},{default:n(()=>[e(c,{separator:"/"},{default:n(()=>[e(l,{to:{path:"/"}},{default:n(()=>t[0]||(t[0]=[i("首页")])),_:1}),e(l,null,{default:n(()=>t[1]||(t[1]=[i("通用组件")])),_:1}),e(l,null,{default:n(()=>t[2]||(t[2]=[i("Alert")])),_:1})]),_:1}),e(m),t[3]||(t[3]=o("p",null,"Cupertino风格系统弹窗的封装",-1)),t[4]||(t[4]=o("h3",null,"效果",-1)),e(u,{gutter:5},{default:n(()=>[e(a,{span:8},{default:n(()=>[e(r,{style:{height:"667px"},src:p(s).imgAlert1,fit:"contain"},null,8,["src"])]),_:1}),e(a,{span:8},{default:n(()=>[e(r,{style:{height:"667px"},src:p(s).imgAlert2,fit:"contain"},null,8,["src"])]),_:1}),e(a,{span:8},{default:n(()=>[e(r,{style:{height:"667px"},src:p(s).imgAlert3,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t[5]||(t[5]=o("h3",null,"代码",-1)),o("pre",null,[o("code",{class:"code-container"},w(B))])]),_:1})}}});export{U as default};
