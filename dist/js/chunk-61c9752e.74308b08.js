(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61c9752e"],{2251:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),s("div",[s("ul",{staticClass:"list-unstyled"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link menu_list",attrs:{"active-class":"menu_active",exact:"",to:"/dashboard"}},[t._v("Dashboard")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link menu_list",attrs:{"active-class":"menu_active",to:"/device"}},[t._v("Device Management")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link menu_list",attrs:{"active-class":"menu_active",to:"/Administation"}},[t._v("Administation")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link menu_list",attrs:{"active-class":"menu_active",to:"/support"}},[t._v("Support")])],1)])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"sticky-top text-testcolor text-center p-3"},[i("img",{staticClass:"img-fluid",attrs:{src:s("ac52"),width:"160",alt:""}})])}],n={data:function(){return{status:"",isActive:""}},methods:{}},c=n,r=(s("601a"),s("2877")),l=Object(r["a"])(c,i,e,!1,null,"12f87bca",null);a["a"]=l.exports},3637:function(t,a,s){},"3d01":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light nav_bg"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Test User ")]),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Log out")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])])])])])])}],n=s("2877"),c={},r=Object(n["a"])(c,i,e,!1,null,null,null);a["a"]=r.exports},"601a":function(t,a,s){"use strict";s("3637")},"97ff":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"wrap"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-2 sidebar_set",attrs:{id:"sticky-sidebar"}},[s("Menu")],1),s("div",{staticClass:"col",attrs:{id:"main"}},[s("Nav"),s("Traval")],1)])])])},e=[],n=s("2251"),c=s("3d01"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"row py-5"},t._l(t.AreaList,(function(a){return s("div",{key:a.id,staticClass:"col-md-3 py-2"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:a.Picture1,alt:""}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.Name))]),s("p",{staticClass:"card-text box"},[t._v(t._s(a.Description))])])])])})),0)],1)},l=[],o={data:function(){return{AreaList:[],isLoading:!1}},methods:{getData:function(){var t="https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json",a=this;a.isLoading=!0,this.$http.get(t).then((function(t){if(!0===t.data.success){a.isLoading=!1;var s=t.data.result;a.AreaList=s.records,console.log(a.AreaList)}}))}},created:function(){this.getData()}},u=o,v=(s("fb38"),s("2877")),d=Object(v["a"])(u,r,l,!1,null,"a9bbbe3e",null),f=d.exports,m={components:{Menu:n["a"],Nav:c["a"],Traval:f},data:function(){return{}}},p=m,_=Object(v["a"])(p,i,e,!1,null,null,null);a["default"]=_.exports},ab91:function(t,a,s){},ac52:function(t,a,s){t.exports=s.p+"img/inefi-logo-svg.8fe0bbe5.svg"},fb38:function(t,a,s){"use strict";s("ab91")}}]);
//# sourceMappingURL=chunk-61c9752e.74308b08.js.map