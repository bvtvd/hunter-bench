webpackJsonp([8],{

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Candidate_vue__ = __webpack_require__(77);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a7f6fc1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Candidate_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(96)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Candidate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a7f6fc1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Candidate_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a7f6fc1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Candidate_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\candidate\\Candidate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7f6fc1a", Component.options)
  } else {
    hotAPI.reload("data-v-a7f6fc1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 77:
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
            deleteModel: false,
            deleteModelLoading: false,
            delete_id: null,
            formValidate: {
                name: '',
                mobile: '',
                current_company: null,
                current_job: null,
                education: null,
                graduation_at: null,
                school: null,
                status: 1,
                remark: null
            },
            ruleValidate: {
                name: [{ required: true, message: '人选姓名不能为空', trigger: 'blur' }],
                mobile: [{ required: true, message: '人选手机号不能为空', trigger: 'blur' }, { type: 'string', pattern: /^1[\d]{10}$/, message: '请输入正确的是手机号码', trigger: 'blur' }]
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
                title: '姓名(手机号)',
                key: 'name_mobile',
                minWidth: 190
            }, {
                title: '状态)',
                key: 'status',
                render: function render(h, params) {
                    return _this.getStatusBadge(h, params.row.status);
                }
            }, {
                title: '公司',
                key: 'current_company'
            }, {
                title: '职位',
                key: 'current_job'
            }, {
                title: '最高学历',
                key: 'education'
            }, {
                title: '毕业院校',
                key: 'school'
            }, {
                title: '毕业时间',
                key: 'graduation_at'
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
                                _this.goCandidateDetail(params.row.id);
                            }
                        }
                    }, '详情'), h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        style: {
                            color: '#ed3f14'
                        },
                        on: {
                            click: function click() {
                                // 删除提示
                                _this.showDeleteModel(params.row.id);
                            }
                        }
                    }, '删除')]);
                }
            }],
            data: []
        };
    },

    methods: {
        getListData: function getListData() {
            var _this2 = this;

            this.$http.get('/candidates', { params: this.listQuery }).then(function (response) {
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
                    _this3.$http.post('/candidates', _this3.formValidate).then(function (response) {
                        _this3.$Message.success('添加成功');

                        _this3.addModelLoading = false; //加载恢复
                        _this3.addModel = false; // 关闭弹窗
                        // 数据清空
                        _this3.$refs['formValidate'].resetFields();
                        // 重新请求表单
                        // this.listQuery.page = 1;
                        // this.getListData();
                    }).catch(function (response) {
                        _this3.addModelLoading = false;
                    });
                } else {
                    _this3.addModelLoading = false;
                }
            });
        },

        // 毕业时间选择
        graduationChange: function graduationChange(value) {
            this.formValidate.graduation_at = value;
        },

        // 跳转到客户详情页
        goCandidateDetail: function goCandidateDetail(id) {
            this.$router.push({
                name: 'hunter.candidate.detail',
                params: { id: id }
            });
        },

        // 获取状态徽标
        getStatusBadge: function getStatusBadge(h, status) {
            var content = void 0;
            if (1 == status) {
                content = h('Badge', {
                    props: {
                        count: '在职',
                        className: 'badge-work'
                    }
                });
            } else if (2 == status) {
                content = h('Badge', {
                    props: {
                        count: '离职',
                        className: 'badge-departure'
                    },
                    styles: {
                        background: '#19be6b'
                    }
                });
            }
            return content;
        },

        // 删除确认弹窗
        showDeleteModel: function showDeleteModel(id) {
            this.deleteModel = true;
            this.delete_id = id;
        },

        // 删除提交
        handleDelete: function handleDelete() {
            var _this4 = this;

            this.deleteModelLoading = true; //加载动画
            this.$http.delete('/candidate/' + this.delete_id).then(function (response) {
                _this4.deleteModelLoading = false; //加载动画
                _this4.deleteModel = false;
                _this4.$Message.success('删除成功');
            }).catch(function (response) {
                _this4.deleteModelLoading = false; //加载动画
                _this4.deleteModel = false;
            });
        }
    }
});

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("1ed0fc3e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Candidate.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Candidate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.vertical-center-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vertical-center-modal .ivu-modal {\n  top: 0;\n}\n.badge-departure {\n  background: #19be6b !important;\n}\n.badge-work {\n  background: #bbbec4 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 98:
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
                { attrs: { label: "人选管理", name: "name1" } },
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
                [_vm._v("新增人选")]
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
            title: "新增人选",
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
                    { attrs: { label: "姓名", prop: "name" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "人选姓名" },
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
                    { attrs: { label: "手机号", prop: "mobile" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "人选手机号码" },
                        model: {
                          value: _vm.formValidate.mobile,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "mobile", $$v)
                          },
                          expression: "formValidate.mobile"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "公司", prop: "current_company" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "目前所在公司" },
                        model: {
                          value: _vm.formValidate.current_company,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "current_company", $$v)
                          },
                          expression: "formValidate.current_company"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "职位", prop: "current_job" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "目前职位" },
                        model: {
                          value: _vm.formValidate.current_job,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "current_job", $$v)
                          },
                          expression: "formValidate.current_job"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "学历", prop: "education" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "最高学历" },
                        model: {
                          value: _vm.formValidate.education,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "education", $$v)
                          },
                          expression: "formValidate.education"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "毕业时间", prop: "graduation_at" } },
                    [
                      _c("DatePicker", {
                        attrs: { type: "date", placeholder: "选择毕业时间" },
                        on: { "on-change": _vm.graduationChange },
                        model: {
                          value: _vm.formValidate.graduation_at,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "graduation_at", $$v)
                          },
                          expression: "formValidate.graduation_at"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "毕业院校", prop: "school" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "人选毕业院校" },
                        model: {
                          value: _vm.formValidate.school,
                          callback: function($$v) {
                            _vm.$set(_vm.formValidate, "school", $$v)
                          },
                          expression: "formValidate.school"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "状态", prop: "status" } },
                    [
                      _c(
                        "RadioGroup",
                        {
                          model: {
                            value: _vm.formValidate.status,
                            callback: function($$v) {
                              _vm.$set(_vm.formValidate, "status", $$v)
                            },
                            expression: "formValidate.status"
                          }
                        },
                        [
                          _c("Radio", { attrs: { label: 1 } }, [
                            _vm._v("在职")
                          ]),
                          _vm._v(" "),
                          _c("Radio", { attrs: { label: 2 } }, [_vm._v("离职")])
                        ],
                        1
                      )
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
          attrs: { width: "360" },
          model: {
            value: _vm.deleteModel,
            callback: function($$v) {
              _vm.deleteModel = $$v
            },
            expression: "deleteModel"
          }
        },
        [
          _c(
            "p",
            {
              staticStyle: { color: "#f60", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("Icon", { attrs: { type: "information-circled" } }),
              _vm._v(" "),
              _c("span", [_vm._v("删除确认")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v("此操作不可逆, 人选删除之后不能恢复")]),
            _vm._v(" "),
            _c("p", [_vm._v("确认删除吗?")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    size: "large",
                    long: "",
                    loading: _vm.deleteModelLoading
                  },
                  on: { click: _vm.handleDelete }
                },
                [_vm._v("删除")]
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
    require("vue-hot-reload-api")      .rerender("data-v-a7f6fc1a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});