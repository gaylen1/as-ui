'use strict';

const defaultNamespace = "as";
const statePrefix = "is-";
function _bem(block, blockSuffix, element, modifier) {
  let cls = `${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}
function createBEM(block) {
  const b = (blockSuffix = "") => _bem(block, blockSuffix, "", "");
  const e = (element) => element ? _bem(block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  };
}
function useNamespace(name) {
  const prefixName = defaultNamespace + "-" + name;
  return createBEM(prefixName);
}

exports.defaultNamespace = defaultNamespace;
exports.useNamespace = useNamespace;
//# sourceMappingURL=bem.js.map
