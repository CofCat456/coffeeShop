(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23062326"],{"16c7":function(e,t,c){},"80b2":function(e,t,c){"use strict";var a=c("7a23"),d=c("95d9"),o=c.n(d),r=Object(a["createStaticVNode"])('<div class="container my-5" data-v-003dad11><div class="row d-flex justify-content-center" data-v-003dad11><div class="col-lg-11 col-12 d-flex flex-wrap my-2 px-md-5 px-4" data-v-003dad11><div class="col-md-6 col-12 mb-md-0 mb-3 px-lg-4 px-md-2 position-relative" data-v-003dad11><div class="imgframe" data-v-003dad11><img src="'+o.a+'" data-v-003dad11></div><p data-v-003dad11>關於咖啡</p></div><div class="col-md-6 col-12 px-lg-4 px-md-2 position-relative" data-v-003dad11><div class="imgframe" data-v-003dad11><img src="'+o.a+'" data-v-003dad11></div><p data-v-003dad11>關於咖啡</p></div></div></div></div>',1),n=[r];function i(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",null,n)}c("aeeb");var l=c("d959"),s=c.n(l);const u={},b=s()(u,[["render",i],["__scopeId","data-v-003dad11"]]);t["a"]=b},aeeb:function(e,t,c){"use strict";c("16c7")},b4f9:function(e,t,c){},b54c:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),d=function(e){return Object(a["pushScopeId"])("data-v-03705fa6"),e=e(),Object(a["popScopeId"])(),e},o={class:"container-fluid"},r={class:"row d-flex justify-content-center"},n={class:"col-11 mx-5 my-3"},i={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},l={class:"breadcrumb d-flex justify-content-end"},s={class:"breadcrumb-item"},u=d((function(){return Object(a["createElementVNode"])("i",{class:"bi bi-house"},null,-1)})),b={class:"breadcrumb-item"},v=Object(a["createTextVNode"])("產品列表"),p={class:"breadcrumb-item active colorBlue","aria-current":"page"};function m(e,t,c,d,m,f){var j=Object(a["resolveComponent"])("router-link"),O=Object(a["resolveComponent"])("Category"),g=Object(a["resolveComponent"])("aboutProduct");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("nav",i,[Object(a["createElementVNode"])("ol",l,[Object(a["createElementVNode"])("li",s,[Object(a["createVNode"])(j,{to:"/"},{default:Object(a["withCtx"])((function(){return[u]})),_:1})]),Object(a["createElementVNode"])("li",b,[Object(a["createVNode"])(j,{to:"/User/ProductList"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})]),Object(a["createElementVNode"])("li",p,Object(a["toDisplayString"])(m.Category),1)])])])])]),Object(a["createVNode"])(O,{EnTitle:"Category",ChTitle:"分類列表",Product:m.Cproduct,CategoryText:m.Category},null,8,["Product","CategoryText"]),Object(a["createVNode"])(g)],64)}c("99af"),c("07ac"),c("4de4"),c("d3b7");var f=c("e915"),j=c("80b2"),O=c("9bb9"),g={components:{Category:f["a"],aboutProduct:j["a"]},data:function(){return{Cproduct:[],Category:""}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/products/all");this.$http.get(t).then((function(t){e.Cproduct=Object(O["c"])(Object.values(t.data.products)),e.Cproduct=e.Cproduct.filter((function(t){return t.unit===e.Category}))}))}},created:function(){this.Category=this.$route.params.id,this.getProducts()}},C=(c("fbf6"),c("d959")),h=c.n(C);const x=h()(g,[["render",m],["__scopeId","data-v-03705fa6"]]);t["default"]=x},fbf6:function(e,t,c){"use strict";c("b4f9")}}]);
//# sourceMappingURL=chunk-23062326.067bea32.js.map