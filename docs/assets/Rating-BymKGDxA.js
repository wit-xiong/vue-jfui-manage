import"./base-DDXUP3tn.js";import{E as u,a as _}from"./el-col-JlPnFV8T.js";import{n as c}from"./el-image-viewer-wy8hT5do.js";import{E as g,a as f}from"./el-divider-BmLOJKtT.js";import{H as E,a as C,E as b}from"./index-Bm_QEFxJ.js";import{A as R}from"./assets-cmOGC0S9.js";import{d as h,m as B,q as S,t as o,l as e,S as n,U as r,u as w,I as x,e as y}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const I=`
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
`,q=h({__name:"Rating",setup(J){return B(()=>{E.highlightAll()}),(k,t)=>{const a=C,l=b,s=f,i=c,m=u,d=_,p=g;return y(),S(p,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(l,{separator:"/"},{default:o(()=>[e(a,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[r("首页")])),_:1}),e(a,null,{default:o(()=>t[1]||(t[1]=[r("通用组件")])),_:1}),e(a,null,{default:o(()=>t[2]||(t[2]=[r("Rating")])),_:1})]),_:1}),e(s),t[3]||(t[3]=n("p",null,"评价组件",-1)),t[4]||(t[4]=n("h3",null,"效果",-1)),e(d,{gutter:5},{default:o(()=>[e(m,{span:8},{default:o(()=>[e(i,{style:{height:"667px"},src:w(R).imgRating,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t[5]||(t[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},x(I))])]),_:1})}}});export{q as default};
