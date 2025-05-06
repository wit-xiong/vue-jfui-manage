import"./base-CxlrsnOH.js";import{E as c,a as u}from"./el-divider-L3FCdWci.js";import{H as p,a as m,E as g}from"./index-BXfa59uB.js";import{d as x,m as h,q as f,t as l,l as n,S as o,U as d,I as t,e as b}from"./index-DbHIRVSm.js";import"./icon-Cf7wINma.js";const B=`
// 以前获取颜色的透明度
var color1 = Colors.red.withValues(alpha: 0.5);
// 现在获取颜色的透明度
var color2 = Colors.red.alphaVal(0.5);
`,T=`
// 获取尺寸
var size = context.sizeVal;
var width = context.screenWidth;
var height = context.screenHeight;
`,C=`
// Duration(milliseconds: 10);
10.milliseconds;

// Duration(seconds: 10);
10.seconds;

// Duration(minutes: 10);
10.minutes;

// SizedBox(width: 10);
10.width;

// SizedBox(height: 10);
10.height;
`,S=`
// 以前的写法
Text(
    '这是一段文字',
    style: TextStyle(
        color: Colors.red,
        fontSize: 14,
        fontWeight: FontWeight.bold,
    ),
);

// 现在的写法1
Text('这是一段文字').color(Colors.red).fontSize(14).bold;

// 现在的写法2
'这是一段文字'.toText.color(Colors.red).fontSize(14).bold;
`,z=`
// 添加Padding - 之前的做法
Padding(
    padding: const EdgeInsets.only(top: 10),
    child: Text('文字添加Padding'),
);
// 添加Padding - 现在的做法
Text('文字添加Padding').paddingTop(10);

// 设置宽度 - 之前的做法
SizedBox(
    height: 40,
    child: Text('文字添加Padding'),
);
// 设置宽度 - 现在的做法
Text('文字添加Padding').height(40);
`,D=`
// 设置边框和圆角 - 之前的做法
BoxDecoration(
    border: Border.all(color: Colors.red),
    borderRadius: BorderRadius.all(Radius.circular(12)),
);
// 设置边框和圆角 - 现在的做法
BoxDecoration()
    ..borderAll(color: Colors.red)
    ..radiusAll(12);
`,W=x({__name:"Extensions",setup(E){return h(()=>{p.highlightAll()}),(v,e)=>{const r=m,i=g,s=u,a=c;return b(),f(a,{style:{height:"100%"},content:"JFUI"},{default:l(()=>[n(i,{separator:"/"},{default:l(()=>[n(r,{to:{path:"/"}},{default:l(()=>e[0]||(e[0]=[d("首页")])),_:1}),n(r,null,{default:l(()=>e[1]||(e[1]=[d("系统扩展")])),_:1})]),_:1}),n(s),e[2]||(e[2]=o("p",null,"一些常用扩展部分示例",-1)),e[3]||(e[3]=o("h3",null,"颜色扩展",-1)),o("pre",null,[o("code",{class:"code-container"},t(B))]),e[4]||(e[4]=o("h3",null,"Context扩展",-1)),o("pre",null,[o("code",{class:"code-container"},t(T))]),e[5]||(e[5]=o("h3",null,"num扩展",-1)),o("pre",null,[o("code",{class:"code-container"},t(C))]),e[6]||(e[6]=o("h3",null,"Text扩展",-1)),o("pre",null,[o("code",{class:"code-container"},t(S))]),e[7]||(e[7]=o("h3",null,"Widget扩展",-1)),o("pre",null,[o("code",{class:"code-container"},t(z))]),e[8]||(e[8]=o("h3",null,"Decoration扩展",-1)),o("pre",null,[o("code",{class:"code-container"},t(D))])]),_:1})}}});export{W as default};
