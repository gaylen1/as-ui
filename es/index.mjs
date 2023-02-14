import installer from './defaults.mjs';
export { default } from './defaults.mjs';
import './packages/constants/index.mjs';
import './packages/components/index.mjs';
export { makeInstaller } from './make-installer.mjs';
export { INSTALLED_KEY } from './packages/constants/key.mjs';
export { AsMessage } from './packages/components/message/index.mjs';
export { AsMessageBox } from './packages/components/message-box/index.mjs';
export { buttonProps, buttonTypes, componentSizes } from './packages/components/button/src/button.mjs';
export { AsButton } from './packages/components/button/index.mjs';
export { useShowDialog } from './packages/components/dialog/index.mjs';
export { createContent } from './packages/components/dialog/src/dialog.mjs';
export { AsIcon } from './packages/components/icon/index.mjs';
export { definePropType, overlayEmits, overlayProps } from './packages/components/overlay/src/overlay.mjs';
export { AsOverlay } from './packages/components/overlay/index.mjs';

const install = installer.install;
const version = installer.version;

export { install, version };
//# sourceMappingURL=index.mjs.map
