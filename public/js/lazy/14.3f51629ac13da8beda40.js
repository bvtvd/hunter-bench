webpackJsonp([14],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(122);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_492b6252_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(123)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-492b6252"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_492b6252_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_492b6252_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\job\\Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-492b6252", Component.options)
  } else {
    hotAPI.reload("data-v-492b6252", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 122:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.job_id = this.$route.params.id;

        // 获取推荐的一生
        this.getJobLife();
        // 获取推荐详情
        this.getJobDetail();
    },
    data: function data() {
        return {
            job_id: 0,
            life: [],
            lifeTimeColor: {
                1: '#2d8cf0',
                2: '#ff9900',
                3: '#80848f',
                4: '#19be6b',
                9: '#80848f',
                7: '#80848f',
                8: '#80848f',
                6: '#ed3f14'
            },
            job: {}
        };
    },

    methods: {
        // 返回
        handleBack: function handleBack() {
            this.$router.go(-1);
        },

        // 获取职位的一生
        getJobLife: function getJobLife() {
            var _this = this;

            this.$http.get('/jobs/life', {
                params: {
                    id: this.job_id
                }
            }).then(function (response) {
                _this.life = response.data;
            });
        },
        getJobDetail: function getJobDetail() {
            var _this2 = this;

            this.$http.get('/jobs/' + this.job_id).then(function (response) {
                _this2.job = response.data;
            });
        }
    }
});

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("21e083df", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-492b6252\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-492b6252\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.padding-half-rem-x[data-v-492b6252]{\n    padding:0 0.5rem;\n}\n.notice-border[data-v-492b6252]{\n    border-bottom: #e9eaec solid 1px;\n    margin-bottom: 0.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 125:
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
                { attrs: { label: "职位详情", name: "name1" } },
                [
                  _c(
                    "Row",
                    [
                      _c(
                        "Col",
                        {
                          attrs: {
                            span: "8",
                            "class-name": "padding-half-rem-x"
                          }
                        },
                        [
                          _c(
                            "Card",
                            [
                              _c(
                                "p",
                                { attrs: { slot: "title" }, slot: "title" },
                                [
                                  _c("Icon", {
                                    attrs: { type: "android-bicycle" }
                                  }),
                                  _vm._v(
                                    "\n                                职位的一生\n                            "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "Timeline",
                                _vm._l(_vm.life, function(item) {
                                  return _c(
                                    "TimelineItem",
                                    {
                                      key: item.id,
                                      attrs: {
                                        color: _vm.lifeTimeColor[item.type]
                                      }
                                    },
                                    [
                                      item.type == 4
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "trophy"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 3
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "heart-broken"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 1
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "android-walk"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 2
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "flag"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 9
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "close-circled"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 5
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "wrench"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 6
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "thumbsup"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 7
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "heart-broken"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == 8
                                        ? _c("Icon", {
                                            attrs: {
                                              slot: "dot",
                                              type: "close-circled"
                                            },
                                            slot: "dot"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "time" }, [
                                        _vm._v(_vm._s(item.created_at))
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "content" }, [
                                        _vm._v(_vm._s(item.remark))
                                      ])
                                    ],
                                    1
                                  )
                                })
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "Col",
                        { attrs: { span: "16" } },
                        [
                          _c(
                            "Row",
                            [
                              _c(
                                "Col",
                                {
                                  attrs: {
                                    span: "12",
                                    "class-name": "padding-half-rem-x"
                                  }
                                },
                                [
                                  _c(
                                    "Card",
                                    [
                                      _c(
                                        "p",
                                        {
                                          attrs: { slot: "title" },
                                          slot: "title"
                                        },
                                        [
                                          _c("Icon", {
                                            attrs: { type: "more" }
                                          }),
                                          _vm._v(
                                            "\n                                        推荐详情\n                                    "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "Form",
                                        { attrs: { "label-width": 80 } },
                                        [
                                          _c(
                                            "FormItem",
                                            { attrs: { label: "客户" } },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(_vm.job.client) +
                                                  "\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "FormItem",
                                            { attrs: { label: "职位" } },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(_vm.job.name) +
                                                  "\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("FormItem", {
                                            attrs: { label: "人选" }
                                          }),
                                          _vm._v(" "),
                                          _c("FormItem", {
                                            attrs: { label: "人选手机" }
                                          }),
                                          _vm._v(" "),
                                          _c("FormItem", {
                                            attrs: { label: "状态" }
                                          }),
                                          _vm._v(" "),
                                          _c("FormItem", {
                                            attrs: { label: "推荐时间" }
                                          })
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
                              _c("Col", {
                                attrs: {
                                  span: "12",
                                  "class-name": "padding-half-rem-x"
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
    require("vue-hot-reload-api")      .rerender("data-v-492b6252", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});