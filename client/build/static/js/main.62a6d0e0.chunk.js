(this.webpackJsonponline_compiler=this.webpackJsonponline_compiler||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(16),s=n.n(c),o=(n(22),n(5)),i=(n(23),n(3)),d=n(6),u=n(2);var r=function(e){var t=e.output;return Object(u.jsxs)("div",{className:"output",children:[Object(u.jsx)("div",{className:"file-name",children:"output.txt"}),Object(u.jsx)(d.a,{height:"35vh",width:"35vw",theme:"vs-dark",defaultLanguage:"text/plain",value:t||"",options:{readOnly:!0}})]})};var l=function(e){var t=e.input,n=e.setCode;return Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("div",{className:"file-name",children:"input.txt"}),Object(u.jsx)(d.a,{height:"35vh",width:"35vw",theme:"vs-dark",onChange:function(e){n((function(t){return Object(i.a)(Object(i.a)({},t),{},{input:e})}))},value:t||"",defaultLanguage:"text/plain"})]})};var j=function(e){var t=e.Code,n=e.setCode;return Object(u.jsxs)("div",{className:"editor",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"file-name",children:"".concat("nodejs"===t.language?"index.js":"python"===t.language?"main.py":"main.cpp")}),Object(u.jsx)(d.a,{height:"78vh",width:"60vw",theme:"vs-dark",path:t.language,defaultLanguage:"nodejs"===t.language?"javascript":t.language,defaultValue:t.code,onChange:function(e){n((function(t){return Object(i.a)(Object(i.a)({},t),{},{code:e})}))}})]}),Object(u.jsxs)("div",{className:"text-files",children:[Object(u.jsx)(l,{input:t.input,setCode:n}),Object(u.jsx)(r,{output:t.output})]})]})},p=n(17),h=n.n(p);var b=function(e){var t=e.Code,n=e.setCode,a=e.starterCode;return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsxs)("div",{className:"nav-brand",children:["Online Compiler ","</>"]}),Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("button",{onClick:function(){"cpp"===t.language||t.language,h.a.post("/api/code/",t).then((function(e){200===e.status?n((function(t){return Object(i.a)(Object(i.a)({},t),{},{output:e.data.output})})):alert("Something went wrong..")}))},className:"menu-item-button",children:"Run Code"}),Object(u.jsxs)("div",{class:"dropdown",children:[Object(u.jsx)("button",{class:"dropbtn",children:t.language}),Object(u.jsx)("div",{class:"dropdown-content",children:["cpp","python","nodejs"].map((function(e){return Object(u.jsx)("div",{onClick:function(){n({code:a["".concat(e)],language:e})},children:e},e)}))})]})]})]})};var v=function(){var e={cpp:'#include<iostream>\nusing namespace std;\n\nint main()\n{\n\tcout<<"Hello world!";\n\treturn 0;\n}',python:"# Python is not supported yet\nprint('Hello World!')",nodejs:"//Javascript is not supported yet\nconsole.log('Hello World!');"},t=Object(a.useState)({language:"cpp",code:e.cpp,output:""}),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)(b,{Code:c,setCode:s,starterCode:e}),Object(u.jsx)(j,{Code:c,setCode:s})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.62a6d0e0.chunk.js.map