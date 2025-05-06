import"./base-CxlrsnOH.js";import{E as h,a as g}from"./el-col-DqohpRXi.js";import{n as p,A as i}from"./assets-e2ht6Zd-.js";import{E as _,a as C}from"./el-divider-L3FCdWci.js";import{H as y,a as b,E}from"./index-BXfa59uB.js";import{d as x,m as A,q as R,t,l as o,S as n,U as a,u as d,I as w,e as F}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const I=`
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
`,M=x({__name:"Refresh",setup(B){return A(()=>{y.highlightAll()}),(J,e)=>{const r=b,m=E,c=C,l=p,s=h,f=g,u=_;return F(),R(u,{style:{height:"100%"},content:"JFUI"},{default:t(()=>[o(m,{separator:"/"},{default:t(()=>[o(r,{to:{path:"/"}},{default:t(()=>e[0]||(e[0]=[a("首页")])),_:1}),o(r,null,{default:t(()=>e[1]||(e[1]=[a("通用组件")])),_:1}),o(r,null,{default:t(()=>e[2]||(e[2]=[a("Refresh")])),_:1})]),_:1}),o(c),e[3]||(e[3]=n("p",null,"刷新组件",-1)),e[4]||(e[4]=n("h3",null,"效果",-1)),o(f,{gutter:5},{default:t(()=>[o(s,{span:8},{default:t(()=>[o(l,{style:{height:"667px"},src:d(i).imgRefresh1,fit:"contain"},null,8,["src"])]),_:1}),o(s,{span:8},{default:t(()=>[o(l,{style:{height:"667px"},src:d(i).imgRefresh2,fit:"contain"},null,8,["src"])]),_:1}),o(s,{span:8},{default:t(()=>[o(l,{style:{height:"667px"},src:d(i).imgRefresh3,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),e[5]||(e[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},w(I))])]),_:1})}}});export{M as default};
