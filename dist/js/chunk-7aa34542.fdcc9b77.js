(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aa34542"],{"10aa":function(e,t,o){},"25f0":function(e,t,o){"use strict";var c=o("e330"),r=o("5e77").PROPER,l=o("6eeb"),n=o("825a"),a=o("3a9b"),i=o("577e"),d=o("d039"),u=o("ad6d"),s="toString",m=RegExp.prototype,b=m[s],p=c(u),f=d((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),O=r&&b.name!=s;(f||O)&&l(RegExp.prototype,s,(function(){var e=n(this),t=i(e.source),o=e.flags,c=i(void 0===o&&a(m,e)&&!("flags"in m)?p(e):o);return"/"+t+"/"+c}),{unsafe:!0})},"857a":function(e,t,o){var c=o("e330"),r=o("1d80"),l=o("577e"),n=/"/g,a=c("".replace);e.exports=function(e,t,o,c){var i=l(r(e)),d="<"+t;return""!==o&&(d+=" "+o+'="'+a(l(c),n,"&quot;")+'"'),d+">"+i+"</"+t+">"}},9911:function(e,t,o){"use strict";var c=o("23e7"),r=o("857a"),l=o("af03");c({target:"String",proto:!0,forced:l("link")},{link:function(e){return r(this,"a","href",e)}})},af03:function(e,t,o){var c=o("d039");e.exports=function(e){return c((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c987:function(e,t,o){"use strict";o("10aa")},e01a:function(e,t,o){"use strict";var c=o("23e7"),r=o("83ab"),l=o("da84"),n=o("e330"),a=o("1a2d"),i=o("1626"),d=o("3a9b"),u=o("577e"),s=o("9bf2").f,m=o("e893"),b=l.Symbol,p=b&&b.prototype;if(r&&i(b)&&(!("description"in p)||void 0!==b().description)){var f={},O=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=d(p,this)?new b(e):void 0===e?b():b(e);return""===e&&(f[t]=!0),t};m(O,b),O.prototype=p,p.constructor=O;var j="Symbol(test)"==String(b("test")),V=n(p.toString),h=n(p.valueOf),v=/^Symbol\((.*)\)[^)]+$/,E=n("".replace),N=n("".slice);s(p,"description",{configurable:!0,get:function(){var e=h(this),t=V(e);if(a(f,e))return"";var o=j?N(t,7,-1):E(t,v,"$1");return""===o?void 0:o}}),c({global:!0,forced:!0},{Symbol:O})}},e6dc:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),r={class:"text-end mt-3"},l={class:"table mt-4"},n=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",{width:"250"},"分類"),Object(c["createElementVNode"])("th",null,"產品名稱"),Object(c["createElementVNode"])("th",{width:"120"},"原價"),Object(c["createElementVNode"])("th",{width:"120"},"售價"),Object(c["createElementVNode"])("th",{width:"120"},"是否啟用"),Object(c["createElementVNode"])("th",{width:"200"},"編輯")])],-1),a={key:0,class:"text-success"},i={key:1,class:"text-muted"},d={class:"btn-group"},u=["onClick"],s=["onClick"];function m(e,t,o,m,b,p){var f=Object(c["resolveComponent"])("ToastMessage"),O=Object(c["resolveComponent"])("Loading"),j=Object(c["resolveComponent"])("Pagination"),V=Object(c["resolveComponent"])("ProductModal"),h=Object(c["resolveComponent"])("DeleteModel");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(f),Object(c["createVNode"])(O,{active:b.isLoading},null,8,["active"]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return p.openModel(!0)})}," 增加一個產品 ")]),Object(c["createElementVNode"])("table",l,[n,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(b.products,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t.id},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.category),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.title),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.$filters.currency(t.price)),1),Object(c["createElementVNode"])("td",null,[t.is_enabled?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",a,"啟用")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",i,"未啟用"))]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return p.openModel(!1,t)}}," 編輯 ",8,u),Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return p.openDeleteModel(t)}}," 刪除 ",8,s)])])])})),128))])]),Object(c["createVNode"])(j,{pages:b.pagination,onEmitAdpages:p.getProducts,onEmitAdPrev:p.getProducts,onEmitAdNext:p.getProducts},null,8,["pages","onEmitAdpages","onEmitAdPrev","onEmitAdNext"]),Object(c["createVNode"])(V,{ref:"productModal",product:b.tempProduct,onUpdateProduct:p.updateProduct,onDealWithProduct:p.dealWithProducts},null,8,["product","onUpdateProduct","onDealWithProduct"]),Object(c["createVNode"])(h,{ref:"deleteModal",item:b.tempProduct.title,id:b.tempProduct.id,onDelItem:p.DeleteProduct},null,8,["item","id","onDelItem"])],64)}var b=o("5530"),p=(o("99af"),o("ac1f"),o("1276"),o("9911"),o("d3b7"),o("25f0"),o("a434"),o("a4d3"),o("e01a"),function(e){return Object(c["pushScopeId"])("data-v-66e933a4"),e=e(),Object(c["popScopeId"])(),e}),f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},O={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},V=p((function(){return Object(c["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(c["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["createElementVNode"])("span",null,"新增產品")]),Object(c["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)})),h={class:"modal-body"},v={class:"row"},E={class:"col-sm-4 px-3"},N=p((function(){return Object(c["createElementVNode"])("div",{class:"mb-3"},[Object(c["createElementVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址"),Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1)})),y={class:"mb-3"},g=p((function(){return Object(c["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(c["createTextVNode"])("或 上傳圖片 "),Object(c["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1)})),P=p((function(){return Object(c["createElementVNode"])("img",{class:"img-fluid",alt:""},null,-1)})),x={key:0,class:"mt-5"},k=["onUpdate:modelValue"],w=["onClick"],M={key:0},D={class:"col-sm-8 px-3"},A={class:"mb-3"},S=p((function(){return Object(c["createElementVNode"])("label",{for:"title",class:"form-label"},"標題",-1)})),U={class:"row"},T={class:"mb-3 col-md-6 px-2"},B=p((function(){return Object(c["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1)})),C={class:"mb-3 col-md-6 px-2"},$=p((function(){return Object(c["createElementVNode"])("label",{for:"price",class:"form-label"},"單位",-1)})),_={class:"row gx-2"},L={class:"mb-3 col"},F=p((function(){return Object(c["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1)})),I={class:"mb-3 col"},W=p((function(){return Object(c["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1)})),R=p((function(){return Object(c["createElementVNode"])("hr",null,null,-1)})),q={class:"mb-3"},J=p((function(){return Object(c["createElementVNode"])("label",{for:"description",class:"form-label"},"產品簡介",-1)})),z={class:"mb-3"},G=p((function(){return Object(c["createElementVNode"])("label",{for:"stitle",class:"form-label"},"小標題",-1)})),H={class:"mb-3"},K=p((function(){return Object(c["createElementVNode"])("label",{for:"stitle",class:"form-label"},"內容物",-1)})),Q={class:"mb-3"},X=p((function(){return Object(c["createElementVNode"])("label",{for:"stitle",class:"form-label"},"運費文字",-1)})),Y={class:"mb-3"},Z=p((function(){return Object(c["createElementVNode"])("label",{for:"stext",class:"form-label"},"產品內容/關於禮盒",-1)})),ee={class:"mb-3"},te=p((function(){return Object(c["createElementVNode"])("label",{for:"giftbox",class:"form-label"},"禮盒介紹",-1)})),oe={class:"mb-3"},ce=p((function(){return Object(c["createElementVNode"])("label",{for:"detail",class:"form-label"},"多種咖啡細節",-1)})),re={class:"mb-3"},le=p((function(){return Object(c["createElementVNode"])("label",{for:"link",class:"form-label"},"多種產品連結",-1)})),ne={class:"mb-3"},ae=p((function(){return Object(c["createElementVNode"])("label",{for:"Element",class:"form-label"},"混合成分",-1)})),ie={class:"mb-3"},de=p((function(){return Object(c["createElementVNode"])("label",{for:"country",class:"form-label"},"原產國",-1)})),ue={class:"mb-3"},se=p((function(){return Object(c["createElementVNode"])("label",{for:"area",class:"form-label"},"產區",-1)})),me={class:"mb-3"},be=p((function(){return Object(c["createElementVNode"])("label",{for:"altitude",class:"form-label"},"海拔",-1)})),pe={class:"mb-3"},fe=p((function(){return Object(c["createElementVNode"])("label",{for:"Variety",class:"form-label"},"品種",-1)})),Oe={class:"mb-3"},je=p((function(){return Object(c["createElementVNode"])("label",{for:"Soli",class:"form-label"},"土壤種類",-1)})),Ve={class:"mb-3"},he=p((function(){return Object(c["createElementVNode"])("label",{for:"refined",class:"form-label"},"處理法",-1)})),ve={class:"mb-3"},Ee=p((function(){return Object(c["createElementVNode"])("label",{for:"roast",class:"form-label"},"烘培程度",-1)})),Ne={class:"row gx-2"},ye={class:"mb-3 col"},ge=p((function(){return Object(c["createElementVNode"])("label",{for:"bitter",class:"form-label"},"苦味",-1)})),Pe={class:"mb-3 col"},xe=p((function(){return Object(c["createElementVNode"])("label",{for:"sour",class:"form-label"},"酸味",-1)})),ke={class:"row gx-2"},we={class:"mb-3 col"},Me=p((function(){return Object(c["createElementVNode"])("label",{for:"sweet",class:"form-label"},"甜味",-1)})),De={class:"mb-3 col"},Ae=p((function(){return Object(c["createElementVNode"])("label",{for:"rich",class:"form-label"},"濃郁",-1)})),Se={class:"mb-3"},Ue={class:"form-check"},Te=["checked"],Be=p((function(){return Object(c["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1)})),Ce={class:"modal-footer"},$e=p((function(){return Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)}));function _e(e,t,o,r,l,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",f,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",j,[V,Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("div",E,[N,Object(c["createElementVNode"])("div",y,[g,Object(c["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[0]||(t[0]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),P,l.tempProduct.images?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(l.tempProduct.images,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"mb-3 input-group",key:t},[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return l.tempProduct.images[t]=e},placeholder:"請輸入連結"},null,8,k),[[c["vModelText"],l.tempProduct.images[t]]]),Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return l.tempProduct.images.splice(t,1)}}," 移除 ",8,w)])})),128)),l.tempProduct.images[l.tempProduct.images.length-1]||!l.tempProduct.images.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",M,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[1]||(t[1]=function(e){return l.tempProduct.images.push("")})}," 新增圖片 ")])):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("div",A,[S,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.tempProduct.title=e})},null,512),[[c["vModelText"],l.tempProduct.title]])]),Object(c["createElementVNode"])("div",U,[Object(c["createElementVNode"])("div",T,[B,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.tempProduct.category=e})},null,512),[[c["vModelText"],l.tempProduct.category]])]),Object(c["createElementVNode"])("div",C,[$,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.tempProduct.unit=e})},null,512),[[c["vModelText"],l.tempProduct.unit]])])]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",L,[F,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":t[5]||(t[5]=function(e){return l.tempProduct.origin_price=e})},null,512),[[c["vModelText"],l.tempProduct.origin_price]])]),Object(c["createElementVNode"])("div",I,[W,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":t[6]||(t[6]=function(e){return l.tempProduct.price=e})},null,512),[[c["vModelText"],l.tempProduct.price]])])]),R,Object(c["createElementVNode"])("div",q,[J,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":t[7]||(t[7]=function(e){return l.tempProduct.description=e})},null,512),[[c["vModelText"],l.tempProduct.description]])]),Object(c["createElementVNode"])("div",z,[G,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"stitle",placeholder:"請輸入小標題","onUpdate:modelValue":t[8]||(t[8]=function(e){return l.tempProduct.stitle=e})},null,512),[[c["vModelText"],l.tempProduct.stitle]])]),Object(c["createElementVNode"])("div",H,[K,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"content",placeholder:"請輸入內容物","onUpdate:modelValue":t[9]||(t[9]=function(e){return l.tempProduct.content=e})},null,512),[[c["vModelText"],l.tempProduct.content]])]),Object(c["createElementVNode"])("div",Q,[X,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"freight",placeholder:"請輸入運費文字","onUpdate:modelValue":t[10]||(t[10]=function(e){return l.tempProduct.freight=e})},null,512),[[c["vModelText"],l.tempProduct.freight]])]),Object(c["createElementVNode"])("div",Y,[Z,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"stext",placeholder:"請輸入商品附加內容","onUpdate:modelValue":t[11]||(t[11]=function(e){return l.tempProduct.stext=e})},null,512),[[c["vModelText"],l.tempProduct.stext]])]),Object(c["createElementVNode"])("div",ee,[te,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"giftbox",placeholder:"請輸入禮盒介紹","onUpdate:modelValue":t[12]||(t[12]=function(e){return l.tempProduct.giftbox=e})},null,512),[[c["vModelText"],l.tempProduct.giftbox]])]),Object(c["createElementVNode"])("div",oe,[ce,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"detail",placeholder:"請輸入多種咖啡細節","onUpdate:modelValue":t[13]||(t[13]=function(e){return l.tempProduct.detail=e})},null,512),[[c["vModelText"],l.tempProduct.detail]])]),Object(c["createElementVNode"])("div",re,[le,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"link",placeholder:"請輸入多種產品ID","onUpdate:modelValue":t[14]||(t[14]=function(e){return l.tempProduct.link=e})},null,512),[[c["vModelText"],l.tempProduct.link]])]),Object(c["createElementVNode"])("div",ne,[ae,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"Element",placeholder:"請輸入混合成分","onUpdate:modelValue":t[15]||(t[15]=function(e){return l.tempProduct.Element=e})},null,512),[[c["vModelText"],l.tempProduct.Element]])]),Object(c["createElementVNode"])("div",ie,[de,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"country",placeholder:"請輸入原產國","onUpdate:modelValue":t[16]||(t[16]=function(e){return l.tempProduct.country=e})},null,512),[[c["vModelText"],l.tempProduct.country]])]),Object(c["createElementVNode"])("div",ue,[se,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"area",placeholder:"請輸入產區","onUpdate:modelValue":t[17]||(t[17]=function(e){return l.tempProduct.area=e})},null,512),[[c["vModelText"],l.tempProduct.area]])]),Object(c["createElementVNode"])("div",me,[be,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"altitude",placeholder:"請輸入平均","onUpdate:modelValue":t[18]||(t[18]=function(e){return l.tempProduct.altitude=e})},null,512),[[c["vModelText"],l.tempProduct.altitude]])]),Object(c["createElementVNode"])("div",pe,[fe,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"Variety",placeholder:"請輸入品種","onUpdate:modelValue":t[19]||(t[19]=function(e){return l.tempProduct.Variety=e})},null,512),[[c["vModelText"],l.tempProduct.Variety]])]),Object(c["createElementVNode"])("div",Oe,[je,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"Soli",placeholder:"請輸入品種","onUpdate:modelValue":t[20]||(t[20]=function(e){return l.tempProduct.Soli=e})},null,512),[[c["vModelText"],l.tempProduct.Soli]])]),Object(c["createElementVNode"])("div",Ve,[he,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"refined",placeholder:"請輸入處理法","onUpdate:modelValue":t[21]||(t[21]=function(e){return l.tempProduct.refined=e})},null,512),[[c["vModelText"],l.tempProduct.refined]])]),Object(c["createElementVNode"])("div",ve,[Ee,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"roast",placeholder:"請輸入烘培程度","onUpdate:modelValue":t[22]||(t[22]=function(e){return l.tempProduct.roast=e})},null,512),[[c["vModelText"],l.tempProduct.roast]])]),Object(c["createElementVNode"])("div",Ne,[Object(c["createElementVNode"])("div",ye,[ge,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",id:"bitter",placeholder:"請輸入苦味程度","onUpdate:modelValue":t[23]||(t[23]=function(e){return l.tempProduct.bitter=e})},null,512),[[c["vModelText"],l.tempProduct.bitter]])]),Object(c["createElementVNode"])("div",Pe,[xe,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",id:"sour",placeholder:"請輸入酸味程度","onUpdate:modelValue":t[24]||(t[24]=function(e){return l.tempProduct.sour=e})},null,512),[[c["vModelText"],l.tempProduct.sour]])])]),Object(c["createElementVNode"])("div",ke,[Object(c["createElementVNode"])("div",we,[Me,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",id:"sweet",placeholder:"請輸入甜味程度","onUpdate:modelValue":t[25]||(t[25]=function(e){return l.tempProduct.sweet=e})},null,512),[[c["vModelText"],l.tempProduct.sweet]])]),Object(c["createElementVNode"])("div",De,[Ae,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",id:"rich",placeholder:"請輸入濃郁程度","onUpdate:modelValue":t[26]||(t[26]=function(e){return l.tempProduct.rich=e})},null,512),[[c["vModelText"],l.tempProduct.rich]])])]),Object(c["createElementVNode"])("div",Se,[Object(c["createElementVNode"])("div",Ue,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled",checked:1===l.tempProduct.is_enabled,"onUpdate:modelValue":t[27]||(t[27]=function(e){return l.tempProduct.is_enabled=e})},null,8,Te),[[c["vModelCheckbox"],l.tempProduct.is_enabled]]),Be])])])])]),Object(c["createElementVNode"])("div",Ce,[Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-info",onClick:t[28]||(t[28]=function(t){return e.$emit("dealWith-product",l.tempProduct)})}," 多種咖啡模式 "),$e,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[29]||(t[29]=function(t){return e.$emit("update-product",l.tempProduct)})}," 確認 ")])])])],512)}var Le=o("db44"),Fe={props:{product:{type:Object,default:function(){return{}}}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",t);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/upload");this.$http.post(c,o).then((function(t){t.data&&(e.tempProduct.imageUrl=t.data.imageUrl)}))}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},mixins:[Le["a"]]},Ie=(o("c987"),o("d959")),We=o.n(Ie);const Re=We()(Fe,[["render",_e],["__scopeId","data-v-66e933a4"]]);var qe=Re,Je=o("139f"),ze=o("f367"),Ge=o("1799"),He={components:{ProductModal:qe,DeleteModel:Je["a"],ToastMessage:ze["a"],Pagination:Ge["a"]},inject:["emitter"],data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},methods:{openModel:function(e,t){this.tempProduct=e?{}:Object(b["a"])({},t),this.isNew=e;var o=this.$refs.productModal;o.showModel()},openDeleteModel:function(e){this.tempProduct=Object(b["a"])({},e);var t=this.$refs.deleteModal;t.showModel()},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(o).then((function(t){e.isLoading=!1,t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination)}))},updateProduct:function(e){var t=this;this.tempProduct=e;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/product"),c="post";this.isNew||(o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/product/").concat(e.id),c="put");var r=this.$refs.productModal;this.$http[c](o,{data:this.tempProduct}).then((function(o){r.hideModel(),"post"===c?t.$httpMessageState(o,"新增 ".concat(e.title," 產品")):t.$httpMessageState(o,"更新 ".concat(e.title," 產品")),o.data.success&&t.getProducts()}))},dealWithProducts:function(e){var t=this,o=e;this.$swal({title:"確定要進行轉換",text:"請確認轉換模式",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"多種咖啡",cancelButtonText:"一般模式"}).then((function(c){c.isConfirmed?(Array.isArray(o.altitude)||(o.altitude=e.altitude.split(",")),Array.isArray(o.detail)||(o.detail=e.detail.split(",")),Array.isArray(o.link)||(o.link=e.link.split(",")),Array.isArray(o.roast)||(o.roast=e.roast.split(",")),Array.isArray(o.Soli)||(o.Soli=e.Soli.split(",")),Array.isArray(o.refined)||(o.refined=e.refined.split(",")),Array.isArray(o.area)||(o.area=e.area.split(",")),Array.isArray(o.country)||(o.country=e.country.split(",")),t.updateProduct(o)):(Array.isArray(o.altitude)&&(o.altitude=e.altitude.toString()),Array.isArray(o.detail)&&(o.detail=e.detail.toString()),Array.isArray(o.link)&&(o.link=e.link.toString()),Array.isArray(o.roast)&&(o.roast=e.roast.toString()),Array.isArray(o.Soli)&&(o.Soli=e.Soli.toString()),Array.isArray(o.refined)&&(o.refined=e.refined.toString()),Array.isArray(o.area)&&(o.area=e.area.toString()),Array.isArray(o.country)&&(o.country=e.country.toString()),t.updateProduct(o))}))},DeleteProduct:function(e){var t=this,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/product/").concat(e),c=this.$refs.deleteModal;this.$http.delete(o).then((function(e){c.hideModel(),t.$httpMessageState(e,"刪除產品"),t.getProducts()}))}},created:function(){this.getProducts()}};const Ke=We()(He,[["render",m]]);t["default"]=Ke}}]);
//# sourceMappingURL=chunk-7aa34542.fdcc9b77.js.map