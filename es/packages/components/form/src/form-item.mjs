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

export { formItemContextKey, formItemProps, formItemValidateState };
//# sourceMappingURL=form-item.mjs.map
