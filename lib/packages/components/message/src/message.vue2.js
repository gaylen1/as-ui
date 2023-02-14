'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var common = require('./common.js');
var bem = require('../../../utils/bem.js');
var core = require('@vueuse/core');
var instance = require('./instance.js');
var icon = require('../../icon/src/icon.vue.js');

const _hoisted_1 = ["id"];
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["onClick"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "message",
  props: common.messageProps,
  emits: ["destroy"],
  setup(__props, { expose }) {
    const props = __props;
    const ns = bem.useNamespace("message");
    const visible = vue.ref(false);
    const height = vue.ref(0);
    const messageRef = vue.ref();
    let stopTimer = void 0;
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = core.useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    const iconComponent = vue.computed(
      () => props.icon || common.iconMaps[props.type] || "success"
    );
    const lastOffset = vue.computed(() => instance.getLastOffset(props.id));
    const offset = vue.computed(() => props.offset + lastOffset.value);
    const bottom = vue.computed(() => height.value + offset.value);
    const customStyle = vue.computed(() => ({
      top: `${offset.value}px`
    }));
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    core.useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    vue.onMounted(() => {
      startTimer();
      visible.value = true;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: vue.unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: vue.normalizeClass([
              vue.unref(ns).b(),
              vue.unref(ns).m(_ctx.type),
              vue.unref(ns).is("center", _ctx.center),
              vue.unref(ns).is("showClose", _ctx.showClose)
            ]),
            style: vue.normalizeStyle(vue.unref(customStyle)),
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            vue.createVNode(icon.default, {
              class: vue.normalizeClass([vue.unref(iconComponent), vue.unref(ns).e("icon")])
            }, null, 8, ["class"]),
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (vue.openBlock(), vue.createElementBlock("p", {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("content"))
              }, vue.toDisplayString(_ctx.message), 3)) : (vue.openBlock(), vue.createElementBlock("p", {
                key: 1,
                class: vue.normalizeClass(vue.unref(ns).e("content")),
                innerHTML: _ctx.message
              }, null, 10, _hoisted_2))
            ]),
            _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).e("closeBtn")),
              onClick: vue.withModifiers(close, ["stop"])
            }, [
              vue.createVNode(icon.default, { class: "as-ui-chahao1" })
            ], 10, _hoisted_3)) : vue.createCommentVNode("v-if", true)
          ], 46, _hoisted_1), [
            [vue.vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=message.vue2.js.map
