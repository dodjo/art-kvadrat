(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa179"],{1015:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("div",{staticClass:"page__content"},[e._m(0),r("div",{staticClass:"create-news"},[r("div",{staticClass:"create-news__form"},[r("v-input",{attrs:{label:"Заголовок новости",error:e.$v.form.title.$error,"text-error":"введите заголовок новости","require-input":""},model:{value:e.$v.form.title.$model,callback:function(t){e.$set(e.$v.form.title,"$model",t)},expression:"$v.form.title.$model"}}),r("v-multiselect",{attrs:{label:"Категория",options:e.CATEGORY,value:e.form.categories},on:{"multi-change":function(t){e.form.categories=t}}}),r("div",{staticClass:"form-control",class:{"form-control--error":e.$v.form.body.$error}},[r("vue-editor",{attrs:{editorToolbar:e.customToolbar},model:{value:e.$v.form.body.$model,callback:function(t){e.$set(e.$v.form.body,"$model",t)},expression:"$v.form.body.$model"}}),r("label",{directives:[{name:"show",rawName:"v-show",value:!e.$v.form.body.$error,expression:"!$v.form.body.$error"}]},[e._v("\n            Описание новости\n            "),r("span",{staticClass:"form-control__require"},[e._v("*")])]),r("label",{directives:[{name:"show",rawName:"v-show",value:e.$v.form.body.$error,expression:"$v.form.body.$error"}]},[e._v("введите описание новости")])],1),r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Добавить фото","allow-multiple":!0,"accepted-file-types":"image/jpeg, image/png",imagePreviewHeight:"100","allow-reorder":!0},on:{updatefiles:e.handleFilePond,reorderfiles:e.handleFilePond}}),r("div",{staticClass:"create-news__form-group-btn"},[r("button",{staticClass:"button-primary",on:{click:e.updateNews}},[e._v("\n            Отправить на проверку\n          ")])])],1)])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page__header"},[r("h1",{staticClass:"page__title"},[e._v("\n        Редактировать новость\n      ")])])}],n=(r("8e6e"),r("456d"),r("ac6a"),r("96cf"),r("1da1")),i=r("ade3"),s=r("b5ae"),c=r("5873"),u=r("4328"),l=r.n(u),d=r("2f62"),p=r("1501"),f=r.n(p),m=(r("4ed3"),r("57c8"),r("1942")),h=r.n(m),v=r("2cfc"),g=r.n(v),b=r("bc3a"),w=r.n(b),$=r("88d3"),y=r("f581");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=f()(h.a,g.a),x={name:"UpdateNews",components:{VInput:y["a"],VueEditor:c["a"],FilePond:j,VMultiselect:$["a"]},data:function(){return{form:{title:"",body:"",categories:[],title_picture:[],images:[]},title_picture:{},images:[],category:[],customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]]}},validations:{form:{title:{required:s["required"]},body:{required:s["required"]}}},mounted:function(){this.GET_CATEGORY(),this.viewNews()},methods:O(O({},Object(d["b"])("category",["GET_CATEGORY"])),{},{handleFilePond:function(){var e=this.$refs.pond.getFiles();this.title_picture=e.map((function(e){return e.file}))[0],this.images=e.map((function(e){return e.file})).slice(1)},uploadImages:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,this.images.forEach((function(e){t.append("file[]",e)})),e.next=4,w.a.post("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/upload-images"),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){r.form.images=e.data.files})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),uploadTitleImage:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,t.append("file",this.title_picture),e.next=4,w.a.post("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/upload-title"),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){r.form.title_picture=e.data[0]})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateNews:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=11;break}return e.next=4,this.uploadTitleImage();case 4:return e.next=6,this.uploadImages();case 6:return t=l.a.stringify(O(O({},this.form),{},{category_ids:this.form.categories.map((function(e){return e.id}))})),r=new URL("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/update")),r.searchParams.set("id",this.$route.params.id),e.next=11,w.a.patch(r,t).then((function(){a.$toasted.global.success("Новость обновлена и отправлена на проверку"),a.form={title:"",body:"",title_picture:[],categories:[],images:[]},a.$refs.pond.removeFiles(),a.$v.$reset(),a.$router.push("/news")})).catch((function(e){e.data.forEach((function(e){a.$toasted.global.error(e.message)}))}));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),viewNews:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$loading.show(),r=new URL("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/post/view")),r.searchParams.set("id",this.$route.params.id),e.next=5,w.a.get(r).then((function(e){a.form.title=e.data.title,a.form.body=e.data.body,a.form.categories=e.data.categories,a.load=!0,t.hide()})).catch((function(e){404===e.response.status?(a.$toasted.global.error("Новость не найдена"),a.$router.push("/news")):a.$toasted.global.error(e.response.data.message),e.response||(a.$toasted.global.error("Нет соединения с сервером"),t.hide()),t.hide()}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),computed:O({},Object(d["c"])("category",["CATEGORY"]))},k=x,C=r("2877"),P=Object(C["a"])(k,a,o,!1,null,null,null);t["default"]=P.exports}}]);
//# sourceMappingURL=chunk-2d0aa179.540f9769.js.map