(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04962178"],{"0051":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"page__content"},[t._m(0),a("div",{staticClass:"history-page"},[t._l(t.cards,(function(e,r){return a("div",{key:r,staticClass:"history-page__group-day"},[a("h2",{staticClass:"history-page__title"},[t._v("\n          "+t._s(r)+"\n        ")]),a("div",{staticClass:"history-page__cards"},t._l(e,(function(e,r){return a("div",{key:r,staticClass:"history-page__group-cards"},["post"===e.entity_type&&e.entityBody?a("news-card",{attrs:{news:e.entityBody,id:e.entityBody.id}}):t._e(),"startup"===e.entity_type&&e.entityBody?a("art-startup-card",{attrs:{"art-startup":e.entityBody,id:e.entityBody.id}}):t._e(),"event"===e.entity_type&&e.entityBody?a("event-card",{attrs:{event:e.entityBody,id:e.entityBody.id}}):t._e()],1)})),0)])})),a("button",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"playbill__more-btn button-warning",on:{click:t.loadMore}},[t._v("\n        показать ещё\n      ")])],2)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__header"},[a("h1",{staticClass:"page__title"},[t._v("\n        История просмотров\n      ")])])}],i=a("2909"),s=(a("96cf"),a("1da1")),o=a("e09c"),c=a("bc3a"),u=a.n(c),l=a("b68e"),d=a("680f"),p=a("bb9d"),v={name:"HistoryPage",components:{EventCard:p["a"],ArtStartupCard:d["a"],NewsCard:l["a"]},mixins:[o["a"]],data:function(){return{cards:{},loadArray:[],pageData:[],currentPage:1,perPage:20}},computed:{showMore:function(){return this.pageData.pageCount>this.pageData.currentPage}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$loading.show(),a=new URL("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/view-history/list")),a.searchParams.set("per-page",this.perPage),a.searchParams.set("page",this.currentPage),t.next=6,u.a.get(a).then((function(t){var a;r.currentPage>1?(a=r.loadArray).push.apply(a,Object(i["a"])(t.data._items)):r.loadArray=t.data._items;r.cards=r.groupByDate(r.loadArray),r.pageData=t.data._meta,e.hide()})).catch((function(t){t.response||(r.$toasted.global.error("Нет соединения с сервером"),e.hide()),r.$toasted.global.error(t.response.data.message),e.hide()}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadMore:function(){this.pageData.pageCount>this.currentPage&&this.currentPage++,this.loadData()},groupByDate:function(t){var e=this,a=null;return t.reduce((function(t,r){return a=e.$moment(1e3*r.created_at).startOf("day").calendar(null,{sameDay:"[Сегодня]",nextDay:"[Завтра]",nextWeek:"DD MMMM YYYY",lastDay:"[Вчера]",lastWeek:"DD MMMM YYYY",sameElse:"DD MMMM YYYY"}),t[a]=t[a]||[],t[a].push(r),t}),{})}}},f=v,h=a("2877"),_=Object(h["a"])(f,r,n,!1,null,null,null);e["default"]=_.exports},2909:function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function n(t){if(Array.isArray(t))return r(t)}function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||i(t)||s(t)||o()}a.d(e,"a",(function(){return c}))},"5dbc":function(t,e,a){var r=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var i,s=e.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&r(i)&&n&&n(t,i),t}},"680f":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"startup-card",on:{click:function(e){return e.stopPropagation(),t.$router.push("/art-startup/"+t.id)}}},[r("div",{staticClass:"startup-card__img"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.review,expression:"review"}],staticClass:"startup-card__top-panel"},[r("div",{staticClass:"startup-card__review"},[r("svg",[r("use",{attrs:{href:a("4882")+"#icon-lock"}})]),t._v("\n        На проверке\n      ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"startup-card__edit",on:{click:function(e){return e.stopPropagation(),t.$router.push("/update-startup/"+t.id)}}},[r("svg",{staticClass:"icon-user-residents"},[r("use",{attrs:{href:a("4882")+"#icon-user-residents"}})]),r("svg",{staticClass:"icon-edit"},[r("use",{attrs:{href:a("4882")+"#icon-edit"}})])]),r("img",{directives:[{name:"show",rawName:"v-show",value:t.artStartup.title_picture.url,expression:"artStartup.title_picture.url"}],attrs:{src:t.artStartup.title_picture.url,alt:"photo",width:"260",height:"150"}})]),r("div",{staticClass:"startup-card__wrap"},[r("div",{staticClass:"startup-card__name"},[t._v(t._s(t.artStartup.title))]),r("star-rating",{attrs:{"star-size":20,rating:t.artStartup.rating,"read-only":!0}}),r("a",{staticClass:"startup-card__resident",attrs:{href:"#"}},[t._v("\n      "+t._s(t.artStartup.author.full_name)+"\n    ")])],1)])},n=[],i=(a("c5f6"),a("e09c")),s=a("5b3d"),o=a.n(s),c={name:"ArtStartupCard",components:{StarRating:o.a},mixins:[i["a"]],props:{artStartup:{type:Object,default:function(){}},id:{type:Number,default:null},review:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}}},u=c,l=a("2877"),d=Object(l["a"])(u,r,n,!1,null,"050ea93f",null);e["a"]=d.exports},"8b97":function(t,e,a){var r=a("d3f4"),n=a("cb7c"),i=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:i}},aa77:function(t,e,a){var r=a("5ca1"),n=a("be13"),i=a("79e5"),s=a("fdef"),o="["+s+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t,e,a){var n={},o=i((function(){return!!s[t]()||c[t]()!=c})),u=n[t]=o?e(p):s[t];a&&(n[a]=u),r(r.P+r.F*o,"String",n)},p=d.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},b68e:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"news-card",on:{click:function(e){return e.stopPropagation(),t.$router.push("/news-view/"+t.id)}}},[r("div",{staticClass:"news-card__img"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.review,expression:"review"}],staticClass:"news-card__top-panel"},[r("div",{staticClass:"news-card__review"},[r("svg",[r("use",{attrs:{href:a("4882")+"#icon-lock"}})]),t._v("\n        На проверке\n      ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"news-card__edit",on:{click:function(e){return e.stopPropagation(),t.$router.push("/update-news/"+t.id)}}},[r("svg",{staticClass:"icon-user-partner"},[r("use",{attrs:{href:a("4882")+"#icon-user-partner"}})]),r("svg",{staticClass:"icon-edit"},[r("use",{attrs:{href:a("4882")+"#icon-edit"}})])]),r("img",{attrs:{src:t.news.title_picture.url,alt:"photo",width:"260",height:"150"}})]),r("div",{staticClass:"news-card__wrap"},[r("div",{staticClass:"news-card__name"},[t._v(t._s(t.news.title))]),r("div",{staticClass:"news-card__date"},[t._v("\n      "+t._s(t._f("formatDate")(t.news.published_at))+"\n    ")])])])},n=[],i=(a("c5f6"),a("e09c")),s={name:"NewsCard",mixins:[i["a"]],props:{news:{type:Object,default:function(){}},id:{type:Number,default:null},review:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}}},o=s,c=a("2877"),u=Object(c["a"])(o,r,n,!1,null,"622f38b8",null);e["a"]=u.exports},bb9d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"event-card",on:{click:function(e){return e.stopPropagation(),t.$router.push("/event/"+t.id)}}},[r("div",{staticClass:"event-card__img"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.review,expression:"review"}],staticClass:"event-card__top-panel"},[r("div",{staticClass:"event-card__review"},[r("svg",[r("use",{attrs:{href:a("4882")+"#icon-lock"}})]),t._v("\n        На проверке\n      ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"event-card__edit",on:{click:function(e){return e.stopPropagation(),t.$router.push("/update-event/"+t.id)}}},[r("svg",{staticClass:"icon-user-residents"},[r("use",{attrs:{href:a("4882")+"#icon-user-residents"}})]),r("svg",{staticClass:"icon-edit"},[r("use",{attrs:{href:a("4882")+"#icon-edit"}})])]),r("img",{attrs:{src:t.event.title_picture.url,loading:"lazy",alt:"photo",height:"150"}})]),r("div",{staticClass:"event-card__wrap"},[t.event.is_favorite&&t.isAuthenticated?r("div",{staticClass:"event-card__bookmarked",class:{"animation-bookmarked":t.event.is_favorite},on:{click:function(e){return e.stopPropagation(),t.onDeleteFavorite.apply(null,arguments)}}},[r("svg",{attrs:{width:"18",height:"18"}},[r("use",{attrs:{href:a("4882")+"#icon-bookmark"}})])]):t._e(),!t.event.is_favorite&&t.isAuthenticated?r("div",{staticClass:"event-card__bookmarked",on:{click:function(e){return e.stopPropagation(),t.onCreateFavorite.apply(null,arguments)}}},[r("svg",{attrs:{width:"18",height:"18"}},[r("use",{attrs:{href:a("4882")+"#icon-bookmark-border"}})])]):t._e(),r("div",{staticClass:"event-card__genre"},[t._v(t._s(t.getCategories))]),r("div",{staticClass:"event-card__location"},[t._v(t._s(t.getPlace))]),r("div",{staticClass:"event-card__date"},[t._v(t._s(t.getDate))]),r("div",{staticClass:"event-card__name"},[t._v(t._s(t.getTitle))])])])},n=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),s=(a("c5f6"),a("e09c")),o=a("2f62"),c=a("4328"),u=a.n(c),l=a("bc3a"),d=a.n(l);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"EventCard",mixins:[s["a"]],props:{event:{type:Object,default:function(){}},review:{type:Boolean,default:!1},id:{type:Number,default:null},edit:{type:Boolean,default:!1}},computed:v(v({},Object(o["c"])("auth",["isAuthenticated"])),{},{getTitle:function(){return this.event.title?this.event.title:""},getPlace:function(){return this.event.place&&this.event.place.title?this.event.place.title:""},getDate:function(){return this.event.begin_time?this.$options.filters.formatDate(this.event.begin_time):""},getCategories:function(){return this.event.categories.length&&this.event.categories[0].title?this.event.categories[0].title:""}}),methods:{onCreateFavorite:function(){var t=this,e=u.a.stringify({entity_type:"event",entity_id:this.event.id});d.a.post("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/favorite/create"),e).then((function(e){t.$emit("event-set-favorite",e.data.id)})).catch((function(e){e.response||t.$toasted.global.error("Нет соединения с сервером"),console.log(e)}))},onDeleteFavorite:function(){var t=this,e=new URL("".concat("https://api.art-kvadrat.dev2uit.ru","/v1/favorite/delete"));e.searchParams.append("id",this.event.is_favorite),d.a.delete(e).then((function(){t.$emit("event-delete-favorite")})).catch((function(e){e.response||t.$toasted.global.error("Нет соединения с сервером"),console.log(e)}))}}},h=f,_=a("2877"),g=Object(_["a"])(h,r,n,!1,null,"6eb2076a",null);e["a"]=g.exports},c5f6:function(t,e,a){"use strict";var r=a("7726"),n=a("69a8"),i=a("2d95"),s=a("5dbc"),o=a("6a99"),c=a("79e5"),u=a("9093").f,l=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,v="Number",f=r[v],h=f,_=f.prototype,g=i(a("2aeb")(_))==v,y="trim"in String.prototype,m=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var a,r,n,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if(s=c.charCodeAt(u),s<48||s>n)return NaN;return parseInt(c,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(g?c((function(){_.valueOf.call(a)})):i(a)!=v)?s(new h(m(e)),a,f):m(e)};for(var w,b=a("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)n(h,w=b[C])&&!n(f,w)&&d(f,w,l(h,w));f.prototype=_,_.constructor=f,a("2aba")(r,v,f)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-04962178.fd6961c7.js.map