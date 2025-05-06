import"./base-DDXUP3tn.js";import{E as u,a as c}from"./el-col-JlPnFV8T.js";import{n as _}from"./el-image-viewer-wy8hT5do.js";import{E as f,a as g}from"./el-divider-BmLOJKtT.js";import{H as x,a as v,E}from"./index-Bm_QEFxJ.js";import{A as P}from"./assets-cmOGC0S9.js";import{d as h,m as B,q as b,t,l as e,S as r,U as l,u as C,I as J,e as S}from"./index-DrN0OuMw.js";import"./icon-CRFjOUdg.js";const w=`
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
`,H=h({__name:"Popover",setup(A){return B(()=>{x.highlightAll()}),(F,o)=>{const n=v,a=E,s=g,i=_,m=u,p=c,d=f;return S(),b(d,{style:{height:"100%"},content:"JFUI"},{default:t(()=>[e(a,{separator:"/"},{default:t(()=>[e(n,{to:{path:"/"}},{default:t(()=>o[0]||(o[0]=[l("首页")])),_:1}),e(n,null,{default:t(()=>o[1]||(o[1]=[l("通用组件")])),_:1}),e(n,null,{default:t(()=>o[2]||(o[2]=[l("Popover")])),_:1})]),_:1}),e(s),o[3]||(o[3]=r("p",null,"弹出菜单选择器",-1)),o[4]||(o[4]=r("h3",null,"效果",-1)),e(p,{gutter:5},{default:t(()=>[e(m,{span:8},{default:t(()=>[e(i,{style:{height:"667px"},src:C(P).imgPopover,fit:"contain"},null,8,["src"])]),_:1})]),_:1}),o[5]||(o[5]=r("h3",null,"代码",-1)),r("pre",null,[r("code",{class:"code-container"},J(w))])]),_:1})}}});export{H as default};
