webpackJsonp([8],{

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(76);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b80d378_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(91)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b80d378"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b80d378_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b80d378_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b80d378", Component.options)
  } else {
    hotAPI.reload("data-v-5b80d378", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var breadcrumbMargin = 40;
var cardPadding = 36;

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.setContentMinHeight();
        this.lightCurrentMenu();
        this.setEchoAuthorization();
        this.setBroadcast();
    },
    data: function data() {
        return {
            contentMinHeight: '700px',
            activeName: 'home'
        };
    },

    methods: {
        // 设置内容宽度
        setContentMinHeight: function setContentMinHeight() {
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var headerHeight = this.$refs.header.offsetHeight;
            var breadcrumbHeight = this.$refs.breadcrumb.offsetHeight;
            var footerHeight = this.$refs.footer.offsetHeight;
            var contentMinHeight = h - headerHeight - breadcrumbHeight - footerHeight - breadcrumbMargin - cardPadding + 'px';
            this.contentMinHeight = contentMinHeight;
        },

        /* 登出 */
        logout: function logout() {
            this.$auth.logout({
                makeRequest: true,
                redirect: '/login'
            });
        },

        // 获取当前路由别名
        getCurrentRouteName: function getCurrentRouteName() {
            return this.$router.currentRoute.name;
        },

        // 获取第一层路由的名称
        getFirstRouteName: function getFirstRouteName() {
            return this.getCurrentRouteName().split('.')[0];
        },

        // 点亮当前菜单
        lightCurrentMenu: function lightCurrentMenu() {
            this.activeName = this.getFirstRouteName();
        },

        // 设置echo 认证请求token
        setEchoAuthorization: function setEchoAuthorization() {
            this.$echo.options.auth.headers.Authorization = 'Bearer ' + this.$auth.token();
        },

        // 设置广播监听
        setBroadcast: function setBroadcast() {
            var _this = this;

            // 监听私人频道
            this.$echo.private('App.User.' + this.$auth.user().id).notification(function (notification) {
                // 监听服务端通知
                _this.$Notice.open({
                    title: notification.title,
                    desc: notification.content,
                    duration: 0
                });
            });
        }
    }
});

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("06e76287", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5b80d378\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5b80d378\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.layout[data-v-5b80d378]{\n    border: 1px solid #d7dde4;\n    background: #f5f7f9;\n    position: relative;\n    border-radius: 4px;\n    overflow: hidden;\n}\n.layout-logo[data-v-5b80d378]{\n    width: 100px;\n    height: 30px;\n    background: #5b6270;\n    border-radius: 3px;\n    float: left;\n    position: relative;\n    top: 15px;\n    left: 20px;\n}\n.layout-nav[data-v-5b80d378]{\n    width: 525px;\n    margin: 0 auto;\n    margin-right: 20px;\n}\n.layout-footer-center[data-v-5b80d378]{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 93:
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
            "div",
            { ref: "header" },
            [
              _c(
                "Header",
                [
                  _c(
                    "Menu",
                    {
                      attrs: {
                        mode: "horizontal",
                        theme: "dark",
                        "active-name": _vm.activeName
                      }
                    },
                    [
                      _c("div", { staticClass: "layout-logo" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "layout-nav" },
                        [
                          _c(
                            "MenuItem",
                            { attrs: { name: "home" } },
                            [
                              _c("Icon", { attrs: { type: "ios-navigate" } }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.$router.push({ name: "home" })
                                    }
                                  }
                                },
                                [_vm._v("首页")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "MenuItem",
                            { attrs: { name: "hunter" } },
                            [
                              _c("Icon", { attrs: { type: "ios-keypad" } }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.$router.push({ name: "hunter.index" })
                                    }
                                  }
                                },
                                [_vm._v("猎场")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "MenuItem",
                            { attrs: { name: "3" } },
                            [
                              _c("Icon", { attrs: { type: "ios-analytics" } }),
                              _vm._v(
                                "\n                            TodoList\n                        "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "MenuItem",
                            { attrs: { name: "4" } },
                            [
                              _c("Icon", { attrs: { type: "ios-paper" } }),
                              _vm._v(
                                "\n                            Item 4\n                        "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "MenuItem",
                            { attrs: { name: "5" } },
                            [
                              _c(
                                "Dropdown",
                                [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.$auth.user().name))
                                  ]),
                                  _vm._v(" \n                                "),
                                  _vm.$auth.user().avatar
                                    ? _c("Avatar", {
                                        attrs: { src: _vm.$auth.user().avatar }
                                      })
                                    : _c("Avatar", {
                                        staticStyle: {
                                          "background-color": "#87d068"
                                        },
                                        attrs: { icon: "person" }
                                      }),
                                  _vm._v(" "),
                                  _c(
                                    "DropdownMenu",
                                    { attrs: { slot: "list" }, slot: "list" },
                                    [
                                      _c("DropdownItem", [_vm._v("驴打滚")]),
                                      _vm._v(" "),
                                      _c("DropdownItem", [_vm._v("炸酱面")]),
                                      _vm._v(" "),
                                      _c(
                                        "DropdownItem",
                                        { attrs: { disabled: "" } },
                                        [_vm._v("豆汁儿")]
                                      ),
                                      _vm._v(" "),
                                      _c("DropdownItem", [_vm._v("冰糖葫芦")]),
                                      _vm._v(" "),
                                      _c(
                                        "DropdownItem",
                                        {
                                          attrs: { name: "logout", divided: "" }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { on: { click: _vm.logout } },
                                            [_vm._v("退出")]
                                          )
                                        ]
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Content",
            { style: { padding: "0 50px" } },
            [
              _c(
                "div",
                { ref: "breadcrumb", style: { margin: "20px 0" } },
                [
                  _c(
                    "Breadcrumb",
                    [
                      _c("BreadcrumbItem", [_vm._v("Home")]),
                      _vm._v(" "),
                      _c("BreadcrumbItem", [_vm._v("Components")]),
                      _vm._v(" "),
                      _c("BreadcrumbItem", [_vm._v("Layout")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("Card", [
                _c(
                  "div",
                  { style: { "min-height": _vm.contentMinHeight } },
                  [_c("router-view")],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { ref: "footer" },
            [
              _c("Footer", { staticClass: "layout-footer-center" }, [
                _c("p", [_vm._v("Power by Hans")]),
                _vm._v(" "),
                _c("p", [_vm._v("® seizeone.site")])
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-5b80d378", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});