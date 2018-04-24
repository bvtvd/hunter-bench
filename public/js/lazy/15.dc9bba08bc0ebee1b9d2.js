webpackJsonp([15],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("2fd2df5e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Client.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Client.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.vertical-center-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vertical-center-modal .ivu-modal {\n  top: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 105:
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
                { attrs: { label: "客户管理", name: "name1" } },
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
                [_vm._v("新增客户")]
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
            title: "新增客户",
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
                    { attrs: { label: "客户名称", prop: "name" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "客户公司名称" },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    [
                      _c(
                        "Row",
                        [
                          _c(
                            "Col",
                            { attrs: { span: "12" } },
                            [
                              _c(
                                "Button",
                                {
                                  attrs: {
                                    type: "dashed",
                                    long: "",
                                    icon: "plus-round"
                                  },
                                  on: { click: _vm.handleAddClientJobs }
                                },
                                [_vm._v("添加职位")]
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
    require("vue-hot-reload-api")      .rerender("data-v-0f63a6f6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Client_vue__ = __webpack_require__(80);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f63a6f6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Client_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(103)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Client_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f63a6f6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Client_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f63a6f6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Client_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\client\\Client.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f63a6f6", Component.options)
  } else {
    hotAPI.reload("data-v-0f63a6f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 80:
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
        // 请求列表数据
        this.getListData();
    },
    data: function data() {
        var _this = this;

        return {
            addModel: false,
            addModelLoading: true,
            formValidate: {
                name: '',
                remark: ''
            },
            ruleValidate: {
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
                title: '客户',
                key: 'name'
            }, {
                title: '创建时间',
                key: 'created_at'
            }, {
                title: '操作',
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
            data: []
        };
    },

    methods: {
        getListData: function getListData() {
            var _this2 = this;

            this.$http.get('/clients', { params: this.listQuery }).then(function (response) {
                _this2.data = response.data.data; // 列表数据
                _this2.pageData = response.data.meta; // 填充分页数据
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
            var _this3 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    // 发送提交请求
                    _this3.$http.post('/clients', _this3.formValidate).then(function (response) {
                        _this3.$Message.success('添加成功');

                        _this3.addModelLoading = false; //加载恢复
                        _this3.addModel = false; // 关闭弹窗
                        // 数据清空
                        _this3.$refs['formValidate'].resetFields();
                        // 重新请求表单
                        _this3.listQuery.page = 1;
                        _this3.getListData();
                    }).catch(function (response) {
                        _this3.addModelLoading = false;
                    });
                } else {
                    _this3.addModelLoading = false;
                }
            });
        },

        // 顺便添加客户职位
        handleAddClientJobs: function handleAddClientJobs() {},

        // 跳转到客户详情页
        goClientDetail: function goClientDetail(id) {
            this.$router.push({
                name: 'hunter.client.detail',
                params: { id: id }
            });
        }
    }
});

/***/ })

});