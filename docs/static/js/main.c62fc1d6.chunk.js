(this["webpackJsonp05-git-expert-app"]=this["webpackJsonp05-git-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),i=a(1),u=a(8),m=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],m=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>1&&(m(""),t((function(e){return[l].concat(Object(u.a)(e))})))}},r.a.createElement("h2",null," AddCategory "),r.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){m(e.target.value)},id:"",placeholder:""}))},s=a(4),o=a.n(s),d=a(7),p=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=uyRvZQC4alZuhGaK9y5m6nBwYbzU8qdU"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.img,a=e.count;return r.a.createElement("div",{style:{marginLeft:"15px"}},r.a.createElement("li",null,r.a.createElement("div",{style:{padding:"5px"},className:"list-group card animate__animated animate__bounce"},r.a.createElement("a",{href:"https://es.reactjs.org/docs/faq-structure.html",className:"list-group-item list-group-item-action flex-column align-items-start active"},r.a.createElement("span",{className:"badge badge-pill badge-warning"}," ",r.a.createElement("small",null," ",a," ")," "),r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"h5"}," ",t.title," ")),r.a.createElement("img",{src:t.url,className:"img-fluid",alt:t.title})))))},g=function(e){var t=e.category,a=Object(n.useState)(0),c=Object(i.a)(a,2),l=c[0],u=c[1],m=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),1e3)}))}),[e]),r}(t),s=m.data,o=m.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("h3",{className:"animate__animated animate__fadeIn"}," ",t," "),o&&r.a.createElement("p",{className:"animate__animated animate__flash"}," Loading... "),r.a.createElement("div",{className:"card-grid"},s.map((function(e){return r.a.createElement(f,{key:e.id,img:e,count:l})})),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-lg btn-block",onClick:function(){u(l+1)}},"Click")))},E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," GifExpertApp "),r.a.createElement("hr",null),r.a.createElement(m,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("h2",null," GifGrid "),a.map((function(e,t){return r.a.createElement(g,{key:e,category:e})}))))};a(15);l.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c62fc1d6.chunk.js.map