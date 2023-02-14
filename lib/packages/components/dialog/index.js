'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dialog = require('./src/dialog.js');
var install = require('../../utils/install.js');

const useShowDialog = install.withInstallFunction(dialog.showDialog, "$dialog");

exports.createContent = dialog.createContent;
exports.default = useShowDialog;
exports.useShowDialog = useShowDialog;
//# sourceMappingURL=index.js.map
