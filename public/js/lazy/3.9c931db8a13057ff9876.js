webpackJsonp([3],{70:function(e,t,a){var o=a(71);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(13).default)("46556f02",o,!0,{})},71:function(e,t,a){(e.exports=a(1)(!1)).push([e.i,".vertical-center-modal{display:flex;align-items:center;justify-content:center}.vertical-center-modal .ivu-modal{top:0}.badge-departure{background:#19be6b!important}.badge-work{background:#bbbec4!important}",""])},80:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(12);var l=function(e){a(70)},r=Object(o.a)({mounted:function(){this.getListData()},data:function(){var e=this;return{addModel:!1,addModelLoading:!0,deleteModel:!1,deleteModelLoading:!1,delete_id:null,formValidate:{name:"",mobile:"",current_company:null,current_job:null,education:null,graduation_at:null,school:null,status:1,remark:null},ruleValidate:{name:[{required:!0,message:"人选姓名不能为空",trigger:"blur"}],mobile:[{required:!0,message:"人选手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[\d]{10}$/,message:"请输入正确的是手机号码",trigger:"blur"}]},listQuery:{page:1,limits:10},pageData:{current_page:1,last_page:0,per_page:10,total:0},columns:[{title:"#",render:function(t,a){return t("span",e.getListIndex(a.index))}},{title:"姓名(手机号)",key:"name_mobile",minWidth:190},{title:"状态)",key:"status",render:function(t,a){return e.getStatusBadge(t,a.row.status)}},{title:"公司",key:"current_company"},{title:"职位",key:"current_job"},{title:"最高学历",key:"education"},{title:"毕业院校",key:"school"},{title:"毕业时间",key:"graduation_at"},{title:"操作",render:function(t,a){return t("div",[t("Button",{props:{type:"text",size:"small"},style:{color:"#19be6b"},on:{click:function(){e.goCandidateDetail(a.row.id)}}},"详情"),t("Button",{props:{type:"text",size:"small"},style:{color:"#ed3f14"},on:{click:function(){e.showDeleteModel(a.row.id)}}},"删除")])}}],data:[]}},methods:{getListData:function(){var e=this;this.$http.get("/candidates",{params:this.listQuery}).then(function(t){e.data=t.data.data,e.pageData=t.data.meta})},getListIndex:function(e){return(this.pageData.current_page-1)*this.pageData.per_page+e+1},handlePageChange:function(e){this.listQuery.page=e,this.getListData()},handlePageSizeChange:function(e){this.listQuery.limits=e,this.getListData()},showAddModel:function(){this.addModel=!0},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$http.post("/candidates",t.formValidate).then(function(e){t.$Message.success("添加成功"),t.addModelLoading=!1,t.addModel=!1,t.$refs.formValidate.resetFields(),t.listQuery.page=1,t.getListData()}).catch(function(e){t.addModelLoading=!1}):t.addModelLoading=!1})},graduationChange:function(e){this.formValidate.graduation_at=e},goCandidateDetail:function(e){this.$router.push({name:"hunter.candidate.detail",params:{id:e}})},getStatusBadge:function(e,t){var a=void 0;return 1==t?a=e("Badge",{props:{count:"在职",className:"badge-work"}}):2==t&&(a=e("Badge",{props:{count:"离职",className:"badge-departure"},styles:{background:"#19be6b"}})),a},showDeleteModel:function(e){this.deleteModel=!0,this.delete_id=e},handleDelete:function(){var e=this;this.deleteModel=!1,this.$http.delete("/candidates/"+this.delete_id).then(function(t){e.$Message.success("删除成功"),e.getListData()})}}},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Tabs",{attrs:{value:"name1"}},[a("TabPane",{attrs:{label:"人选管理",name:"name1"}},[a("Table",{attrs:{columns:e.columns,data:e.data,size:"small"}}),e._v(" "),a("div",{staticClass:"page"},[a("Page",{attrs:{total:parseInt(e.pageData.total),"page-size":parseInt(e.pageData.per_page),current:parseInt(e.pageData.current_page),size:"small",placement:"top","page-size-opts":[10,20,30,50,100],"show-elevator":"","show-sizer":""},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}})],1)],1),e._v(" "),a("Button",{attrs:{slot:"extra",type:"success",icon:"ios-personadd",size:"small"},on:{click:e.showAddModel},slot:"extra"},[e._v("新增人选")])],1)],1),e._v(" "),a("Modal",{attrs:{title:"新增人选","class-name":"vertical-center-modal","ok-text":"提交",loading:e.addModelLoading},on:{"on-ok":function(t){e.handleSubmit("formValidate")}},model:{value:e.addModel,callback:function(t){e.addModel=t},expression:"addModel"}},[a("div",[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"姓名",prop:"name"}},[a("Input",{attrs:{placeholder:"人选姓名"},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"手机号",prop:"mobile"}},[a("Input",{attrs:{placeholder:"人选手机号码"},model:{value:e.formValidate.mobile,callback:function(t){e.$set(e.formValidate,"mobile",t)},expression:"formValidate.mobile"}})],1),e._v(" "),a("FormItem",{attrs:{label:"公司",prop:"current_company"}},[a("Input",{attrs:{placeholder:"目前所在公司"},model:{value:e.formValidate.current_company,callback:function(t){e.$set(e.formValidate,"current_company",t)},expression:"formValidate.current_company"}})],1),e._v(" "),a("FormItem",{attrs:{label:"职位",prop:"current_job"}},[a("Input",{attrs:{placeholder:"目前职位"},model:{value:e.formValidate.current_job,callback:function(t){e.$set(e.formValidate,"current_job",t)},expression:"formValidate.current_job"}})],1),e._v(" "),a("FormItem",{attrs:{label:"学历",prop:"education"}},[a("Input",{attrs:{placeholder:"最高学历"},model:{value:e.formValidate.education,callback:function(t){e.$set(e.formValidate,"education",t)},expression:"formValidate.education"}})],1),e._v(" "),a("FormItem",{attrs:{label:"毕业时间",prop:"graduation_at"}},[a("DatePicker",{attrs:{type:"date",placeholder:"选择毕业时间"},on:{"on-change":e.graduationChange},model:{value:e.formValidate.graduation_at,callback:function(t){e.$set(e.formValidate,"graduation_at",t)},expression:"formValidate.graduation_at"}})],1),e._v(" "),a("FormItem",{attrs:{label:"毕业院校",prop:"school"}},[a("Input",{attrs:{placeholder:"人选毕业院校"},model:{value:e.formValidate.school,callback:function(t){e.$set(e.formValidate,"school",t)},expression:"formValidate.school"}})],1),e._v(" "),a("FormItem",{attrs:{label:"状态",prop:"status"}},[a("RadioGroup",{model:{value:e.formValidate.status,callback:function(t){e.$set(e.formValidate,"status",t)},expression:"formValidate.status"}},[a("Radio",{attrs:{label:1}},[e._v("在职")]),e._v(" "),a("Radio",{attrs:{label:2}},[e._v("离职")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter something..."},model:{value:e.formValidate.remark,callback:function(t){e.$set(e.formValidate,"remark",t)},expression:"formValidate.remark"}})],1)],1)],1)]),e._v(" "),a("Modal",{attrs:{width:"360"},model:{value:e.deleteModel,callback:function(t){e.deleteModel=t},expression:"deleteModel"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),e._v(" "),a("span",[e._v("删除确认")])],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("p",[e._v("此操作不可逆, 人选删除之后不能恢复")]),e._v(" "),a("p",[e._v("确认删除吗?")])]),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:"",loading:e.deleteModelLoading},on:{click:e.handleDelete}},[e._v("删除")])],1)])],1)},[],!1,l,null,null);t.default=r.exports}});