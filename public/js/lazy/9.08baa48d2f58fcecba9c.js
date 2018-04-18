webpackJsonp([9],{

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__ = __webpack_require__(75);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc21a27_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(89)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc21a27_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc21a27_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\job\\Job.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dc21a27", Component.options)
  } else {
    hotAPI.reload("data-v-7dc21a27", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MarkPoptip__ = __webpack_require__(91);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.getListData();
    },
    created: function created() {
        this.getClientListData();
    },
    data: function data() {
        var _this = this;

        return {
            addModel: false,
            addModelLoading: true,
            formValidate: {
                client_id: '',
                name: '',
                remark: ''
            },
            ruleValidate: {
                client_id: [{ required: true, message: '请选择职位所属客户', trigger: 'change' }],
                name: [{ required: true, message: '客户名称不能为空', trigger: 'blur' }]
            },
            listQuery: {
                page: 1,
                limits: 10
            },
            pageData: {
                current_page: 1,
                last_page: 0,
                per_page: 10,
                total: 0
            },
            columns: [{
                // type: 'index',
                title: '#',
                // key: 'index',
                render: function render(h, params) {
                    return h('span', _this.getListIndex(params.index));
                }
            }, {
                title: '职位名称',
                key: 'name'
            }, {
                title: '所属客户',
                key: 'client_name'
            }, {
                title: '创建时间',
                key: 'created_at',
                minWidth: 150
            }, {
                title: '职位状态',
                key: 'status',
                render: function render(h, params) {
                    return _this.getStatusContent(h, params);
                }
            }, {
                title: '已推数',
                key: ''
            }, {
                title: '操作',
                minWidth: 250,
                // type: 'html',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        style: {
                            color: '#19be6b'
                        },
                        on: {
                            click: function click() {
                                // 跳转到详情页
                                // this.goClientDetail(params.row.id);
                            }
                        }
                    }, '推荐'), h(__WEBPACK_IMPORTED_MODULE_0__components_MarkPoptip__["a" /* default */], {
                        props: {
                            job_id: params.row.id
                        },
                        on: {
                            statusUpdated: function statusUpdated() {
                                _this.getListData();
                            }
                        }
                    }), h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        style: {
                            color: '#19be6b'
                        },
                        on: {
                            click: function click() {
                                // 跳转到详情页
                                _this.goClientDetail(params.row.id);
                            }
                        }
                    }, '详情'), h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        style: {
                            color: '#ff9900'
                        }
                    }, '修改')]);
                }
            }],
            data: [],
            clients: []
        };
    },

    methods: {
        getListData: function getListData() {
            var _this2 = this;

            this.$http.get('/jobs', { params: this.listQuery }).then(function (response) {
                _this2.data = response.data.data; // 列表数据
                _this2.pageData = response.data.meta; // 填充分页数据
            });
        },

        // 获取客户列表
        getClientListData: function getClientListData() {
            var _this3 = this;

            this.$http.get('/clients', { params: { page: 1, limits: 10000 } }).then(function (response) {
                _this3.clients = response.data.data; // 列表数据
                console.log(_this3.clients);
            });
        },
        getListIndex: function getListIndex(index) {
            return (this.pageData.current_page - 1) * this.pageData.per_page + index + 1;
        },
        handlePageChange: function handlePageChange(page) {
            this.listQuery.page = page;
            this.getListData();
        },
        handlePageSizeChange: function handlePageSizeChange(per_page) {
            this.listQuery.limits = per_page;
            this.getListData();
        },

        // 展示新增客户弹框
        showAddModel: function showAddModel() {
            this.addModel = true;
        },

        // 新增客户提交
        handleSubmit: function handleSubmit(name) {
            var _this4 = this;

            console.log(this.formValidate);
            this.$refs[name].validate(function (valid) {
                if (valid) {
                    //发送提交请求
                    _this4.$http.post('/jobs', _this4.formValidate).then(function (response) {
                        _this4.$Message.success('添加成功');
                        _this4.addModelLoading = false; //加载恢复
                        _this4.addModel = false; // 关闭弹窗
                        // 数据清空
                        _this4.$refs['formValidate'].resetFields();
                        // 重新请求表单
                        _this4.listQuery.page = 1;
                        _this4.getListData();
                    }).catch(function (response) {
                        _this4.addModelLoading = false;
                    });
                } else {
                    _this4.addModelLoading = false;
                }
            });
        },

        // 跳转到客户详情页
        goClientDetail: function goClientDetail(id) {
            this.$router.push({
                name: 'hunter.client.detail',
                params: { id: id }
            });
        },

        // 获取职位内容,
        getStatusContent: function getStatusContent(h, params) {
            // 1. 寻找人选, 2, 推荐中, 3, 失败, 4, 成功,  5. 关闭,
            var status = params.row.status;
            var content = void 0;
            if (1 == status) {
                // 寻找中
                content = h('div', [h('Button', {
                    props: {
                        type: 'text',
                        size: 'small',
                        icon: 'ios-search'
                    },
                    style: {
                        color: '#ed3f14'
                    }
                }, '寻找中...')]);
            } else if (2 == status) {
                // 推荐中
                content = h('div', [h('Button', {
                    props: {
                        type: 'text',
                        size: 'small',
                        icon: 'android-chat'
                    },
                    style: {
                        color: '#ff9900'
                    }
                }, '已推荐')]);
            } else if (3 == status) {
                // 失败
                content = h('div', [h('Button', {
                    props: {
                        type: 'text',
                        size: 'small',
                        icon: 'sad-outline'
                    },
                    style: {
                        color: '#bbbec4'
                    }
                }, '失败')]);
            } else if (4 == status) {
                // 成功
                content = h('div', [h('Button', {
                    props: {
                        type: 'text',
                        size: 'small',
                        icon: 'happy-outline'
                    },
                    style: {
                        color: '#19be6b'
                    }
                }, '推荐成功')]);
            } else if (5 == status) {
                content = h('div', [h('Button', {
                    props: {
                        type: 'text',
                        size: 'small',
                        icon: 'ios-close'
                    },
                    style: {
                        color: '#bbbec4'
                    }
                }, '已关闭')]);
            }
            return content;
        }
    }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {},

    props: {
        job_id: {
            default: 0,
            type: Number
        }
    },
    methods: {
        markSuccess: function markSuccess() {
            var _this = this;

            this.$http.put('/jobs/mark/success/' + this.job_id).then(function (response) {
                _this.$Message.success('操作成功');
                _this.$emit('statusUpdated'); // 重新请求列表数据
            });
        },
        markFail: function markFail() {
            var _this2 = this;

            this.$http.put('/jobs/mark/fail/' + this.job_id).then(function (response) {
                _this2.$Message.success('操作成功');
                _this2.$emit('statusUpdated'); // 重新请求列表数据
            });
        },
        markClose: function markClose() {
            var _this3 = this;

            this.$http.put('/jobs/mark/close/' + this.job_id).then(function (response) {
                _this3.$Message.success('操作成功');
                _this3.$emit('statusUpdated'); // 重新请求列表数据
            });
        }
    }
});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("7878a24a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Job.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Job.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.vertical-center-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vertical-center-modal .ivu-modal {\n  top: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MarkPoptip_vue__ = __webpack_require__(76);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dd60087_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MarkPoptip_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(92)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6dd60087"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MarkPoptip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dd60087_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MarkPoptip_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dd60087_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MarkPoptip_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\job\\components\\MarkPoptip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dd60087", Component.options)
  } else {
    hotAPI.reload("data-v-6dd60087", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("8c53ae5a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6dd60087\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MarkPoptip.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6dd60087\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MarkPoptip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.mark-poptip p[data-v-6dd60087] {\n    padding: 2.5px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Poptip",
    { attrs: { placement: "right" } },
    [
      _c(
        "Button",
        {
          staticStyle: { color: "#ff9900" },
          attrs: { type: "text", size: "small" }
        },
        [_vm._v("mark")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mark-poptip",
          attrs: { slot: "content" },
          slot: "content"
        },
        [
          _c(
            "p",
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "success",
                    size: "small",
                    icon: "happy-outline"
                  },
                  on: { click: _vm.markSuccess }
                },
                [_vm._v("成功")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "default",
                    size: "small",
                    icon: "sad-outline"
                  },
                  on: { click: _vm.markFail }
                },
                [_vm._v("失败")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                "Button",
                {
                  attrs: { type: "default", size: "small", icon: "ios-close" },
                  on: { click: _vm.markClose }
                },
                [_vm._v("关闭")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6dd60087", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Row",
        [
          _c(
            "Tabs",
            { attrs: { value: "name1" } },
            [
              _c(
                "TabPane",
                { attrs: { label: "职位管理", name: "name1" } },
                [
                  _c("Table", {
                    attrs: {
                      columns: _vm.columns,
                      data: _vm.data,
                      size: "small"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "page" },
                    [
                      _c("Page", {
                        attrs: {
                          total: parseInt(_vm.pageData.total),
                          "page-size": parseInt(_vm.pageData.per_page),
                          current: parseInt(_vm.pageData.current_page),
                          size: "small",
                          placement: "top",
                          "page-size-opts": [10, 20, 30, 50, 100],
                          "show-elevator": "",
                          "show-sizer": ""
                        },
                        on: {
                          "on-change": _vm.handlePageChange,
                          "on-page-size-change": _vm.handlePageSizeChange
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    slot: "extra",
                    type: "success",
                    icon: "ios-personadd",
                    size: "small"
                  },
                  on: { click: _vm.showAddModel },
                  slot: "extra"
                },
                [_vm._v("新增职位")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: {
            title: "新增职位",
            "class-name": "vertical-center-modal",
            "ok-text": "提交",
            loading: _vm.addModelLoading
          },
          on: {
            "on-ok": function($event) {
              _vm.handleSubmit("formValidate")
            }
          },
          model: {
            value: _vm.addModel,
            callback: function($$v) {
              _vm.addModel = $$v
            },
            expression: "addModel"
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "Form",
                {
                  ref: "formValidate",
                  attrs: {
                    model: _vm.formValidate,
                    rules: _vm.ruleValidate,
                    "label-width": 80
                  }
                },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "所属客户", prop: "client_id" } },
                    [
                      _c(
                        "Select",
                        {
                          attrs: {
                            placeholder: "选择客户(可输入名称搜索)",
                            filterable: ""
                          },
                          model: {
                            value: _vm.formValidate.client_id,
                            callback: function($$v) {
                              _vm.$set(_vm.formValidate, "client_id", $$v)
                            },
                            expression: "formValidate.client_id"
                          }
                        },
                        _vm._l(_vm.clients, function(client) {
                          return _c(
                            "Option",
                            {
                              key: client.id,
                              attrs: { value: client.id + "" },
                              domProps: { innerHTML: _vm._s(client.name) }
                            },
                            [_vm._v("New York")]
                          )
                        })
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "职位名称", prop: "name" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "职位名称" },
                        model: {
                          value: _vm.formValidate.name,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "name", $$v)
                          },
                          expression: "formValidate.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "备注", prop: "remark" } },
                    [
                      _c("Input", {
                        attrs: {
                          type: "textarea",
                          autosize: { minRows: 2, maxRows: 5 },
                          placeholder: "Enter something..."
                        },
                        model: {
                          value: _vm.formValidate.remark,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "remark", $$v)
                          },
                          expression: "formValidate.remark"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: {
            title: "职位推荐",
            "class-name": "vertical-center-modal",
            "ok-text": "提交",
            loading: _vm.addModelLoading
          },
          on: {
            "on-ok": function($event) {
              _vm.handleSubmit("formValidate")
            }
          },
          model: {
            value: _vm.addModel,
            callback: function($$v) {
              _vm.addModel = $$v
            },
            expression: "addModel"
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "Form",
                {
                  ref: "recommendValidate",
                  attrs: {
                    model: _vm.recommendValidate,
                    rules: _vm.recommendRuleValidate,
                    "label-width": 80
                  }
                },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "人选", prop: "client_id" } },
                    [
                      _c(
                        "AutoComplete",
                        {
                          staticStyle: { width: "200px" },
                          attrs: { placeholder: "input here" },
                          on: { "on-search": _vm.handleSearch2 },
                          model: {
                            value: _vm.recommendValidate.candidate_id,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.recommendValidate,
                                "candidate_id",
                                $$v
                              )
                            },
                            expression: "recommendValidate.candidate_id"
                          }
                        },
                        _vm._l(_vm.data2, function(item) {
                          return _c(
                            "Option",
                            { key: item, attrs: { value: item } },
                            [_vm._v(_vm._s(item))]
                          )
                        })
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7dc21a27", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});