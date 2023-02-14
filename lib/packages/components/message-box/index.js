'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var messageBox = require('./src/message-box.js');
var install = require('../../utils/install.js');

const AsMessageBox = install.withInstallFunction(messageBox.MessageBox, "$MessageBox");

exports.AsMessageBox = AsMessageBox;
exports.default = AsMessageBox;
//# sourceMappingURL=index.js.map
