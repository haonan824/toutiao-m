(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e96f1fd"],{"19d7":function(t,n,e){"use strict";var r=e("9b7f"),a=e.n(r);a.a},2423:function(t,n,e){"use strict";e.d(n,"l",(function(){return a})),e.d(n,"k",(function(){return i})),e.d(n,"g",(function(){return s})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return c})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return f})),e.d(n,"b",(function(){return d})),e.d(n,"i",(function(){return h})),e.d(n,"h",(function(){return p})),e.d(n,"j",(function(){return v}));var r=e("b775"),a=function(){return Object(r["a"])({url:"/app/v1_0/user/channels",method:"get"})},i=function(t,n){return Object(r["a"])({url:"/app/v1_0/users/".concat(t,"/articles"),method:"get",params:n})},s=function(t){return Object(r["a"])({url:"/app/v1_1/articles",method:"get",params:t})},o=function(){return Object(r["a"])({url:"/app/v1_0/channels",method:"get"})},c=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},u=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},f=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})},d=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},h=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})},p=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})},v=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}},"25f0":function(t,n,e){"use strict";var r=e("6eeb"),a=e("825a"),i=e("d039"),s=e("ad6d"),o="toString",c=RegExp.prototype,u=c[o],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=o;(l||f)&&r(RegExp.prototype,o,(function(){var t=a(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in c)?s.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},2909:function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return r(t)||a(t)||i()}e.d(n,"a",(function(){return s}))},"4df4":function(t,n,e){"use strict";var r=e("f8c2"),a=e("7b0b"),i=e("9bdd"),s=e("e95a"),o=e("50c4"),c=e("8418"),u=e("35a1");t.exports=function(t){var n,e,l,f,d,h=a(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,g=0,_=u(h);if(b&&(m=r(m,v>2?arguments[2]:void 0,2)),void 0==_||p==Array&&s(_))for(n=o(h.length),e=new p(n);n>g;g++)c(e,g,b?m(h[g],g):h[g]);else for(f=_.call(h),d=f.next,e=new p;!(l=d.call(f)).done;g++)c(e,g,b?i(f,m,[l.value,g],!0):l.value);return e.length=g,e}},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var r=e("1d80"),a=e("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},6111:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{on:{click:function(n){return t.$router.push("/article/"+t.lists.art_id)}}},[e("van-row",[e("van-col",{attrs:{span:"24",offset:"1"}},[e("p",[t._v(t._s(t.lists.title))])])],1),e("van-row",[e("van-col",{attrs:{span:"23",offset:"1"}},t._l(t.lists.cover.images,(function(t,n){return e("van-image",{key:n,attrs:{"v-if":t.length,width:"100px",height:"100px",fit:"cover",src:t}})})),1)],1),e("van-row",[e("van-col",{attrs:{span:"7",offset:"1"}},[e("span",[t._v(t._s(t.lists.aut_name))])]),e("van-col",{attrs:{span:"4",offset:"1"}},[e("span",[t._v("评论"+t._s(t.lists.comm_count))])]),e("van-col",{attrs:{span:"10",offset:"1"}},[e("span",[t._v(t._s(t._f("relativeTime")(t.lists.pubdate)))])])],1)],1)},a=[],i={name:"list",props:{lists:{required:!0}},created:function(){}},s=i,o=(e("19d7"),e("2877")),c=Object(o["a"])(s,r,a,!1,null,"3996db14",null);n["a"]=c.exports},7156:function(t,n,e){var r=e("861d"),a=e("d2bb");t.exports=function(t,n,e){var i,s;return a&&"function"==typeof(i=n.constructor)&&i!==e&&r(s=i.prototype)&&s!==e.prototype&&a(t,s),t}},"7abe":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("van-nav-bar",{attrs:{fixed:""}},[e("van-button",{attrs:{slot:"title",round:"",icon:"search",type:"info"},on:{click:function(n){return t.$router.push("/search")}},slot:"title"},[t._v("搜索")])],1),e("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-icon",{staticClass:"wap-nav",attrs:{slot:"nav-right",name:"wap-nav"},on:{click:function(n){t.isshow=!0}},slot:"nav-right"}),t._l(t.userChannels,(function(t){return e("van-tab",{key:t.id,attrs:{title:t.name}},[e("ArticleList",{attrs:{channel:t}})],1)}))],2),e("van-popup",{style:{height:"100%"},attrs:{closeable:"","close-icon-position":"top-left",position:"bottom"},model:{value:t.isshow,callback:function(n){t.isshow=n},expression:"isshow"}},[e("ChannelEdit",{attrs:{"user-channels":t.userChannels,active:t.active},on:{switch:t.onChannelSwitch}})],1)],1)},a=[],i=(e("96cf"),e("1da1")),s=e("2423"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(t,n){return e("van-cell",{key:n},[e("lists",{attrs:{lists:t}})],1)})),1)],1)],1)},c=[],u=e("2909"),l=e("6111"),f={name:"ArticleList",components:{lists:l["a"]},props:{channel:{type:Object,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,timestamp:null,isLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onRefresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["g"])({channel_id:this.channel.id,timestamp:Date.now(),with_top:1});case 2:e=t.sent,r=e.data,a=r.data.results,(n=this.list).unshift.apply(n,Object(u["a"])(a)),this.isLoading=!1,this.$toast("更新了".concat(a.length,"条数据"));case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onLoad:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["g"])({channel_id:this.channel.id,timestamp:this.timestamp||Date.now(),with_top:1});case 2:e=t.sent,r=e.data,a=r.data.results,(n=this.list).push.apply(n,Object(u["a"])(a)),this.loading=!1,a.length?this.timestamp=r.data.pre_timestamp:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},d=f,h=e("2877"),p=Object(h["a"])(d,o,c,!1,null,"78646e4a",null),v=p.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"channel-edit"},[e("van-cell",{attrs:{title:"我的频道",border:!1}},[e("van-button",{attrs:{size:"mini",round:"",type:"danger",plain:""},on:{click:function(n){t.open=!t.open}}},[t._v(t._s(t.open?"完成":"编辑"))])],1),e("van-grid",{attrs:{gutter:10}},t._l(t.userChannels,(function(n,r){return e("van-grid-item",{key:n.id,on:{click:function(n){return t.removeChannel(r)}}},[e("span",{staticClass:"text",class:{active:r===t.active},attrs:{slot:"text"},slot:"text"},[t._v(" "+t._s(n.name)+" ")]),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.open&&0!==r,expression:"open && index !== 0"}],attrs:{slot:"icon",name:"close"},slot:"icon"})],1)})),1),e("van-cell",{attrs:{title:"推荐频道",border:!1}}),e("van-grid",{attrs:{gutter:10}},t._l(t.remainingChannels,(function(n){return e("van-grid-item",{key:n.id,attrs:{text:n.name},on:{click:function(e){return t.clickChannel(n)}}})})),1)],1)},b=[],g=(e("7db0"),e("a434"),e("a9e3"),e("159b"),e("5d2d")),_={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{allChannels:[],open:!1}},computed:{remainingChannels:function(){var t=this.allChannels,n=this.userChannels,e=[];return t.forEach((function(t){n.find((function(n){return n.id===t.id}))||e.push(t)})),e}},watch:{userChannels:function(t){Object(g["b"])("storage",t)}},created:function(){this.onAll()},mounted:function(){},methods:{removeChannel:function(t){this.open&&0!==t?this.userChannels.splice(t,1):this.$emit("switch",t)},clickChannel:function(t){this.userChannels.push(t)},onAll:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["e"])();case 2:n=t.sent,e=n.data,this.allChannels=e.data.channels;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},w=_,y=(e("d088"),Object(h["a"])(w,m,b,!1,null,"7285b25e",null)),x=y.exports,E={name:"home",components:{ArticleList:v,ChannelEdit:x},props:{},data:function(){return{active:0,userChannels:[],isshow:!1}},computed:{},watch:{},created:function(){this.getchannel()},mounted:function(){},methods:{onChannelSwitch:function(t){this.active=t,this.isshow=!1},getchannel:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[],e=Object(g["a"])("storage"),!e){t.next=6;break}n=e,t.next=11;break;case 6:return t.next=8,Object(s["l"])();case 8:r=t.sent,a=r.data,this.userChannels=a.data.channels;case 11:this.userChannels=n;case 12:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},O=E,C=(e("8720"),Object(h["a"])(O,r,a,!1,null,"2fee5373",null));n["default"]=C.exports},"7db0":function(t,n,e){"use strict";var r=e("23e7"),a=e("b727").find,i=e("44d2"),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},8720:function(t,n,e){"use strict";var r=e("fda5"),a=e.n(r);a.a},"9b7f":function(t,n,e){},a630:function(t,n,e){var r=e("23e7"),a=e("4df4"),i=e("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:a})},a9e3:function(t,n,e){"use strict";var r=e("83ab"),a=e("da84"),i=e("94ca"),s=e("6eeb"),o=e("5135"),c=e("c6b6"),u=e("7156"),l=e("c04e"),f=e("d039"),d=e("7c73"),h=e("241c").f,p=e("06cf").f,v=e("9bf2").f,m=e("58a8").trim,b="Number",g=a[b],_=g.prototype,w=c(d(_))==b,y=function(t){var n,e,r,a,i,s,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),n=u.charCodeAt(0),43===n||45===n){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>a)return NaN;return parseInt(i,r)}return+u};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,E=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof E&&(w?f((function(){_.valueOf.call(e)})):c(e)!=b)?u(new g(y(n)),e,E):y(n)},O=r?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;O.length>C;C++)o(g,x=O[C])&&!o(E,x)&&v(E,x,p(g,x));E.prototype=_,_.constructor=E,s(a,b,E)}},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},d088:function(t,n,e){"use strict";var r=e("da25"),a=e.n(r);a.a},da25:function(t,n,e){},fda5:function(t,n,e){}}]);
//# sourceMappingURL=chunk-3e96f1fd.b038aa83.js.map