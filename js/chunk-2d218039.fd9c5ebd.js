(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d218039"],{c8d2:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"page__content"},[t._m(0),r("div",{staticClass:"create-startup"},[r("div",{staticClass:"create-startup__form"},[r("v-input",{attrs:{label:"Заголовок",error:t.$v.form.title.$error,"text-error":"введите заголовок","require-input":""},model:{value:t.$v.form.title.$model,callback:function(e){t.$set(t.$v.form.title,"$model",e)},expression:"$v.form.title.$model"}}),r("v-multiselect",{attrs:{label:"Категория",options:t.CATEGORY,value:t.form.categories},on:{"multi-change":function(e){t.form.categories=e}}}),r("div",{staticClass:"form-control",class:{"form-control--error":t.$v.form.body.$error}},[r("vue-editor",{attrs:{editorToolbar:t.customToolbar},model:{value:t.$v.form.body.$model,callback:function(e){t.$set(t.$v.form.body,"$model",e)},expression:"$v.form.body.$model"}}),r("label",{directives:[{name:"show",rawName:"v-show",value:!t.$v.form.body.$error,expression:"!$v.form.body.$error"}]},[t._v("\n            Описание\n            "),r("span",{staticClass:"form-control__require"},[t._v("*")])]),r("label",{directives:[{name:"show",rawName:"v-show",value:t.$v.form.body.$error,expression:"$v.form.body.$error"}]},[t._v("введите описание")])],1),r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Добавить фото","allow-multiple":!0,"accepted-file-types":"image/jpeg, image/png",imagePreviewHeight:"100","allow-reorder":!0,"max-files":1},on:{updatefiles:t.handleFilePond,reorderfiles:t.handleFilePond}}),r("div",{staticClass:"create-startup__form-group-btn"},[r("button",{staticClass:"button-primary",on:{click:t.updateStartup}},[t._v("\n            Отправить на проверку\n          ")])])],1)])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__header"},[r("h1",{staticClass:"page__title"},[t._v("\n        Редактировать арт-стартап\n      ")])])}],i=(r("8e6e"),r("456d"),r("ac6a"),r("96cf"),r("1da1")),n=r("ade3"),s=r("b5ae"),c=r("4328"),l=r.n(c),u=r("1501"),d=r.n(u),p=(r("4ed3"),r("57c8"),r("1942")),f=r.n(p),m=r("2cfc"),h=r.n(m),v=r("bc3a"),b=r.n(v),g=r("5873"),$=r("88d3"),y=r("f581"),w=r("2f62");function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j=d()(f.a,h.a),x={name:"UpdateStartup",components:{VInput:y["a"],VMultiselect:$["a"],VueEditor:g["a"],FilePond:j},data:function(){return{load:!1,form:{title:"",body:"",categories:[],title_picture:{},images:[]},title_picture:null,category:[],customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]]}},validations:{form:{title:{required:s["required"]},body:{required:s["required"]}}},mounted:function(){this.GET_CATEGORY(),this.viewStartup()},methods:O(O({},Object(w["b"])("category",["GET_CATEGORY"])),{},{handleFilePond:function(){var t=this.$refs.pond.getFiles();this.title_picture=t.map((function(t){return t.file}))[0]},uploadTitleImage:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("file",this.title_picture),t.next=4,b.a.post("".concat("http://api.art-kvadrat.localhost","/v1/event/upload-title"),e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){r.form.title_picture=t.data[0]})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),viewStartup:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$loading.show(),r=new URL("".concat("http://api.art-kvadrat.localhost","/v1/startup/view")),r.searchParams.set("id",this.$route.params.id),t.next=5,b.a.get(r).then((function(t){a.form.title=t.data.title,a.form.body=t.data.body,a.form.categories=t.data.categories,a.load=!0,e.hide()})).catch((function(t){404===t.response.status?(a.$toasted.global.error("Стартап не найден"),a.$router.push("/playbill")):a.$toasted.global.error(t.response.data.message),t.response||(a.$toasted.global.error("Нет соединения с сервером"),e.hide()),e.hide()}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateStartup:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.$touch(),this.$v.$invalid){t.next=10;break}if(!this.title_picture){t.next=5;break}return t.next=5,this.uploadTitleImage();case 5:return e=l.a.stringify({title:this.form.title,body:this.form.body,category_ids:this.form.categories.map((function(t){return t.id})),title_picture:this.form.title_picture}),r=new URL("".concat("http://api.art-kvadrat.localhost","/v1/startup/update")),r.searchParams.set("id",this.$route.params.id),t.next=10,b.a.patch(r,e).then((function(t){a.$toasted.global.success("Стартап обновлен и отправлен на проверку"),a.form.title=t.data.title,a.form.body=t.data.body,a.form.categories=t.data.categories,a.form.title_picture={},a.form.images=[],a.$refs.pond.removeFiles(),a.$v.$reset(),a.$router.push("/art-startups")})).catch((function(t){t.data.forEach((function(t){a.$toasted.global.error(t.message)}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),computed:O({},Object(w["c"])("category",["CATEGORY"]))},k=x,C=r("2877"),P=Object(C["a"])(k,a,o,!1,null,"5b7ff774",null);e["default"]=P.exports}}]);
//# sourceMappingURL=chunk-2d218039.fd9c5ebd.js.map