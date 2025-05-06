import"./base-CxlrsnOH.js";import{E as c,a as _}from"./el-col-DqohpRXi.js";import{n as f,A as r}from"./assets-e2ht6Zd-.js";import{E as h,a as D}from"./el-divider-L3FCdWci.js";import{H as x,a as E,E as J}from"./index-BXfa59uB.js";import{d as w,m as F,q as b,t as o,l as e,S as l,U as i,u as m,I as A,e as I}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const S=`
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
`,U=w({__name:"Dialog",setup(C){return F(()=>{x.highlightAll()}),(y,t)=>{const a=E,u=J,p=D,n=f,s=c,d=_,g=h;return I(),b(g,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(u,{separator:"/"},{default:o(()=>[e(a,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[i("首页")])),_:1}),e(a,null,{default:o(()=>t[1]||(t[1]=[i("通用组件")])),_:1}),e(a,null,{default:o(()=>t[2]||(t[2]=[i("Dialog")])),_:1})]),_:1}),e(p),t[3]||(t[3]=l("p",null,"Dialog封装，包含中间弹窗、底部弹窗、自定义弹窗",-1)),t[4]||(t[4]=l("h3",null,"效果",-1)),e(d,{gutter:5},{default:o(()=>[e(s,{span:8},{default:o(()=>[e(n,{style:{height:"667px"},src:m(r).imgDialog1,fit:"contain"},null,8,["src"])]),_:1}),e(s,{span:8},{default:o(()=>[e(n,{style:{height:"667px"},src:m(r).imgDialog2,fit:"contain"},null,8,["src"])]),_:1}),e(s,{span:8},{default:o(()=>[e(n,{style:{height:"667px"},src:m(r).imgDialog3,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t[5]||(t[5]=l("h3",null,"代码",-1)),l("pre",null,[l("code",{class:"code-container"},A(S))])]),_:1})}}});export{U as default};
