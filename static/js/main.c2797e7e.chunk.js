(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{46:function(t,e,o){},56:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o.n(c),s=o(11),a=o.n(s),i=o(20),l=(o(46),o(39)),d=o(57),r=o(36),j=o.n(r),u=o(2),b=function(t){var e=t.todos,o=t.setTodos,c=t.setInputText,n=t.inputText,s=(t.status,t.setStatus);return Object(u.jsxs)("form",{className:"todo-form",children:[Object(u.jsx)("input",{className:"todo-input",type:"text",placeholder:"Add a todo",value:n,required:!0,onChange:function(t){c(t.target.value)}}),Object(u.jsx)(d.a,{className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),n?o([].concat(Object(l.a)(e),[{text:n,completed:!1,id:1e3*Math.random()}])):alert("Fill Todo"),c("")},variant:"contained",color:"primary",size:"large",children:Object(u.jsx)(j.a,{})}),Object(u.jsx)("div",{className:"select",children:Object(u.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(t){s(t.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"completed",children:"Completed"}),Object(u.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},O=o(30),x=o(37),f=o.n(x),m=o(27),p=o.n(m),h=o(38),v=o.n(h),T=o(72),N=function(t){var e=t.text,o=t.todo,c=t.todos,n=t.setTodos,s=t.setInputText;return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsxs)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:[e," "]}),Object(u.jsxs)(T.a,{children:[Object(u.jsx)(d.a,{className:"complete-btn",variant:"contained",color:"primary",onClick:function(){n(c.map((function(t){return t.id===o.id?Object(O.a)(Object(O.a)({},t),{},{completed:!t.completed}):t})))},children:Object(u.jsx)(f.a,{})}),Object(u.jsx)(d.a,{className:"edit-btn",variant:"contained",onClick:function(){var t=c.filter((function(t){return t.id!==o.id})),e=c.find((function(t){return t.id===o.id}));s(e.text),n(t)},children:Object(u.jsx)(v.a,{})}),Object(u.jsx)(d.a,{className:"trash-btn",variant:"contained",color:"secondary",onClick:function(){n(c.filter((function(t){return t.id!==o.id})))},children:Object(u.jsx)(p.a,{})})]})]})},g=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos,n=t.setInputText;return Object(u.jsxs)("div",{div:"todo-container",children:[Object(u.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(u.jsx)(N,{todos:e,todo:t,setTodos:o,text:t.text,setInputText:n},t.id)}))}),Object(u.jsxs)(d.a,{className:"deleteall-btn",style:{margin:"0 auto",display:"flex"},variant:"contained",color:"secondary",onClick:function(){o([])},children:[Object(u.jsx)("p",{children:"Delete All"}),Object(u.jsx)(p.a,{})]})]})};var S=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(i.a)(s,2),l=a[0],d=a[1],r=Object(c.useState)("All"),j=Object(i.a)(r,2),O=j[0],x=j[1],f=Object(c.useState)([]),m=Object(i.a)(f,2),p=m[0],h=m[1];Object(c.useEffect)((function(){N()}),[]),Object(c.useEffect)((function(){v(),T()}),[l,O]);var v=function(){switch(O){case"completed":h(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":h(l.filter((function(t){return!1===t.completed})));break;default:h(l)}},T=function(){localStorage.setItem("todos",JSON.stringify(l))},N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));d(t)}};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h2",{children:"Dipesh's Todo List "})}),Object(u.jsx)(b,{inputText:o,todos:l,setTodos:d,setInputText:n,status:O,setStatus:x}),Object(u.jsx)(g,{todos:l,setTodos:d,filteredTodos:p,setInputText:n})]})};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.c2797e7e.chunk.js.map