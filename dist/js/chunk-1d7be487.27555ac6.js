(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d7be487"],{"16c7":function(e,t,c){},"2e3e":function(e,t,c){"use strict";c("c4f0")},"80b2":function(e,t,c){"use strict";var a=c("7a23"),d=c("95d9"),o=c.n(d),n=Object(a["createStaticVNode"])('<div class="container my-5" data-v-003dad11><div class="row d-flex justify-content-center" data-v-003dad11><div class="col-lg-11 col-12 d-flex flex-wrap my-2 px-md-5 px-4" data-v-003dad11><div class="col-md-6 col-12 mb-md-0 mb-3 px-lg-4 px-md-2 position-relative" data-v-003dad11><div class="imgframe" data-v-003dad11><img src="'+o.a+'" data-v-003dad11></div><p data-v-003dad11>關於咖啡</p></div><div class="col-md-6 col-12 px-lg-4 px-md-2 position-relative" data-v-003dad11><div class="imgframe" data-v-003dad11><img src="'+o.a+'" data-v-003dad11></div><p data-v-003dad11>關於咖啡</p></div></div></div></div>',1),r=[n];function i(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",null,r)}c("aeeb");var s=c("d959"),l=c.n(s);const u={},b=l()(u,[["render",i],["__scopeId","data-v-003dad11"]]);t["a"]=b},aeeb:function(e,t,c){"use strict";c("16c7")},b54c:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),d=function(e){return Object(a["pushScopeId"])("data-v-61adc9b6"),e=e(),Object(a["popScopeId"])(),e},o=d((function(){return Object(a["createElementVNode"])("div",{class:"loadingio-spinner-ripple-3xq5u6jldre"},[Object(a["createElementVNode"])("div",{class:"ldio-dwik2dnj2i"},[Object(a["createElementVNode"])("div"),Object(a["createElementVNode"])("div")])],-1)})),n={class:"container-fluid"},r={class:"row d-flex justify-content-center"},i={class:"col-11 mx-5 my-3"},s={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},l={class:"breadcrumb d-flex justify-content-end"},u={class:"breadcrumb-item"},b=d((function(){return Object(a["createElementVNode"])("i",{class:"bi bi-house"},null,-1)})),m={class:"breadcrumb-item"},v=Object(a["createTextVNode"])("產品列表"),p={class:"breadcrumb-item active colorBlue","aria-current":"page"};function j(e,t,c,d,j,f){var O=Object(a["resolveComponent"])("Loading"),g=Object(a["resolveComponent"])("router-link"),C=Object(a["resolveComponent"])("Category"),h=Object(a["resolveComponent"])("aboutProduct");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(O,{active:j.isLoading},{default:Object(a["withCtx"])((function(){return[o]})),_:1},8,["active"]),Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("nav",s,[Object(a["createElementVNode"])("ol",l,[Object(a["createElementVNode"])("li",u,[Object(a["createVNode"])(g,{to:"/"},{default:Object(a["withCtx"])((function(){return[b]})),_:1})]),Object(a["createElementVNode"])("li",m,[Object(a["createVNode"])(g,{to:"/User/ProductList"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})]),Object(a["createElementVNode"])("li",p,Object(a["toDisplayString"])(j.Category),1)])])])])]),Object(a["createVNode"])(C,{EnTitle:"Category",ChTitle:"分類列表",Product:j.Cproduct,CategoryText:j.Category,class:Object(a["normalizeClass"])(["animate__animated animate__fadeIn"])},null,8,["Product","CategoryText"]),Object(a["createVNode"])(h)],64)}c("99af"),c("07ac"),c("4de4"),c("d3b7");var f=c("e915"),O=c("80b2"),g=c("9bb9"),C={components:{Category:f["a"],aboutProduct:O["a"]},data:function(){return{Cproduct:[],Category:"",isLoading:!1}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/products/all");this.isLoading=!0,this.$http.get(t).then((function(t){t.data.success&&(e.isLoading=!1,e.Cproduct=Object(g["c"])(Object.values(t.data.products)),e.Cproduct=e.Cproduct.filter((function(t){return t.unit===e.Category})))}))}},created:function(){this.Category=this.$route.params.id,this.getProducts()}},h=(c("2e3e"),c("d959")),x=c.n(h);const N=x()(C,[["render",j],["__scopeId","data-v-61adc9b6"]]);t["default"]=N},c4f0:function(e,t,c){}}]);
//# sourceMappingURL=chunk-1d7be487.27555ac6.js.map