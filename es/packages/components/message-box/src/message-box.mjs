import { render, h } from 'vue';
import MessageBoxConstructor from './index.vue.mjs';

const MessageBox = (options) => {
  const container = document.createElement("div");
  const onDestory = () => {
    render(null, container);
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
  const vnode = h(MessageBoxConstructor, props);
  render(vnode, container);
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

export { MessageBox, MessageBox as default };
//# sourceMappingURL=message-box.mjs.map
