(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c2ef39e"],{"0007":function(e,t,r){},"2ade":function(e,t,r){"use strict";var a=r("cebe"),s=r.n(a),o=r("5c96");r("f3e4");const i=s.a.create({baseURL:"/api",timeout:12e4});i.interceptors.response.use(e=>{const t=e.data,r=t.code,a=t.message;return 0===r?t:(Object(o["Message"])({type:"error",message:a}),Promise.reject("error"))},e=>{const t=e.response.data.status;return t||Object(o["Message"])({type:"error",message:"接口请求失败"}),Promise.reject(e)}),t["a"]=i},"2e67":function(e,t,r){},"6b45":function(e,t,r){"use strict";var a=function(){var e=this,t=e._self._c;return t("el-upload",{ref:"uploadImage",staticClass:"upload-image-wrapper",attrs:{"list-type":"picture-card",action:"",accept:".jpg, .png, .bmp, .jpeg, .webp",multiple:!0,"show-file-list":!0,"auto-upload":!0,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"http-request":e.httpRequest,li:"","before-upload":e.beforeUpload,"file-list":e.fileList}},[e.btnName?t("el-button",{attrs:{size:"small",type:"primary"}},[e._v(e._s(e.btnName))]):t("i",{staticClass:"el-icon-plus"}),t("el-dialog",{attrs:{visible:e.dialogVisible,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},s=[],o=(r("88a7"),r("271a"),r("5494"),r("2ade"));function i(e){return Object(o["a"])({url:"/upload",method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}var n={name:"UploadImage",props:{btnName:{type:String,default:""},list:{type:Array,default(){return[]}}},data(){return{fileList:[],dialogImageUrl:"",dialogVisible:!1}},created(){this.fileList=JSON.parse(JSON.stringify(this.list))},methods:{httpRequest(e){const t=new FormData;t.append("file",e.file),t.append("name",e.file.name),i(t).then(e=>{this.$emit("on-success",e.data)})},handlePictureCardPreview(e,t){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleRemove(e,t){this.$emit("on-delete",t.map(e=>({attachmentId:e.attachmentId,name:e.name,url:e.url})))},beforeUpload(e){let t=e.name.split(".");t.pop(1);let r=t.join(".");const a=/\.(jpg|png|bmp|jpeg|webp)$/.test(e.name),s=/^[a-zA-Z0-9\-_\.]{1,20}$/.test(r);e.size;return a?s?void 0:(this.$message.error("上传文件名称需为1~20个英文、数字、点号、连字符或下划线"),Promise.reject(!1)):(this.$message.error("上传文件只能是.zip .rar .bin .apk格式!"),!1)},handleChange(e){console.log("handleChange");const t=e.raw;return!!t&&(this.isImage(t)?void(this.isLimit5M(t)&&this.readImage(t)):(this.$message.warning("图片只支持.jpg, .png, .bmp, .jpeg, .webp格式!"),!1))},isLimit5M(e){const t=e.size/1024/1024<5;return!!t||(this.$message.warning("上传的图片大小不能超过5M!"),!1)},isImage(e){return/\.(jpg|png|bmp|jpeg|webp)$/.test(e.name)},readImage(e){const t=new FileReader;t.onload=e=>{let t;t="object"===typeof e.target.result?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,this.$emit("on-success",t)},t.readAsDataURL(e),t.onerror=e=>{this.$message.error("图片读取出错!")},this.$refs.uploadImage.clearFiles()}}},l=n,u=(r("901b"),r("2877")),m=Object(u["a"])(l,a,s,!1,null,"cf04fbee",null);t["a"]=m.exports},"901b":function(e,t,r){"use strict";r("0007")},"91be":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-list-wrapper"},[t("el-card",{attrs:{shadow:"always"}},[t("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"新闻标题：",prop:"title"}},[t("el-input",{attrs:{"show-word-limit":"",placeholder:"请输入"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),t("el-form-item",{attrs:{label:"新闻作者：",prop:"author"}},[t("el-input",{attrs:{"show-word-limit":"",placeholder:"请输入"},model:{value:e.ruleForm.author,callback:function(t){e.$set(e.ruleForm,"author",t)},expression:"ruleForm.author"}})],1),t("el-form-item",{attrs:{label:"新闻封面：",prop:"author"}},[t("ImageUpload",{key:e.updatekey,attrs:{list:e.ruleForm.attachments},on:{"on-success":e.getFileList,"on-delete":e.getDeleteFileList}})],1),t("el-form-item",{attrs:{label:"新闻详情：",prop:"content"}},[t("Editor",{model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),t("el-form-item",{staticClass:"submit-box"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},s=[],o=(r("14d9"),function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"editor-wrapper"},[t("Toolbar",{attrs:{editor:e.editor,mode:e.mode,"default-config":e.toolbarConfig}}),t("Editor",{attrs:{mode:e.mode,"default-config":e.editorConfig},on:{onCreated:e.onCreated,onChange:e.onChange},model:{value:e.html,callback:function(t){e.html=t},expression:"html"}})],1)}),i=[],n=r("8bbf"),l=r.n(n),u=(r("560e"),r("4e15")),m=l.a.extend({components:{Editor:u["a"],Toolbar:u["b"]},model:{prop:"value",event:"input"},props:{value:{type:String,default:""}},data(){return{editor:null,mode:"simple",html:"",toolbarConfig:{},editorConfig:{placeholder:"请输入内容...",MENU_CONF:{uploadImage:{server:"/upload",base64LimitSize:5120}}}}},watch:{value(e){this.html=e}},beforeDestroy(){const e=this.editor;null!=e&&e.destroy()},methods:{onCreated(e){this.editor=Object.seal(e)},onChange(e){this.$emit("input",e.getHtml())}}}),d=m,c=(r("ceeb"),r("2877")),p=Object(c["a"])(d,o,i,!1,null,null,null),h=p.exports,f=r("aa2a"),g=r("6b45"),b={name:"Form",components:{Editor:h,ImageUpload:g["a"]},data(){return{ruleForm:{title:"",author:"",attachments:[],content:""},updatekey:1,rules:{name:[{required:!0,message:"新闻标题不能为空",trigger:"blur"}]}}},created(){this.newsId=this.$route.query.newsId||"",this.newsId&&Object(f["a"])({newsId:this.newsId}).then(e=>{for(const t in this.ruleForm)this.ruleForm[t]=e.data[t];this.updatekey++})},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("提交失败!"),!1;this.onSubmit()})},resetForm(e){this.$refs[e].resetFields()},getFileList(e){this.ruleForm.attachments.push(e)},getDeleteFileList(e){this.ruleForm.attachments=e},onSubmit(){let e={...this.ruleForm,newsId:this.newsId};Object(f["d"])(e).then(e=>{0==e.code&&(this.$message({showClose:!0,message:"提交成功",type:"success"}),setTimeout(()=>{this.$store.commit("delVisitedView",{path:"/good/createNews"}),this.$router.push({name:"NewsList"})},500))})}}},w=b,v=(r("a3a4"),Object(c["a"])(w,a,s,!1,null,null,null));t["default"]=v.exports},"964f":function(e,t,r){},a3a4:function(e,t,r){"use strict";r("2e67")},aa2a:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n}));var a=r("2ade");function s(e){return Object(a["a"])({url:"/saveNews",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/queryNews",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/queryNewsList",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/removeNews",method:"get",params:e})}},ceeb:function(e,t,r){"use strict";r("964f")}}]);