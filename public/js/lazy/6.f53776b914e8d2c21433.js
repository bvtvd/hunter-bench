webpackJsonp([6],{

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(77);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_080d9e1b_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(94)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-080d9e1b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_080d9e1b_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_080d9e1b_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-080d9e1b", Component.options)
  } else {
    hotAPI.reload("data-v-080d9e1b", Component.options)
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

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        console.log('job.index');
        this.lightCurrentMenu(); // 点亮当前菜单
    },
    data: function data() {
        return {
            activeName: 'recommend'
        };
    },

    methods: {
        // 获取当前路由别名
        getCurrentRouteName: function getCurrentRouteName() {
            return this.$router.currentRoute.name;
        },

        // 获取第二层路由的名称
        getSubRouteName: function getSubRouteName() {
            return this.getCurrentRouteName().split('.')[1];
        },

        // 点亮当前菜单
        lightCurrentMenu: function lightCurrentMenu() {
            this.activeName = this.getSubRouteName();
        },
        menuSelect: function menuSelect(name) {
            this.$router.push({ name: 'hunter.' + name });
        }
    }
});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("85f09dd8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-080d9e1b\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-080d9e1b\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.layout[data-v-080d9e1b]{\n    border: none;\n    background: #f5f7f9;\n    position: relative;\n    border-radius: 4px;\n    overflow: hidden;\n}\n.layout-logo[data-v-080d9e1b]{\n    width: 100px;\n    height: 30px;\n    background: #5b6270;\n    border-radius: 3px;\n    float: left;\n    position: relative;\n    top: 15px;\n    left: 20px;\n}\n.layout-nav[data-v-080d9e1b]{\n    width: 420px;\n    margin: 0 auto;\n    margin-right: 20px;\n}\n.layout-footer-center[data-v-080d9e1b]{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 96:
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
    { staticClass: "layout" },
    [
      _c(
        "Layout",
        [
          _c(
            "Sider",
            { style: { background: "#fff" }, attrs: { "hide-trigger": "" } },
            [
              _c(
                "Menu",
                {
                  attrs: {
                    "active-name": _vm.activeName,
                    theme: "light",
                    width: "auto",
                    "open-names": ["1"]
                  },
                  on: { "on-select": _vm.menuSelect }
                },
                [
                  _c(
                    "MenuItem",
                    { attrs: { name: "recommend" } },
                    [
                      [
                        _c("Icon", { attrs: { type: "android-hangout" } }),
                        _vm._v(
                          "\n                        我的推荐\n                    "
                        )
                      ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "MenuItem",
                    { attrs: { name: "client" } },
                    [
                      [
                        _c("Icon", { attrs: { type: "social-yen" } }),
                        _vm._v(
                          "\n                        客户管理\n                    "
                        )
                      ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "MenuItem",
                    { attrs: { name: "candidate" } },
                    [
                      [
                        _c("Icon", { attrs: { type: "ios-people" } }),
                        _vm._v(
                          "\n                        人选管理\n                    "
                        )
                      ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "MenuItem",
                    { attrs: { name: "job" } },
                    [
                      [
                        _c("Icon", { attrs: { type: "briefcase" } }),
                        _vm._v(
                          "\n                        职位管理\n                    "
                        )
                      ]
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Content",
            { style: { padding: "24px", background: "#fff" } },
            [_c("router-view")],
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
    require("vue-hot-reload-api")      .rerender("data-v-080d9e1b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});