'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var icon = require('./icon.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "icon",
  props: icon.iconProps,
  setup(__props) {
    const props = __props;
    const style = vue.computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...props.size ? { fontSize: props.size + "px" } : {},
        ...props.color ? { color: props.color } : {}
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", {
        class: "as-ui-icons",
        style: vue.normalizeStyle(vue.unref(style))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=icon.vue2.js.map
