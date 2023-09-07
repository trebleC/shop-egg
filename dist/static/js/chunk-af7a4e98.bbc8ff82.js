(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af7a4e98"],{"0d20":function(e,t,a){"use strict";a("2dce")},"2dce":function(e,t,a){},aa2a:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n}));var i=a("2ade");function s(e){return Object(i["a"])({url:"/saveNews",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/queryNews",method:"get",params:e})}function r(e){return Object(i["a"])({url:"/queryNewsList",method:"get",params:e})}function n(e){return Object(i["a"])({url:"/removeNews",method:"get",params:e})}},b7a7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-classic-wrapper"},[t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"control-btns"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("新建新闻")])],1),t("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.listQuery,"label-width":"90px"}},[t("el-form-item",{attrs:{label:"新闻标题"}},[t("el-input",{attrs:{placeholder:"产品名称"},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onReset}},[e._v("重置")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{prop:"title",label:"新闻标题",align:"left",width:"500",sortable:""}}),t("el-table-column",{attrs:{prop:"author",label:"作者",align:"left",width:"100",sortable:""}}),t("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",align:"left",width:"200",sortable:""}}),t("el-table-column",{attrs:{label:"新闻封面",align:"left"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",e._l(a.row.attachments,(function(a){return t("img",{staticStyle:{width:"40px",height:"40px","margin-right":"5px",cursor:"pointer"},attrs:{src:a.url,alt:""},on:{click:function(t){return e.showImage(a)}}})})),0)]}}])}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",disabled:a.row.forbid},on:{click:function(t){return e.handleEdit(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("删除")])]}}])})],1)],1),t("el-dialog",{attrs:{visible:e.dialogVisible,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},s=[],l=(a("14d9"),a("aa2a")),r=a("333d"),n=a("c7f0"),o=a("b522"),c=a("6b45"),u=a("5a0c"),d=a.n(u),h={name:"News",components:{Pagination:r["a"],Upload:n["a"],Hints:o["a"],ImageUpload:c["a"]},data(){return{listLoading:!0,listQuery:{name:null,categoryId:null,pageNo:1,pageSize:100},dialogForm:{name:void 0,phone:void 0,married:void 0,hobby:[]},total:0,tableData:[],multipleSelection:[],formVisible:!1,formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}]},isSubmit:!1,dialogImageUrl:"",dialogVisible:!1,categoryRules:{categoryName:[{required:!0,message:"请输入系列名称",trigger:"blur"}]},categoryForm:{categoryName:"",desc:"",attachments:[]},categoryId:"",selectData:[]}},created(){this.fetchData()},methods:{showImage(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleSelectionChange(e){this.multipleSelection=e},handleCreate(){this.$router.push({path:"/news/createNews"})},handleEdit(e,t){this.$router.push({path:"/news/createNews?newsId="+t.newsId})},handleDelete(e,t){console.log(e,t),this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(l["c"])({newsId:t.newsId}).then(e=>{this.$message({type:"success",message:"删除成功!"}),this.fetchData()})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},batchDelete(){this.multipleSelection.length<1?this.$message({message:"请先选择要删除的数据！",type:"warning"}):this.handleDelete()},handleClose(){this.formVisible=!1,this.$refs.dialogForm.resetFields()},fetchData(){this.listLoading=!0,Object(l["b"])(this.listQuery).then(e=>{0===e.code&&(this.total=e.data.length,this.tableData=e.data.map(e=>(e.updateTime=d()(e.updateTime).format("YYYY-MM-DD HH:mm"),e)),this.listLoading=!1)}).catch(()=>{this.listLoading=!1})},onSubmit(){this.listQuery.pageNo=1,this.fetchData()},onReset(){for(const e in this.listQuery)this.listQuery[e]="";this.fetchData()},handleImport(){this.importVisible=!0},submitForm(e){this.$refs[e].validate(e=>{if(!e)return this.isSubmit=!1,!1;this.saveCategory(),this.formVisible=!1})},saveCategory(){this.categoryForm,this.categoryId;saveCategory(this.categoryForm).then(e=>{this.fetchData()})}}},m=h,g=(a("0d20"),a("2877")),b=Object(g["a"])(m,i,s,!1,null,null,null);t["default"]=b.exports}}]);