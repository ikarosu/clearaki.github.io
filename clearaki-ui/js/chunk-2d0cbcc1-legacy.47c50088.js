(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbcc1"],{"4aca":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("section",{staticClass:"aki-page"},[i("aki-topbar",{attrs:{nav:"back",fill:""},on:{"nav-click":function(n){return t.$router.back()}}},[t._v("Confirm")]),i("main",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"aki-page-main"},[i("h3",[t._v("基础使用")]),i("p",[t._v("如果引入了完整的 clearaki-ui，可以直接在 vue 实例使用这些方法")]),i("p",[t._v("所有方法都返回一个 Promise 对象，点击确定返回 resolve 状态，此外任何关闭了窗口的行为，都返回 reject。")]),i("h4",[t._v("$confirm()")]),i("p",[t._v("带有取消按钮的询问窗口")]),i("div",{staticClass:"demo"},[i("aki-button",{on:{click:t.handleConfirm1}},[t._v("点击弹窗")])],1),i("pre",{ref:"code"},[t._v("        "),i("code",{staticClass:"html"},[t._v('\n<aki-button @click="handleConfirm1">点击弹窗</aki-button>\n        ')]),t._v("\n        "),i("code",{staticClass:"javascript"},[t._v("\nhandleConfirm1() {\n  this.$confirm()\n    .then(() => this.$snackbar('点击了确认'))\n    .catch(() => this.$snackbar('取消了操作'))\n}\n        ")]),t._v("\n      ")]),i("p",[t._v("允许传入一个配置对象 { title: '', content: '' } 来自定义窗口")]),i("div",{staticClass:"demo"},[i("aki-button",{on:{click:function(n){return t.$confirm({title:"自定义的标题",content:"自定义的内容"})}}},[t._v("点击弹窗")])],1),i("pre",{ref:"code"},[t._v("        "),i("code",{staticClass:"html"},[t._v("\n<aki-button @click=\"$confirm({ title: '自定义的标题', content: '自定义的内容' })\">点击弹窗</aki-button>\n        ")]),t._v("\n      ")]),i("h4",[t._v("$alert(String: content)")]),i("p",[t._v("只有确定按钮的警告窗口，参数为窗口内容")]),i("div",{staticClass:"demo"},[i("aki-button",{on:{click:function(n){return t.$alert("本页包含成人内容，只有满18岁才能继续浏览！")}}},[t._v("点击弹窗")])],1),i("pre",{ref:"code"},[t._v("        "),i("code",{staticClass:"html"},[t._v("\n<aki-button @click=\"$alert('本页包含成人内容，只有满18岁才能继续浏览！')\">点击弹窗</aki-button>\n        ")]),t._v("\n      ")]),i("h4",[t._v("$prompt(String: label [, String: type])")]),i("p",[t._v("用户输入窗口，第一个参数为输入框的 label，第二个可选参数为 input 的 type，默认 text。")]),i("div",{staticClass:"demo"},[i("aki-button",{on:{click:function(n){return t.$prompt("你的年龄","number")}}},[t._v("点击弹窗")])],1),i("pre",{ref:"code"},[t._v("        "),i("code",{staticClass:"html"},[t._v("\n<aki-button @click=\"$prompt('你的年龄', 'number')\">点击弹窗</aki-button>\n        ")]),t._v("\n      ")])])],1)},c=[],e={methods:{handleConfirm1:function(){var t=this;this.$confirm().then(function(){return t.$snackbar("点击了确认")}).catch(function(){return t.$snackbar("取消了操作")})}}},o=e,r=i("2877"),s=Object(r["a"])(o,a,c,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0cbcc1-legacy.47c50088.js.map