import { defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, createElementVNode, renderSlot } from 'vue';
import { useNamespace } from '../../../utils/bem.mjs';
import { buttonProps } from './button.mjs';

const __default__ = defineComponent({
  name: "AsButton",
  inheritAttrs: false
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("button");
    const _type = computed(() => props.type || "");
    const _size = computed(() => props.size || "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", mergeProps({
        class: [unref(ns).b(), unref(ns).m(unref(_type)), unref(ns).m(unref(_size)), unref(ns).is("round", _ctx.round)]
      }, _ctx.$attrs), [
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=button.vue2.mjs.map
