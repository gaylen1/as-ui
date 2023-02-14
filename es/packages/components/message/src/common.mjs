const definePropType = (val) => val;
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const messageProps = {
  id: {
    type: String,
    default: ""
  },
  message: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "success"
  },
  center: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3e3
  },
  showClose: {
    type: Boolean,
    default: false
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Number,
    default: 16
  },
  onClose: {
    type: Function,
    require: false
  },
  icon: {
    type: iconPropType,
    default: ""
  }
};
const iconMaps = {
  success: "as-ui-shenqingchenggong",
  error: "as-ui-quxiao"
};

export { definePropType, iconMaps, iconPropType, messageProps };
//# sourceMappingURL=common.mjs.map
