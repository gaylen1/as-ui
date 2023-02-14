'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var message$1 = require('./message.vue.js');
var instance = require('./instance.js');

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
      vue.render(null, container);
    }
  };
  const vnode = vue.createVNode(message$1.default, props);
  vue.render(vnode, container);
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
const closeMessage = (instance$1) => {
  const idx = instance.instances.indexOf(instance$1);
  if (idx === -1)
    return;
  instance.instances.splice(idx, 1);
  const { handler } = instance$1;
  handler.close();
};
const message = (options) => {
  const instance$1 = createMessage(options);
  instance.instances.push(instance$1);
  return instance$1.handler;
};

exports.default = message;
exports.message = message;
//# sourceMappingURL=message.js.map
