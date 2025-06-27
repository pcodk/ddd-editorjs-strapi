"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const React = require("react");
const reactIntl = require("react-intl");
const admin = require("@strapi/strapi/admin");
const ReactDOM = require("react-dom");
const index = require("./index-Dx7Kjydl.js");
const EditorJS = require("@editorjs/editorjs");
const VocabularyAutocomplete = require("editorjs-vocabularytune");
const styled = require("styled-components");
const CheckList = require("@editorjs/checklist");
const Code = require("@editorjs/code");
const Delimiter = require("@editorjs/delimiter");
const Embed = require("@editorjs/embed");
const Header = require("@editorjs/header");
const InlineCode = require("@editorjs/inline-code");
const LinkTool = require("@editorjs/link");
const Paragraph = require("@editorjs/paragraph");
const Marker = require("@editorjs/marker");
const NestedList = require("@editorjs/nested-list");
const Quote = require("@editorjs/quote");
const Raw = require("@editorjs/raw");
const Table = require("@editorjs/table");
const Warning = require("@editorjs/warning");
const AttachesTool = require("@editorjs/attaches");
const Image = require("@editorjs/image");
const axios = require("axios");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const ReactDOM__default = /* @__PURE__ */ _interopDefault(ReactDOM);
const EditorJS__default = /* @__PURE__ */ _interopDefault(EditorJS);
const VocabularyAutocomplete__default = /* @__PURE__ */ _interopDefault(VocabularyAutocomplete);
const styled__default = /* @__PURE__ */ _interopDefault(styled);
const CheckList__default = /* @__PURE__ */ _interopDefault(CheckList);
const Code__default = /* @__PURE__ */ _interopDefault(Code);
const Delimiter__default = /* @__PURE__ */ _interopDefault(Delimiter);
const Embed__default = /* @__PURE__ */ _interopDefault(Embed);
const Header__default = /* @__PURE__ */ _interopDefault(Header);
const InlineCode__default = /* @__PURE__ */ _interopDefault(InlineCode);
const LinkTool__default = /* @__PURE__ */ _interopDefault(LinkTool);
const Paragraph__default = /* @__PURE__ */ _interopDefault(Paragraph);
const Marker__default = /* @__PURE__ */ _interopDefault(Marker);
const NestedList__default = /* @__PURE__ */ _interopDefault(NestedList);
const Quote__default = /* @__PURE__ */ _interopDefault(Quote);
const Raw__default = /* @__PURE__ */ _interopDefault(Raw);
const Table__default = /* @__PURE__ */ _interopDefault(Table);
const Warning__default = /* @__PURE__ */ _interopDefault(Warning);
const AttachesTool__default = /* @__PURE__ */ _interopDefault(AttachesTool);
const Image__default = /* @__PURE__ */ _interopDefault(Image);
const axios__default = /* @__PURE__ */ _interopDefault(axios);
var shim = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production;
function requireUseSyncExternalStoreShim_production() {
  if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
  hasRequiredUseSyncExternalStoreShim_production = 1;
  var React2 = React__namespace.default;
  function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React2.useState, useEffect = React2.useEffect, useLayoutEffect = React2.useLayoutEffect, useDebugValue = React2.useDebugValue;
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe, value, getSnapshot]
    );
    useEffect(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe]
    );
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  var shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React2.useSyncExternalStore ? React2.useSyncExternalStore : shim2;
  return useSyncExternalStoreShim_production;
}
var useSyncExternalStoreShim_development = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_development;
function requireUseSyncExternalStoreShim_development() {
  if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
  hasRequiredUseSyncExternalStoreShim_development = 1;
  "production" !== process.env.NODE_ENV && function() {
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      didWarnOld18Alpha || void 0 === React2.startTransition || (didWarnOld18Alpha = true, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var value = getSnapshot();
      if (!didWarnUncachedGetSnapshot) {
        var cachedValue = getSnapshot();
        objectIs(value, cachedValue) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), didWarnUncachedGetSnapshot = true);
      }
      cachedValue = useState({
        inst: { value, getSnapshot }
      });
      var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
      useLayoutEffect(
        function() {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        },
        [subscribe, value, getSnapshot]
      );
      useEffect(
        function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          });
        },
        [subscribe]
      );
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React2 = React__namespace.default, objectIs = "function" === typeof Object.is ? Object.is : is, useState = React2.useState, useEffect = React2.useEffect, useLayoutEffect = React2.useLayoutEffect, useDebugValue = React2.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    useSyncExternalStoreShim_development.useSyncExternalStore = void 0 !== React2.useSyncExternalStore ? React2.useSyncExternalStore : shim2;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }();
  return useSyncExternalStoreShim_development;
}
if (process.env.NODE_ENV === "production") {
  shim.exports = requireUseSyncExternalStoreShim_production();
} else {
  shim.exports = requireUseSyncExternalStoreShim_development();
}
var shimExports = shim.exports;
var withSelector = { exports: {} };
var withSelector_production = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_production;
function requireWithSelector_production() {
  if (hasRequiredWithSelector_production) return withSelector_production;
  hasRequiredWithSelector_production = 1;
  var React2 = React__namespace.default, shim2 = shimExports;
  function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim2.useSyncExternalStore, useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
  withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue(value);
    return value;
  };
  return withSelector_production;
}
var withSelector_development = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_development;
function requireWithSelector_development() {
  if (hasRequiredWithSelector_development) return withSelector_development;
  hasRequiredWithSelector_development = 1;
  "production" !== process.env.NODE_ENV && function() {
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React2 = React__namespace.default, shim2 = shimExports, objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim2.useSyncExternalStore, useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
    withSelector_development.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot))
              return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }();
  return withSelector_development;
}
if (process.env.NODE_ENV === "production") {
  withSelector.exports = requireWithSelector_production();
} else {
  withSelector.exports = requireWithSelector_development();
}
var withSelectorExports = withSelector.exports;
const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  var _gT$ContextKey;
  if (!React__namespace.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
  let realContext = contextMap.get(React__namespace.createContext);
  if (!realContext) {
    realContext = React__namespace.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      realContext.displayName = "ReactRedux";
    }
    contextMap.set(React__namespace.createContext, realContext);
  }
  return realContext;
}
const ReactReduxContext = /* @__PURE__ */ getContext();
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    if (process.env.NODE_ENV !== "production" && !contextValue) {
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    }
    return contextValue;
  };
}
const useReduxContext = /* @__PURE__ */ createReduxContextHook();
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
const refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector2(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = void 0,
      noopCheck = void 0
    } = typeof equalityFnOrOptions === "function" ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;
    if (process.env.NODE_ENV !== "production") {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext$1();
    const firstRun = React.useRef(true);
    const wrappedSelector = React.useCallback({
      [selector.name](state) {
        const selected = selector(state);
        if (process.env.NODE_ENV !== "production") {
          const finalStabilityCheck = typeof stabilityCheck === "undefined" ? globalStabilityCheck : stabilityCheck;
          if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
            const toCompare = selector(state);
            if (!equalityFn(selected, toCompare)) {
              let stack = void 0;
              try {
                throw new Error();
              } catch (e) {
                ({
                  stack
                } = e);
              }
              console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
                state,
                selected,
                selected2: toCompare,
                stack
              });
            }
          }
          const finalNoopCheck = typeof noopCheck === "undefined" ? globalNoopCheck : noopCheck;
          if (finalNoopCheck === "always" || finalNoopCheck === "once" && firstRun.current) {
            if (selected === state) {
              let stack = void 0;
              try {
                throw new Error();
              } catch (e) {
                ({
                  stack
                } = e);
              }
              console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.", {
                stack
              });
            }
          }
          if (firstRun.current) firstRun.current = false;
        }
        return selected;
      }
    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    React.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min$1;
