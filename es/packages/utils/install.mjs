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

export { withInstall, withInstallFunction };
//# sourceMappingURL=install.mjs.map
