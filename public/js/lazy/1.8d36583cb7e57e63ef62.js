webpackJsonp([1],{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Client_vue__ = __webpack_require__(67);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1173c352_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Client_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(13);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-loader/node_modules/vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!less-loader!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Client.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1173c352_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Client_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1173c352_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Client_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\Client.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1173c352", Component.options)
  } else {
    hotAPI.reload("data-v-1173c352", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 67:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    },
    data: function data() {
        return {
            addClientModel: false,
            columns: [{
                title: 'Name',
                key: 'name'
            }, {
                title: 'Age',
                key: 'age'
            }, {
                title: 'Address',
                key: 'address'
            }],
            data: [{
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            }, {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            }, {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            }, {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
            }]
        };
    },

    methods: {
        showAddClientModel: function showAddClientModel() {
            this.addClientModel = true;
        }
    }
});

/***/ }),

/***/ 77:
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
                          total: 40,
                          size: "small",
                          "show-elevator": "",
                          "show-sizer": ""
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
                  on: { click: _vm.showAddClientModel },
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
          attrs: { title: "Title", styles: { top: "20px" } },
          model: {
            value: _vm.addClientModel,
            callback: function($$v) {
              _vm.addClientModel = $$v
            },
            expression: "addClientModel"
          }
        },
        [
          _c("p", [_vm._v("Content of dialog")]),
          _vm._v(" "),
          _c("p", [_vm._v("Content of dialog")]),
          _vm._v(" "),
          _c("p", [_vm._v("Content of dialog")])
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
    require("vue-hot-reload-api")      .rerender("data-v-1173c352", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});