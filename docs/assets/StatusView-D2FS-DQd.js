import"./base-DDXUP3tn.js";import{E as c,a as f}from"./el-col-JlPnFV8T.js";import{n as g}from"./el-image-viewer-wy8hT5do.js";import{E as w,a as h}from"./el-divider-BmLOJKtT.js";import{H as C,a as S,E}from"./index-Bm_QEFxJ.js";import{A as r}from"./assets-cmOGC0S9.js";import{d as x,m as V,q as b,t as o,l as t,S as l,U as u,u as a,I as y,e as B}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const F=`
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
`,U=x({__name:"StatusView",setup(J){return V(()=>{C.highlightAll()}),(k,e)=>{const i=S,m=E,p=h,s=g,n=c,_=f,d=w;return B(),b(d,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[t(m,{separator:"/"},{default:o(()=>[t(i,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[u("首页")])),_:1}),t(i,null,{default:o(()=>e[1]||(e[1]=[u("通用组件")])),_:1}),t(i,null,{default:o(()=>e[2]||(e[2]=[u("StatusView")])),_:1})]),_:1}),t(p),e[3]||(e[3]=l("p",null,"状态页面",-1)),e[4]||(e[4]=l("h3",null,"效果",-1)),t(_,{gutter:5},{default:o(()=>[t(n,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:a(r).imgStatusView1,fit:"contain"},null,8,["src"])]),_:1}),t(n,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:a(r).imgStatusView2,fit:"contain"},null,8,["src"])]),_:1}),t(n,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:a(r).imgStatusView3,fit:"contain"},null,8,["src"])]),_:1}),t(n,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:a(r).imgStatusView4,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),e[5]||(e[5]=l("h3",null,"代码",-1)),l("pre",null,[l("code",{class:"code-container"},y(F))])]),_:1})}}});export{U as default};
