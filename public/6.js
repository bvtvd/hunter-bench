webpackJsonp([6],{

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(64);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b80d378_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(40);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(67)
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(63);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 64:
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

var breadcrumbMargin = 40;
var cardPadding = 36;

/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        console.log('Home');
        this.setContentMinHeight();
    },
    data: function data() {
        return {
            contentMinHeight: '700px'
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
        }
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(62).default
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "\n.layout[data-v-5b80d378]{\n    border: 1px solid #d7dde4;\n    background: #f5f7f9;\n    position: relative;\n    border-radius: 4px;\n    overflow: hidden;\n}\n.layout-logo[data-v-5b80d378]{\n    width: 100px;\n    height: 30px;\n    background: #5b6270;\n    border-radius: 3px;\n    float: left;\n    position: relative;\n    top: 15px;\n    left: 20px;\n}\n.layout-nav[data-v-5b80d378]{\n    width: 525px;\n    margin: 0 auto;\n    margin-right: 20px;\n}\n.layout-footer-center[data-v-5b80d378]{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 69:
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
                        "active-name": "1"
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
                            { attrs: { name: "1" } },
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
                            { attrs: { name: "2" } },
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
                                "\n                            Item 3\n                        "
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
                _vm._v("2011-2016 © TalkingData")
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