function requireReactIs_production_min$1() {
  if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
  hasRequiredReactIs_production_min$1 = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min$1.AsyncMode = l;
  reactIs_production_min$1.ConcurrentMode = m;
  reactIs_production_min$1.ContextConsumer = k;
  reactIs_production_min$1.ContextProvider = h;
  reactIs_production_min$1.Element = c;
  reactIs_production_min$1.ForwardRef = n;
  reactIs_production_min$1.Fragment = e;
  reactIs_production_min$1.Lazy = t;
  reactIs_production_min$1.Memo = r;
  reactIs_production_min$1.Portal = d;
  reactIs_production_min$1.Profiler = g;
  reactIs_production_min$1.StrictMode = f;
  reactIs_production_min$1.Suspense = p;
  reactIs_production_min$1.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min$1.isConcurrentMode = A;
  reactIs_production_min$1.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min$1.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min$1.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min$1.isForwardRef = function(a) {
    return z(a) === n;
  };
  reactIs_production_min$1.isFragment = function(a) {
    return z(a) === e;
  };
  reactIs_production_min$1.isLazy = function(a) {
    return z(a) === t;
  };
  reactIs_production_min$1.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min$1.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min$1.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min$1.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min$1.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min$1.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min$1.typeOf = z;
  return reactIs_production_min$1;
}
var reactIs_development$1 = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
  if (hasRequiredReactIs_development$1) return reactIs_development$1;
  hasRequiredReactIs_development$1 = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development$1.AsyncMode = AsyncMode;
      reactIs_development$1.ConcurrentMode = ConcurrentMode;
      reactIs_development$1.ContextConsumer = ContextConsumer;
      reactIs_development$1.ContextProvider = ContextProvider;
      reactIs_development$1.Element = Element;
      reactIs_development$1.ForwardRef = ForwardRef;
      reactIs_development$1.Fragment = Fragment;
      reactIs_development$1.Lazy = Lazy;
      reactIs_development$1.Memo = Memo;
      reactIs_development$1.Portal = Portal;
      reactIs_development$1.Profiler = Profiler;
      reactIs_development$1.StrictMode = StrictMode;
      reactIs_development$1.Suspense = Suspense;
      reactIs_development$1.isAsyncMode = isAsyncMode;
      reactIs_development$1.isConcurrentMode = isConcurrentMode;
      reactIs_development$1.isContextConsumer = isContextConsumer;
      reactIs_development$1.isContextProvider = isContextProvider;
      reactIs_development$1.isElement = isElement;
      reactIs_development$1.isForwardRef = isForwardRef;
      reactIs_development$1.isFragment = isFragment;
      reactIs_development$1.isLazy = isLazy;
      reactIs_development$1.isMemo = isMemo;
      reactIs_development$1.isPortal = isPortal;
      reactIs_development$1.isProfiler = isProfiler;
      reactIs_development$1.isStrictMode = isStrictMode;
      reactIs_development$1.isSuspense = isSuspense;
      reactIs_development$1.isValidElementType = isValidElementType;
      reactIs_development$1.typeOf = typeOf;
    })();
  }
  return reactIs_development$1;
}
if (process.env.NODE_ENV === "production") {
  reactIs$1.exports = requireReactIs_production_min$1();
} else {
  reactIs$1.exports = requireReactIs_development$1();
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
  u = Symbol.for("react.module.reference");
  function v(a) {
    if ("object" === typeof a && null !== a) {
      var r = a.$$typeof;
      switch (r) {
        case b:
          switch (a = a.type, a) {
            case d:
            case f:
            case e:
            case m:
            case n:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case h:
                case l:
                case q:
                case p:
                case g:
                  return a;
                default:
                  return r;
              }
          }
        case c:
          return r;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q;
  reactIs_production_min.Memo = p;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f;
  reactIs_production_min.StrictMode = e;
  reactIs_production_min.Suspense = m;
  reactIs_production_min.SuspenseList = n;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return v(a) === h;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return v(a) === g;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return v(a) === l;
  };
  reactIs_production_min.isFragment = function(a) {
    return v(a) === d;
  };
  reactIs_production_min.isLazy = function(a) {
    return v(a) === q;
  };
  reactIs_production_min.isMemo = function(a) {
    return v(a) === p;
  };
  reactIs_production_min.isPortal = function(a) {
    return v(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return v(a) === f;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return v(a) === e;
  };
  reactIs_production_min.isSuspense = function(a) {
    return v(a) === m;
  };
  reactIs_production_min.isSuspenseList = function(a) {
    return v(a) === n;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  return reactIs_production_min;
}
var reactIs_development = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_SERVER_CONTEXT_TYPE:
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      function isSuspenseList(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      }
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.SuspenseList = SuspenseList;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isSuspenseList = isSuspenseList;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
if (process.env.NODE_ENV === "production") {
  requireReactIs_production_min();
} else {
  requireReactIs_development();
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useReduxContext : (
      // @ts-ignore
      createReduxContextHook(context)
    )
  );
  return function useStore2() {
    const {
      store
    } = useReduxContext$1();
    return store;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useStore : createStoreHook(context)
  );
  return function useDispatch2() {
    const store = useStore$1();
    return store.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
const usePluginConfig = () => {
  const dispatch = useDispatch();
  const fetchClient = admin.useFetchClient();
  const { toggleNotification } = admin.useNotification();
  const { config, isLoading } = useSelector((state) => state[`${index.PLUGIN_ID}_config`]);
  React.useEffect(() => {
    if (!isLoading && !!config) {
      return;
    }
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const endpoint = `/${index.PLUGIN_ID}/config`;
        const { data } = await fetchClient.get(endpoint, {
          signal: abortController.signal
        });
        return data ?? {};
      } catch (err) {
        if (!abortController.signal.aborted) {
          toggleNotification({
            type: "danger",
            message: "notification.error"
            //review
          });
          return err;
        }
      }
    };
    fetchData().then((data) => dispatch({ type: index.RESOLVE_CONFIG, data }));
    return () => abortController.abort();
  }, [dispatch, fetchClient, toggleNotification]);
  return { config, isLoading };
};
class HeaderOne {
  nodes = { holder: null, data: null };
  static get toolbox() {
    return {
      title: "H1x",
      icon: '<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-230.39 -230.39 921.55 921.55" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/> </g></svg>'
    };
  }
  constructor({ data }) {
    this.nodes.data = data || null;
  }
  render() {
    const rootNode = document.createElement("div");
    this.nodes.holder = rootNode;
    const onDataChange = (newText) => {
      this.nodes.data = { text: newText };
    };
    ReactDOM__default.default.render(
      /* @__PURE__ */ jsxRuntime.jsx(Btn$1, { onDataChange, data: this.nodes.data?.text ?? null }),
      this.nodes.holder
    );
    return this.nodes.holder;
  }
  save() {
    return this.nodes.data;
  }
}
function Btn$1({ onDataChange, data }) {
  const handleChangeValue = (val) => {
    onDataChange(val);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        borderRadius: "4px",
        border: "1px solid #ccc",
        paddingLeft: "8px",
        paddingTop: "8px",
        paddingRight: "8px",
        marginTop: "2px",
        marginBottom: "2px"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("h4", { children: "H1x" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              gap: "8px"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                type: "text",
                placeholder: "Overskrift",
                defaultValue: data || "",
                onChange: (e) => handleChangeValue(e.target.value),
                style: {
                  margin: "8px 0",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%"
                }
              }
            )
          }
        )
      ]
    }
  );
}
const customTools = (options = {}, config = {}) => {
  return {
    ...options.header ? {
      header: {
        class: Header__default.default,
        ...config.header ? config.header : {}
      }
    } : {},
    paragraph: {
      class: Paragraph__default.default,
      ...config.paragraph ? config.paragraph : {}
    },
    ...options.list ? {
      list: {
        class: NestedList__default.default,
        inlineToolbar: true,
        config: {
          defaultStyle: "ordered"
        },
        ...config.list ? config.list : {}
      }
    } : {},
    ...options.checklist ? {
      checklist: {
        class: CheckList__default.default,
        ...config.checklist ? config.checklist : {}
      }
    } : {},
    ...options.embed ? {
      embed: {
        class: Embed__default.default,
        ...config.embed ? config.embed : {}
      }
    } : {},
    ...options.table ? {
      table: {
        class: Table__default.default,
        ...config.table ? config.table : {}
      }
    } : {},
    ...options.warning ? {
      warning: {
        class: Warning__default.default,
        ...config.warning ? config.warning : {}
      }
    } : {},
    ...options.code ? {
      code: {
        class: Code__default.default,
        ...config.code ? config.code : {}
      }
    } : {},
    ...options.link_tool ? {
      link_tool: {
        class: LinkTool__default.default,
        ...config.link_tool ? config.link_tool : {}
      }
    } : {},
    ...options.raw ? {
      raw: {
        class: Raw__default.default,
        ...config.raw ? config.raw : {}
      }
    } : {},
    ...options.quote ? {
      quote: {
        class: Quote__default.default,
        ...config.quote ? config.quote : {}
      }
    } : {},
    ...options.marker ? {
      marker: {
        class: Marker__default.default,
        ...config.marker ? config.marker : {}
      }
    } : {},
    ...options.delimiter ? {
      delimiter: {
        class: Delimiter__default.default,
        ...config.delimiter ? config.delimiter : {}
      }
    } : {},
    ...options.inlineCode ? {
      inlineCode: {
        class: InlineCode__default.default,
        ...config.inlineCode ? config.inlineCode : {}
      }
    } : {},
    ...options.h_one ? {
      h_one: {
        class: HeaderOne,
        ...config.h_one ? config.h_one : {}
      }
    } : {}
  };
};
const requiredTools = {
  image: {
    class: Image__default.default,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      endpoints: {
        byUrl: `/api/${index.PLUGIN_ID}/image/byUrl`
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);
          const { data } = await axios__default.default.post(`/api/${index.PLUGIN_ID}/image/byFile`, formData);
          return data;
        }
      }
    }
  },
  attaches: {
    class: AttachesTool__default.default,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      endpoints: {
        byUrl: `/api/${index.PLUGIN_ID}/image/byUrl`
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);
          const { data } = await axios__default.default.post(`/api/${index.PLUGIN_ID}/image/byFile`, formData);
          return data;
        }
      }
    }
  }
};
class MediaLibAdapter {
  api;
  config;
  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"></rect><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"></path></svg>'
    };
  }
  constructor({ api, config }) {
    this.api = api;
    this.config = config || {};
  }
  render() {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();
    if (this.config.mediaLibToggleFunc) {
      this.config.mediaLibToggleFunc(currentIndex);
    }
    return document.createElement("p");
  }
  save() {
    return {
      name: "mediaLibraryStrapi"
    };
  }
}
class MediaLibAttachesAdapter {
  api;
  config;
  static get toolbox() {
    return {
      title: "Attachment",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"></path></svg>'
    };
  }
  constructor({ api, config }) {
    this.api = api;
    this.config = config || {};
  }
  render() {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();
    if (this.config.mediaLibAttachesToggleFunc) {
      this.config.mediaLibAttachesToggleFunc(currentIndex);
    }
    return document.createElement("p");
  }
  save() {
    return {
      name: "mediaLibraryAttachesStrapi"
    };
  }
}
function prefixFileUrlWithBackendUrl(fileURL) {
  return !!fileURL && fileURL.startsWith("/") ? `${window.strapi.backendURL}${fileURL}` : fileURL;
}
const MediaLibComponent = ({
  isOpen,
  onChange,
  onToggle,
  allowedTypes
}) => {
  const { components } = admin.useStrapiApp("library", (app) => app);
  const [data, setData] = React__namespace.useState(null);
  const MediaLibraryDialog = components["media-library"];
  const handleInputChange = (files) => {
    if (files) {
      setData(files);
    }
  };
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      width: f.width,
      height: f.height,
      size: f.size,
      mime: f.mime,
      formats: f.formats
    }));
    onChange(formattedFiles);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    MediaLibraryDialog,
    {
      allowedTypes,
      onClose: onToggle,
      onInputMediaChange: handleInputChange,
      onSelectAssets: handleSelectAssets
    }
  );
};
const getToggleFunc = ({
  openStateSetter,
  indexStateSetter
}) => {
  return (idx) => {
    if (idx || idx === 0) {
      indexStateSetter(idx);
    }
    openStateSetter((prev) => !prev);
  };
};
const changeFunc = ({ indexStateSetter, editor, data, index: index2 }) => {
  let insertedBlocksCount = 0;
  data.forEach((entry) => {
    if (!entry.mime.includes("image")) {
      return;
    }
    const newBlockType = "image";
    const newBlockData = {
      file: {
        url: entry.url.replace(window.location.origin, ""),
        mime: entry.mime,
        height: entry.height,
        width: entry.width,
        size: entry.size,
        alt: entry.alt,
        formats: entry.formats
      },
      caption: "",
      withBorder: false,
      withBackground: false,
      stretched: false
    };
    editor.blocks.insert(newBlockType, newBlockData, {}, index2 + insertedBlocksCount, true);
    insertedBlocksCount++;
  });
  editor.blocks.delete(index2 + insertedBlocksCount);
  indexStateSetter(-1);
};
const changeFuncAttaches = ({
  indexStateSetter,
  editor,
  data,
  index: index2
}) => {
  let insertedBlocksCount = 0;
  data.forEach((entry) => {
    const newBlockType = "attaches";
    const newBlockData = {
      file: {
        url: entry.url.replace(window.location.origin, ""),
        size: entry.size * 1024,
        name: entry.name,
        extension: entry.ext
      },
      caption: "",
      title: entry.alt
    };
    editor.blocks.insert(newBlockType, newBlockData, {}, index2 + insertedBlocksCount, true);
    insertedBlocksCount++;
  });
  editor.blocks.delete(index2 + insertedBlocksCount);
  indexStateSetter(-1);
};
const EMOJI_LIST = [
  "⁉",
  "‼",
  "🔠",
  "🔡",
  "🔤",
  "☀",
  "☁",
  "☂",
  "☃",
  "★",
  "☆",
  "☎",
  "☐",
  "☑",
  "☒",
  "☕",
  "☜",
  "☝",
  "☞",
  "☟",
  "☠",
  "☹",
  "☺",
  "☼",
  "♨",
  "⚙",
  "⚠",
  "⚡",
  "⚽",
  "⚾",
  "⛔",
  "✂",
  "✄",
  "✅",
  "✉",
  "✊",
  "✋",
  "✌",
  "✎",
  "✏",
  "✐",
  "✑",
  "✒",
  "✓",
  "✔",
  "✕",
  "✖",
  "✗",
  "✘",
  "✨",
  "❌",
  "❎",
  "❓",
  "❔",
  "❕",
  "❗",
  "❣",
  "❤",
  "🆑",
  "🆒",
  "🆓",
  "🆔",
  "🆕",
  "🆖",
  "🆗",
  "🆘",
  "🆙",
  "🆚",
  "⏺",
  "⏬",
  "⏪",
  "⏮",
  "⏩",
  "⏭",
  "⏯",
  "⏹",
  "⏫",
  "⏸",
  "🌀",
  "🌈",
  "🌐",
  "🌞",
  "🌟",
  "🌸",
  "🌼",
  "🍀",
  "🍄",
  "🍅",
  "🍇",
  "🍉",
  "🍋",
  "🍌",
  "🍎",
  "🍏",
  "🍐",
  "🍒",
  "🍓",
  "🍔",
  "🍕",
  "🍦",
  "🍩",
  "🍭",
  "🍷",
  "🍸",
  "🍺",
  "🍻",
  "🎀",
  "🎁",
  "🎈",
  "🎉",
  "🎌",
  "🎖",
  "🎯",
  "🎱",
  "🎵",
  "🎶",
  "🎾",
  "🏀",
  "🏅",
  "🏆",
  "🐌",
  "🐔",
  "🐙",
  "🐛",
  "🐭",
  "🐯",
  "🐰",
  "🐱",
  "🐵",
  "🐶",
  "🐷",
  "🐸",
  "🐹",
  "🐻",
  "🐼",
  "👀",
  "👁",
  "👆",
  "👇",
  "👈",
  "👉",
  "👊",
  "👋",
  "👌",
  "👍",
  "👎",
  "👏",
  "👐",
  "👓",
  "👹",
  "👺",
  "👻",
  "👽",
  "👾",
  "👿",
  "💀",
  "💌",
  "💓",
  "💔",
  "💕",
  "💖",
  "💗",
  "💘",
  "💙",
  "💚",
  "💛",
  "💜",
  "💝",
  "💞",
  "💡",
  "💤",
  "💥",
  "💦",
  "💧",
  "💨",
  "💩",
  "💪",
  "💫",
  "💬",
  "💭",
  "💯",
  "💰",
  "💲",
  "💳",
  "💴",
  "💵",
  "💶",
  "💷",
  "💻",
  "💾",
  "📁",
  "📂",
  "📄",
  "📌",
  "📍",
  "📎",
  "📒",
  "📤",
  "📥",
  "📦",
  "📧",
  "📨",
  "📩",
  "📶",
  "🔀",
  "🔁",
  "🔂",
  "🔃",
  "🔄",
  "🔅",
  "🔆",
  "🔇",
  "🔈",
  "🔉",
  "🔊",
  "🔍",
  "🔎",
  "🔒",
  "🔓",
  "🔗",
  "🔘",
  "🔙",
  "🔚",
  "🔛",
  "🔜",
  "🔝",
  "🔞",
  "🔢",
  "🔣",
  "🔥",
  "🔴",
  "🔵",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
  "🔺",
  "🔻",
  "🕐",
  "🕑",
  "🕒",
  "🕓",
  "🕔",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕛",
  "🕜",
  "🕝",
  "🕞",
  "🕟",
  "🕠",
  "🕡",
  "🕢",
  "🕣",
  "🕤",
  "🕥",
  "🕦",
  "🕧",
  "🕳",
  "🕶",
  "🖐",
  "🖕",
  "🖖",
  "🖤",
  "🖥",
  "🗒",
  "🗨",
  "🗯",
  "🗻",
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "😉",
  "😊",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
  "🙁",
  "🙂",
  "🙃",
  "🙄",
  "🙅",
  "🙈",
  "🙉",
  "🙊",
  "🙋",
  "🙌",
  "🙍",
  "🙏",
  "🚥",
  "🚦",
  "🚫",
  "🚾",
  "🛒",
  "🟠",
  "🟡",
  "🟢",
  "🟣",
  "🟤",
  "🟥",
  "🟦",
  "🟧",
  "🟨",
  "🟩",
  "🟪",
  "🟫",
  "🤌",
  "🤍",
  "🤎",
  "🤏",
  "🤐",
  "🤑",
  "🤒",
  "🤓",
  "🤔",
  "🤕",
  "🤗",
  "🤘",
  "🤙",
  "🤚",
  "🤛",
  "🤜",
  "🤝",
  "🤞",
  "🤟",
  "🤠",
  "🤡",
  "🤢",
  "🤣",
  "🤤",
  "🤥",
  "🤦",
  "🤧",
  "🤨",
  "🤩",
  "🤪",
  "🤫",
  "🤬",
  "🤭",
  "🤮",
  "🤯",
  "🤲",
  "🤷",
  "🥂",
  "🥃",
  "🥇",
  "🥈",
  "🥉",
  "🥑",
  "🥚",
  "🥝",
  "🥰",
  "🥱",
  "🥲",
  "🥳",
  "🥴",
  "🥵",
  "🥶",
  "🥷",
  "🥸",
  "🥺",
  "🦊",
  "🧐",
  "🧡",
  "🧲",
  "🩸",
  "➗",
  "⭕",
  "➖",
  "➕",
  "⌛",
  "⏳",
  "⌧",
  "⌫",
  "⌦",
  "⏏",
  "⌨",
  "⌥",
  "⌘",
  "⏎",
  "〠",
  "⭐",
  "🅰",
  "🆎",
  "🅱",
  "🅾",
  "🅿",
  "〶",
  "Ⓜ",
  "○"
];
class EmojiInlineTool {
  static get isInline() {
    return true;
  }
  static get title() {
    return "Emoji";
  }
  static get sanitize() {
    return {
      span: true
    };
  }
  static get isTune() {
    return true;
  }
  dropdown;
  constructor() {
    this.dropdown = this.createDropdown();
  }
  render() {
    return this.dropdown;
  }
  replaceRange() {
    const range = window?.getSelection()?.getRangeAt(0);
    if (!range) {
      console.warn("No range selected");
      return;
    }
    const selectedEmoji = this.dropdown.value;
    if (!selectedEmoji) {
      console.warn("No Emoji selected");
      return;
    }
    const span = document.createElement("span");
    span.textContent = selectedEmoji;
    span.id = "customEmoji";
    span.style.fontFamily = "GT Maru Emoji";
    range.deleteContents();
    range.insertNode(span);
  }
  createDropdown() {
    const node = document.createElement("div");
    ReactDOM__default.default.render(
      /* @__PURE__ */ jsxRuntime.jsx(
        EmojiPopup,
        {
          onSetEmoji: (em) => {
            this.dropdown.value = em;
            this.replaceRange();
          }
        }
      ),
      node
    );
    return node;
  }
  save() {
    return {
      emoji: this.dropdown.value
    };
  }
}
function EmojiPopup({ onSetEmoji }) {
  const [selected, setSelected] = React.useState();
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(HoverButton, { onClick: () => setOpen(true) }),
    open && ReactDOM__default.default.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx("div", { style: modalParentStyle, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: modalChildStyle, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => setOpen(false),
            style: { position: "absolute", top: 10, right: 10 },
            children: "Luk"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("h3", { style: { position: "absolute", top: 10, left: 10 }, children: "Vælg emoji" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: emojiContainerStyle, children: EMOJI_LIST.map((emoji, ind) => /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => setSelected(emoji),
            style: {
              ...singleEmojiStyle,
              backgroundColor: selected === emoji ? "#42FD61" : "white"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx("p", { style: { fontSize: 20 }, className: "emoji", children: emoji })
          },
          ind
        )) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => {
              onSetEmoji(selected ?? "");
              setOpen(false);
            },
            style: selectBtnStyle,
            children: "Vælg"
          }
        )
      ] }) }),
      document.body
    )
  ] });
}
function HoverButton({ onClick }) {
  const [hover, setHover] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      className: "emoji",
      onMouseEnter: () => {
        setHover(true);
      },
      onMouseLeave: () => {
        setHover(false);
      },
      style: {
        cursor: "pointer",
        width: 28,
        height: 28,
        borderRadius: 4,
        ...hover ? { backgroundColor: "#f6f6f9" } : null
      },
      onClick,
      children: "😊"
    }
  );
}
const modalParentStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1e3
};
const modalChildStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: 20,
  paddingTop: 40,
  borderRadius: 8,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};
