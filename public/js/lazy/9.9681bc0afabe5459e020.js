webpackJsonp([9],{

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__["default"],
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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/www/apidemo/resources/assets/admin/components/hunter/job/Job.vue: Unexpected token, expected , (204:60)\n\n  202 |             recommendRuleValidate: {\n  203 |                 candidate_id: [\n> 204 |                     { required: true, type: 'Array', min: 1 message: '请选择至少一个人选', trigger: 'change' }\n      |                                                             ^\n  205 |                 ],\n  206 |             },\n  207 |             recommendModel: false,\n");

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
            loading: _vm.recommendModelLoading
          },
          on: {
            "on-ok": function($event) {
              _vm.handleRecommendSubmit("recommendValidate")
            }
          },
          model: {
            value: _vm.recommendModel,
            callback: function($$v) {
              _vm.recommendModel = $$v
            },
            expression: "recommendModel"
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
                    { attrs: { label: "人选", prop: "candidate_id" } },
                    [
                      _c(
                        "Select",
                        {
                          attrs: { filterable: "", multiple: "" },
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
                        _vm._l(_vm.candidateList, function(item) {
                          return _c(
                            "Option",
                            { key: item.value, attrs: { value: item.value } },
                            [_vm._v(_vm._s(item.label))]
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