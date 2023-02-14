import { render, createVNode } from 'vue';
import Message from './message.vue.mjs';
import { instances } from './instance.mjs';

let seed = 1;
const createMessage = (options) => {
  const id = `message_${seed++}`;
  const container = document.createElement("div");
  const userOnClose = options.onClose;
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(Message, props);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposeProxy.visible = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1)
    return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const message = (options) => {
  const instance = createMessage(options);
  instances.push(instance);
  return instance.handler;
};

export { message as default, message };
//# sourceMappingURL=message.mjs.map
