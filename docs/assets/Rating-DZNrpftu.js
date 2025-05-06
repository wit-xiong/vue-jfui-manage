import"./base-CxlrsnOH.js";import{E as p,a as _}from"./el-col-DqohpRXi.js";import{n as c,A as g}from"./assets-e2ht6Zd-.js";import{E as f,a as E}from"./el-divider-L3FCdWci.js";import{H as C,a as b,E as R}from"./index-BXfa59uB.js";import{d as h,m as B,q as S,t as o,l as e,S as n,U as l,u as w,I as x,e as y}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const I=`
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
`,U=h({__name:"Rating",setup(J){return B(()=>{C.highlightAll()}),(k,t)=>{const a=b,r=R,s=E,i=c,m=p,d=_,u=f;return y(),S(u,{style:{height:"100%"},content:"JFUI"},{default:o(()=>[e(r,{separator:"/"},{default:o(()=>[e(a,{to:{path:"/"}},{default:o(()=>t[0]||(t[0]=[l("首页")])),_:1}),e(a,null,{default:o(()=>t[1]||(t[1]=[l("通用组件")])),_:1}),e(a,null,{default:o(()=>t[2]||(t[2]=[l("Rating")])),_:1})]),_:1}),e(s),t[3]||(t[3]=n("p",null,"评价组件",-1)),t[4]||(t[4]=n("h3",null,"效果",-1)),e(d,{gutter:5},{default:o(()=>[e(m,{span:8},{default:o(()=>[e(i,{style:{height:"667px"},src:w(g).imgRating,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),t[5]||(t[5]=n("h3",null,"代码",-1)),n("pre",null,[n("code",{class:"code-container"},x(I))])]),_:1})}}});export{U as default};
