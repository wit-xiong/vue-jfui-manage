import"./base-iFpej8ky.js";import{E as _,a as d}from"./el-col-DqlaDnvv.js";import{n as c}from"./el-image-viewer-BD4g0xdz.js";import{E as g,a as f}from"./el-divider-BxH2mNTd.js";import{H as w,a as h,E as C}from"./index-CDegeG6m.js";import{d as E,m as x,q as V,t as s,l as t,S as o,U as r,I as S,e as b}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const y=`
// 初始化控制器
final JFStatusController _statusController = JFStatusController();

// 初始化控件
JFStatusView(
    builder: (context) {
        return Center(
            child: Text('真实页面'),
        );
    },
    controller: _statusController,
)

// 改变状态
_statusController.showLoading();
_statusController.showEmpty();
_statusController.showFailed();
_statusController.showLoaded();
`,L=E({__name:"StatusView",setup(B){return x(()=>{w.highlightAll()}),(F,e)=>{const n=h,i=C,u=f,a=c,l=_,m=d,p=g;return b(),V(p,{style:{height:"100%"},content:"JFUI"},{default:s(()=>[t(i,{separator:"/"},{default:s(()=>[t(n,{to:{path:"/"}},{default:s(()=>e[0]||(e[0]=[r("首页")])),_:1}),t(n,null,{default:s(()=>e[1]||(e[1]=[r("通用组件")])),_:1}),t(n,null,{default:s(()=>e[2]||(e[2]=[r("StatusView")])),_:1})]),_:1}),t(u),e[3]||(e[3]=o("p",null,"状态页面",-1)),e[4]||(e[4]=o("h3",null,"效果",-1)),t(m,{gutter:5},{default:s(()=>[t(l,{span:8},{default:s(()=>[t(a,{style:{height:"667px"},src:"/src/assets/images/img-statusView1.png",fit:"contain"})]),_:1}),t(l,{span:8},{default:s(()=>[t(a,{style:{height:"667px"},src:"/src/assets/images/img-statusView2.png",fit:"contain"})]),_:1}),t(l,{span:8},{default:s(()=>[t(a,{style:{height:"667px"},src:"/src/assets/images/img-statusView3.png",fit:"contain"})]),_:1}),t(l,{span:8},{default:s(()=>[t(a,{style:{height:"667px"},src:"/src/assets/images/img-statusView4.png",fit:"contain"})]),_:1})]),_:1}),e[5]||(e[5]=o("h3",null,"代码",-1)),o("pre",null,[o("code",{class:"code-container"},S(y))])]),_:1})}}});export{L as default};
