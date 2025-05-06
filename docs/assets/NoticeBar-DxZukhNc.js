import"./base-DDXUP3tn.js";import{E as p,a as u}from"./el-col-JlPnFV8T.js";import{n as _}from"./el-image-viewer-wy8hT5do.js";import{E as f,a as g}from"./el-divider-BmLOJKtT.js";import{H as N,a as B,E}from"./index-Bm_QEFxJ.js";import{A as y}from"./assets-cmOGC0S9.js";import{d as S,m as J,q as F,t as o,l as e,S as n,U as l,u as b,I as h,e as w}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const x=`
JFNoticeBar(
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    noticeStyle: JFNoticeStyles.normalNoticeWithArrow,
),
Padding(
    padding: const EdgeInsets.symmetric(vertical: 10),
    child: JFNoticeBar(
        marquee: true,
        content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
        noticeStyle: JFNoticeStyles.failWithClose,
    ),
),
JFNoticeBar(
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    noticeStyle: JFNoticeStyles.runningWithArrow,
),
`,U=S({__name:"NoticeBar",setup(A){return J(()=>{N.highlightAll()}),(I,t)=>{const r=B,a=E,s=g,i=_,m=p,c=u,d=f;return w(),F(d,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(a,{separator:"/"},{default:o(()=>[e(r,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[l("首页")])),_:1}),e(r,null,{default:o(()=>t[1]||(t[1]=[l("通用组件")])),_:1}),e(r,null,{default:o(()=>t[2]||(t[2]=[l("NoticeBar")])),_:1})]),_:1}),e(s),t[3]||(t[3]=n("p",null,"通知条效果，内置多种状态，内容可滚动",-1)),t[4]||(t[4]=n("h3",null,"效果",-1)),e(c,{gutter:5},{default:o(()=>[e(m,{span:8},{default:o(()=>[e(i,{style:{height:"667px"},src:b(y).imgNoticeBar,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t[5]||(t[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},h(x))])]),_:1})}}});export{U as default};
