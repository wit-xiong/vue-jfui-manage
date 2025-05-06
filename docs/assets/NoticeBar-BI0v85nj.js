import"./base-iFpej8ky.js";import{E as p,a as u}from"./el-col-DqlaDnvv.js";import{n as _}from"./el-image-viewer-BD4g0xdz.js";import{E as f,a as g}from"./el-divider-BxH2mNTd.js";import{H as N,a as B,E}from"./index-CDegeG6m.js";import{d as y,m as S,q as J,t as o,l as e,S as n,U as l,I as F,e as b}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const h=`
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
`,q=y({__name:"NoticeBar",setup(w){return S(()=>{N.highlightAll()}),(x,t)=>{const r=B,a=E,i=g,s=_,m=p,c=u,d=f;return b(),J(d,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(a,{separator:"/"},{default:o(()=>[e(r,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[l("首页")])),_:1}),e(r,null,{default:o(()=>t[1]||(t[1]=[l("通用组件")])),_:1}),e(r,null,{default:o(()=>t[2]||(t[2]=[l("NoticeBar")])),_:1})]),_:1}),e(i),t[3]||(t[3]=n("p",null,"通知条效果，内置多种状态，内容可滚动",-1)),t[4]||(t[4]=n("h3",null,"效果",-1)),e(c,{gutter:5},{default:o(()=>[e(m,{span:8},{default:o(()=>[e(s,{style:{height:"667px"},src:"/src/assets/images/img-noticeBar.png",fit:"contain"})]),_:1})]),_:1}),t[5]||(t[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},F(h))])]),_:1})}}});export{q as default};
