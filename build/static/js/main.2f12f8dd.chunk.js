(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){e.exports={form:"Form_form__2KPyV",range:"Form_range__1Rpil",types_list:"Form_types_list__2RFcP",submit_button:"Form_submit_button__3Ct4k"}},16:function(e,t,n){e.exports={nav_container:"Nav_nav_container__Jh7g9",search_container:"Nav_search_container__39m4N",button_show_filters:"Nav_button_show_filters__I38X8",button_reset:"Nav_button_reset__23gQa",filters:"Nav_filters__1X4Mn",button_close_filters:"Nav_button_close_filters__2G-YC",filters_select:"Nav_filters_select__2Ic_7"}},17:function(e,t,n){e.exports={pagination_container:"Pagination_pagination_container__1QsBW",pagination:"Pagination_pagination__3-9HN",currentPage:"Pagination_currentPage__1350x"}},20:function(e,t,n){e.exports={card_container:"Card_card_container__3CIv0",row:"Card_row__1nm3Q",types:"Card_types__34NZI",outside_div:"Card_outside_div__-6ILn",link:"Card_link__2E-cM"}},29:function(e,t,n){e.exports={cards_container:"Cards_cards_container__3NHeN",loading:"Cards_loading__2FAXS",gif:"Cards_gif__1i8Gl"}},34:function(e,t,n){e.exports={container:"PageTemplate_container__AsMob",content:"PageTemplate_content__3-qAQ"}},46:function(e,t,n){e.exports={landing_container:"LandingPage_landing_container__2Z53-"}},48:function(e,t,n){e.exports={home_container:"Home_home_container__2m6pH"}},50:function(e,t,n){e.exports={search_bar:"SearchBar_search_bar__oj_Lm"}},57:function(e,t,n){},58:function(e,t,n){},9:function(e,t,n){e.exports={detail:"Details_detail__1h6-6",div_1:"Details_div_1__2CCq6",size:"Details_size__1celS",color:"Details_color__3H15T",stats:"Details_stats__3cZaQ",progress_bar:"Details_progress_bar__22L7r",showProgress:"Details_showProgress__Rog_g"}},91:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(27),s=n.n(r),i=(n(57),n(58),n(4)),o=n(46),l=n.n(o),j=n.p+"static/media/LogoBN.6c5a4f29.png",u=n(12),p=n(0);function b(){return Object(p.jsxs)("div",{className:l.a.landing_container,children:[Object(p.jsx)("img",{src:j}),Object(p.jsx)(u.b,{to:"/pokemons",children:Object(p.jsx)("button",{children:"Go to Home Page"})})]})}var d=n(13),O=n(29),m=n.n(O),h=n(20),g=n.n(h);function x(e){var t=e.img,n=e.types,a=e.name,c=e.id;return Object(p.jsx)(u.b,{to:"/pokemons/".concat(c),className:g.a.link,children:Object(p.jsxs)("div",{className:g.a.card_container,children:[Object(p.jsxs)("div",{className:g.a.row,children:[Object(p.jsx)("img",{src:t,alt:"".concat(a," ilustration")}),Object(p.jsx)("div",{className:g.a.types,children:n.map((function(e){return Object(p.jsx)("span",{children:e},e)}))})]}),Object(p.jsx)("h3",{children:a}),Object(p.jsx)("div",{className:g.a.outside_div})]})})}var f=n.p+"static/media/PokeballLoading.14e441e8.gif";function v(e){var t=e.pokemons,n=e.msg;return Object(p.jsx)("div",{className:m.a.cards_container,children:t.length>0?t.map((function(e){return Object(p.jsx)(x,{img:e.img,name:e.name,types:e.types,id:e.id},e.name+e.id)})):Object(p.jsxs)("div",{className:m.a.loading,children:[Object(p.jsx)("img",{src:f,alt:"pokeball gif",className:m.a.gif}),Object(p.jsx)("span",{children:n})]})})}var k=n(17),A=n.n(k);function _(e){for(var t=e.pagination,n=e.pokemonsPerPage,a=e.amountOfPokemons,c=e.currentPage,r=[],s=1;s<=Math.ceil(a/n);s++)r.push(s);return Object(p.jsx)("div",{className:A.a.pagination_container,children:Object(p.jsxs)("div",{className:A.a.pagination,children:[Object(p.jsx)("span",{onClick:function(){1!==c&&t(c-1)},children:"<"}),r&&r.map((function(e){return Object(p.jsx)("span",{onClick:function(){return t(e)},id:"span".concat(e),className:"span1"==="span".concat(e)?"page ".concat(A.a.currentPage):"page",children:e},e)})),Object(p.jsx)("span",{onClick:function(){c!==r.length&&t(c+1)},children:">"})]})})}var y=n(48),P=n.n(y),C=n(6),N=n(50),S=n.n(N),w=n(14),E=n(21),Z=n(22),X=n.n(Z);function B(){return function(){var e=Object(E.a)(Object(w.a)().mark((function e(t){var n;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("https://pokemon-app-bda.herokuapp.com/pokemons");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_POKEMONS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function I(){return function(){var e=Object(E.a)(Object(w.a)().mark((function e(t){var n;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("https://pokemon-app-bda.herokuapp.com/types");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TYPES",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function L(){var e=Object(C.b)(),t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1];function s(t){t.preventDefault(),e(function(e){return function(){var t=Object(E.a)(Object(w.a)().mark((function t(n){var a;return Object(w.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.a.get("https://pokemon-app-bda.herokuapp.com/pokemons?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:"GET_POKEMON_BY_NAME",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c.toLowerCase())),r("")}return Object(p.jsxs)("div",{className:S.a.search_bar,children:[Object(p.jsx)("input",{type:"text",placeholder:"Name...",value:c,onChange:function(e){return function(e){r(e.target.value)}(e)}}),Object(p.jsx)("div",{onClick:function(e){return s(e)},children:Object(p.jsx)("img",{src:"data:image/png;base64,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"})})]})}var R=n(16),D=n.n(R);function G(e){var t=e.setSort,n=e.setLoadingMsg,c=Object(C.b)(),r=Object(C.c)((function(e){return e.types})),s=Object(a.useState)("hidden"),i=Object(d.a)(s,2),o=i[0],l=i[1];function b(){l("hidden"===o?"visible":"hidden")}return Object(a.useEffect)((function(){c(I())}),[]),Object(p.jsxs)("div",{className:D.a.nav_container,children:[Object(p.jsx)("img",{src:j,alt:"Pokemon Logo"}),Object(p.jsxs)("div",{className:D.a.search_container,children:[Object(p.jsx)(L,{}),Object(p.jsx)("button",{className:D.a.button_show_filters,onClick:b,children:"Filter"}),Object(p.jsx)("button",{className:D.a.button_reset,onClick:function(){c(B())},children:"Refresh"})]}),Object(p.jsxs)("div",{className:D.a.filters,style:{visibility:o},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Filter By:"}),Object(p.jsxs)("div",{className:D.a.filters_select,children:[Object(p.jsxs)("select",{onChange:function(e){return function(e){c({type:"FILTER_BY_SOURCE",payload:e.target.value})}(e)},children:[Object(p.jsx)("option",{value:"All",children:"All Pokemons"}),Object(p.jsx)("option",{value:"Api",children:"Existent Pokemons"}),Object(p.jsx)("option",{value:"Database",children:"Your Pokemons"})]}),Object(p.jsxs)("select",{onChange:function(e){return function(e){c({type:"FILTER_BY_TYPE",payload:e.target.value}),n("That type does not have pokemons yet")}(e)},children:[Object(p.jsx)("option",{value:"All",children:"All types"}),r.map((function(e){return Object(p.jsx)("option",{name:"types",value:e.name,children:e.name},e.id)}))]})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Sort By:"}),Object(p.jsxs)("select",{onChange:function(e){return function(e){e.preventDefault(),c({type:"SORT_POKEMONS",payload:e.target.value}),t("Sorted By ".concat(e.target.value))}(e)},children:[Object(p.jsx)("option",{value:"Default",children:"Default"}),Object(p.jsx)("option",{value:"Attack_A",children:"Attack A"}),Object(p.jsx)("option",{value:"Attack_D",children:"Attack D"}),Object(p.jsx)("option",{value:"Alphabetic_A",children:"Alphabetic A-Z"}),Object(p.jsx)("option",{value:"Alphabetic_Z",children:"Alphabetic Z-A"})]})]}),Object(p.jsx)("button",{className:D.a.button_close_filters,onClick:b,children:"X"})]}),Object(p.jsx)(u.b,{to:"/create",children:Object(p.jsx)("button",{children:"Create Pokemon"})})]})}function J(){var e=Object(C.c)((function(e){return e.pokemons})),t=Object(a.useState)(1),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(12),i=Object(d.a)(s,2),o=i[0],l=(i[1],c*o),j=l-o,u=e.slice(j,l),b=Object(a.useState)(),O=Object(d.a)(b,2),m=O[0],h=O[1],g=Object(a.useState)(""),x=Object(d.a)(g,2),f=x[0],k=x[1];return Object(p.jsxs)("div",{className:P.a.home_container,children:[Object(p.jsx)(G,{setSort:h,setLoadingMsg:k}),Object(p.jsx)(v,{pokemons:u,sorted:m,msg:f}),Object(p.jsx)(_,{pagination:function(e){r(e),document.querySelectorAll(".page").forEach((function(t){return t.id==="span".concat(e)?t.classList.add("".concat(A.a.currentPage)):t.classList.remove("".concat(A.a.currentPage))}))},pokemonsPerPage:o,amountOfPokemons:e.length,currentPage:c})]})}var T=n(34),Y=n.n(T);function K(e){var t=e.img,n=e.content;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)("div",{className:Y.a.container,children:[Object(p.jsxs)("header",{children:[Object(p.jsx)(u.b,{to:"/pokemons",children:Object(p.jsx)("button",{children:"< Home Page"})}),Object(p.jsx)("img",{src:t})]}),Object(p.jsx)("div",{className:Y.a.content,children:n})]})}var U=n(52),H=n(25),Q=n(3),F=/[\W\dA-Z]/g,q=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;var W=n(15),V=n.n(W);function z(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.types})),n=Object(i.f)();Object(a.useEffect)((function(){e(I())}),[]);var c=Object(a.useState)({name:"",experience:"",attack:"",defence:"",speed:"",height:"",weight:"",img:"",types:[]}),r=Object(d.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)({name:"Your Pokemon needs to have a Name"}),j=Object(d.a)(l,2),u=j[0],b=j[1];function O(e){o(Object(Q.a)(Object(Q.a)({},s),{},Object(H.a)({},e.target.name,e.target.value))),"name"!==e.target.name&&"img"!==e.target.name||b(Object(Q.a)(Object(Q.a)({},u),{},Object(H.a)({},e.target.name,function(e,t){var n;return"name"===e?""===t?n="Your Pokemon needs to have a Name":F.test(t)&&(n="Numbers, special characters, spaces and uppercase aren't allowed"):q.test(t)||""==t||(n="Url is not valid"),n}(e.target.name,e.target.value))))}function m(t){var a;(t.preventDefault(),u.name||u.img)?alert("Your Pokemon's details have an error, please modify the form"):(""===s.img&&delete s.img,e((a=s,function(){var e=Object(E.a)(Object(w.a)().mark((function e(t){return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.post("https://pokemon-app-bda.herokuapp.com/pokemons",a);case 2:return e.sent,e.abrupt("return",t({type:"CREATE_POKEMON"}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(B()),alert("Pokemon Created"),o({name:"",experience:"",attack:"",defence:"",speed:"",height:"",weight:"",img:"",types:[]}),n.push("/pokemons"))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:V.a.form,children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{children:["Name:* ",Object(p.jsx)("span",{children:u.name&&u.name})]}),Object(p.jsx)("input",{value:s.name,placeholder:"Name",name:"name",type:"text",onChange:function(e){return O(e)}}),Object(p.jsx)("label",{children:"Experience:"}),Object(p.jsx)("input",{value:s.experience,placeholder:"Experience",name:"experience",type:"number",onChange:function(e){return O(e)}}),Object(p.jsxs)("label",{children:["Image: ",Object(p.jsx)("span",{children:u.img&&u.img})]}),Object(p.jsx)("input",{placeholder:"Image Url",name:"img",type:"url",onChange:function(e){return O(e)}}),Object(p.jsx)("label",{children:"Types:"}),Object(p.jsx)("select",{onChange:function(e){return function(e){o(Object(Q.a)(Object(Q.a)({},s),{},{types:[].concat(Object(U.a)(s.types),[e.target.value])}))}(e)},children:t.map((function(e){return Object(p.jsx)("option",{name:"types",children:e.name},e.id)}))}),Object(p.jsx)("div",{className:V.a.types_list,children:s.types.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("li",{children:e},"".concat(e).concat(Math.random()))," ",Object(p.jsx)("button",{onClick:function(){return t=e,void o(Object(Q.a)(Object(Q.a)({},s),{},{types:s.types.filter((function(e){return e!==t}))}));var t},children:"X"},"".concat(e).concat(Math.random(),"button"))]})}))})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Attack: ".concat(s.attack)}),Object(p.jsx)("input",{value:s.attack,type:"range",name:"attack",min:"0",max:"200",onChange:function(e){return O(e)},className:V.a.range}),Object(p.jsx)("label",{children:"Defence: ".concat(s.defence)}),Object(p.jsx)("input",{value:s.defence,type:"range",name:"defence",min:"0",max:"200",onChange:function(e){return O(e)},className:V.a.range}),Object(p.jsx)("label",{children:"Speed: ".concat(s.speed)}),Object(p.jsx)("input",{value:s.speed,type:"range",name:"speed",min:"0",max:"200",onChange:function(e){return O(e)},className:V.a.range}),Object(p.jsx)("label",{children:"Height: ".concat(s.height," m")}),Object(p.jsx)("input",{value:s.height,placeholder:"Height",name:"height",type:"range",min:"0",max:"3",step:"0.1",onChange:function(e){return O(e)},className:V.a.range}),Object(p.jsx)("label",{children:"Weight: ".concat(s.weight," kg")}),Object(p.jsx)("input",{value:s.weight,placeholder:"Weight",name:"weight",type:"range",min:"0",max:"1000",step:"0.5",onChange:function(e){return O(e)},className:V.a.range})]})]}),Object(p.jsx)("button",{className:V.a.submit_button,onClick:function(e){return m(e)},children:"Create Pokemon"})]})}function M(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(K,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png",content:Object(p.jsx)(z,{})})})}var $=n(9),ee=n.n($);function te(e){var t=e.pokemon;return Object(p.jsxs)("div",{className:ee.a.detail,children:[Object(p.jsxs)("div",{className:ee.a.div_1,children:[Object(p.jsx)("h1",{children:t.name}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:ee.a.color,children:[Object(p.jsx)("h3",{children:"Id"}),Object(p.jsx)("p",{children:t.id})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:ee.a.color,children:[Object(p.jsx)("h3",{children:"Experince"}),Object(p.jsx)("p",{children:t.experience?t.experience:"-"})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:ee.a.color,children:[Object(p.jsx)("h3",{children:"Type"}),t.types&&0!==t.types.length?"Api"===t.source?t.types.map((function(e){return Object(p.jsx)("span",{children:e},e)})):t.types.map((function(e){return Object(p.jsx)("span",{children:e.name},e.name)})):Object(p.jsx)("p",{children:"unknown"})]})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"".concat(ee.a.size," ").concat(ee.a.color),children:[Object(p.jsx)("h4",{children:"Height"}),Object(p.jsxs)("p",{children:[t.height?t.height:"-"," m"]})]}),Object(p.jsxs)("div",{className:"".concat(ee.a.size," ").concat(ee.a.color),children:[Object(p.jsx)("h4",{children:"Weight"}),Object(p.jsxs)("p",{children:[t.weight?t.weight:"-"," kg"]})]})]})]}),Object(p.jsxs)("div",{className:ee.a.stats,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Speed"}),Object(p.jsx)("div",{className:ee.a.progress_bar,children:Object(p.jsx)("span",{style:{"--bar":"".concat(t.speed/2,"%")},children:t.speed})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Attack"}),Object(p.jsx)("div",{className:ee.a.progress_bar,children:Object(p.jsx)("span",{style:{"--bar":"".concat(t.attack/2,"%")},children:t.attack})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Defence"}),Object(p.jsx)("div",{className:ee.a.progress_bar,children:Object(p.jsx)("span",{style:{"--bar":"".concat(t.defence/2,"%")},children:t.defence})})]})]})]})}function ne(e){var t=e.id,n=Object(C.b)(),c=Object(C.c)((function(e){return e.pokemon}));return Object(a.useEffect)((function(){n(function(e){return function(){var t=Object(E.a)(Object(w.a)().mark((function t(n){var a;return Object(w.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.a.get("https://pokemon-app-bda.herokuapp.com/pokemons/".concat(e));case 2:return a=t.sent,t.abrupt("return",n({type:"GET_POKEMON_BY_ID",payload:a.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(K,{img:c.img,content:Object(p.jsx)(te,{pokemon:c})})})}function ae(){var e=Object(C.b)();return Object(a.useEffect)((function(){e(B())}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{exact:!0,path:"/",component:b}),Object(p.jsx)(i.a,{exact:!0,path:"/pokemons",component:J}),Object(p.jsx)(i.a,{exact:!0,path:"/create",component:M}),Object(p.jsx)(i.a,{exact:!0,path:"/pokemons/:id",render:function(e){var t=e.match;return Object(p.jsx)(ne,{id:t.params.id})}})]})})}var ce=n(35),re=n(51),se={pokemons:[],types:[],pokemon:{},fixedPokemons:[]};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,n=e.fixedPokemons,a=e.pokemons;switch(t.type){case"GET_POKEMONS":return Object(Q.a)(Object(Q.a)({},e),{},{pokemons:t.payload,fixedPokemons:t.payload});case"CREATE_POKEMON":return Object(Q.a)({},e);case"GET_TYPES":return Object(Q.a)(Object(Q.a)({},e),{},{types:t.payload});case"GET_POKEMON_BY_ID":return Object(Q.a)(Object(Q.a)({},e),{},{pokemon:t.payload});case"FILTER_BY_TYPE":var c;return c="All"===t.payload?n:n.filter((function(e){return e.types.includes(t.payload)})),Object(Q.a)(Object(Q.a)({},e),{},{pokemons:c});case"FILTER_BY_SOURCE":var r;return r="All"===t.payload?n:n.filter((function(e){return e.source===t.payload})),Object(Q.a)(Object(Q.a)({},e),{},{pokemons:r});case"SORT_POKEMONS":var s;return s="Alphabetic_A"===t.payload?a.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})):"Alphabetic_Z"===t.payload?a.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0})):"Attack_A"===t.payload?a.sort((function(e,t){return e.attack<t.attack?-1:e.attack>t.attack?1:0})):"Attack_D"===t.payload?a.sort((function(e,t){return e.attack<t.attack?1:e.attack>t.attack?-1:0})):a.sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:0})),Object(Q.a)(Object(Q.a)({},e),{},{pokemons:s});case"GET_POKEMON_BY_NAME":return Object(Q.a)(Object(Q.a)({},e),{},{pokemons:t.payload});default:return e}},oe=Object(ce.b)(ie,Object(ce.a)(re.a));s.a.render(Object(p.jsx)(C.a,{store:oe,children:Object(p.jsx)(u.a,{children:Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(ae,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.2f12f8dd.chunk.js.map