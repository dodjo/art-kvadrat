(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2219c8"],{caa5:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("div",{staticClass:"page__content"},[e._m(0),r("div",{staticClass:"create-news"},[r("div",{staticClass:"create-news__form"},[r("v-input",{attrs:{label:"Заголовок новости",error:e.$v.form.title.$error,"text-error":"введите заголовок новости","require-input":""},model:{value:e.$v.form.title.$model,callback:function(t){e.$set(e.$v.form.title,"$model",t)},expression:"$v.form.title.$model"}}),r("v-multiselect",{attrs:{label:"Категория",options:e.CATEGORY,value:e.form.categories},on:{"multi-change":function(t){e.form.categories=t}}}),r("div",{staticClass:"form-control",class:{"form-control--error":e.$v.form.body.$error}},[r("vue-editor",{attrs:{editorToolbar:e.customToolbar},model:{value:e.$v.form.body.$model,callback:function(t){e.$set(e.$v.form.body,"$model",t)},expression:"$v.form.body.$model"}}),r("label",{directives:[{name:"show",rawName:"v-show",value:!e.$v.form.body.$error,expression:"!$v.form.body.$error"}]},[e._v("\n            Описание новости\n            "),r("span",{staticClass:"form-control__require"},[e._v("*")])]),r("label",{directives:[{name:"show",rawName:"v-show",value:e.$v.form.body.$error,expression:"$v.form.body.$error"}]},[e._v("введите описание новости")])],1),r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Добавить фото","allow-multiple":!0,"accepted-file-types":"image/jpeg, image/png",imagePreviewHeight:"100","allow-reorder":!0},on:{updatefiles:e.handleFilePond,reorderfiles:e.handleFilePond}}),r("div",{staticClass:"create-news__form-group-btn"},[r("button",{staticClass:"button-primary",on:{click:e.createNews}},[e._v("\n            Отправить на проверку\n          ")])])],1)])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page__header"},[r("h1",{staticClass:"page__title"},[e._v("\n        Добавить новость\n      ")])])}],n=(r("8e6e"),r("456d"),r("ac6a"),r("96cf"),r("1da1")),i=r("ade3"),s=r("b5ae"),c=r("5873"),l=r("4328"),u=r.n(l),d=r("2f62"),p=r("1501"),f=r.n(p),m=(r("4ed3"),r("57c8"),r("1942")),v=r.n(m),h=r("2cfc"),b=r.n(h),g=r("bc3a"),w=r.n(g),$=r("88d3"),y=r("f581");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=f()(v.a,b.a),C={name:"CreateNews",components:{VInput:y["a"],VueEditor:c["a"],FilePond:j,VMultiselect:$["a"]},data:function(){return{form:{title:"",body:"",categories:[],title_picture:[],images:[]},title_picture:{},images:[],category:[],customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]]}},validations:{form:{title:{required:s["required"]},body:{required:s["required"]}}},mounted:function(){this.GET_CATEGORY()},methods:O(O({},Object(d["b"])("category",["GET_CATEGORY"])),{},{handleFilePond:function(){var e=this.$refs.pond.getFiles();this.title_picture=e.map((function(e){return e.file}))[0],this.images=e.map((function(e){return e.file})).slice(1)},uploadImages:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,this.images.forEach((function(e){t.append("file[]",e)})),e.next=4,w.a.post("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/upload-images"),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){r.form.images=e.data.files})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),uploadTitleImage:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,t.append("file",this.title_picture),e.next=4,w.a.post("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/upload-title"),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){r.form.title_picture=e.data[0]})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createNews:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=9;break}return e.next=4,this.uploadTitleImage();case 4:return e.next=6,this.uploadImages();case 6:return t=u.a.stringify(O(O({},this.form),{},{category_ids:this.form.categories.map((function(e){return e.id}))})),e.next=9,w.a.post("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/create"),t).then((function(){r.$toasted.global.success("Новость создана и отправлена на проверку"),r.form={title:"",body:"",title_picture:[],categories:[],images:[]},r.$refs.pond.removeFiles(),r.$v.$reset(),r.$router.push("/news")})).catch((function(e){e.data.forEach((function(e){r.$toasted.global.error(e.message)}))}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),computed:O({},Object(d["c"])("category",["CATEGORY"]))},x=C,k=r("2877"),E=Object(k["a"])(x,a,o,!1,null,null,null);t["default"]=E.exports}}]);
//# sourceMappingURL=chunk-2d2219c8.1a527bbf.js.map