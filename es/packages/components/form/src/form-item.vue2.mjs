import { defineComponent, ref, provide, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { useNamespace } from '../../../utils/bem.mjs';
import { formItemProps, formItemContextKey } from './form-item.mjs';

const __default__ = defineComponent({
  name: "AsFormItem"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: formItemProps,
  setup(__props) {
    const props = __props;
    console.log(formItemContextKey);
    const ns = useNamespace("form-item");
    const validateState = ref("");
    const validateMessage = ref("\u6821\u9A8C\u5931\u8D25");
    const validate = async (trigger, callback) => {
      console.log("trigger=>", trigger);
    };
    const context = {
      ...props,
      validate
    };
    provide(formItemContextKey, context);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("success", validateState.value === "success"),
          unref(ns).is("error", validateState.value === "error")
        ])
      }, [
        createElementVNode("label", {
          class: normalizeClass(unref(ns).e("label"))
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default"),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("error"))
          }, [
            renderSlot(_ctx.$slots, "error", {}, () => [
              createTextVNode(toDisplayString(validateMessage.value), 1)
            ])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=form-item.vue2.mjs.map
