import"./base-iFpej8ky.js";import{E as c,a as _}from"./el-col-DqlaDnvv.js";import{n as u}from"./el-image-viewer-BD4g0xdz.js";import{E as g,a as f}from"./el-divider-BxH2mNTd.js";import{H as x,a as v,E}from"./index-CDegeG6m.js";import{d as h,m as B,q as P,t,l as e,S as r,U as l,I as b,e as C}from"./index-ChCffZU7.js";import"./icon-ID1ynMdy.js";const J=`
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
`,T=h({__name:"Popover",setup(S){return B(()=>{x.highlightAll()}),(w,o)=>{const n=v,a=E,s=f,i=u,m=c,p=_,d=g;return C(),P(d,{style:{height:"100%"},content:"JFUI"},{default:t(()=>[e(a,{separator:"/"},{default:t(()=>[e(n,{to:{path:"/"}},{default:t(()=>o[0]||(o[0]=[l("首页")])),_:1}),e(n,null,{default:t(()=>o[1]||(o[1]=[l("通用组件")])),_:1}),e(n,null,{default:t(()=>o[2]||(o[2]=[l("Popover")])),_:1})]),_:1}),e(s),o[3]||(o[3]=r("p",null,"弹出菜单选择器",-1)),o[4]||(o[4]=r("h3",null,"效果",-1)),e(p,{gutter:5},{default:t(()=>[e(m,{span:8},{default:t(()=>[e(i,{style:{height:"667px"},src:"/src/assets/images/img-popover.png",fit:"contain"})]),_:1})]),_:1}),o[5]||(o[5]=r("h3",null,"代码",-1)),r("pre",null,[r("code",{class:"code-container"},b(J))])]),_:1})}}});export{T as default};
