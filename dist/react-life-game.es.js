var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import require$$0, { memo, useCallback, useState, useEffect, useMemo } from "react";
const defaultOption = {
  interval: 1e3,
  cellSize: 12,
  initialAliveRatio: 0.1,
  aliveColor: "#1e3a8a",
  deadColor: "#0f172b"
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const Fragment = jsxRuntime.exports.Fragment;
const Cell = memo(({
  isAlive,
  size,
  onClick,
  aliveColor = "#1e3a8a",
  deadColor = "#0f172b"
}) => {
  const colorStyle = {
    backgroundColor: isAlive ? aliveColor : deadColor
  };
  return /* @__PURE__ */ jsx("div", {
    style: __spreadValues({
      width: `${size}px`,
      height: `${size}px`,
      flexShrink: 0
    }, colorStyle),
    onClick
  });
});
const useWindowSize = () => {
  const getWindowSize = useCallback(() => {
    var _a, _b;
    return {
      width: (_a = window == null ? void 0 : window.innerWidth) != null ? _a : 0,
      height: (_b = window == null ? void 0 : window.innerHeight) != null ? _b : 0
    };
  }, []);
  const [windowSizes, setWindowSizes] = useState(getWindowSize());
  useEffect(() => {
    const onResize = () => {
      setWindowSizes(getWindowSize());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getWindowSize]);
  return windowSizes;
};
const useCellNum = ({
  width,
  height,
  size
}) => {
  const { width: fullWidth, height: fullHeight } = useWindowSize();
  const w = width || fullWidth;
  const h = height || fullHeight;
  const rows = useMemo(() => Math.ceil(h / size), [h]);
  const columns = useMemo(() => Math.ceil(w / size), [w]);
  return {
    rows,
    columns
  };
};
const generate2DArray = (m2, n2, val = false) => {
  return [...Array(m2)].map((_) => Array(n2).fill(val));
};
const generate2DArrayRandom = (m2, n2, initialAliveRatio) => {
  const array = generate2DArray(m2, n2);
  return array.map((row) => row.map((_) => Math.random() > 1 - initialAliveRatio));
};
const countAliveNeighbors = (arr, i, j) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return Number(((_a = arr[i - 1]) == null ? void 0 : _a[j - 1]) ? true : false) + Number(((_b = arr[i - 1]) == null ? void 0 : _b[j]) ? true : false) + Number(((_c = arr[i - 1]) == null ? void 0 : _c[j + 1]) ? true : false) + Number(((_d = arr[i]) == null ? void 0 : _d[j - 1]) ? true : false) + Number(((_e = arr[i]) == null ? void 0 : _e[j + 1]) ? true : false) + Number(((_f = arr[i + 1]) == null ? void 0 : _f[j - 1]) ? true : false) + Number(((_g = arr[i + 1]) == null ? void 0 : _g[j]) ? true : false) + Number(((_h = arr[i + 1]) == null ? void 0 : _h[j + 1]) ? true : false);
};
const nextCells = (array) => {
  const next = [...array];
  array.forEach((row, i) => {
    row.forEach((currentCell, j) => {
      const neighbors = countAliveNeighbors(array, i, j);
      next[i][j] = currentCell ? neighbors === 2 || neighbors === 3 : neighbors === 3;
    });
  });
  return next;
};
function useLifeGame({
  width,
  height,
  cellSize = defaultOption.cellSize,
  interval = defaultOption.interval,
  initialAliveRatio = defaultOption.initialAliveRatio,
  aliveColor = defaultOption.aliveColor,
  deadColor = defaultOption.deadColor
}) {
  const {
    rows,
    columns
  } = useCellNum({
    width,
    height,
    size: cellSize
  });
  const [cells, setCells] = useState(generate2DArrayRandom(rows, columns, initialAliveRatio));
  const handleClickCell = useCallback((i, j) => {
    const cellsCopy = [...cells];
    cellsCopy[i][j] = !cellsCopy[i][j];
    setCells(cellsCopy);
  }, [cells]);
  useEffect(() => {
    const id = setInterval(() => {
      setCells(nextCells(cells));
    }, interval);
    return () => clearInterval(id);
  }, [cells]);
  const renderLifeGame = () => /* @__PURE__ */ jsx(Fragment, {
    children: cells.map((row, i) => /* @__PURE__ */ jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: row.map((cell, j) => /* @__PURE__ */ jsx(Cell, {
        isAlive: cell,
        size: cellSize,
        onClick: () => handleClickCell(i, j),
        aliveColor,
        deadColor
      }, j))
    }, i))
  });
  return {
    cells,
    setCells,
    handleClickCell,
    renderLifeGame
  };
}
const LifeGameField = ({
  option
}) => {
  const opt = __spreadValues(__spreadValues({}, defaultOption), option);
  const {
    renderLifeGame
  } = useLifeGame(opt);
  return /* @__PURE__ */ jsx("div", {
    style: {
      overflow: "hidden",
      width: "100%",
      height: "100%"
    },
    children: renderLifeGame()
  });
};
const useKeyOnResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return {
    key: width
  };
};
export { LifeGameField, useKeyOnResize };
