'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaults = require('./defaults.js');
require('./packages/constants/index.js');
require('./packages/components/index.js');
var makeInstaller = require('./make-installer.js');
var key = require('./packages/constants/key.js');
var index = require('./packages/components/message/index.js');
var index$1 = require('./packages/components/message-box/index.js');
var button = require('./packages/components/button/src/button.js');
var index$2 = require('./packages/components/button/index.js');
var index$3 = require('./packages/components/dialog/index.js');
var dialog = require('./packages/components/dialog/src/dialog.js');
var index$4 = require('./packages/components/icon/index.js');
var overlay = require('./packages/components/overlay/src/overlay.js');
var index$5 = require('./packages/components/overlay/index.js');

const install = defaults.default.install;
const version = defaults.default.version;

exports.default = defaults.default;
exports.makeInstaller = makeInstaller.makeInstaller;
exports.INSTALLED_KEY = key.INSTALLED_KEY;
exports.AsMessage = index.AsMessage;
exports.AsMessageBox = index$1.AsMessageBox;
exports.buttonProps = button.buttonProps;
exports.buttonTypes = button.buttonTypes;
exports.componentSizes = button.componentSizes;
exports.AsButton = index$2.AsButton;
exports.useShowDialog = index$3.useShowDialog;
exports.createContent = dialog.createContent;
exports.AsIcon = index$4.AsIcon;
exports.definePropType = overlay.definePropType;
exports.overlayEmits = overlay.overlayEmits;
exports.overlayProps = overlay.overlayProps;
exports.AsOverlay = index$5.AsOverlay;
exports.install = install;
exports.version = version;
//# sourceMappingURL=index.js.map
