(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(3),i=n.n(c),d=(n(8),n(9),n(10),n(11),n(12),n(0));var r=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),s=e.date.getFullYear();return Object(d.jsxs)("div",{className:"expense-date",children:[Object(d.jsx)("div",{className:"expense-date__month",children:t}),Object(d.jsx)("div",{className:"expense-date__year",children:s}),Object(d.jsx)("div",{className:"expense-date__day",children:n})]})};n(14);var l=function(e){var t="card "+e.className;return Object(d.jsx)("div",{className:t,children:e.children})};var o=function(e){return Object(d.jsxs)(l,{className:"expense-item",children:[Object(d.jsx)(r,{date:e.date}),Object(d.jsxs)("div",{className:"expense-item__description",children:[" ",Object(d.jsx)("h2",{children:e.title})," "]}),Object(d.jsxs)("div",{className:"expense-item__price",children:["Rs ",e.amount]})]})};var x=function(e){return Object(d.jsxs)(l,{className:"expenses",children:[Object(d.jsx)(o,{title:e.expenses[0].title,amount:e.expenses[0].amount,date:e.expenses[0].date}),Object(d.jsx)(o,{title:e.expenses[1].title,amount:e.expenses[1].amount,date:e.expenses[1].date}),Object(d.jsx)(o,{title:e.expenses[2].title,amount:e.expenses[2].amount,date:e.expenses[2].date})]})},j=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var u=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:" Let's get started "}),Object(d.jsx)(x,{expenses:j})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),p()}],[[15,1,2]]]);
//# sourceMappingURL=main.54eaa154.chunk.js.map