const selectBtnStyle = {
  marginTop: 16,
  backgroundColor: "#3f51b5",
  color: "white",
  border: "none",
  borderRadius: 4,
  padding: "8px 16px",
  cursor: "pointer",
  boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  textTransform: "uppercase",
  fontWeight: "bold"
};
const emojiContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  overflow: "scroll",
  maxHeight: 400,
  border: "1px solid #dcdce4",
  borderRadius: 4
};
const singleEmojiStyle = {
  padding: 4,
  margin: 4,
  borderRadius: 4,
  cursor: "pointer"
};
class LinkButton {
  nodes = { holder: null, data: {} };
  static get toolbox() {
    return {
      title: "LinkButton",
      icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Link"> <path id="Vector" d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>'
    };
  }
  constructor({ data }) {
    this.nodes.data = data;
  }
  render() {
    const rootNode = document.createElement("div");
    this.nodes.holder = rootNode;
    const onDataChange = (newData) => {
      this.nodes.data = newData;
    };
    ReactDOM__default.default.render(/* @__PURE__ */ jsxRuntime.jsx(Btn, { onDataChange, data: this.nodes.data }), rootNode);
    return this.nodes.holder;
  }
  save() {
    return this.nodes.data;
  }
}
function Btn({ onDataChange, data }) {
  const [hasTracking, setHasTracking] = React__namespace.default.useState(!!data.trackingLabel);
  const handleChangeValue = (val) => {
    onDataChange({ ...data, ...val });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        borderRadius: "4px",
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "2px",
        marginBottom: "2px"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("h4", { children: "Knap med link" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              gap: "8px"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("p", { style: { fontSize: "12px", marginTop: "8px" }, children: "Knap tekst:" }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "input",
                      {
                        id: "text",
                        type: "text",
                        placeholder: "Knap Tekst",
                        defaultValue: data?.linkText || "",
                        onChange: (e) => handleChangeValue({ linkText: e.target.value }),
                        style: {
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc"
                        }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("p", { style: { fontSize: "12px", marginTop: "8px" }, children: "Knap link:" }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "input",
                      {
                        id: "url",
                        type: "url",
                        placeholder: "URL",
                        defaultValue: data?.url || "",
                        onChange: (e) => handleChangeValue({ url: e.target.value }),
                        style: {
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc"
                        }
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              marginTop: "8px"
            },
            children: /* @__PURE__ */ jsxRuntime.jsxs("label", { style: { display: "flex", alignItems: "center", cursor: "pointer" }, children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "hasTracking",
                  checked: hasTracking,
                  onChange: (e) => {
                    const checked = e.target.checked;
                    setHasTracking(checked);
                    if (!checked) {
                      handleChangeValue({ trackingLabel: void 0 });
                    }
                  },
                  style: { marginRight: "4px" }
                }
              ),
              "Knappen bruger tracking"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              paddingTop: "8px",
              display: hasTracking ? "flex" : "none",
              flexDirection: "column"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { style: { fontSize: "12px" }, children: "Tracking label: " }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px"
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    "input",
                    {
                      id: "label",
                      type: "text",
                      placeholder: "Tracking label",
                      defaultValue: data?.trackingLabel || "",
                      onChange: (e) => handleChangeValue({ trackingLabel: e.target.value }),
                      style: {
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        width: "46%"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("p", { style: { fontSize: "11px", marginTop: "4px" }, children: [
                "Tracking label bruges til at identificere elementet i Plausible Analytics. ",
                /* @__PURE__ */ jsxRuntime.jsx("br", {}),
                ' Brug f.eks. linkets navn, eller filnavn hvis det er en download. Eksempler: "redbarnet.dk" eller "redbarnet_beskrivelse".'
              ] })
            ]
          }
        )
      ]
    }
  );
}
let EditorjsFieldNew = ({
  name,
  value,
  onChange,
  attribute,
  config,
  id,
  labelAction
}) => {
  const renderTime = (/* @__PURE__ */ new Date()).getTime();
  const editorContainerRef = React.useRef(null);
  const editorInstanceRef = React.useRef(null);
  const [newEditorInstance, setnewEditorInstance] = React.useState();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = React.useState(-1);
  const [isMediaLibOpen, setI] = React.useState(false);
  const setIsMediaLibOpen = (a) => {
    const timeDiff = (/* @__PURE__ */ new Date()).getTime() - renderTime;
    if (timeDiff > 1e3) {
      setI(a);
    }
  };
  const [mediaLibAttachesBlockIndex, setMediaLibAttachesBlockIndex] = React.useState(-1);
  const [isMediaLibAttachesOpen, setIsMediaLibAttachesOpen] = React.useState(false);
  const mediaLibToggleFunc = React.useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex
    }),
    []
  );
  const mediaLibAttachesToggleFunc = React.useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibAttachesOpen,
      indexStateSetter: setMediaLibAttachesBlockIndex
    }),
    []
  );
  const handleMediaLibChange = React.useCallback(
    (data) => {
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: newEditorInstance
      });
      mediaLibToggleFunc(mediaLibBlockIndex);
    },
    [mediaLibBlockIndex, newEditorInstance]
  );
  const handleMediaLibAttachesChange = React.useCallback(
    (data) => {
      changeFuncAttaches({
        indexStateSetter: setMediaLibAttachesBlockIndex,
        data,
        index: mediaLibAttachesBlockIndex,
        editor: newEditorInstance
      });
      mediaLibAttachesToggleFunc(mediaLibAttachesBlockIndex);
    },
    [mediaLibAttachesBlockIndex, newEditorInstance]
  );
  const customToolsOther = {
    ...attribute?.options?.image ? {
      mediaLib: {
        class: MediaLibAdapter,
        config: {
          mediaLibToggleFunc
        }
      }
    } : {},
    ...attribute?.options?.attaches ? {
      mediaLibAttaches: {
        class: MediaLibAttachesAdapter,
        config: {
          mediaLibAttachesToggleFunc
        }
      }
    } : {}
  };
  React.useEffect(() => {
    if (!editorInstanceRef.current && editorContainerRef.current) {
      const editor = new EditorJS__default.default({
        holder: editorContainerRef.current,
        tools: {
          linkbtn: LinkButton,
          emomo: EmojiInlineTool,
          vocabulary: {
            class: VocabularyAutocomplete__default.default,
            config: {
              endpoint: `/${index.PLUGIN_ID}/vocabulary-lookup`,
              queryParam: "query"
              // change this to the one from strapi api
            }
          },
          ...requiredTools,
          ...customTools(attribute.options, config),
          ...customToolsOther
        },
        defaultBlock: "paragraph",
        onReady: () => {
          document?.querySelector('[data-item-name="image"]')?.remove();
          document?.querySelector('[data-item-name="attaches"]')?.remove();
        },
        data: !value || value === "" ? void 0 : JSON.parse(value),
        async onChange(api, _event) {
          setnewEditorInstance(api);
          api.saver.save().then((blocks) => {
            if (blocks?.blocks?.length > 0) {
              onChange({
                target: { name, value: JSON.stringify(blocks), type: "string" }
              });
            } else {
              onChange({
                target: { name, value: null, type: "string" }
              });
            }
          });
        },
        minHeight: config.minHeight ? config.minHeight : 100
      });
      editor.styles = {
        ...editor.styles,
        block: "margin: 0; padding: 0; font-size: 48px; color: red;",
        input: "margin: 0; padding: 0; font-size: 48px; color: red;"
      };
      editorInstanceRef.current = editor;
    }
    return () => {
      if (editorInstanceRef.current && typeof editorInstanceRef.current.destroy === "function") {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, [config]);
  return /* @__PURE__ */ jsxRuntime.jsxs(EdWrap, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      SEditor,
      {
        style: {
          fontSize: "48px",
          color: "red"
        },
        ref: editorContainerRef
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      MediaLibComponent,
      {
        isOpen: isMediaLibOpen,
        onChange: handleMediaLibChange,
        onToggle: mediaLibToggleFunc,
        allowedTypes: ["images"]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      MediaLibComponent,
      {
        isOpen: isMediaLibAttachesOpen,
        onChange: handleMediaLibAttachesChange,
        onToggle: mediaLibAttachesToggleFunc,
        allowedTypes: ["files"]
      }
    )
  ] });
};
EditorjsFieldNew = React.memo(EditorjsFieldNew);
const SEditor = styled__default.default.div`
  width: 100%;
`;
const EdWrap = styled__default.default.div`
  width: 100%;
`;
const EditorjsField = EditorjsFieldNew;
const loadCSS = (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    document.head.appendChild(link);
  });
};
function useLoadCss() {
  const [loadedCss, setLoadedCss] = React.useState(false);
  React.useEffect(() => {
    loadCSS("/editorjsStyles.css").then(() => {
      setLoadedCss(true);
    }).catch((error) => {
      console.error(error);
      setLoadedCss(true);
    });
  }, []);
  return { loadedCss };
}
const SStyleWrapper = styled__default.default(designSystem.Box)`
  width: 100%;

  .codex-editor__redactor {
    color: ${({ theme }) => theme.colors.neutral800};
  }
  .ce-toolbox__button {
    color: ${({ theme }) => theme.colors.neutral800};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${({ theme }) => theme.colors.neutral800};
    background-color: ${({ theme }) => theme.colors.neutral100};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .codex-editor {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.neutral0};
  }
  &.error .codex-editor {
    border-color: ${({ theme }) => theme.colors.danger700};
  }
  .ce-block--selected {
    .ce-block__content {
      background: ${({ theme }) => theme.colors.neutral100};
    }
  }

  .cdx-input {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.neutral800};
    line-height: 1.6;
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral500};
      opacity: 1;
    }
    &:focus-within,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary600};
      box-shadow: ${({ theme }) => theme.colors.primary600} 0px 0px 0px 2px;
    }
  }

  .codex-editor {
    padding: 16px;
    font-size: 14px;
    a {
      color: ${({ theme }) => theme.colors.secondary500};
      &:hover {
        color: ${({ theme }) => theme.colors.secondary700};
      }
    }
  }
  *:focus-visible {
    outline: none;
  }
  mark {
    background-color: #e9ddf6;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  code {
    background-color: #d9f6f0;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  .ce-header {
    color: ${({ theme }) => theme.colors.neutral800};
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: 0.83em;
    font-weight: bold;
  }
  h6 {
    font-size: 0.67em;
    font-weight: bold;
  }
  label {
    display: block;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width: 100%;
    padding-top: 12px;
    font-size: 14px;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
  div,
  pre,
  code {
    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      cursor: default;
    }
  }
  .cdx-input.image-tool__caption {
    font-size: 14px;
    line-height: 1.5;
  }
  .Box {
    display: flex;
  }
  .ToggleShow {
    margin-left: auto;
    font-size: 14px;
  }

  // * attachement styles
  .cdx-attaches {
    &.cdx-attaches--with-file {
      background: ${({ theme }) => theme.colors.neutral0};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      .cdx-attaches__title {
        color: ${({ theme }) => theme.colors.neutral800};
      }
      .cdx-attaches__size {
        color: ${({ theme }) => theme.colors.neutral500};
      }
      .cdx-attaches__download-button {
        background: ${({ theme }) => theme.colors.neutral100};
        color: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }

  // * link-tool styles
  .link-tool {
    .link-tool__content {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.neutral800}!important;
      transition: none;
      transition: all 0.05s ease-in-out;
      .link-tool__title {
        transition: all 0.05s ease-in-out;
      }
      &:hover {
        outline: ${({ theme }) => theme.colors.primary500} solid 2px;
        border-color: ${({ theme }) => theme.colors.primary500};
        .link-tool__title {
          color: ${({ theme }) => theme.colors.primary500}!important;
        }
      }
      .link-tool__anchor {
        color: ${({ theme }) => theme.colors.neutral700};
      }
    }
    .link-tool__progress {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: none;
      background: transparent;
    }
  }

  .cdx-quote {
    .cdx-quote__text {
      line-height: 1.6;
    }
    .cdx-quote__caption {
    }
  }

  .cdx-checklist {
    .cdx-checklist__item {
      .cdx-checklist__item-text {
        line-height: 1.5;
      }
    }
    .cdx-checklist__item--checked {
      .cdx-checklist__item-checkbox-check {
        background: ${({ theme }) => theme.colors.primary500};
        border-color: ${({ theme }) => theme.colors.primary500};
      }
    }
  }

  .cdx-warning {
    &:before {
      background-color: #fff;
      background-position: center;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  .ce-code .cdx-input,
  .ce-rawtool .cdx-input {
    color: ${({ theme }) => theme.colors.neutral800};
    background: ${({ theme }) => theme.colors.neutral100};
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
  }
`;
const Editorjs = React__namespace.default.forwardRef(
  ({
    name,
    description,
    intlLabel,
    onChange,
    value,
    disabled,
    attribute,
    labelAction,
    placeholder,
    error
  }, ref) => {
    const { loadedCss } = useLoadCss();
    const { formatMessage } = reactIntl.useIntl();
    const { config, isLoading } = usePluginConfig();
    const [uniqueKey, setUniqueKey] = React.useState(null);
    const [transitionEnded, setTransitionEnded] = React.useState(false);
    const nodeRef = React.useRef(null);
    const createKeyFromURL = () => {
      const url = new URL(window.location.href);
      const locale = url.searchParams.get("plugins[i18n][locale]");
      const parts = url.pathname.split("/");
      const apiType = parts[parts.length - 3];
      const id = parts[parts.length - 1];
      if (apiType || id || locale) {
        return `${apiType || ""}${id || ""}${locale || ""}`;
      }
      return null;
    };
    const updateKey = () => {
      const key = createKeyFromURL();
      setUniqueKey(key);
    };
    React.useEffect(() => {
      const handleTransitionEnd = () => {
        setTransitionEnded(true);
      };
      const observer = new MutationObserver(() => {
        setTransitionEnded(true);
      });
      const node = nodeRef.current;
      if (node) {
        node.addEventListener("transitionend", handleTransitionEnd);
        observer.observe(node, { childList: true, subtree: true });
      }
      return () => {
        if (node) {
          node.removeEventListener("transitionend", handleTransitionEnd);
        }
        observer.disconnect();
      };
    }, []);
    React.useEffect(() => {
      if (transitionEnded && value) {
        updateKey();
        setTransitionEnded(false);
      }
    }, [transitionEnded, value]);
    if (!loadedCss) return null;
    return /* @__PURE__ */ jsxRuntime.jsx(
      SStyleWrapper,
      {
        ref: nodeRef,
        className: error && error !== "" ? "error" : null,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Field.Root,
          {
            id: name,
            name,
            hint: description && formatMessage(description),
            required: attribute.required,
            error,
            children: config && !isLoading ? /* @__PURE__ */ jsxRuntime.jsxs(
              designSystem.Flex,
              {
                direction: {
                  initial: "column"
                },
                style: {
                  gap: "4px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.Field.Label,
                    {
                      action: labelAction,
                      style: {
                        alignSelf: "flex-start"
                      },
                      children: "Brødtekst"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    EditorjsField,
                    {
                      intlLabel,
                      onChange,
                      attribute,
                      name,
                      description,
                      disabled,
                      error,
                      labelAction,
                      required: attribute.required,
                      value,
                      placeholder,
                      config
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {}),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
                ]
              }
            ) : null
          }
        )
      },
      uniqueKey || void 0
    );
  }
);
exports.Editorjs = Editorjs;
