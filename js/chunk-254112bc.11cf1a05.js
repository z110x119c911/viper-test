(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-254112bc"],{"6e70":function(t,a,s){"use strict";s("d2fa")},"97ff":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Traval")],1)},i=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"row py-5"},t._l(t.AreaList,(function(a){return s("div",{key:a.id,staticClass:"col-md-3 py-2"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:a.Picture1,alt:""}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.Name))]),s("p",{staticClass:"card-text box"},[t._v(t._s(a.Description))])])])])})),0)],1)},c=[],r={data:function(){return{AreaList:[],isLoading:!1}},methods:{getData:function(){var t="https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json",a=this;a.isLoading=!0,this.$http.get(t).then((function(t){if(!0===t.data.success){a.isLoading=!1;var s=t.data.result;a.AreaList=s.records,console.log(a.AreaList)}}))}},created:function(){this.getData()}},o=r,d=(s("6e70"),s("2877")),l=Object(d["a"])(o,n,c,!1,null,"e3a8d63e",null),u=l.exports,f={components:{Traval:u},data:function(){return{}}},v=f,h=Object(d["a"])(v,e,i,!1,null,null,null);a["default"]=h.exports},d2fa:function(t,a,s){}}]);
//# sourceMappingURL=chunk-254112bc.11cf1a05.js.map