'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var install = require('../../utils/install.js');
var button$1 = require('./src/button.vue.js');
var button = require('./src/button.js');

const AsButton = install.withInstall(button$1.default);

exports.buttonProps = button.buttonProps;
exports.buttonTypes = button.buttonTypes;
exports.componentSizes = button.componentSizes;
exports.AsButton = AsButton;
exports.default = AsButton;
//# sourceMappingURL=index.js.map
