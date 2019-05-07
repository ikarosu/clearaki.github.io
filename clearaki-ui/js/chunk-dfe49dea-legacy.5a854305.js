(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfe49dea"],{3846:function(n,t,c){c("9e1e")&&"g"!=/./g.flags&&c("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:c("0bfb")})},"65ca":function(n,t,c){"use strict";c.r(t);var e=function(){var n=this,t=n.$createElement,c=n._self._c||t;return c("section",{staticClass:"aki-page"},[c("aki-topbar",{attrs:{nav:"back",fill:""},on:{"nav-click":function(t){return n.$router.back()}}},[n._v("Counter")]),c("main",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"aki-page-main"},[c("h3",[n._v("基础使用")]),c("p",[n._v("必须提供 v-model 才能正常工作")]),c("div",{staticClass:"demo"},[c("aki-counter",{model:{value:n.count1,callback:function(t){n.count1=t},expression:"count1"}}),c("p",{domProps:{textContent:n._s(n.count1)}})],1),c("pre",{ref:"code"},[n._v("        "),c("code",{staticClass:"html"},[n._v('\n<aki-counter v-model="count1"></aki-counter>\n<p v-text="count1"></p>\n        ')]),n._v("\n      ")]),c("h3",[n._v("change 事件")]),c("p",[n._v("接收的参数为 value 值")]),c("div",{staticClass:"demo"},[c("aki-counter",{on:{change:n.change},model:{value:n.count2,callback:function(t){n.count2=t},expression:"count2"}})],1),c("pre",{ref:"code"},[n._v("        "),c("code",{staticClass:"html"},[n._v('\n<aki-counter v-model="count2" @change="change"></aki-counter>\n        ')]),n._v("\n        "),c("code",{staticClass:"javascript"},[n._v("\nchange(value) {\n  this.$snackbar(value)\n}\n        ")]),n._v("\n      ")]),c("h3",[n._v("配置")]),c("h4",[n._v("step 步长")]),c("div",{staticClass:"demo"},[c("aki-counter",{attrs:{step:3},model:{value:n.count3,callback:function(t){n.count3=t},expression:"count3"}})],1),c("pre",{ref:"code"},[n._v("        "),c("code",{staticClass:"html"},[n._v('\n<aki-counter v-model="count3" :step="3"></aki-counter>\n        ')]),n._v("\n      ")]),c("h4",[n._v("min 与 max 设置边界值")]),c("div",{staticClass:"demo"},[c("aki-counter",{attrs:{min:-2,max:5},model:{value:n.count4,callback:function(t){n.count4=t},expression:"count4"}})],1),c("pre",{ref:"code"},[n._v("        "),c("code",{staticClass:"html"},[n._v('\n<aki-counter v-model="count4" :min="-2" :max="5"></aki-counter>\n        ')]),n._v("\n      ")]),c("h3",[n._v("颜色")]),c("h4",[n._v("fill-color 配置图标颜色，disabled-color 配置边界值（不可点击状态）的颜色")]),c("div",{staticClass:"demo"},[c("aki-counter",{attrs:{min:-2,max:5,"fill-color":"pink","disabled-color":"red"},model:{value:n.count4,callback:function(t){n.count4=t},expression:"count4"}})],1),c("pre",{ref:"code"},[n._v("        "),c("code",{staticClass:"html"},[n._v('\n<aki-counter v-model="count4" :min="-2" :max="5" fill-color="pink" disabled-color="red"></aki-counter>\n        ')]),n._v("\n      ")])])],1)},a=[],o=(c("6b54"),{data:function(){return{count1:0,count2:0,count3:0,count4:0}},methods:{change:function(n){this.$snackbar(n.toString())}}}),i=o,s=c("2877"),l=Object(s["a"])(i,e,a,!1,null,null,null);t["default"]=l.exports},"6b54":function(n,t,c){"use strict";c("3846");var e=c("cb7c"),a=c("0bfb"),o=c("9e1e"),i="toString",s=/./[i],l=function(n){c("2aba")(RegExp.prototype,i,n,!0)};c("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?l(function(){var n=e(this);return"/".concat(n.source,"/","flags"in n?n.flags:!o&&n instanceof RegExp?a.call(n):void 0)}):s.name!=i&&l(function(){return s.call(this)})}}]);
//# sourceMappingURL=chunk-dfe49dea-legacy.5a854305.js.map