'use strict';

const formItemValidateState = ["success", "error", ""];
const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array],
  showMessage: {
    type: Boolean,
    default: true
  }
};
const formItemContextKey = Symbol("formItemContextKey");

exports.formItemContextKey = formItemContextKey;
exports.formItemProps = formItemProps;
exports.formItemValidateState = formItemValidateState;
//# sourceMappingURL=form-item.js.map
