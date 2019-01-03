(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39c4fa78"],{a421:function(i,t,o){},aabc:function(i,t,o){"use strict";o.r(t);var a=function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("section",{staticClass:"aki-page"},[o("aki-topbars",{attrs:{nav:"back",fill:""},on:{"nav-click":function(t){i.$router.back()}}},[i._v("Dialog")]),o("main",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"aki-page-main"},[o("h3",[i._v("基础使用")]),o("p",[i._v("需要把组件放在当前页面的最外层，并以此作为层级关系")]),o("p",[i._v("使用 slot=header 来设置弹窗标题，可以通过不同的 h* 来控制字体大小")]),o("p",[i._v("使用 footer=header 来设置弹窗脚步按钮")]),o("p",[i._v("通过 visible 来控制弹窗显示/隐藏，支持 .sync 修饰")]),o("div",{staticClass:"demo"},[o("aki-button",{on:{click:function(t){i.dialogVisible1=!0}}},[i._v("点击弹窗")])],1),o("pre",{ref:"code"},[i._v("        "),o("code",{staticClass:"html"},[i._v('\n<aki-dialog :visible.sync="dialogVisible1">\n  <h3 slot="header">标题</h3>\n  <p>一段弹窗内容</p>\n  <aki-button slot="footer">确认</aki-button>\n</aki-dialog>\n        ')]),i._v("\n      ")]),o("h3",[i._v("长文本窗口")]),o("p",[i._v("使用 scroll 使窗口内容允许滚动")]),o("div",{staticClass:"demo"},[o("aki-button",{on:{click:function(t){i.dialogVisible2=!0}}},[i._v("点击弹窗")])],1),o("pre",{ref:"code"},[i._v("        "),o("code",{staticClass:"html"},[i._v('\n<aki-dialog :visible.sync="dialogVisible2" scroll>\n  <h2 slot="header">标题</h2>\n  <p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。</p>\n  <p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。</p>\n  <p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。</p>\n  <aki-button slot="footer">确认</aki-button>\n</aki-dialog>\n        ')]),i._v("\n      ")]),o("h3",[i._v("自定义窗口主体的 class")]),o("p",[i._v("使用 page-class 设置内容的 class")]),o("div",{staticClass:"demo"},[o("aki-button",{on:{click:function(t){i.dialogVisible3=!0}}},[i._v("点击弹窗")])],1),o("pre",{ref:"code"},[i._v("        "),o("code",{staticClass:"html"},[i._v('\n<aki-dialog :visible.sync="dialogVisible3" page-class="center">\n  <h3 slot="header">标题</h3>\n  <p>一段弹窗内容</p>\n  <aki-button slot="footer">确认</aki-button>\n</aki-dialog>\n        ')]),i._v("\n        "),o("code",{staticClass:"css"},[i._v("\n.center{\n  text-align: center;\n}\n        ")]),i._v("\n      ")]),o("h3",[i._v("全屏幕弹窗")]),o("p",[i._v("添加 full 让弹窗呈现出页面的样子")]),o("p",[i._v("全屏幕弹窗通过设置 title 来设置标题")]),o("div",{staticClass:"demo"},[o("aki-button",{on:{click:function(t){i.dialogVisible4=!0}}},[i._v("点击弹窗")])],1),o("pre",{ref:"code"},[i._v("        "),o("code",{staticClass:"html"},[i._v('\n<aki-dialog :visible.sync="dialogVisible4" full title="全屏弹窗">\n  <p>一段弹窗内容</p>\n  <footer slot="footer"><aki-button>确认</aki-button></footer>\n</aki-dialog>\n        ')]),i._v("\n      ")])]),o("aki-dialog",{attrs:{visible:i.dialogVisible1},on:{"update:visible":function(t){i.dialogVisible1=t}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[i._v("标题")]),o("p",[i._v("一段弹窗内容")]),o("aki-button",{attrs:{slot:"footer"},slot:"footer"},[i._v("确认")])],1),o("aki-dialog",{attrs:{visible:i.dialogVisible2,scroll:""},on:{"update:visible":function(t){i.dialogVisible2=t}}},[o("h2",{attrs:{slot:"header"},slot:"header"},[i._v("标题")]),o("p",[i._v("一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。")]),o("p",[i._v("一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。")]),o("p",[i._v("一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。")]),o("aki-button",{attrs:{slot:"footer"},slot:"footer"},[i._v("确认")])],1),o("aki-dialog",{attrs:{visible:i.dialogVisible3,"page-class":"center"},on:{"update:visible":function(t){i.dialogVisible3=t}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[i._v("标题")]),o("p",[i._v("一段弹窗内容")]),o("aki-button",{attrs:{slot:"footer"},slot:"footer"},[i._v("确认")])],1),o("aki-dialog",{attrs:{visible:i.dialogVisible4,full:"",title:"全屏弹窗"},on:{"update:visible":function(t){i.dialogVisible4=t}}},[o("p",[i._v("一段弹窗内容")]),o("footer",{attrs:{slot:"footer"},slot:"footer"},[o("aki-button",[i._v("确认")])],1)])],1)},l=[],s={data:function(){return{dialogVisible1:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1}}},e=s,n=(o("c4f3"),o("2877")),c=Object(n["a"])(e,a,l,!1,null,null,null);c.options.__file="Dialog.vue";t["default"]=c.exports},c4f3:function(i,t,o){"use strict";var a=o("a421"),l=o.n(a);l.a}}]);
//# sourceMappingURL=chunk-39c4fa78-legacy.3857abf6.js.map