(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-531276c3"],{"241d":function(e,s,a){"use strict";a("34ab")},"2ade":function(e,s,a){"use strict";var t=a("cebe"),r=a.n(t),n=a("5c96");a("f3e4");const u=r.a.create({baseURL:"/api",timeout:12e4});u.interceptors.response.use(e=>{const s=e.data,a=s.code,t=s.message;return 0===a?s:(Object(n["Message"])({type:"error",message:t}),Promise.reject("error"))},e=>{const s=e.response.data.status;return s||Object(n["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),s["a"]=u},"34ab":function(e,s,a){},6494:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e._self._c;return s("div",{staticClass:"user-center-wrapper clear-fix"},[s("el-card",{attrs:{shadow:"always","body-style":{padding:"50px"}}},[s("div",{staticClass:"user-avatar"},[s("img",{attrs:{src:a("690a"),alt:"avatar"}})]),s("ul",{staticClass:"user-info"},[s("li",[s("label",[e._v("用户名：")]),s("span",[e._v(e._s(e.userInfo.username))])]),s("li",[s("label",[e._v("角色：")]),s("span",[e._v(e._s(e.userInfo.roles))])]),s("li",[s("label",[e._v("昵称：")]),s("span",[e._v(e._s(e.userInfo.nickname))])]),s("li",[s("label",[e._v("电话号码：")]),s("span",[e._v(e._s(e.userInfo.phone))])]),s("li",[s("label",[e._v("邮箱：")]),s("span",[e._v(e._s(e.userInfo.email))])]),s("li",[s("label",[e._v("创建时间：")]),s("span",[e._v(e._s(e.userInfo.createtime))])]),s("li",[s("label",[e._v("更新时间：")]),s("span",[e._v(e._s(e.userInfo.updatetime))])])])])],1)},r=[],n=a("7ded"),u={name:"UserCenter",data(){return{userInfo:{}}},created(){Object(n["a"])().then(e=>{this.userInfo=e})}},o=u,c=(a("241d"),a("2877")),i=Object(c["a"])(o,t,r,!1,null,null,null);s["default"]=i.exports},"7ded":function(e,s,a){"use strict";a.d(s,"b",(function(){return r})),a.d(s,"a",(function(){return n}));var t=a("2ade");function r(e){return Object(t["a"])({url:"/user/login",method:"post",data:e})}function n(e){return Object(t["a"])({url:"/user/info",method:"get",params:e})}}}]);