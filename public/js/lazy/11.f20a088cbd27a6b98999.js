webpackJsonp([11],{

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Recommend_vue__ = __webpack_require__(77);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3aa29c25_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Recommend_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(14);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(93)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Recommend_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3aa29c25_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Recommend_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3aa29c25_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Recommend_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\recommend\\Recommend.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3aa29c25", Component.options)
  } else {
    hotAPI.reload("data-v-3aa29c25", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MarkPoptip__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    beforeCreate: function beforeCreate() {},
    mounted: function mounted() {
        this.getListData(); // 请求列表数据
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
                width: 90,
                render: function render(h, params) {
                    return h('span', _this.getListIndex(params.index));
                }
            }, {
                title: '职位',
                key: 'job_client'
            }, {
                title: '人选',
                key: 'candidate_name_mobile'
            }, {
                title: '推荐时间',
                key: 'created_at'
            }, {
                title: '状态',
                key: 'status',
                render: function render(h, params) {
                    return _this.getStatusContent(h, params);
                }
            }, {
                title: '操作',
                minWidth: 250,
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
                                // 设置提醒弹窗
                                _this.goRecommendDetail(params.row.id);
                            }
                        }
                    }, '详情'), h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                            // icon: 'ios-lightbulb-outline'
                        },
                        style: {
                            color: '#2d8cf0'
                        },
                        on: {
                            click: function click() {
                                // 设置提醒弹窗
                                _this.showNotificationModel(params.row);
                            }
                        }
                    }, '设置提醒'), h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        style: {
                            color: '#19be6b'
                        },
                        on: {
                            click: function click() {
                                // 展示面试弹窗
                                _this.showInterviewModel(params.row);
                            }
                        }
                    }, '面试'), h(__WEBPACK_IMPORTED_MODULE_0__components_MarkPoptip__["a" /* default */], {
                        props: {
                            recommend_id: params.row.id
                        },
                        on: {
                            statusUpdated: function statusUpdated() {
                                _this.getListData();
                            }
                        }
                    })]);
                }
            }],
            data: [],
            notificationModel: false,
            notificationModelLoading: true,
            notificationValidate: {
                title: '',
                time: '',
                content: '',
                recommend_id: ''
            },
            notificationRuleValidate: {
                title: [{ required: true, message: '请填写标题', trigger: 'blur' }],
                time: [{ required: true, message: '请选择提醒时间', trigger: 'change' }],
                content: [{ required: true, message: '请填写提醒内容', trigger: 'blur' }]
            },
            notificationOptions: {
                disabledDate: function disabledDate(date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            },
            interviewModel: false,
            interviewModelLoading: false,
            interviewValidate: {
                recommend_id: 0,
                job_id: 0,
                candidate_id: 0
            }
        };
    },

    methods: {
        getListData: function getListData() {
            var _this2 = this;

            this.$http.get('/recommends', { params: this.listQuery }).then(function (response) {
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

        // 跳转到客户详情页
        goClientDetail: function goClientDetail(id) {
            this.$router.push({
                name: 'hunter.client.detail',
                params: { id: id }
            });
        },

        // 获取推荐状态内容,
        getStatusContent: function getStatusContent(h, params) {
            // 1. 推荐中, 2, 失败, 3, 成功, 4, 关闭,
            var status = params.row.status;
            var content = void 0;
            if (1 == status) {
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
                }, '推荐中...')]);
            } else if (2 == status) {
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
            } else if (3 == status) {
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
            } else if (4 == status) {
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
        },
        showNotificationModel: function showNotificationModel(item) {
            this.notificationValidate.title = '面试提醒';
            this.notificationValidate.content = '\u63D0\u9192 ' + item.candidate_name_mobile + ' 3 \u4E2A\u5C0F\u65F6\u4E4B\u540E\u53BB ' + item.client + ' \u9762\u8BD5 ' + item.job_name;
            this.notificationValidate.recommend_id = item.id;

            this.notificationModel = true;
        },

        // 设置提示时间改变
        notificationTimeChange: function notificationTimeChange(value) {
            console.log(value);
            this.notificationValidate.time = value;
        },

        // 设置提醒提交
        handleNotificationSubmit: function handleNotificationSubmit(name) {
            var _this4 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    // 发送提交请求
                    _this4.$http.post('/recommends/remind', _this4.notificationValidate).then(function (response) {
                        _this4.$Message.success('设置成功');

                        _this4.notificationModelLoading = false; //加载恢复
                        _this4.notificationModel = false; // 关闭弹窗
                        // 数据清空
                        _this4.$refs[name].resetFields();

                        // // 重新请求表单
                        // this.listQuery.page = 1;
                        // this.getListData();
                    }).catch(function (response) {
                        _this4.notificationModelLoading = false;
                    });
                } else {
                    _this4.notificationModelLoading = false;
                }
            });
        },

        // 展示面试弹窗
        showInterviewModel: function showInterviewModel(item) {
            this.interviewModel = true;
            this.interviewValidate.recommend_id = item.id;
            this.interviewValidate.job_id = item.job_id;
            this.interviewValidate.candidate_id = item.candidate_id;
        },
        handleInterviewConfirm: function handleInterviewConfirm() {
            var _this5 = this;

            this.interviewModelLoading = true; //加载
            this.$http.post('/recommends/interview', this.interviewValidate).then(function (response) {
                _this5.$Message.success('操作成功');

                _this5.interviewModelLoading = false; //加载恢复
                _this5.interviewModel = false; // 关闭弹窗
            }).catch(function () {
                _this5.interviewModelLoading = false; //加载恢复
            });
        },

        // 去推荐详情页
        goRecommendDetail: function goRecommendDetail(id) {
            this.$router.push({
                name: 'hunter.recommend.detail',
                params: { id: id }
            });
        }
    }

});

