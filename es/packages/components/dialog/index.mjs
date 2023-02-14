import { showDialog } from './src/dialog.mjs';
export { createContent } from './src/dialog.mjs';
import { withInstallFunction } from '../../utils/install.mjs';

const useShowDialog = withInstallFunction(showDialog, "$dialog");

export { useShowDialog as default, useShowDialog };
//# sourceMappingURL=index.mjs.map
