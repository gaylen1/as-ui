'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var bem = require('../../../utils/bem.js');
var button = require('./button.js');

const __default__ = vue.defineComponent({
  name: "AsButton",
  inheritAttrs: false
});
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: button.buttonProps,
  setup(__props) {
    const props = __props;
    const ns = bem.useNamespace("button");
    const _type = vue.computed(() => props.type || "");
    const _size = vue.computed(() => props.size || "");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", vue.mergeProps({
        class: [vue.unref(ns).b(), vue.unref(ns).m(vue.unref(_type)), vue.unref(ns).m(vue.unref(_size)), vue.unref(ns).is("round", _ctx.round)]
      }, _ctx.$attrs), [
        vue.createElementVNode("span", null, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 16);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=button.vue2.js.map