/***/ }),

/***/ 78:
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
        recommend_id: {
            default: 0,
            type: Number
        }
    },
    methods: {
        markSuccess: function markSuccess() {
            var _this = this;

            this.$http.put('/recommends/mark/success/' + this.recommend_id).then(function (response) {
                _this.$Message.success('操作成功');
                _this.$emit('statusUpdated'); // 重新请求列表数据
            });
        },
        markFail: function markFail() {
            var _this2 = this;

            this.$http.put('/recommends/mark/fail/' + this.recommend_id).then(function (response) {
                _this2.$Message.success('操作成功');
                _this2.$emit('statusUpdated'); // 重新请求列表数据
            });
        },
        markClose: function markClose() {
            var _this3 = this;

            this.$http.put('/recommends/mark/close/' + this.recommend_id).then(function (response) {
                _this3.$Message.success('操作成功');
                _this3.$emit('statusUpdated'); // 重新请求列表数据
            });
        }
    }
});

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("fae1bc0c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Recommend.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Recommend.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MarkPoptip_vue__ = __webpack_require__(78);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56c1b7f4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MarkPoptip_vue__ = __webpack_require__(98);
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
var __vue_scopeId__ = "data-v-56c1b7f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MarkPoptip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56c1b7f4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MarkPoptip_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56c1b7f4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MarkPoptip_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\components\\hunter\\recommend\\components\\MarkPoptip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56c1b7f4", Component.options)
  } else {
    hotAPI.reload("data-v-56c1b7f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


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
var update = add("9459af76", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-56c1b7f4\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MarkPoptip.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-56c1b7f4\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MarkPoptip.vue");
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
exports.push([module.i, "\n.mark-poptip p[data-v-56c1b7f4] {\n    padding: 2.5px 0;\n}\n", ""]);

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
    require("vue-hot-reload-api")      .rerender("data-v-56c1b7f4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 99:
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
          _c("Alert", { attrs: { "show-icon": "" } }, [
            _c("p", [
              _vm._v(
                "设置提醒功能会在您设置的提醒时间提醒你设置的内容, 目前支持邮件提醒和广播通知"
              )
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("人选去面试了之后, 请点击确认面试")]),
            _vm._v(" "),
            _c("p", [_vm._v("点击mark 更新推荐的装填")])
          ]),
          _vm._v(" "),
          _c(
            "Tabs",
            { attrs: { value: "name1" } },
            [
              _c(
                "TabPane",
                { attrs: { label: "我的推荐", name: "name1" } },
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
            title: "设置提醒",
            "class-name": "vertical-center-modal",
            "ok-text": "提交",
            loading: _vm.notificationModelLoading
          },
          on: {
            "on-ok": function($event) {
              _vm.handleNotificationSubmit("notificationValidate")
            }
          },
          model: {
            value: _vm.notificationModel,
            callback: function($$v) {
              _vm.notificationModel = $$v
            },
            expression: "notificationModel"
          }
        },
        [
          _c(
            "div",
            [
              _c("Alert", { attrs: { "show-icon": "" } }, [
                _vm._v("请根据自己的需要自定义修改提醒标题和内容")
              ]),
              _vm._v(" "),
              _c(
                "Form",
                {
                  ref: "notificationValidate",
                  attrs: {
                    model: _vm.notificationValidate,
                    rules: _vm.notificationRuleValidate,
                    "label-width": 80
                  }
                },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "标题", prop: "title" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "面试提醒" },
                        model: {
                          value: _vm.notificationValidate.title,
                          callback: function($$v) {
                            _vm.$set(_vm.notificationValidate, "title", $$v)
                          },
                          expression: "notificationValidate.title"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "提醒时间", prop: "time" } },
                    [
                      _c("DatePicker", {
                        attrs: {
                          type: "datetime",
                          options: _vm.notificationOptions,
                          placeholder: "选择提醒时间"
                        },
                        on: { "on-change": _vm.notificationTimeChange },
                        model: {
                          value: _vm.notificationValidate.time,
                          callback: function($$v) {
                            _vm.$set(_vm.notificationValidate, "time", $$v)
                          },
                          expression: "notificationValidate.time"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "内容", prop: "content" } },
                    [
                      _c("Input", {
                        attrs: {
                          type: "textarea",
                          autosize: { minRows: 2, maxRows: 5 },
                          placeholder:
                            "提醒面试者(手机号码)3个小时后去XX公司面试XX岗位"
                        },
                        model: {
                          value: _vm.notificationValidate.content,
                          callback: function($$v) {
                            _vm.$set(_vm.notificationValidate, "content", $$v)
                          },
                          expression: "notificationValidate.content"
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
            value: _vm.interviewModel,
            callback: function($$v) {
              _vm.interviewModel = $$v
            },
            expression: "interviewModel"
          }
        },
        [
          _c(
            "p",
            {
              staticStyle: { color: "#2d8cf0", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("Icon", { attrs: { type: "information-circled" } }),
              _vm._v(" "),
              _c("span", [_vm._v("面试确认")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v("人选是否已经参加过该职位的面试了?")])
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
                    type: "primary",
                    size: "large",
                    long: "",
                    loading: _vm.interviewModelLoading
                  },
                  on: { click: _vm.handleInterviewConfirm }
                },
                [_vm._v("是的")]
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
    require("vue-hot-reload-api")      .rerender("data-v-3aa29c25", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});