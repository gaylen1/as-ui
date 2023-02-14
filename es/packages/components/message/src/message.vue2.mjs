import { defineComponent, ref, computed, onMounted, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createVNode, renderSlot, createElementBlock, toDisplayString, withModifiers, createCommentVNode, vShow } from 'vue';
import { messageProps, iconMaps } from './common.mjs';
import { useNamespace } from '../../../utils/bem.mjs';
import { useTimeoutFn, useResizeObserver } from '@vueuse/core';
import { getLastOffset } from './instance.mjs';
import Icon from '../../icon/src/icon.vue.mjs';

const _hoisted_1 = ["id"];
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["onClick"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  name: "message",
  props: messageProps,
  emits: ["destroy"],
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("message");
    const visible = ref(false);
    const height = ref(0);
    const messageRef = ref();
    let stopTimer = void 0;
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    const iconComponent = computed(
      () => props.icon || iconMaps[props.type] || "success"
    );
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => props.offset + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`
    }));
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              unref(ns).m(_ctx.type),
              unref(ns).is("center", _ctx.center),
              unref(ns).is("showClose", _ctx.showClose)
            ]),
            style: normalizeStyle(unref(customStyle)),
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            createVNode(Icon, {
              class: normalizeClass([unref(iconComponent), unref(ns).e("icon")])
            }, null, 8, ["class"]),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(unref(ns).e("content")),
                innerHTML: _ctx.message
              }, null, 10, _hoisted_2))
            ]),
            _ctx.showClose ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, [
              createVNode(Icon, { class: "as-ui-chahao1" })
            ], 10, _hoisted_3)) : createCommentVNode("v-if", true)
          ], 46, _hoisted_1), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=message.vue2.mjs.map
