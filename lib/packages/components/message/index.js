'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var message = require('./src/message.js');
var install = require('../../utils/install.js');

const AsMessage = install.withInstallFunction(message.message, "$message");

exports.AsMessage = AsMessage;
exports.default = AsMessage;
//# sourceMappingURL=index.js.map
