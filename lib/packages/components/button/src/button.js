'use strict';

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

exports.buttonProps = buttonProps;
exports.buttonTypes = buttonTypes;
exports.componentSizes = componentSizes;
//# sourceMappingURL=button.js.map
