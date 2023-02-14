'use strict';

var vue = require('vue');
var layerVue_es = require('../../../../node_modules/.pnpm/@layui_layer-vue@1.4.8/node_modules/@layui/layer-vue/lib/layer-vue.es.js');
var bem = require('../../../utils/bem.js');

const createContent = (component, props) => {
  return vue.h(component, props);
};
const showDialog = (content, options, callback) => {
  const ns = bem.useNamespace("dialog");
  const skinClass = ns.e("skin");
  const defaultOptions = {
    title: "\u5BF9\u8BDD\u6846",
    skin: skinClass,
    area: ["400px", "300px"],
    maxmin: true,
    btn: [
      {
        text: "\u786E\u8BA4",
        callback: (id) => {
          layerVue_es.layer.close(id);
        }
      },
      {
        text: "\u53D6\u6D88",
        callback: (id) => {
          layerVue_es.layer.close(id);
        }
      }
    ]
  };
  const __options = Object.assign(defaultOptions, options, { content });
  return layerVue_es.layer.open(__options, callback);
};

exports.createContent = createContent;
exports.showDialog = showDialog;
//# sourceMappingURL=dialog.js.map
