(this.webpackJsonppythagoras=this.webpackJsonppythagoras||[]).push([[0],{70:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(10),r=a.n(c),i=(a(70),a(47)),l=a(14),o=a(15),b=a(30),h=a(16),j=a(17),d=a(110),u=a(114),p=a(115),O=a(8),g=Object(d.a)((function(t){return{root:{"& > *":{margin:t.spacing(1),width:"25ch"}}}})),f=function(t){var e=g();return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(O.jsx)(u.a,{name:"s",label:"s\u3092\u5165\u529b",variant:"outlined",onChange:t.handleChange}),Object(O.jsx)(u.a,{name:"t",label:"t\u3092\u5165\u529b",variant:"outlined",onChange:t.handleChange}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:t.calculate,children:"CREATE"})]})})},x=a(28),v=function(t){var e=Object(x.useSpring)({a:t.a,b:t.b,c:t.c,config:{precision:1}});return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["a=",Object(O.jsx)(x.animated.span,{children:e.a})]}),Object(O.jsxs)("p",{children:["b=",Object(O.jsx)(x.animated.span,{children:e.b})]}),Object(O.jsxs)("p",{children:["c=",Object(O.jsx)(x.animated.span,{children:e.c})]})]})},m=function(t){var e=Object(x.useSpring)({width:0,height:0,borderRight:"".concat(10*t.a,"px solid transparent"),borderBottom:"".concat(10*t.b,"px solid lightblue"),marginLeft:"100px"});return Object(O.jsx)(x.animated.div,{style:e})},C=(a(78),function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState(Object(i.a)({},t.target.name,parseInt(t.target.value,10)))},n.calculate=function(t){var e=new RegExp(/^[0-9]*$/);switch(!0){case n.state.s<1||n.state.t<1:alert("s\u3068t\u306f1\u4ee5\u4e0a\u306e\u6574\u6570\u3067\u3059!");break;case!e.test(n.state.s)||!e.test(n.state.t):alert("s\u3068t\u306f\u534a\u89d2\u6570\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044!");break;case n.state.s>n.state.t:alert("s\u306ft\u4ee5\u4e0b\u306b\u3057\u3066\u304f\u3060\u3055\u3044!");break;case n.state.s%2===0&&n.state.t%2===0:alert("s\u3068t\u304c\u5076\u6570\u306b\u306a\u3063\u3066\u307e\u3059!");break;case n.state.s%2===0:alert("s\u304c\u5076\u6570\u306b\u306a\u3063\u3066\u307e\u3059!");break;case n.state.t%2===0:alert("t\u304c\u5076\u6570\u306b\u306a\u3063\u3066\u307e\u3059!");break;case 1!==function t(e,a){return 0===a?e:t(a,e%a)}(n.state.t,n.state.s):alert("s\u3068t\u304c\u4e92\u3044\u306b\u7d20\u3067\u306f\u3042\u308a\u307e\u305b\u3093!");break;default:n.setState({a:n.state.s*n.state.t,b:(Math.pow(n.state.t,2)-Math.pow(n.state.s,2))/2,c:(Math.pow(n.state.t,2)+Math.pow(n.state.s,2))/2})}t.preventDefault()},n.state={s:1,t:3,a:3,b:4,c:5},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.calculate=n.calculate.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"\u4e92\u3044\u306b\u7d20\u306a\u5947\u6570s,t\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 (1\u2266s\u2266t)"}),Object(O.jsx)(f,{handleChange:this.handleChange,calculate:this.calculate}),Object(O.jsx)(v,{a:this.state.a,b:this.state.b,c:this.state.c}),Object(O.jsx)(m,{a:this.state.a,b:this.state.b})]})}}]),a}(s.a.Component)),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,117)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),k()}},[[79,1,2]]]);
//# sourceMappingURL=main.4e2d960d.chunk.js.map