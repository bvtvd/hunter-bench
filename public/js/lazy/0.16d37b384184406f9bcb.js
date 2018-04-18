webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(103);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45a60611_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45a60611_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45a60611_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\candidate\\Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45a60611", Component.options)
  } else {
    hotAPI.reload("data-v-45a60611", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 103:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.candidate_id = this.$route.params.id;
        this.getDetail(); // 获取人选详情
    },
    data: function data() {
        return {
            candidate_id: 0,
            formValidate: {
                id: 0,
                user_id: 0,
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
            }
        };
    },

    methods: {
        getDetail: function getDetail() {
            var _this = this;

            this.$http.get('/candidates/' + this.candidate_id).then(function (response) {
                console.log(response);
                _this.formValidate = response.data;
            });
        },

        // 返回
        handleBack: function handleBack() {
            this.$router.go(-1);
        },
        handleSubmit: function handleSubmit(name) {
            var _this2 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this2.$Message.success('Success!');
                } else {
                    _this2.$Message.error('Fail!');
                }
            });
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        },

        // 毕业时间选择
        graduationChange: function graduationChange(value) {
            this.formValidate.graduation_at = value;
        }
    }
});

/***/ }),

/***/ 104:
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
                { attrs: { label: "人选详情", name: "name1" } },
                [
                  _c(
                    "Row",
                    [
                      _c(
                        "Col",
                        { attrs: { span: "16" } },
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
                                        _vm.$set(
                                          _vm.formValidate,
                                          "mobile",
                                          $$v
                                        )
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
                                {
                                  attrs: {
                                    label: "公司",
                                    prop: "current_company"
                                  }
                                },
                                [
                                  _c("Input", {
                                    attrs: { placeholder: "目前所在公司" },
                                    model: {
                                      value: _vm.formValidate.current_company,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.formValidate,
                                          "current_company",
                                          $$v
                                        )
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
                                {
                                  attrs: { label: "职位", prop: "current_job" }
                                },
                                [
                                  _c("Input", {
                                    attrs: { placeholder: "目前职位" },
                                    model: {
                                      value: _vm.formValidate.current_job,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.formValidate,
                                          "current_job",
                                          $$v
                                        )
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
                                        _vm.$set(
                                          _vm.formValidate,
                                          "education",
                                          $$v
                                        )
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
                                {
                                  attrs: {
                                    label: "毕业时间",
                                    prop: "graduation_at"
                                  }
                                },
                                [
                                  _c("DatePicker", {
                                    attrs: {
                                      type: "date",
                                      placeholder: "选择毕业时间"
                                    },
                                    on: { "on-change": _vm.graduationChange },
                                    model: {
                                      value: _vm.formValidate.graduation_at,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.formValidate,
                                          "graduation_at",
                                          $$v
                                        )
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
                                {
                                  attrs: { label: "毕业院校", prop: "school" }
                                },
                                [
                                  _c("Input", {
                                    attrs: { placeholder: "人选毕业院校" },
                                    model: {
                                      value: _vm.formValidate.school,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.formValidate,
                                          "school",
                                          $$v
                                        )
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
                                          _vm.$set(
                                            _vm.formValidate,
                                            "status",
                                            $$v
                                          )
                                        },
                                        expression: "formValidate.status"
                                      }
                                    },
                                    [
                                      _c("Radio", { attrs: { label: 1 } }, [
                                        _vm._v("在职")
                                      ]),
                                      _vm._v(" "),
                                      _c("Radio", { attrs: { label: 2 } }, [
                                        _vm._v("离职")
                                      ])
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
                                        _vm.$set(
                                          _vm.formValidate,
                                          "remark",
                                          $$v
                                        )
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
                                    "Button",
                                    {
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.handleSubmit("formValidate")
                                        }
                                      }
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "Button",
                                    {
                                      staticStyle: { "margin-left": "8px" },
                                      attrs: { type: "ghost" },
                                      on: {
                                        click: function($event) {
                                          _vm.handleReset("formValidate")
                                        }
                                      }
                                    },
                                    [_vm._v("Reset")]
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
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    slot: "extra",
                    type: "info",
                    icon: "ios-undo",
                    size: "small"
                  },
                  on: { click: _vm.handleBack },
                  slot: "extra"
                },
                [_vm._v("返回")]
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
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45a60611", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});