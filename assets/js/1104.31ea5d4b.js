(window.webpackJsonp=window.webpackJsonp||[]).push([[1104],{1580:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-chain-controller-methods-in-titanium-by-using-alloy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-chain-controller-methods-in-titanium-by-using-alloy"}},[t._v("#")]),t._v(" How to Chain Controller Methods in Titanium by Using Alloy")]),t._v(" "),s("p",[t._v("Titanium and Alloy has as great feature to create controllers and be reactive to triggers or call methods without creating a pointer.")]),t._v(" "),s("p",[t._v("For the purpose of this tutorial, let's assume that we want to open a modal settings view and react to the settings being saved BEFORE closing the view. In this case, we might typically write:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" settings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Alloy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“screens"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("settings”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("modal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"saved"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do stuff here")]),t._v("\n  settings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This approach is fine, but it’s a lot of code.")]),t._v(" "),s("p",[t._v("With Alloy, you can chain methods and do ALL this without ever creating the pointer variable:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Alloy.createController(“screens/settings”).on("saved", function( ){\n  // do stuff here\n}).getView().open({modal: true});\n')])])]),s("p",[t._v("We can achieve the same thing in a few lines of code with no pointer created or potential memory leak issues.")]),t._v(" "),s("p",[t._v("This tutorial was originally posted in a blog post by "),s("a",{attrs:{href:"https://devblog.axway.com/author/jkneen/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jason Keen"),s("OutboundLink")],1),t._v(" entitled "),s("a",{attrs:{href:"https://devblog.axway.com/mobile-apps/chain-controller-methods-in-alloy/?utm_source=Axway+Developer&utm_campaign=646e139983-BLOG_ROUNDUP_2019_MAY_17&utm_medium=email&utm_term=0_763a3fa2c9-646e139983-431333853",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Chain Controller Methods in Titanium by Using Alloy"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);