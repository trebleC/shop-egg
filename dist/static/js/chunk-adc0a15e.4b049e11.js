(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adc0a15e"],{"0007":function(e,t,a){},"00ee":function(e,t,a){"use strict";var r=a("b622"),s=r("toStringTag"),o={};o[s]="z",e.exports="[object z]"===String(o)},"23b9":function(e,t,a){},"271a":function(e,t,a){"use strict";var r=a("cb2d"),s=a("e330"),o=a("577e"),i=a("d6d6"),n=URLSearchParams,l=n.prototype,u=s(l.getAll),c=s(l.has),d=new n("a=1");!d.has("a",2)&&d.has("a",void 0)||r(l,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var r=u(this,e);i(t,1);var s=o(a),n=0;while(n<r.length)if(r[n++]===s)return!0;return!1}),{enumerable:!0,unsafe:!0})},"2ade":function(e,t,a){"use strict";var r=a("cebe"),s=a.n(r),o=a("5c96");a("f3e4");const i=s.a.create({baseURL:"/api",timeout:12e4});i.interceptors.response.use(e=>{const t=e.data,a=t.code,r=t.message;return 0===a?t:(Object(o["Message"])({type:"error",message:r}),Promise.reject("error"))},e=>{const t=e.response.data.status;return t||Object(o["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),t["a"]=i},3890:function(e,t,a){"use strict";a("42aa")},"42aa":function(e,t,a){},5494:function(e,t,a){"use strict";var r=a("83ab"),s=a("e330"),o=a("edd0"),i=URLSearchParams.prototype,n=s(i.forEach);r&&!("size"in i)&&o(i,"size",{get:function(){var e=0;return n(this,(function(){e++})),e},configurable:!0,enumerable:!0})},"577e":function(e,t,a){"use strict";var r=a("f5df"),s=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},"5a4a":function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var r=a("2ade");function s(e){return Object(r["a"])({url:"/saveGood",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/queryGood",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/queryGoodList",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/deleteGood",method:"get",params:e})}},"6b45":function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("el-upload",{ref:"uploadImage",staticClass:"upload-image-wrapper",attrs:{"list-type":"picture-card",action:"",accept:".jpg, .png, .bmp, .jpeg, .webp",multiple:!0,"show-file-list":!0,"auto-upload":!0,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"http-request":e.httpRequest,li:"","before-upload":e.beforeUpload,"file-list":e.fileList}},[e.btnName?t("el-button",{attrs:{size:"small",type:"primary"}},[e._v(e._s(e.btnName))]):t("i",{staticClass:"el-icon-plus"}),t("el-dialog",{attrs:{visible:e.dialogVisible,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},s=[],o=(a("88a7"),a("271a"),a("5494"),a("2ade"));function i(e){return Object(o["a"])({url:"/upload",method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}var n={name:"UploadImage",props:{btnName:{type:String,default:""},list:{type:Array,default(){return[]}}},data(){return{fileList:[],dialogImageUrl:"",dialogVisible:!1}},created(){this.fileList=JSON.parse(JSON.stringify(this.list))},methods:{httpRequest(e){const t=new FormData;t.append("file",e.file),t.append("name",e.file.name),i(t).then(e=>{this.$emit("on-success",e.data)})},handlePictureCardPreview(e,t){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleRemove(e,t){this.$emit("on-delete",t.map(e=>({attachmentId:e.attachmentId,name:e.name,url:e.url})))},beforeUpload(e){let t=e.name.split(".");t.pop(1);let a=t.join(".");const r=/\.(jpg|png|bmp|jpeg|webp)$/.test(e.name),s=/^[a-zA-Z0-9\-_\.]{1,20}$/.test(a);e.size;return r?s?void 0:(this.$message.error("上传文件名称需为1~20个英文、数字、点号、连字符或下划线"),Promise.reject(!1)):(this.$message.error("上传文件只能是.zip .rar .bin .apk格式!"),!1)},handleChange(e){console.log("handleChange");const t=e.raw;return!!t&&(this.isImage(t)?void(this.isLimit5M(t)&&this.readImage(t)):(this.$message.warning("图片只支持.jpg, .png, .bmp, .jpeg, .webp格式!"),!1))},isLimit5M(e){const t=e.size/1024/1024<5;return!!t||(this.$message.warning("上传的图片大小不能超过5M!"),!1)},isImage(e){return/\.(jpg|png|bmp|jpeg|webp)$/.test(e.name)},readImage(e){const t=new FileReader;t.onload=e=>{let t;t="object"===typeof e.target.result?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,this.$emit("on-success",t)},t.readAsDataURL(e),t.onerror=e=>{this.$message.error("图片读取出错!")},this.$refs.uploadImage.clearFiles()}}},l=n,u=(a("901b"),a("2877")),c=Object(u["a"])(l,r,s,!1,null,"cf04fbee",null);t["a"]=c.exports},"88a7":function(e,t,a){"use strict";var r=a("cb2d"),s=a("e330"),o=a("577e"),i=a("d6d6"),n=URLSearchParams,l=n.prototype,u=s(l.append),c=s(l["delete"]),d=s(l.forEach),m=s([].push),p=new n("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&r(l,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var r=[];d(this,(function(e,t){m(r,{key:t,value:e})})),i(t,1);var s,n=o(e),l=o(a),p=0,h=0,f=!1,g=r.length;while(p<g)s=r[p++],f||s.key===n?(f=!0,c(this,s.key)):h++;while(h<g)s=r[h++],s.key===n&&s.value===l||u(this,s.key,s.value)}),{enumerable:!0,unsafe:!0})},"88bd":function(e,t,a){"use strict";a("23b9")},"901b":function(e,t,a){"use strict";a("0007")},b522:function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hints-wrapper"},[t("div",{staticClass:"hint-title"},[t("i",{staticClass:"vue-dsn-icon-tishi"}),t("span",[e._t("hintName")],2)]),t("div",{staticClass:"hint-info"},[e._t("hintInfo")],2)])},s=[],o={name:"Hints"},i=o,n=(a("3890"),a("2877")),l=Object(n["a"])(i,r,s,!1,null,null,null);t["a"]=l.exports},c405:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return n}));var r=a("2ade");function s(e){return Object(r["a"])({url:"/saveCategory",method:"post",data:e})}function o(){return Object(r["a"])({url:"/queryCategoryList",method:"get"})}function i(e){return Object(r["a"])({url:"/deleteCategory",method:"get",params:e})}function n(){return Object(r["a"])({url:"/queryCategoryMap",method:"get"})}},d6d6:function(e,t,a){"use strict";var r=TypeError;e.exports=function(e,t){if(e<t)throw r("Not enough arguments");return e}},ec46:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-list-wrapper"},[t("el-card",{attrs:{shadow:"always"}},[t("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"产品名称：",prop:"name"}},[t("el-input",{attrs:{"show-word-limit":"",placeholder:"请输入"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"产品编号：",prop:"name"}},[t("el-input",{attrs:{"show-word-limit":"",placeholder:"请输入"},model:{value:e.ruleForm.goodNo,callback:function(t){e.$set(e.ruleForm,"goodNo",t)},expression:"ruleForm.goodNo"}})],1),t("el-form-item",{attrs:{label:"产品系列："}},[t("el-form-item",{attrs:{prop:"select"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.categoryId,callback:function(t){e.$set(e.ruleForm,"categoryId",t)},expression:"ruleForm.categoryId"}},e._l(e.selectData,(function(a){return t("el-option",{key:a.categoryId,attrs:{label:a.categoryName,value:a.categoryId}},[t("span",{staticStyle:{float:"left"}},[e._v(e._s(a.categoryName))]),t("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("id："+e._s(a.categoryId||"--"))])])})),1)],1)],1),t("el-form-item",{attrs:{label:"产品简介：",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),t("el-form-item",{attrs:{label:"产品材料：",prop:"attachments"}},[t("ImageUpload",{key:e.updatekey,attrs:{list:e.ruleForm.attachments},on:{"on-success":e.getFileList,"on-delete":e.getDeleteFileList}})],1),t("el-form-item",{attrs:{label:"产品描述：",prop:"desc"}},[t("el-button",{on:{click:e.btachFrom}},[e._v("一键重置")]),t("div",{staticClass:"desc-box"},e._l(e.specification,(function(a,r){return t("div",{key:r,staticClass:"desc-item"},[t("div",{staticClass:"name"},[e._v(e._s(a.label))]),t("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"item.value"}})],1)})),0)],1),t("el-form-item",{staticClass:"submit-box"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},s=[],o=(a("14d9"),a("b522")),i=a("c405"),n=a("5a4a"),l=a("6b45"),u={name:"Form",components:{Hints:o["a"],ImageUpload:l["a"]},data(){return{ruleForm:{name:"",goodNo:"",categoryId:"",desc:"",attachments:[]},selectData:[],updatekey:1,rules:{name:[{required:!0,message:"产品名称不能为空",trigger:"blur"}]},specification:[{label:"BRAND NAME",value:"Yanzi"},{label:"MATERIAL",value:"100% Polyester"},{label:"TECHNICS",value:"embroidered"},{label:"WIDTH",value:"135-140cm(54''/55''inch)"},{label:"MODEL NUMBER",value:"J130477A"},{label:"COLOR",value:"Support custom colors"},{label:"MOQ",value:"30 Yards"},{label:"PAYMENT",value:"T/T, Western Union,Paypal etc."},{label:"OEM/OMD",value:"Support"}]}},created(){this.goodId=this.$route.query.goodId||"",Object(i["c"])().then(e=>{this.selectData=e.data,this.selectData.unshift({categoryName:"无",categoryId:null}),this.goodId&&Object(n["b"])({goodId:this.goodId}).then(e=>{this.specification=e.data.specification;for(const t in this.ruleForm)this.ruleForm[t]=e.data[t];this.updatekey++})})},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("提交失败!"),!1;this.onSubmit()})},resetForm(e){this.$refs[e].resetFields()},btachFrom(){this.specification.map(e=>(e.value="",e))},getFileList(e){this.ruleForm.attachments.push(e)},getDeleteFileList(e){this.ruleForm.attachments=e},onSubmit(){let e={...this.ruleForm,specification:this.specification,goodId:this.goodId};Object(n["d"])(e).then(e=>{0==e.code&&(this.$message({showClose:!0,message:"提交成功",type:"success"}),setTimeout(()=>{this.$store.commit("delVisitedView",{path:"/good/createGood"}),this.$router.push({name:"GoodList"})},500))})}}},c=u,d=(a("88bd"),a("2877")),m=Object(d["a"])(c,r,s,!1,null,null,null);t["default"]=m.exports},edd0:function(e,t,a){"use strict";var r=a("13d2"),s=a("9bf2");e.exports=function(e,t,a){return a.get&&r(a.get,t,{getter:!0}),a.set&&r(a.set,t,{setter:!0}),s.f(e,t,a)}},f5df:function(e,t,a){"use strict";var r=a("00ee"),s=a("1626"),o=a("c6b6"),i=a("b622"),n=i("toStringTag"),l=Object,u="Arguments"===o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(a){}};e.exports=r?o:function(e){var t,a,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=c(t=l(e),n))?a:u?o(t):"Object"===(r=o(t))&&s(t.callee)?"Arguments":r}}}]);