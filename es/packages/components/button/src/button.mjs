const buttonTypes = ["primary", "warning", "danger"];
const componentSizes = [
  "",
  "default",
  "small",
  "large",
  "useSize"
];
const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  round: {
    type: Boolean,
    default: false
  }
};

export { buttonProps, buttonTypes, componentSizes };
//# sourceMappingURL=button.mjs.map
