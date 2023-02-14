'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var buildProps = require('./build-props.js');
var bem = require('../../../utils/bem.js');
var icon = require('../../icon/src/icon.vue.js');
var index = require('../../overlay/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "index",
  props: buildProps.messageBoxProps,
  emits: ["action", "destory"],
  setup(__props, { expose, emit: emits }) {
    const ns = bem.useNamespace("message-box");
    const visible = vue.ref(false);
    const doClose = (state) => {
      visible.value = false;
      emits("action", state);
    };
    expose({
      visible
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: vue.unref(ns).b("fade"),
        onAfterLeave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("destory")),
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode(vue.unref(index.AsOverlay), {
            mask: _ctx.modal,
            "overlay-class": [vue.unref(ns).is("message-box")]
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: vue.normalizeClass([vue.unref(ns).b("overlay")])
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass([vue.unref(ns).b()])
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([vue.unref(ns).e("header")])
                  }, [
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass([vue.unref(ns).e("title")])
                    }, [
                      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
                    ], 2),
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(vue.unref(ns).e("headerbtn")),
                      onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
                    }, [
                      vue.createVNode(icon.default, {
                        class: vue.normalizeClass(["as-ui-chahao1"])
                      })
                    ], 2)
                  ], 2),
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([vue.unref(ns).e("content")])
                  }, [
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass([vue.unref(ns).e("container")])
                    }, [
                      vue.createVNode(icon.default, {
                        class: vue.normalizeClass(["as-ui-shenqingchenggong"])
                      }),
                      vue.createElementVNode("div", {
                        class: vue.normalizeClass(vue.unref(ns).e("message"))
                      }, vue.toDisplayString(_ctx.message), 3)
                    ], 2)
                  ], 2),
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([vue.unref(ns).e("btns")])
                  }, [
                    _ctx.showConfirmButton ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: vue.normalizeClass([vue.unref(ns).e("confirm")]),
                      onClick: _cache[1] || (_cache[1] = ($event) => doClose("confirm"))
                    }, [
                      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.confirmButtonText), 1)
                    ], 2)) : vue.createCommentVNode("v-if", true),
                    _ctx.showCancelButton ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 1,
                      type: "button",
                      class: vue.normalizeClass([vue.unref(ns).e("cancel")]),
                      onClick: _cache[2] || (_cache[2] = ($event) => doClose("cancel"))
                    }, [
                      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.cancelButtonText), 1)
                    ], 2)) : vue.createCommentVNode("v-if", true)
                  ], 2)
                ], 2)
              ], 2)
            ]),
            _: 1
          }, 8, ["mask", "overlay-class"]), [
            [vue.vShow, visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
