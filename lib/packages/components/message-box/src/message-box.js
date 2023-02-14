'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('./index.vue.js');

const MessageBox = (options) => {
  const container = document.createElement("div");
  const onDestory = () => {
    vue.render(null, container);
  };
  const { onUserCancel, onUserConfirm } = options;
  const props = {
    ...options,
    onDestory,
    onAction: (state) => {
      if (state === "confirm") {
        onUserConfirm == null ? void 0 : onUserConfirm();
      } else {
        onUserCancel == null ? void 0 : onUserCancel();
      }
    }
  };
  const vnode = vue.h(index.default, props);
  vue.render(vnode, container);
  document.body.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposeProxy.visible = false;
    }
  };
  const instance = {
    vm,
    vnode,
    handler,
    props: vnode.component.props
  };
  vm.exposeProxy.visible = true;
  return instance;
};

exports.MessageBox = MessageBox;
exports.default = MessageBox;
//# sourceMappingURL=message-box.js.map
