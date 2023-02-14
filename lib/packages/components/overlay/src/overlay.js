'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var bem = require('../../../utils/bem.js');
var utils = require('./utils.js');

const definePropType = (val) => val;
const overlayProps = {
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
};
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
var Overlay = vue.defineComponent({
  name: "AsOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = bem.useNamespace("overlay");
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = utils.useSameTarget(
      props.customMaskEvent ? void 0 : onMaskClick
    );
    return () => {
      return props.mask ? vue.createVNode(
        "div",
        {
          class: [ns.b(), props.overlayClass],
          style: {
            zIndex: props.zIndex
          },
          onClick,
          onMousedown,
          onMouseup
        },
        [vue.renderSlot(slots, "default")],
        4 | 2 | 8,
        ["onClick", "onMouseup", "onMousedown"]
      ) : vue.h(
        "div",
        {
          class: props.overlayClass,
          style: {
            zIndex: props.zIndex,
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px"
          }
        },
        [vue.renderSlot(slots, "default")]
      );
    };
  }
});

exports.default = Overlay;
exports.definePropType = definePropType;
exports.overlayEmits = overlayEmits;
exports.overlayProps = overlayProps;
//# sourceMappingURL=overlay.js.map
