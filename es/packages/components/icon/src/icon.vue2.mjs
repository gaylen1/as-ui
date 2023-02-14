import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot } from 'vue';
import { iconProps } from './icon.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  name: "icon",
  props: iconProps,
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...props.size ? { fontSize: props.size + "px" } : {},
        ...props.color ? { color: props.color } : {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: "as-ui-icons",
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=icon.vue2.mjs.map
