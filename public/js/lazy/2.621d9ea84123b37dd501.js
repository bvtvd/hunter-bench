webpackJsonp([2],{65:function(e,t,a){var n=a(66);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(14).default)("283fabe0",n,!0,{})},66:function(e,t,a){(e.exports=a(1)(!1)).push([e.i,".vertical-center-modal{display:flex;align-items:center;justify-content:center}.vertical-center-modal .ivu-modal{top:0}",""])},78:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(13);var l=function(e){a(65)},o=Object(n.a)({mounted:function(){this.getListData()},data:function(){var e=this;return{addModel:!1,addModelLoading:!0,formValidate:{name:"",remark:""},ruleValidate:{name:[{required:!0,message:"客户名称不能为空",trigger:"blur"}]},listQuery:{page:1,limits:10},pageData:{current_page:1,last_page:0,per_page:10,total:0},columns:[{title:"#",render:function(t,a){return t("span",e.getListIndex(a.index))}},{title:"客户",key:"name"},{title:"创建时间",key:"created_at"},{title:"操作",render:function(t,a){return t("div",[t("Button",{props:{type:"text",size:"small"},style:{color:"#19be6b"},on:{click:function(){e.goClientDetail(a.row.id)}}},"详情"),t("Button",{props:{type:"text",size:"small"},style:{color:"#ff9900"}},"修改")])}}],data:[]}},methods:{getListData:function(){var e=this;this.$http.get("/clients",{params:this.listQuery}).then(function(t){e.data=t.data.data,e.pageData=t.data.meta})},getListIndex:function(e){return(this.pageData.current_page-1)*this.pageData.per_page+e+1},handlePageChange:function(e){this.listQuery.page=e,this.getListData()},handlePageSizeChange:function(e){this.listQuery.limits=e,this.getListData()},showAddModel:function(){this.addModel=!0},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$http.post("/clients",t.formValidate).then(function(e){t.$Message.success("添加成功"),t.addModelLoading=!1,t.addModel=!1,t.$refs.formValidate.resetFields(),t.listQuery.page=1,t.getListData()}).catch(function(e){t.addModelLoading=!1}):t.addModelLoading=!1})},handleAddClientJobs:function(){},goClientDetail:function(e){this.$router.push({name:"hunter.client.detail",params:{id:e}})}}},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Tabs",{attrs:{value:"name1"}},[a("TabPane",{attrs:{label:"客户管理",name:"name1"}},[a("Table",{attrs:{columns:e.columns,data:e.data,size:"small"}}),e._v(" "),a("div",{staticClass:"page"},[a("Page",{attrs:{total:parseInt(e.pageData.total),"page-size":parseInt(e.pageData.per_page),current:parseInt(e.pageData.current_page),size:"small",placement:"top","page-size-opts":[10,20,30,50,100],"show-elevator":"","show-sizer":""},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}})],1)],1),e._v(" "),a("Button",{attrs:{slot:"extra",type:"success",icon:"ios-personadd",size:"small"},on:{click:e.showAddModel},slot:"extra"},[e._v("新增客户")])],1)],1),e._v(" "),a("Modal",{attrs:{title:"新增客户","class-name":"vertical-center-modal","ok-text":"提交",loading:e.addModelLoading},on:{"on-ok":function(t){e.handleSubmit("formValidate")}},model:{value:e.addModel,callback:function(t){e.addModel=t},expression:"addModel"}},[a("div",[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"客户名称",prop:"name"}},[a("Input",{attrs:{placeholder:"客户公司名称"},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter something..."},model:{value:e.formValidate.remark,callback:function(t){e.$set(e.formValidate,"remark",t)},expression:"formValidate.remark"}})],1),e._v(" "),a("FormItem",[a("Row",[a("Col",{attrs:{span:"12"}},[a("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:e.handleAddClientJobs}},[e._v("添加职位")])],1)],1)],1)],1)],1)])],1)},[],!1,l,null,null);t.default=o.exports}});