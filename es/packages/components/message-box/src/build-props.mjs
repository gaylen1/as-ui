const messageBoxProps = {
  title: {
    type: String,
    default: "\u8BF7\u9009\u62E9"
  },
  modal: {
    type: Boolean,
    default: true
  },
  message: {
    type: String,
    default: ""
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: "\u786E\u8BA4"
  },
  cancelButtonText: {
    type: String,
    default: "\u53D6\u6D88"
  },
  onDestory: {
    type: Function
  },
  onAction: {
    type: Function
  }
};

export { messageBoxProps };
//# sourceMappingURL=build-props.mjs.map
