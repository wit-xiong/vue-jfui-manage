import"./base-iFpej8ky.js";import{E as u,a as _}from"./el-col-DqlaDnvv.js";import{n as g}from"./el-image-viewer-BD4g0xdz.js";import{E as c,a as f}from"./el-divider-BxH2mNTd.js";import{H as E,a as C,E as b}from"./index-CDegeG6m.js";import{d as h,m as B,q as R,t as o,l as e,S as n,U as r,I as S,e as w}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const x=`
// 默认
JFRatingStar(selectedCount: 3, size: 20),

// 自定义样式
Padding(
padding: const EdgeInsets.only(top: 10),
    child: JFRatingStar(
        selectedCount: 3,
        starBuilder: (state) {
            return Container(
                width: 20,
                height: 20,
                color: state == JFRatingState.select ? Colors.amber : Colors.grey,
            );
        },
    ),
),
`,H=h({__name:"Rating",setup(y){return B(()=>{E.highlightAll()}),(I,t)=>{const a=C,l=b,s=f,i=g,m=u,d=_,p=c;return w(),R(p,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(l,{separator:"/"},{default:o(()=>[e(a,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[r("首页")])),_:1}),e(a,null,{default:o(()=>t[1]||(t[1]=[r("通用组件")])),_:1}),e(a,null,{default:o(()=>t[2]||(t[2]=[r("Rating")])),_:1})]),_:1}),e(s),t[3]||(t[3]=n("p",null,"评价组件",-1)),t[4]||(t[4]=n("h3",null,"效果",-1)),e(d,{gutter:5},{default:o(()=>[e(m,{span:8},{default:o(()=>[e(i,{style:{height:"667px"},src:"/src/assets/images/img-rating.png",fit:"contain"})]),_:1})]),_:1}),t[5]||(t[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},S(x))])]),_:1})}}});export{H as default};
