import"./base-CxlrsnOH.js";import{E as u,a as c}from"./el-col-DqohpRXi.js";import{n as _,A as f}from"./assets-e2ht6Zd-.js";import{E as g,a as x}from"./el-divider-L3FCdWci.js";import{H as v,a as E,E as P}from"./index-BXfa59uB.js";import{d as h,m as B,q as b,t,l as e,S as r,U as l,u as C,I as J,e as S}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const w=`
// 初始化控制器
final JFPopoverController _controller = JFPopoverController();

// 初始化控件
JFPopover(
    controller: _controller,
        child: JFButton(text: 'Popover点击', onTap: () => _controller.toggle()),
        popover: (ctx) {
            return SizedBox(
            width: 100,
            child: Column(
                mainAxisSize: MainAxisSize.min,
                children: List.generate(4, (index) {
                    return Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        child: Text('选项$index'),
                    );
                }),
            ),
        );
    },
),
`,D=h({__name:"Popover",setup(A){return B(()=>{v.highlightAll()}),(F,o)=>{const n=E,a=P,s=x,i=_,m=u,p=c,d=g;return S(),b(d,{style:{height:"100%"},content:"JFUI"},{default:t(()=>[e(a,{separator:"/"},{default:t(()=>[e(n,{to:{path:"/"}},{default:t(()=>o[0]||(o[0]=[l("首页")])),_:1}),e(n,null,{default:t(()=>o[1]||(o[1]=[l("通用组件")])),_:1}),e(n,null,{default:t(()=>o[2]||(o[2]=[l("Popover")])),_:1})]),_:1}),e(s),o[3]||(o[3]=r("p",null,"弹出菜单选择器",-1)),o[4]||(o[4]=r("h3",null,"效果",-1)),e(p,{gutter:5},{default:t(()=>[e(m,{span:8},{default:t(()=>[e(i,{style:{height:"667px"},src:C(f).imgPopover,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),o[5]||(o[5]=r("h3",null,"代码",-1)),r("pre",null,[r("code",{class:"code-container"},J(w))])]),_:1})}}});export{D as default};
