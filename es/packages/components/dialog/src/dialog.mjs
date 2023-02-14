import { h } from 'vue';
import { layer } from '../../../../node_modules/.pnpm/@layui_layer-vue@1.4.8/node_modules/@layui/layer-vue/lib/layer-vue.es.mjs';
import { useNamespace } from '../../../utils/bem.mjs';

const createContent = (component, props) => {
  return h(component, props);
};
const showDialog = (content, options, callback) => {
  const ns = useNamespace("dialog");
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
          layer.close(id);
        }
      },
      {
        text: "\u53D6\u6D88",
        callback: (id) => {
          layer.close(id);
        }
      }
    ]
  };
  const __options = Object.assign(defaultOptions, options, { content });
  return layer.open(__options, callback);
};

export { createContent, showDialog };
//# sourceMappingURL=dialog.mjs.map
