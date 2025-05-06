import"./base-iFpej8ky.js";import{E as c,a as f}from"./el-col-DqlaDnvv.js";import{n as h}from"./el-image-viewer-BD4g0xdz.js";import{E as p,a as u}from"./el-divider-BxH2mNTd.js";import{H as _,a as C,E as y}from"./index-CDegeG6m.js";import{d as b,m as E,q as x,t as o,l as t,S as n,U as i,I as w,e as A}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const F=`
// 初始化刷新控制器
final JFRefreshController _refreshController = JFRefreshController();

// 初始化刷新组件
JFRefresh(
    controller: _refreshController,
    onRefresh: () {
        Future.delayed(2.seconds, () {
            _refreshController.refreshFinish();
        });
    },
    onLoad: () {
        Future.delayed(2.seconds, () {
            _refreshController.loadFinish();
        });
    },
    child: SingleChildScrollView(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
                Container(
                    width: double.infinity,
                    height: 300,
                    color: Colors.green,
                    margin: const EdgeInsets.only(bottom: 10),
                ),
            ],
        ),
    ),
)
`,D=b({__name:"Refresh",setup(I){return E(()=>{_.highlightAll()}),(R,e)=>{const r=C,a=y,m=u,s=h,l=c,d=f,g=p;return A(),x(g,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[t(a,{separator:"/"},{default:o(()=>[t(r,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[i("首页")])),_:1}),t(r,null,{default:o(()=>e[1]||(e[1]=[i("通用组件")])),_:1}),t(r,null,{default:o(()=>e[2]||(e[2]=[i("Refresh")])),_:1})]),_:1}),t(m),e[3]||(e[3]=n("p",null,"刷新组件",-1)),e[4]||(e[4]=n("h3",null,"效果",-1)),t(d,{gutter:5},{default:o(()=>[t(l,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:"/src/assets/images/img-refresh1.png",fit:"contain"})]),_:1}),t(l,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:"/src/assets/images/img-refresh2.png",fit:"contain"})]),_:1}),t(l,{span:8},{default:o(()=>[t(s,{style:{height:"667px"},src:"/src/assets/images/img-refresh3.png",fit:"contain"})]),_:1})]),_:1}),e[5]||(e[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},w(F))])]),_:1})}}});export{D as default};
