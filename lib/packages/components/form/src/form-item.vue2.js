'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var bem = require('../../../utils/bem.js');
var formItem = require('./form-item.js');

const __default__ = vue.defineComponent({
  name: "AsFormItem"
});
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: formItem.formItemProps,
  setup(__props) {
    const props = __props;
    console.log(formItem.formItemContextKey);
    const ns = bem.useNamespace("form-item");
    const validateState = vue.ref("");
    const validateMessage = vue.ref("\u6821\u9A8C\u5931\u8D25");
    const validate = async (trigger, callback) => {
      console.log("trigger=>", trigger);
    };
    const context = {
      ...props,
      validate
    };
    vue.provide(formItem.formItemContextKey, context);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).is("success", validateState.value === "success"),
          vue.unref(ns).is("error", validateState.value === "error")
        ])
      }, [
        vue.createElementVNode("label", {
          class: vue.normalizeClass(vue.unref(ns).e("label"))
        }, [
          vue.renderSlot(_ctx.$slots, "label", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ])
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("content"))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("error"))
          }, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createTextVNode(vue.toDisplayString(validateMessage.value), 1)
            ])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=form-item.vue2.js.map
