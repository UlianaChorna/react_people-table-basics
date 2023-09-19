(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(7),s=(c(31),c(32),c(2)),r=c(10),j=c.n(r),i=(c(33),c(4)),l=c(0),b=(c(34),c(3)),o=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},d=function(e){var t=e.person,c=t.name,n=t.sex,s=t.slug;return Object(b.jsx)(a.b,{to:{pathname:"/people/".concat(s)},className:j()({"has-text-danger":"f"===n}),children:c})},h=function(e){var t=e.people,c=Object(s.q)().slugPerson,n=function(e){if(e)return t.find((function(t){return t.name===e}))};return Object(b.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.name,a=e.sex,s=e.born,r=e.died,i=e.slug,l=e.fatherName,o=e.motherName,h=n(o),x=n(l);return Object(b.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":i===c}),children:[Object(b.jsx)("td",{children:Object(b.jsx)(d,{person:{name:t,sex:a,born:s,died:r,slug:i,fatherName:l,motherName:o}})}),Object(b.jsx)("td",{children:a}),Object(b.jsx)("td",{children:s}),Object(b.jsx)("td",{children:r}),Object(b.jsx)("td",{children:h?Object(b.jsx)(d,{person:h}):o||Object(b.jsx)("span",{children:"-"})}),Object(b.jsx)("td",{children:x?Object(b.jsx)(d,{person:x}):l||Object(b.jsx)("span",{children:"-"})})]},i)}))})]})};function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!0),s=Object(i.a)(a,2),r=s[0],j=s[1],d=Object(l.useState)(!1),O=Object(i.a)(d,2),p=O[0],u=O[1];return Object(l.useEffect)((function(){x().then(n).catch((function(){return u(!0)})).finally((function(){return j(!1)}))}),[]),r?Object(b.jsx)(o,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("div",{className:"box table-container",children:c.length?Object(b.jsx)(h,{people:c}):Object(b.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})}),!r&&p&&Object(b.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})]})},p=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},u=function(){return Object(b.jsxs)("div",{"data-cy":"app",children:[Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(a.c,{className:p,to:"/",children:"Home"}),Object(b.jsx)(a.c,{className:p,to:"/people",children:"People"})]})})}),Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/",element:Object(b.jsx)("h1",{className:"title",children:"Home Page"})}),Object(b.jsx)(s.b,{path:"/home",element:Object(b.jsx)(s.a,{to:"/",replace:!0})}),Object(b.jsxs)(s.b,{path:"people",children:[Object(b.jsx)(s.b,{index:!0,element:Object(b.jsx)(O,{})}),Object(b.jsx)(s.b,{path:":slugPerson",element:Object(b.jsx)(O,{})})]}),Object(b.jsx)(s.b,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(b.jsx)(a.a,{children:Object(b.jsx)(u,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9b11f23c.chunk.js.map