(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4999e614"],{"36e1":function(e,t,a){},"6fb6":function(e,t,a){"use strict";a("a1b3")},"80b2":function(e,t,a){"use strict";var c=a("7a23"),o=a("95d9"),d=a.n(o),n={class:"container my-4"},r=Object(c["createStaticVNode"])('<div class="row d-flex justify-content-center" data-v-7b4267e6><div class="col-lg-11 col-12 d-flex flex-wrap my-2 px-md-5 px-4" data-v-7b4267e6><div class="col-md-6 col-12 mb-md-0 mb-3 px-lg-4 px-md-2 position-relative" data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-v-7b4267e6><div class="imgframe" data-v-7b4267e6><img src="'+d.a+'" data-v-7b4267e6></div><p data-v-7b4267e6>關於咖啡</p></div><div class="col-md-6 col-12 px-lg-4 px-md-2 position-relative" data-aos="fade-left" data-aos-delay="500" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-v-7b4267e6><div class="imgframe" data-v-7b4267e6><img src="'+d.a+'" data-v-7b4267e6></div><p data-v-7b4267e6>關於咖啡</p></div></div></div>',1),i=[r];function s(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,i)}a("6fb6");var l=a("d959"),u=a.n(l);const b={},p=u()(b,[["render",s],["__scopeId","data-v-7b4267e6"]]);t["a"]=p},"85ee":function(e,t,a){"use strict";a("36e1")},a1b3:function(e,t,a){},b54c:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-66bc84f6"),e=e(),Object(c["popScopeId"])(),e},d=o((function(){return Object(c["createElementVNode"])("div",{class:"loadingio-spinner-ripple-3xq5u6jldre"},[Object(c["createElementVNode"])("div",{class:"ldio-dwik2dnj2i"},[Object(c["createElementVNode"])("div"),Object(c["createElementVNode"])("div")])],-1)})),n={class:"container-fluid"},r={class:"row d-flex justify-content-center"},i={class:"col-11 mx-5 my-3"},s={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},l={class:"breadcrumb d-flex justify-content-end"},u={class:"breadcrumb-item"},b=o((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-house"},null,-1)})),p={class:"breadcrumb-item"},m=Object(c["createTextVNode"])("產品列表"),v={class:"breadcrumb-item active colorBlue","aria-current":"page"},f={"data-aos":"fade-up","data-aos-delay":"500","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-anchor-placement":"top-bottom"};function j(e,t,a,o,j,O){var g=Object(c["resolveComponent"])("Loading"),h=Object(c["resolveComponent"])("router-link"),C=Object(c["resolveComponent"])("Category"),y=Object(c["resolveComponent"])("aboutProduct");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(g,{active:j.isLoading},{default:Object(c["withCtx"])((function(){return[d]})),_:1},8,["active"]),Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("nav",s,[Object(c["createElementVNode"])("ol",l,[Object(c["createElementVNode"])("li",u,[Object(c["createVNode"])(h,{to:"/"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]),Object(c["createElementVNode"])("li",p,[Object(c["createVNode"])(h,{to:"/User/ProductList"},{default:Object(c["withCtx"])((function(){return[m]})),_:1})]),Object(c["createElementVNode"])("li",v,Object(c["toDisplayString"])(j.Category),1)])])])])]),Object(c["createElementVNode"])("section",f,[Object(c["createVNode"])(C,{EnTitle:"Category",ChTitle:"分類列表",Product:j.Cproduct,CategoryText:j.Category},null,8,["Product","CategoryText"])]),Object(c["createVNode"])(y)],64)}a("99af"),a("07ac"),a("4de4"),a("d3b7");var O=a("e915"),g=a("80b2"),h=a("9bb9"),C={components:{Category:O["a"],aboutProduct:g["a"]},data:function(){return{Cproduct:[],Category:"",isLoading:!1}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/products/all");this.isLoading=!0,this.$http.get(t).then((function(t){t.data.success&&(e.isLoading=!1,e.Cproduct=Object(h["c"])(Object.values(t.data.products)),e.Cproduct=e.Cproduct.filter((function(t){return t.unit===e.Category})))}))}},created:function(){this.Category=this.$route.params.id,this.getProducts()}},y=(a("85ee"),a("d959")),N=a.n(y);const V=N()(C,[["render",j],["__scopeId","data-v-66bc84f6"]]);t["default"]=V}}]);
//# sourceMappingURL=chunk-4999e614.5007bd2a.js.map