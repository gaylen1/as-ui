import { defineComponent, ref, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createVNode, createElementVNode, normalizeClass, toDisplayString, createElementBlock, createCommentVNode, vShow } from 'vue';
import { messageBoxProps } from './build-props.mjs';
import { useNamespace } from '../../../utils/bem.mjs';
import Icon from '../../icon/src/icon.vue.mjs';
import { AsOverlay } from '../../overlay/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: messageBoxProps,
  emits: ["action", "destory"],
  setup(__props, { expose, emit: emits }) {
    const ns = useNamespace("message-box");
    const visible = ref(false);
    const doClose = (state) => {
      visible.value = false;
      emits("action", state);
    };
    expose({
      visible
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onAfterLeave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("destory")),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(unref(AsOverlay), {
            mask: _ctx.modal,
            "overlay-class": [unref(ns).is("message-box")]
          }, {
            default: withCtx(() => [
              createElementVNode("div", {
                class: normalizeClass([unref(ns).b("overlay")])
              }, [
                createElementVNode("div", {
                  class: normalizeClass([unref(ns).b()])
                }, [
                  createElementVNode("div", {
                    class: normalizeClass([unref(ns).e("header")])
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass([unref(ns).e("title")])
                    }, [
                      createElementVNode("span", null, toDisplayString(_ctx.title), 1)
                    ], 2),
                    createElementVNode("div", {
                      class: normalizeClass(unref(ns).e("headerbtn")),
                      onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
                    }, [
                      createVNode(Icon, {
                        class: normalizeClass(["as-ui-chahao1"])
                      })
                    ], 2)
                  ], 2),
                  createElementVNode("div", {
                    class: normalizeClass([unref(ns).e("content")])
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass([unref(ns).e("container")])
                    }, [
                      createVNode(Icon, {
                        class: normalizeClass(["as-ui-shenqingchenggong"])
                      }),
                      createElementVNode("div", {
                        class: normalizeClass(unref(ns).e("message"))
                      }, toDisplayString(_ctx.message), 3)
                    ], 2)
                  ], 2),
                  createElementVNode("div", {
                    class: normalizeClass([unref(ns).e("btns")])
                  }, [
                    _ctx.showConfirmButton ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: normalizeClass([unref(ns).e("confirm")]),
                      onClick: _cache[1] || (_cache[1] = ($event) => doClose("confirm"))
                    }, [
                      createElementVNode("span", null, toDisplayString(_ctx.confirmButtonText), 1)
                    ], 2)) : createCommentVNode("v-if", true),
                    _ctx.showCancelButton ? (openBlock(), createElementBlock("button", {
                      key: 1,
                      type: "button",
                      class: normalizeClass([unref(ns).e("cancel")]),
                      onClick: _cache[2] || (_cache[2] = ($event) => doClose("cancel"))
                    }, [
                      createElementVNode("span", null, toDisplayString(_ctx.cancelButtonText), 1)
                    ], 2)) : createCommentVNode("v-if", true)
                  ], 2)
                ], 2)
              ], 2)
            ]),
            _: 1
          }, 8, ["mask", "overlay-class"]), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
