'use strict';

const withInstall = (comp) => {
  ;
  comp.install = function(app) {
    app.component(comp.name, comp);
  };
  return comp;
};
const withInstallFunction = (fn, name) => {
  ;
  fn.install = (app) => {
    ;
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};

exports.withInstall = withInstall;
exports.withInstallFunction = withInstallFunction;
//# sourceMappingURL=install.js.map
