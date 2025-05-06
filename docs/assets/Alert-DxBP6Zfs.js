import"./base-iFpej8ky.js";import{E as u,a as _}from"./el-col-DqlaDnvv.js";import{n as d}from"./el-image-viewer-BD4g0xdz.js";import{E as f,a as g}from"./el-divider-BxH2mNTd.js";import{H as x,a as A,E as h}from"./index-CDegeG6m.js";import{d as J,m as E,q as F,t as n,l as e,S as o,U as s,I as b,e as k}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const w=`
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
`,D=J({__name:"Alert",setup(S){return E(()=>{x.highlightAll()}),(B,t)=>{const l=A,i=h,p=g,a=d,r=u,c=_,m=f;return k(),F(m,{style:{height:"100%"},content:"JFUI"},{default:n(()=>[e(i,{separator:"/"},{default:n(()=>[e(l,{to:{path:"/"}},{default:n(()=>t[0]||(t[0]=[s("首页")])),_:1}),e(l,null,{default:n(()=>t[1]||(t[1]=[s("通用组件")])),_:1}),e(l,null,{default:n(()=>t[2]||(t[2]=[s("Alert")])),_:1})]),_:1}),e(p),t[3]||(t[3]=o("p",null,"Cupertino风格系统弹窗的封装",-1)),t[4]||(t[4]=o("h3",null,"效果",-1)),e(c,{gutter:5},{default:n(()=>[e(r,{span:8},{default:n(()=>[e(a,{style:{height:"667px"},src:"/src/assets/images/img-alert1.png",fit:"contain"})]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{style:{height:"667px"},src:"/src/assets/images/img-alert2.png",fit:"contain"})]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{style:{height:"667px"},src:"/src/assets/images/img-alert3.png",fit:"contain"})]),_:1})]),_:1}),t[5]||(t[5]=o("h3",null,"代码",-1)),o("pre",null,[o("code",{class:"code-container"},b(w))])]),_:1})}}});export{D as default};
