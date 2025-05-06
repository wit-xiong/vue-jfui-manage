import"./base-iFpej8ky.js";import{E as d,a as c}from"./el-col-DqlaDnvv.js";import{n as u}from"./el-image-viewer-BD4g0xdz.js";import{E as _,a as f}from"./el-divider-BxH2mNTd.js";import{H as h,a as x,E}from"./index-CDegeG6m.js";import{d as D,m as J,q as w,t as o,l as e,S as a,U as i,I as F,e as b}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const I=`
// 效果一
JFDialog.showAlert(
    tag: 'alert1',
    titleText: '温馨提示',
    messageText: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    onConfirm: () {},
);

// 效果二
JFDialog.showSheet(
    actions: [
        JFActionSheetItem('选项一'),
        JFActionSheetItem('选项一'),
        JFActionSheetItem('选项一'),
    ],
);

// 效果三
JFDialog.show(
    tag: 'alert2',
    builder: (ctx) {
        return Container(
            width: 100,
            height: 100,
            color: Colors.red,
        );
    },
);

// 如果需要主动关闭某个弹窗
JFDialog.dismiss(tag: 'alert1');
`,v=D({__name:"Dialog",setup(S){return J(()=>{h.highlightAll()}),(C,t)=>{const s=x,r=E,m=f,l=u,n=d,g=c,p=_;return b(),w(p,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(r,{separator:"/"},{default:o(()=>[e(s,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[i("首页")])),_:1}),e(s,null,{default:o(()=>t[1]||(t[1]=[i("通用组件")])),_:1}),e(s,null,{default:o(()=>t[2]||(t[2]=[i("Dialog")])),_:1})]),_:1}),e(m),t[3]||(t[3]=a("p",null,"Dialog封装，包含中间弹窗、底部弹窗、自定义弹窗",-1)),t[4]||(t[4]=a("h3",null,"效果",-1)),e(g,{gutter:5},{default:o(()=>[e(n,{span:8},{default:o(()=>[e(l,{style:{height:"667px"},src:"/src/assets/images/img-dialog1.png",fit:"contain"})]),_:1}),e(n,{span:8},{default:o(()=>[e(l,{style:{height:"667px"},src:"/src/assets/images/img-dialog2.png",fit:"contain"})]),_:1}),e(n,{span:8},{default:o(()=>[e(l,{style:{height:"667px"},src:"/src/assets/images/img-dialog3.png",fit:"contain"})]),_:1})]),_:1}),t[5]||(t[5]=a("h3",null,"代码",-1)),a("pre",null,[a("code",{class:"code-container"},F(I))])]),_:1})}}});export{v as default};
