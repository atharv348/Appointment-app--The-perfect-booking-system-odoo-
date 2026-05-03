import { P as getDefaultExportFromCjs, T as React, r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { o as ReactDOM, a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CF5uFkj0.js";
import { C as Card } from "./card-By6FvKyl.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { I as Input } from "./input-B48utwcC.js";
import { B as Button } from "./button-McSNIiVm.js";
import { _ as _extends } from "./extends-BwmuZ0dU.js";
import { I as require_baseAssignValue, J as requireEq, F as requireKeys, e as requireIsObject, K as require_isPrototype, L as require_arrayLikeKeys, E as requireIsArrayLike, o as require_root, M as require_getSymbols, N as require_arrayPush, O as require_getPrototype, Q as requireStubArray, R as require_baseGetAllKeys, S as require_Uint8Array, T as require_Symbol, U as require_getTag, c as requireIsObjectLike, V as require_baseUnary, W as require_nodeUtil, X as require_Stack, Y as require_getAllKeys, b as requireIsArray, Z as requireIsBuffer, _ as require_baseGet, f as require_baseSlice, $ as require_castPath, x as requireLast, a0 as require_toKey, y as requireIsPlainObject, w as require_baseFlatten, a1 as require_overRest, a2 as require_setToString, v as require_arrayMap, C as require_isIterateeCall, a3 as requireToInteger, P as PropTypes, G as requireFindIndex, a4 as require_baseRest, a5 as require_baseForOwn, n as require_baseIteratee, d as requireIsFunction, a6 as requireIsTypedArray, z as range$1, D as mapValues, i as isEqual$1$1, s as sortBy } from "./findIndex-J_DBwaH3.js";
import { t as toDate, e as enUS, f as format, s as startOfWeek } from "./format-DdMuIHHV.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle, d as SheetDescription, e as SheetFooter } from "./sheet-B3t_OBi_.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { T as Textarea } from "./textarea-CVXk0D68.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as ChevronUp } from "./select-DAV2o4Pn.js";
import { a as fmtDateTime, f as fmtMoney } from "./format-CCH22ipv.js";
import { T as Trash2 } from "./trash-2-CjKFTg7V.js";
import { S as Search } from "./search-CyqiJxrN.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { a as ChevronDown } from "./chevron-down-ClPYuImO.js";
import { C as CircleX } from "./circle-x-B2OdjqaR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./index-BJH9mEUy.js";
import "./index-ClF13Y5F.js";
import "./index-Ch0bqfn5.js";
import "./index-C_YQrlYr.js";
import "./index-CU1ql3FD.js";
const __iconNode$2 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
];
const ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r2[n];
  }
  return t;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function hasClass(element, className) {
  if (element.classList) return element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var _arrayEach;
var hasRequired_arrayEach;
function require_arrayEach() {
  if (hasRequired_arrayEach) return _arrayEach;
  hasRequired_arrayEach = 1;
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  _arrayEach = arrayEach;
  return _arrayEach;
}
var _assignValue;
var hasRequired_assignValue;
function require_assignValue() {
  if (hasRequired_assignValue) return _assignValue;
  hasRequired_assignValue = 1;
  var baseAssignValue = require_baseAssignValue(), eq2 = requireEq();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  _assignValue = assignValue;
  return _assignValue;
}
var _copyObject;
var hasRequired_copyObject;
function require_copyObject() {
  if (hasRequired_copyObject) return _copyObject;
  hasRequired_copyObject = 1;
  var assignValue = require_assignValue(), baseAssignValue = require_baseAssignValue();
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  _copyObject = copyObject;
  return _copyObject;
}
var _baseAssign;
var hasRequired_baseAssign;
function require_baseAssign() {
  if (hasRequired_baseAssign) return _baseAssign;
  hasRequired_baseAssign = 1;
  var copyObject = require_copyObject(), keys = requireKeys();
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  _baseAssign = baseAssign;
  return _baseAssign;
}
var _nativeKeysIn;
var hasRequired_nativeKeysIn;
function require_nativeKeysIn() {
  if (hasRequired_nativeKeysIn) return _nativeKeysIn;
  hasRequired_nativeKeysIn = 1;
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  _nativeKeysIn = nativeKeysIn;
  return _nativeKeysIn;
}
var _baseKeysIn;
var hasRequired_baseKeysIn;
function require_baseKeysIn() {
  if (hasRequired_baseKeysIn) return _baseKeysIn;
  hasRequired_baseKeysIn = 1;
  var isObject = requireIsObject(), isPrototype = require_isPrototype(), nativeKeysIn = require_nativeKeysIn();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  _baseKeysIn = baseKeysIn;
  return _baseKeysIn;
}
var keysIn_1;
var hasRequiredKeysIn;
function requireKeysIn() {
  if (hasRequiredKeysIn) return keysIn_1;
  hasRequiredKeysIn = 1;
  var arrayLikeKeys = require_arrayLikeKeys(), baseKeysIn = require_baseKeysIn(), isArrayLike = requireIsArrayLike();
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  keysIn_1 = keysIn;
  return keysIn_1;
}
var _baseAssignIn;
var hasRequired_baseAssignIn;
function require_baseAssignIn() {
  if (hasRequired_baseAssignIn) return _baseAssignIn;
  hasRequired_baseAssignIn = 1;
  var copyObject = require_copyObject(), keysIn = requireKeysIn();
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  _baseAssignIn = baseAssignIn;
  return _baseAssignIn;
}
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
var hasRequired_cloneBuffer;
function require_cloneBuffer() {
  if (hasRequired_cloneBuffer) return _cloneBuffer.exports;
  hasRequired_cloneBuffer = 1;
  (function(module, exports$1) {
    var root = require_root();
    var freeExports = exports$1 && !exports$1.nodeType && exports$1;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  })(_cloneBuffer, _cloneBuffer.exports);
  return _cloneBuffer.exports;
}
var _copyArray;
var hasRequired_copyArray;
function require_copyArray() {
  if (hasRequired_copyArray) return _copyArray;
  hasRequired_copyArray = 1;
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  _copyArray = copyArray;
  return _copyArray;
}
var _copySymbols;
var hasRequired_copySymbols;
function require_copySymbols() {
  if (hasRequired_copySymbols) return _copySymbols;
  hasRequired_copySymbols = 1;
  var copyObject = require_copyObject(), getSymbols = require_getSymbols();
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  _copySymbols = copySymbols;
  return _copySymbols;
}
var _getSymbolsIn;
var hasRequired_getSymbolsIn;
function require_getSymbolsIn() {
  if (hasRequired_getSymbolsIn) return _getSymbolsIn;
  hasRequired_getSymbolsIn = 1;
  var arrayPush = require_arrayPush(), getPrototype = require_getPrototype(), getSymbols = require_getSymbols(), stubArray = requireStubArray();
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };
  _getSymbolsIn = getSymbolsIn;
  return _getSymbolsIn;
}
var _copySymbolsIn;
var hasRequired_copySymbolsIn;
function require_copySymbolsIn() {
  if (hasRequired_copySymbolsIn) return _copySymbolsIn;
  hasRequired_copySymbolsIn = 1;
  var copyObject = require_copyObject(), getSymbolsIn = require_getSymbolsIn();
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }
  _copySymbolsIn = copySymbolsIn;
  return _copySymbolsIn;
}
var _getAllKeysIn;
var hasRequired_getAllKeysIn;
function require_getAllKeysIn() {
  if (hasRequired_getAllKeysIn) return _getAllKeysIn;
  hasRequired_getAllKeysIn = 1;
  var baseGetAllKeys = require_baseGetAllKeys(), getSymbolsIn = require_getSymbolsIn(), keysIn = requireKeysIn();
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }
  _getAllKeysIn = getAllKeysIn;
  return _getAllKeysIn;
}
var _initCloneArray;
var hasRequired_initCloneArray;
function require_initCloneArray() {
  if (hasRequired_initCloneArray) return _initCloneArray;
  hasRequired_initCloneArray = 1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  _initCloneArray = initCloneArray;
  return _initCloneArray;
}
var _cloneArrayBuffer;
var hasRequired_cloneArrayBuffer;
function require_cloneArrayBuffer() {
  if (hasRequired_cloneArrayBuffer) return _cloneArrayBuffer;
  hasRequired_cloneArrayBuffer = 1;
  var Uint8Array = require_Uint8Array();
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  _cloneArrayBuffer = cloneArrayBuffer;
  return _cloneArrayBuffer;
}
var _cloneDataView;
var hasRequired_cloneDataView;
function require_cloneDataView() {
  if (hasRequired_cloneDataView) return _cloneDataView;
  hasRequired_cloneDataView = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer();
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  _cloneDataView = cloneDataView;
  return _cloneDataView;
}
var _cloneRegExp;
var hasRequired_cloneRegExp;
function require_cloneRegExp() {
  if (hasRequired_cloneRegExp) return _cloneRegExp;
  hasRequired_cloneRegExp = 1;
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  _cloneRegExp = cloneRegExp;
  return _cloneRegExp;
}
var _cloneSymbol;
var hasRequired_cloneSymbol;
function require_cloneSymbol() {
  if (hasRequired_cloneSymbol) return _cloneSymbol;
  hasRequired_cloneSymbol = 1;
  var Symbol2 = require_Symbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  _cloneSymbol = cloneSymbol;
  return _cloneSymbol;
}
var _cloneTypedArray;
var hasRequired_cloneTypedArray;
function require_cloneTypedArray() {
  if (hasRequired_cloneTypedArray) return _cloneTypedArray;
  hasRequired_cloneTypedArray = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer();
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  _cloneTypedArray = cloneTypedArray;
  return _cloneTypedArray;
}
var _initCloneByTag;
var hasRequired_initCloneByTag;
function require_initCloneByTag() {
  if (hasRequired_initCloneByTag) return _initCloneByTag;
  hasRequired_initCloneByTag = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer(), cloneDataView = require_cloneDataView(), cloneRegExp = require_cloneRegExp(), cloneSymbol = require_cloneSymbol(), cloneTypedArray = require_cloneTypedArray();
  var boolTag = "[object Boolean]", dateTag = "[object Date]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return new Ctor();
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return new Ctor();
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  _initCloneByTag = initCloneByTag;
  return _initCloneByTag;
}
var _baseCreate;
var hasRequired_baseCreate;
function require_baseCreate() {
  if (hasRequired_baseCreate) return _baseCreate;
  hasRequired_baseCreate = 1;
  var isObject = requireIsObject();
  var objectCreate = Object.create;
  var baseCreate = /* @__PURE__ */ (function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  })();
  _baseCreate = baseCreate;
  return _baseCreate;
}
var _initCloneObject;
var hasRequired_initCloneObject;
function require_initCloneObject() {
  if (hasRequired_initCloneObject) return _initCloneObject;
  hasRequired_initCloneObject = 1;
  var baseCreate = require_baseCreate(), getPrototype = require_getPrototype(), isPrototype = require_isPrototype();
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  _initCloneObject = initCloneObject;
  return _initCloneObject;
}
var _baseIsMap;
var hasRequired_baseIsMap;
function require_baseIsMap() {
  if (hasRequired_baseIsMap) return _baseIsMap;
  hasRequired_baseIsMap = 1;
  var getTag = require_getTag(), isObjectLike = requireIsObjectLike();
  var mapTag = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }
  _baseIsMap = baseIsMap;
  return _baseIsMap;
}
var isMap_1;
var hasRequiredIsMap;
function requireIsMap() {
  if (hasRequiredIsMap) return isMap_1;
  hasRequiredIsMap = 1;
  var baseIsMap = require_baseIsMap(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  isMap_1 = isMap;
  return isMap_1;
}
var _baseIsSet;
var hasRequired_baseIsSet;
function require_baseIsSet() {
  if (hasRequired_baseIsSet) return _baseIsSet;
  hasRequired_baseIsSet = 1;
  var getTag = require_getTag(), isObjectLike = requireIsObjectLike();
  var setTag = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  _baseIsSet = baseIsSet;
  return _baseIsSet;
}
var isSet_1;
var hasRequiredIsSet;
function requireIsSet() {
  if (hasRequiredIsSet) return isSet_1;
  hasRequiredIsSet = 1;
  var baseIsSet = require_baseIsSet(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  isSet_1 = isSet;
  return isSet_1;
}
var _baseClone;
var hasRequired_baseClone;
function require_baseClone() {
  if (hasRequired_baseClone) return _baseClone;
  hasRequired_baseClone = 1;
  var Stack = require_Stack(), arrayEach = require_arrayEach(), assignValue = require_assignValue(), baseAssign = require_baseAssign(), baseAssignIn = require_baseAssignIn(), cloneBuffer = require_cloneBuffer(), copyArray = require_copyArray(), copySymbols = require_copySymbols(), copySymbolsIn = require_copySymbolsIn(), getAllKeys = require_getAllKeys(), getAllKeysIn = require_getAllKeysIn(), getTag = require_getTag(), initCloneArray = require_initCloneArray(), initCloneByTag = require_initCloneByTag(), initCloneObject = require_initCloneObject(), isArray = requireIsArray(), isBuffer = requireIsBuffer(), isMap = requireIsMap(), isObject = requireIsObject(), isSet = requireIsSet(), keys = requireKeys(), keysIn = requireKeysIn();
  var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  _baseClone = baseClone;
  return _baseClone;
}
var _parent;
var hasRequired_parent;
function require_parent() {
  if (hasRequired_parent) return _parent;
  hasRequired_parent = 1;
  var baseGet = require_baseGet(), baseSlice = require_baseSlice();
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  _parent = parent;
  return _parent;
}
var _baseUnset;
var hasRequired_baseUnset;
function require_baseUnset() {
  if (hasRequired_baseUnset) return _baseUnset;
  hasRequired_baseUnset = 1;
  var castPath = require_castPath(), last = requireLast(), parent = require_parent(), toKey = require_toKey();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseUnset(object, path) {
    path = castPath(path, object);
    var index = -1, length = path.length;
    if (!length) {
      return true;
    }
    while (++index < length) {
      var key = toKey(path[index]);
      if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
        return false;
      }
      if ((key === "constructor" || key === "prototype") && index < length - 1) {
        return false;
      }
    }
    var obj = parent(object, path);
    return obj == null || delete obj[toKey(last(path))];
  }
  _baseUnset = baseUnset;
  return _baseUnset;
}
var _customOmitClone;
var hasRequired_customOmitClone;
function require_customOmitClone() {
  if (hasRequired_customOmitClone) return _customOmitClone;
  hasRequired_customOmitClone = 1;
  var isPlainObject = requireIsPlainObject();
  function customOmitClone(value) {
    return isPlainObject(value) ? void 0 : value;
  }
  _customOmitClone = customOmitClone;
  return _customOmitClone;
}
var flatten_1;
var hasRequiredFlatten;
function requireFlatten() {
  if (hasRequiredFlatten) return flatten_1;
  hasRequiredFlatten = 1;
  var baseFlatten = require_baseFlatten();
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  flatten_1 = flatten;
  return flatten_1;
}
var _flatRest;
var hasRequired_flatRest;
function require_flatRest() {
  if (hasRequired_flatRest) return _flatRest;
  hasRequired_flatRest = 1;
  var flatten = requireFlatten(), overRest = require_overRest(), setToString = require_setToString();
  function flatRest(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
  }
  _flatRest = flatRest;
  return _flatRest;
}
var omit_1;
var hasRequiredOmit;
function requireOmit() {
  if (hasRequiredOmit) return omit_1;
  hasRequiredOmit = 1;
  var arrayMap = require_arrayMap(), baseClone = require_baseClone(), baseUnset = require_baseUnset(), castPath = require_castPath(), copyObject = require_copyObject(), customOmitClone = require_customOmitClone(), flatRest = require_flatRest(), getAllKeysIn = require_getAllKeysIn();
  var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
  var omit2 = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  omit_1 = omit2;
  return omit_1;
}
var omitExports = requireOmit();
const omit = /* @__PURE__ */ getDefaultExportFromCjs(omitExports);
function getDay(date2, options) {
  return toDate(date2, options?.in).getDay();
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r2) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r2);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r2, t) {
  return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t, e;
}
function ownKeys(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t), true).forEach(function(r3) {
      _defineProperty(e, r3, t[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r2, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r2) {
  for (var t = 0; t < r2.length; t++) {
    var o = r2[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r2, t) {
  return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _iterableToArrayLimit(r2, l) {
  var t = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r2)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r3) {
      o = true, n = r3;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
  return n;
}
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
    var t = {}.toString.call(r2).slice(8, -1);
    return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r2, a) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r2, e) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e) || _unsupportedIterableToArray(r2, e) || _nonIterableRest();
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var invariant_1;
var hasRequiredInvariant;
function requireInvariant() {
  if (hasRequiredInvariant) return invariant_1;
  hasRequiredInvariant = 1;
  var invariant2 = function(condition, format2, a, b, c, d, e, f) {
    if (!condition) {
      var error;
      if (format2 === void 0) {
        error = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format2.replace(/%s/g, function() {
            return args[argIndex++];
          })
        );
        error.name = "Invariant Violation";
      }
      error.framesToPop = 1;
      throw error;
    }
  };
  invariant_1 = invariant2;
  return invariant_1;
}
var invariantExports = requireInvariant();
const invariant = /* @__PURE__ */ getDefaultExportFromCjs(invariantExports);
var noop$1 = function noop2() {
};
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function(prop) {
    propTypes[defaultKey(prop)] = noop$1;
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== void 0;
}
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
  return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || "Component";
  var canAcceptRef$1 = canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef$1 || !methods.length) ? invariant(false) : void 0;
  var UncontrolledComponent = /* @__PURE__ */ (function(_React$Component) {
    _inheritsLoose(UncontrolledComponent2, _React$Component);
    function UncontrolledComponent2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange2(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args2[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args2));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function(_ref) {
            var _extends2;
            var values2 = _ref.values;
            return {
              values: _extends(/* @__PURE__ */ Object.create(null), values2, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function(ref) {
        _this.inner = ref;
      };
      var values = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      return !this._notifying;
    };
    UncontrolledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values, prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(/* @__PURE__ */ Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function(key) {
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function(prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function(propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== void 0 ? propValue : _this2.state.values[propName];
      });
      return React.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent2;
  })(React.Component);
  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {
    }
  }, uncontrolledPropTypes(controlledValues));
  methods.forEach(function(method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (React.forwardRef) {
    WrappedComponent = React.forwardRef(function(props, ref) {
      return React.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
var MILI = "milliseconds", SECONDS = "seconds", MINUTES = "minutes", HOURS = "hours", DAY = "day", WEEK = "week", MONTH = "month", YEAR = "year", DECADE = "decade", CENTURY = "century";
var multiplierMilli = {
  "milliseconds": 1,
  "seconds": 1e3,
  "minutes": 60 * 1e3,
  "hours": 60 * 60 * 1e3,
  "day": 24 * 60 * 60 * 1e3,
  "week": 7 * 24 * 60 * 60 * 1e3
};
var multiplierMonth = {
  "month": 1,
  "year": 12,
  "decade": 10 * 12,
  "century": 100 * 12
};
function daysOf(year2) {
  return [31, daysInFeb(year2), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function daysInFeb(year2) {
  return year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
  d = new Date(d);
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit]);
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit]);
  }
  throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
  var nextDate = new Date(+d + num);
  return solveDST(d, nextDate);
}
function addMonths(d, num) {
  var year2 = d.getFullYear(), month2 = d.getMonth(), day2 = d.getDate(), totalMonths = year2 * 12 + month2 + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day2, daysOf(nextYear)[nextMonth]);
  var nextDate = new Date(d);
  nextDate.setFullYear(nextYear);
  nextDate.setDate(1);
  nextDate.setMonth(nextMonth);
  nextDate.setDate(nextDay);
  return nextDate;
}
function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();
  var diffMinutes = nextOffset - currentOffset;
  return new Date(+nextDate + diffMinutes * multiplierMilli["minutes"]);
}
function subtract(d, num, unit) {
  return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
  d = new Date(d);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
      d = month(d, 0);
    case MONTH:
      d = date(d, 1);
    case WEEK:
    case DAY:
      d = hours(d, 0);
    case HOURS:
      d = minutes(d, 0);
    case MINUTES:
      d = seconds(d, 0);
    case SECONDS:
      d = milliseconds(d, 0);
  }
  if (unit === DECADE)
    d = subtract(d, year(d) % 10, "year");
  if (unit === CENTURY)
    d = subtract(d, year(d) % 100, "year");
  if (unit === WEEK)
    d = weekday(d, 0, firstOfWeek);
  return d;
}
function endOf(d, unit, firstOfWeek) {
  d = new Date(d);
  d = startOf(d, unit, firstOfWeek);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit);
      d = subtract(d, 1, DAY);
      d.setHours(23, 59, 59, 999);
      break;
    case DAY:
      d.setHours(23, 59, 59, 999);
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit);
      d = subtract(d, 1, MILI);
  }
  return d;
}
var eq = createComparer(function(a, b) {
  return a === b;
});
var neq = createComparer(function(a, b) {
  return a !== b;
});
var gt = createComparer(function(a, b) {
  return a > b;
});
var gte = createComparer(function(a, b) {
  return a >= b;
});
var lt = createComparer(function(a, b) {
  return a < b;
});
var lte = createComparer(function(a, b) {
  return a <= b;
});
function min$1() {
  return new Date(Math.min.apply(Math, arguments));
}
function max$1() {
  return new Date(Math.max.apply(Math, arguments));
}
function inRange$1(day2, min2, max2, unit) {
  unit = unit || "day";
  return (!min2 || gte(day2, min2, unit)) && (!max2 || lte(day2, max2, unit));
}
var milliseconds = createAccessor("Milliseconds");
var seconds = createAccessor("Seconds");
var minutes = createAccessor("Minutes");
var hours = createAccessor("Hours");
var day = createAccessor("Day");
var date = createAccessor("Date");
var month = createAccessor("Month");
var year = createAccessor("FullYear");
function decade(d, val) {
  return val === void 0 ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
  return val === void 0 ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
  var w = (day(d) + 7 - (firstDay || 0)) % 7;
  return val === void 0 ? w : add(d, val - w, DAY);
}
function diff$1(date1, date2, unit, asFloat) {
  var dividend, divisor, result;
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime();
      break;
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  switch (unit) {
    case MILI:
      divisor = 1;
      break;
    case SECONDS:
      divisor = 1e3;
      break;
    case MINUTES:
      divisor = 1e3 * 60;
      break;
    case HOURS:
      divisor = 1e3 * 60 * 60;
      break;
    case DAY:
      divisor = 1e3 * 60 * 60 * 24;
      break;
    case WEEK:
      divisor = 1e3 * 60 * 60 * 24 * 7;
      break;
    case MONTH:
      divisor = 1;
      break;
    case YEAR:
      divisor = 12;
      break;
    case DECADE:
      divisor = 120;
      break;
    case CENTURY:
      divisor = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  result = dividend / divisor;
  return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
  var hourLength = (function(method2) {
    switch (method2) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  })(method);
  return function(d, val) {
    if (val === void 0)
      return d["get" + method]();
    var dateOut = new Date(d);
    dateOut["set" + method](val);
    if (hourLength && dateOut["get" + method]() != val && (method === "Hours" || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
      dateOut["set" + method](val + hourLength);
    }
    return dateOut;
  };
}
function createComparer(operator) {
  return function(a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit));
  };
}
const dates = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add,
  century,
  date,
  day,
  decade,
  diff: diff$1,
  endOf,
  eq,
  gt,
  gte,
  hours,
  inRange: inRange$1,
  lt,
  lte,
  max: max$1,
  milliseconds,
  min: min$1,
  minutes,
  month,
  neq,
  seconds,
  startOf,
  subtract,
  weekday,
  year
}, Symbol.toStringTag, { value: "Module" }));
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
var chunk_1;
var hasRequiredChunk;
function requireChunk() {
  if (hasRequiredChunk) return chunk_1;
  hasRequiredChunk = 1;
  var baseSlice = require_baseSlice(), isIterateeCall = require_isIterateeCall(), toInteger = requireToInteger();
  var nativeCeil = Math.ceil, nativeMax = Math.max;
  function chunk2(array, size2, guard) {
    if (guard ? isIterateeCall(array, size2, guard) : size2 === void 0) {
      size2 = 1;
    } else {
      size2 = nativeMax(toInteger(size2), 0);
    }
    var length = array == null ? 0 : array.length;
    if (!length || size2 < 1) {
      return [];
    }
    var index = 0, resIndex = 0, result = Array(nativeCeil(length / size2));
    while (index < length) {
      result[resIndex++] = baseSlice(array, index, index += size2);
    }
    return result;
  }
  chunk_1 = chunk2;
  return chunk_1;
}
var chunkExports = requireChunk();
const chunk = /* @__PURE__ */ getDefaultExportFromCjs(chunkExports);
function ownerDocument$1(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow(node) {
  var doc = ownerDocument$1(node);
  return doc && doc.defaultView || window;
}
function getComputedStyle$1(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
function contains$1(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
function isDocument(element) {
  return "nodeType" in element && element.nodeType === document.DOCUMENT_NODE;
}
function isWindow(node) {
  if ("window" in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}
function getscrollAccessor(offset2) {
  var prop = offset2 === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function scrollAccessor(node, val) {
    var win = isWindow(node);
    if (val === void 0) {
      return win ? win[offset2] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset2], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}
const scrollLeft = getscrollAccessor("pageXOffset");
const scrollTop = getscrollAccessor("pageYOffset");
function offset$2(node) {
  var doc = ownerDocument$1(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement;
  if (!docElem || !contains$1(docElem, node)) return box;
  if (node.getBoundingClientRect !== void 0) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
var isHTMLElement$1 = function isHTMLElement(e) {
  return !!e && "offsetParent" in e;
};
function offsetParent(node) {
  var doc = ownerDocument$1(node);
  var parent = node && node.offsetParent;
  while (isHTMLElement$1(parent) && parent.nodeName !== "HTML" && style(parent, "position") === "static") {
    parent = parent.offsetParent;
  }
  return parent || doc.documentElement;
}
var nodeName = function nodeName2(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
function position(node, offsetParent$1) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset2;
  if (style(node, "position") === "fixed") {
    offset2 = node.getBoundingClientRect();
  } else {
    var parent = offsetParent$1 || offsetParent(node);
    offset2 = offset$2(node);
    if (nodeName(parent) !== "html") parentOffset = offset$2(parent);
    var borderTop = String(style(parent, "borderTopWidth") || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;
    var borderLeft = String(style(parent, "borderLeftWidth") || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
  }
  var marginTop = String(style(node, "marginTop") || 0);
  var marginLeft = String(style(node, "marginLeft") || 0);
  return _extends({}, offset2, {
    top: offset2.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset2.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var prev = (/* @__PURE__ */ new Date()).getTime();
function fallback(fn3) {
  var curr = (/* @__PURE__ */ new Date()).getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn3, ms);
  prev = curr;
  return handle;
}
var vendors = ["", "webkit", "moz", "o", "ms"];
var cancelMethod = "clearTimeout";
var rafImpl = fallback;
var getKey$1 = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};
if (canUseDOM) {
  vendors.some(function(vendor) {
    var rafMethod = getKey$1(vendor, "request");
    if (rafMethod in window) {
      cancelMethod = getKey$1(vendor, "cancel");
      rafImpl = function rafImpl2(cb) {
        return window[rafMethod](cb);
      };
    }
    return !!rafImpl;
  });
}
var cancel = function cancel2(id) {
  if (typeof window[cancelMethod] === "function") window[cancelMethod](id);
};
var request = rafImpl;
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = function matchesImpl2(n, s) {
      return nativeMatch.call(n, s);
    };
  }
  return matchesImpl(node, selector);
}
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
function addEventListener$1(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
function useCommittedRef(value) {
  const ref = reactExports.useRef(value);
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
function useEventCallback(fn3) {
  const ref = useCommittedRef(fn3);
  return reactExports.useCallback(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}
function useCallbackRef() {
  return reactExports.useState(null);
}
function useMounted() {
  const mounted = reactExports.useRef(true);
  const isMounted = reactExports.useRef(() => mounted.current);
  reactExports.useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], reactExports.useCallback((nextState) => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement2(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement2(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height2 = clientRect.height / scaleY;
  return {
    width,
    height: height2,
    top: y,
    right: x + width,
    bottom: y + height2,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height: height2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement2(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement2(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement2(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent2 = getTrueOffsetParent(element);
  while (offsetParent2 && isTableElement(offsetParent2) && getComputedStyle(offsetParent2).position === "static") {
    offsetParent2 = getTrueOffsetParent(offsetParent2);
  }
  if (offsetParent2 && (getNodeName(offsetParent2) === "html" || getNodeName(offsetParent2) === "body" && getComputedStyle(offsetParent2).position === "static")) {
    return window2;
  }
  return offsetParent2 || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$12, value, max$12) {
  return max(min$12, min(value, max$12));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent2 = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent2 === getWindow(popper2)) {
      offsetParent2 = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent2).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent2 = offsetParent2;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent2 === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent2[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent2 === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent2[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft2 = win.pageXOffset;
  var scrollTop2 = win.pageYOffset;
  return {
    scrollLeft: scrollLeft2,
    scrollTop: scrollTop2
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height2 = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height2 = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height: height2,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height2 = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height: height2,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement2(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement2(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$12 = offset2 + overflow[mainSide];
    var max$12 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$12, tetherMin) : min$12, offset2, tether ? max(max$12, tetherMax) : max$12);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement2(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent2, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement2(offsetParent2);
  var offsetParentIsScaled = isHTMLElement2(offsetParent2) && isElementScaled(offsetParent2);
  var documentElement = getDocumentElement(offsetParent2);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent2) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent2);
    }
    if (isHTMLElement2(offsetParent2)) {
      offsets = getBoundingClientRect(offsetParent2, true);
      offsets.x += offsetParent2.clientLeft;
      offsets.y += offsetParent2.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect3 = _ref.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator({
  defaultModifiers: [hide$1, popperOffsets$1, computeStyles$1, eventListeners, offset$1, flip$1, preventOverflow$1, arrow$1]
});
var initialPopperStyles = function initialPopperStyles2(position2) {
  return {
    position: position2,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
};
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: function effect2(_ref) {
    var state = _ref.state;
    return function() {
      var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
      if ("removeAttribute" in reference2) {
        var ids = (reference2.getAttribute("aria-describedby") || "").split(",").filter(function(id) {
          return id.trim() !== popper2.id;
        });
        if (!ids.length) reference2.removeAttribute("aria-describedby");
        else reference2.setAttribute("aria-describedby", ids.join(","));
      }
    };
  },
  fn: function fn2(_ref2) {
    var _popper$getAttribute;
    var state = _ref2.state;
    var _state$elements2 = state.elements, popper2 = _state$elements2.popper, reference2 = _state$elements2.reference;
    var role = (_popper$getAttribute = popper2.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper2.id && role === "tooltip" && "setAttribute" in reference2) {
      var ids = reference2.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper2.id) !== -1) {
        return;
      }
      reference2.setAttribute("aria-describedby", ids ? ids + "," + popper2.id : popper2.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp, _ref3$enabled = _ref3.enabled, enabled = _ref3$enabled === void 0 ? true : _ref3$enabled, _ref3$placement = _ref3.placement, placement = _ref3$placement === void 0 ? "bottom" : _ref3$placement, _ref3$strategy = _ref3.strategy, strategy = _ref3$strategy === void 0 ? "absolute" : _ref3$strategy, _ref3$modifiers = _ref3.modifiers, modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers, config = _objectWithoutPropertiesLoose(_ref3, ["enabled", "placement", "strategy", "modifiers"]);
  var popperInstanceRef = reactExports.useRef();
  var update = reactExports.useCallback(function() {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = reactExports.useCallback(function() {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  var _useSafeState = useSafeState(reactExports.useState({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })), popperState = _useSafeState[0], setState = _useSafeState[1];
  var updateModifier = reactExports.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: true,
      phase: "write",
      requires: ["computeStyles"],
      fn: function fn3(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function(element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state,
          styles,
          attributes,
          update,
          forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  reactExports.useEffect(function() {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    });
  }, [strategy, placement, updateModifier, enabled]);
  reactExports.useEffect(function() {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper(referenceElement, popperElement, _extends({}, config, {
      placement,
      strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function() {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState(function(s) {
          return _extends({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen(node, eventName, handler, options) {
  addEventListener$1(node, eventName, handler, options);
  return function() {
    removeEventListener(node, eventName, handler, options);
  };
}
var warning_1;
var hasRequiredWarning;
function requireWarning() {
  if (hasRequiredWarning) return warning_1;
  hasRequiredWarning = 1;
  var warning2 = function() {
  };
  warning_1 = warning2;
  return warning_1;
}
var warningExports = requireWarning();
const warning = /* @__PURE__ */ getDefaultExportFromCjs(warningExports);
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
const ownerDocument = (function(componentOrElement) {
  return ownerDocument$1(safeFindDOMNode(componentOrElement));
});
var escapeKeyCode = 27;
var noop = function noop3() {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget2(ref) {
  return ref && ("current" in ref ? ref.current : ref);
};
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? "click" : _ref$clickTrigger;
  var preventMouseRootCloseRef = reactExports.useRef(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = reactExports.useCallback(function(e) {
    var _e$composedPath$;
    var currentTarget = getRefTarget(ref);
    warning(!!currentTarget, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node");
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains$1(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function(e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function(e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  reactExports.useEffect(function() {
    if (disabled || ref == null) return void 0;
    var currentEvent = window.event;
    var doc = ownerDocument(getRefTarget(ref));
    var removeMouseCaptureListener = listen(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = listen(doc, clickTrigger, function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    var removeKeyupListener = listen(doc, "keyup", function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function(el) {
        return listen(el, "mousemove", noop);
      });
    }
    return function() {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function(remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
function toModifierMap(modifiers) {
  var result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach(function(m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function(k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  var enabled = _ref.enabled, enableEvents = _ref.enableEvents, placement = _ref.placement, flip2 = _ref.flip, offset2 = _ref.offset, fixed = _ref.fixed, containerPadding = _ref.containerPadding, arrowElement = _ref.arrowElement, _ref$popperConfig = _ref.popperConfig, popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return _extends({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? "fixed" : popperConfig.strategy,
    modifiers: toModifierArray(_extends({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: _extends({}, modifiers.preventOverflow, {
        options: containerPadding ? _extends({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: _extends({
          offset: offset2
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: _extends({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: _extends({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: _extends({
        enabled: !!flip2
      }, modifiers.flip)
    }))
  });
}
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
var resolveContainerRef = function resolveContainerRef2(ref) {
  var _ref;
  if (typeof document === "undefined") return null;
  if (ref == null) return ownerDocument$1().body;
  if (typeof ref === "function") ref = ref();
  if (ref && "current" in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = reactExports.useState(function() {
    return resolveContainerRef(ref);
  }), resolvedRef = _useState[0], setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  reactExports.useEffect(function() {
  }, [onResolved, resolvedRef]);
  reactExports.useEffect(function() {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
const toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs(refA, refB) {
  return reactExports.useMemo(() => mergeRefs(refA, refB), [refA, refB]);
}
var Overlay = /* @__PURE__ */ React.forwardRef(function(props, outerRef) {
  var flip2 = props.flip, offset2 = props.offset, placement = props.placement, _props$containerPaddi = props.containerPadding, containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi, _props$popperConfig = props.popperConfig, popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig, Transition = props.transition;
  var _useCallbackRef = useCallbackRef(), rootElement = _useCallbackRef[0], attachRef = _useCallbackRef[1];
  var _useCallbackRef2 = useCallbackRef(), arrowElement = _useCallbackRef2[0], attachArrowRef = _useCallbackRef2[1];
  var mergedRef = useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);
  var _useState = reactExports.useState(!props.show), exited = _useState[0], setExited = _useState[1];
  var _usePopper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip2,
    offset: offset2,
    arrowElement,
    popperConfig
  })), styles = _usePopper.styles, attributes = _usePopper.attributes, popper2 = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);
  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  var handleHidden = function handleHidden2() {
    setExited(true);
    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  };
  var mountOverlay = props.show || Transition && !exited;
  useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  var child = props.children(_extends({}, popper2, {
    show: !!props.show,
    props: _extends({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: _extends({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));
  if (Transition) {
    var onExit = props.onExit, onExiting = props.onExiting, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered;
    child = /* @__PURE__ */ React.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered
    }, child);
  }
  return container ? /* @__PURE__ */ ReactDOM.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: PropTypes.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: PropTypes.oneOf(placements),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: PropTypes.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: PropTypes.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: PropTypes.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: PropTypes.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: PropTypes.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: PropTypes.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: PropTypes.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: PropTypes.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: PropTypes.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (props.rootClose) {
      var _PropTypes$func;
      return (_PropTypes$func = PropTypes.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }
    return PropTypes.func.apply(PropTypes, [props].concat(args));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: PropTypes.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: PropTypes.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: PropTypes.func
};
function height(node, client) {
  var win = isWindow(node);
  return win ? win.innerHeight : offset$2(node).height;
}
function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  var nextNode = node;
  do {
    if (matches(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
  return null;
}
var findIndexExports = requireFindIndex();
const findIndex = /* @__PURE__ */ getDefaultExportFromCjs(findIndexExports);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual$1(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$1(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual3(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}
function getWidth(node, client) {
  var win = isWindow(node);
  return win ? win.innerWidth : offset$2(node).width;
}
function _toArray(r2) {
  return _arrayWithHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableRest();
}
var defaults_1;
var hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults_1;
  hasRequiredDefaults = 1;
  var baseRest = require_baseRest(), eq2 = requireEq(), isIterateeCall = require_isIterateeCall(), keysIn = requireKeysIn();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var defaults2 = baseRest(function(object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      var props = keysIn(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];
        if (value === void 0 || eq2(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  defaults_1 = defaults2;
  return defaults_1;
}
var defaultsExports = requireDefaults();
const defaults = /* @__PURE__ */ getDefaultExportFromCjs(defaultsExports);
var transform_1;
var hasRequiredTransform;
function requireTransform() {
  if (hasRequiredTransform) return transform_1;
  hasRequiredTransform = 1;
  var arrayEach = require_arrayEach(), baseCreate = require_baseCreate(), baseForOwn = require_baseForOwn(), baseIteratee = require_baseIteratee(), getPrototype = require_getPrototype(), isArray = requireIsArray(), isBuffer = requireIsBuffer(), isFunction2 = requireIsFunction(), isObject = requireIsObject(), isTypedArray = requireIsTypedArray();
  function transform2(object, iteratee, accumulator) {
    var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
      var Ctor = object && object.constructor;
      if (isArrLike) {
        accumulator = isArr ? new Ctor() : [];
      } else if (isObject(object)) {
        accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
      } else {
        accumulator = {};
      }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
      return iteratee(accumulator, value, index, object2);
    });
    return accumulator;
  }
  transform_1 = transform2;
  return transform_1;
}
var transformExports = requireTransform();
const transform = /* @__PURE__ */ getDefaultExportFromCjs(transformExports);
var isBetween$1 = { exports: {} };
var isBetween = isBetween$1.exports;
var hasRequiredIsBetween;
function requireIsBetween() {
  if (hasRequiredIsBetween) return isBetween$1.exports;
  hasRequiredIsBetween = 1;
  (function(module, exports$1) {
    !(function(e, i) {
      module.exports = i();
    })(isBetween, (function() {
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r2 = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r2 ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r2 ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    }));
  })(isBetween$1);
  return isBetween$1.exports;
}
requireIsBetween();
var isSameOrAfter$1 = { exports: {} };
var isSameOrAfter = isSameOrAfter$1.exports;
var hasRequiredIsSameOrAfter;
function requireIsSameOrAfter() {
  if (hasRequiredIsSameOrAfter) return isSameOrAfter$1.exports;
  hasRequiredIsSameOrAfter = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(isSameOrAfter, (function() {
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    }));
  })(isSameOrAfter$1);
  return isSameOrAfter$1.exports;
}
requireIsSameOrAfter();
var isSameOrBefore$1 = { exports: {} };
var isSameOrBefore = isSameOrBefore$1.exports;
var hasRequiredIsSameOrBefore;
function requireIsSameOrBefore() {
  if (hasRequiredIsSameOrBefore) return isSameOrBefore$1.exports;
  hasRequiredIsSameOrBefore = 1;
  (function(module, exports$1) {
    !(function(e, i) {
      module.exports = i();
    })(isSameOrBefore, (function() {
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    }));
  })(isSameOrBefore$1);
  return isSameOrBefore$1.exports;
}
requireIsSameOrBefore();
var localeData$1 = { exports: {} };
var localeData = localeData$1.exports;
var hasRequiredLocaleData;
function requireLocaleData() {
  if (hasRequiredLocaleData) return localeData$1.exports;
  hasRequiredLocaleData = 1;
  (function(module, exports$1) {
    !(function(n, e) {
      module.exports = e();
    })(localeData, (function() {
      return function(n, e, t) {
        var r2 = e.prototype, o = function(n2) {
          return n2 && (n2.indexOf ? n2 : n2.s);
        }, u = function(n2, e2, t2, r3, u2) {
          var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map((function(n3) {
            return n3.slice(0, r3);
          }));
          if (!u2) return f;
          var d = i2.weekStart;
          return f.map((function(n3, e3) {
            return f[(e3 + (d || 0)) % 7];
          }));
        }, i = function() {
          return t.Ls[t.locale()];
        }, a = function(n2, e2) {
          return n2.formats[e2] || (function(n3) {
            return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(n4, e3, t2) {
              return e3 || t2.slice(1);
            }));
          })(n2.formats[e2.toUpperCase()]);
        }, s = function() {
          var n2 = this;
          return { months: function(e2) {
            return e2 ? e2.format("MMMM") : u(n2, "months");
          }, monthsShort: function(e2) {
            return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return n2.$locale().weekStart || 0;
          }, weekdays: function(e2) {
            return e2 ? e2.format("dddd") : u(n2, "weekdays");
          }, weekdaysMin: function(e2) {
            return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(e2) {
            return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(e2) {
            return a(n2.$locale(), e2);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        r2.localeData = function() {
          return s.bind(this)();
        }, t.localeData = function() {
          var n2 = i();
          return { firstDayOfWeek: function() {
            return n2.weekStart || 0;
          }, weekdays: function() {
            return t.weekdays();
          }, weekdaysShort: function() {
            return t.weekdaysShort();
          }, weekdaysMin: function() {
            return t.weekdaysMin();
          }, months: function() {
            return t.months();
          }, monthsShort: function() {
            return t.monthsShort();
          }, longDateFormat: function(e2) {
            return a(n2, e2);
          }, meridiem: n2.meridiem, ordinal: n2.ordinal };
        }, t.months = function() {
          return u(i(), "months");
        }, t.monthsShort = function() {
          return u(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n2) {
          return u(i(), "weekdays", null, null, n2);
        }, t.weekdaysShort = function(n2) {
          return u(i(), "weekdaysShort", "weekdays", 3, n2);
        }, t.weekdaysMin = function(n2) {
          return u(i(), "weekdaysMin", "weekdays", 2, n2);
        };
      };
    }));
  })(localeData$1);
  return localeData$1.exports;
}
requireLocaleData();
var localizedFormat$1 = { exports: {} };
var localizedFormat = localizedFormat$1.exports;
var hasRequiredLocalizedFormat;
function requireLocalizedFormat() {
  if (hasRequiredLocalizedFormat) return localizedFormat$1.exports;
  hasRequiredLocalizedFormat = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(localizedFormat, (function() {
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, o, n) {
        var r2 = o.prototype, i = r2.format;
        n.en.formats = e, r2.format = function(t2) {
          void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
          var o2 = this.$locale().formats, n2 = (function(t3, o3) {
            return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t4, n3, r3) {
              var i2 = r3 && r3.toUpperCase();
              return n3 || o3[r3] || e[r3] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t5, o4) {
                return t5 || o4.slice(1);
              }));
            }));
          })(t2, void 0 === o2 ? {} : o2);
          return i.call(this, n2);
        };
      };
    }));
  })(localizedFormat$1);
  return localizedFormat$1.exports;
}
requireLocalizedFormat();
var minMax$1 = { exports: {} };
var minMax = minMax$1.exports;
var hasRequiredMinMax;
function requireMinMax() {
  if (hasRequiredMinMax) return minMax$1.exports;
  hasRequiredMinMax = 1;
  (function(module, exports$1) {
    !(function(e, n) {
      module.exports = n();
    })(minMax, (function() {
      return function(e, n, t) {
        var i = function(e2, n2) {
          if (!n2 || !n2.length || 1 === n2.length && !n2[0] || 1 === n2.length && Array.isArray(n2[0]) && !n2[0].length) return null;
          var t2;
          1 === n2.length && n2[0].length > 0 && (n2 = n2[0]);
          t2 = (n2 = n2.filter((function(e3) {
            return e3;
          })))[0];
          for (var i2 = 1; i2 < n2.length; i2 += 1) n2[i2].isValid() && !n2[i2][e2](t2) || (t2 = n2[i2]);
          return t2;
        };
        t.max = function() {
          var e2 = [].slice.call(arguments, 0);
          return i("isAfter", e2);
        }, t.min = function() {
          var e2 = [].slice.call(arguments, 0);
          return i("isBefore", e2);
        };
      };
    }));
  })(minMax$1);
  return minMax$1.exports;
}
requireMinMax();
var utc$1 = { exports: {} };
var utc = utc$1.exports;
var hasRequiredUtc;
function requireUtc() {
  if (hasRequiredUtc) return utc$1.exports;
  hasRequiredUtc = 1;
  (function(module, exports$1) {
    !(function(t, i) {
      module.exports = i();
    })(utc, (function() {
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var r2 = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), r2.call(this, t2);
        };
        var o = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else o.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = (function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          })(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2;
          if (0 === u2) return this.utc(f2);
          var r3 = this.clone();
          if (f2) return r3.$offset = u2, r3.$u = false, r3;
          var o2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (r3 = this.local().add(u2 + o2, t)).$offset = u2, r3.$x.$localOffset = o2, r3;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    }));
  })(utc$1);
  return utc$1.exports;
}
requireUtc();
var isLeapYear$1 = { exports: {} };
var isLeapYear = isLeapYear$1.exports;
var hasRequiredIsLeapYear;
function requireIsLeapYear() {
  if (hasRequiredIsLeapYear) return isLeapYear$1.exports;
  hasRequiredIsLeapYear = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(isLeapYear, (function() {
      return function(e, t) {
        t.prototype.isLeapYear = function() {
          return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
      };
    }));
  })(isLeapYear$1);
  return isLeapYear$1.exports;
}
requireIsLeapYear();
function NoopWrapper(props) {
  return props.children;
}
var navigate = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
};
var views = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
};
var viewNames$1 = Object.keys(views).map(function(k) {
  return views[k];
});
PropTypes.oneOfType([PropTypes.string, PropTypes.func]);
PropTypes.any;
PropTypes.func;
PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(viewNames$1)), PropTypes.objectOf(function(prop, key) {
  var isBuiltinView = viewNames$1.indexOf(key) !== -1 && typeof prop[key] === "boolean";
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return PropTypes.elementType.apply(PropTypes, [prop, key].concat(args));
  }
})]);
PropTypes.oneOfType([PropTypes.oneOf(["overlap", "no-overlap"]), PropTypes.func]);
var MILLI = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function firstVisibleDay(date2, localizer2) {
  var firstOfMonth = startOf(date2, "month");
  return startOf(firstOfMonth, "week", localizer2.startOfWeek());
}
function lastVisibleDay(date2, localizer2) {
  var endOfMonth = endOf(date2, "month");
  return endOf(endOfMonth, "week", localizer2.startOfWeek());
}
function visibleDays(date2, localizer2) {
  var current = firstVisibleDay(date2, localizer2), last = lastVisibleDay(date2, localizer2), days = [];
  while (lte(current, last, "day")) {
    days.push(current);
    current = add(current, 1, "day");
  }
  return days;
}
function ceil(date2, unit) {
  var floor = startOf(date2, unit);
  return eq(floor, date2) ? floor : add(floor, 1, unit);
}
function range(start2, end2) {
  var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
  var current = start2, days = [];
  while (lte(current, end2, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }
  return days;
}
function merge(date2, time) {
  if (time == null && date2 == null) return null;
  if (time == null) time = /* @__PURE__ */ new Date();
  if (date2 == null) date2 = /* @__PURE__ */ new Date();
  date2 = startOf(date2, "day");
  date2 = hours(date2, hours(time));
  date2 = minutes(date2, minutes(time));
  date2 = seconds(date2, seconds(time));
  return milliseconds(date2, milliseconds(time));
}
function isJustDate(date2) {
  return hours(date2) === 0 && minutes(date2) === 0 && seconds(date2) === 0 && milliseconds(date2) === 0;
}
function duration(start2, end2, unit, firstOfWeek) {
  if (unit === "day") unit = "date";
  return Math.abs(
    // eslint-disable-next-line import/namespace
    dates[unit](start2, void 0, firstOfWeek) - // eslint-disable-next-line import/namespace
    dates[unit](end2, void 0, firstOfWeek)
  );
}
function diff(dateA, dateB, unit) {
  if (!unit || unit === "milliseconds") return Math.abs(+dateA - +dateB);
  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}
var localePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func]);
function _format(localizer2, formatter, value, format2, culture) {
  var result = typeof format2 === "function" ? format2(value, culture, localizer2) : formatter.call(localizer2, value, format2, culture);
  invariant(result == null || typeof result === "string", "`localizer format(..)` must return a string, null, or undefined");
  return result;
}
function getSlotDate(dt, minutesFromMidnight, offset2) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, minutesFromMidnight + offset2, 0, 0);
}
function getDstOffset(start2, end2) {
  return start2.getTimezoneOffset() - end2.getTimezoneOffset();
}
function getTotalMin(start2, end2) {
  return diff(start2, end2, "minutes") + getDstOffset(start2, end2);
}
function getMinutesFromMidnight(start2) {
  var daystart = startOf(start2, "day");
  return diff(daystart, start2, "minutes") + getDstOffset(daystart, start2);
}
function continuesPrior(start2, first) {
  return lt(start2, first, "day");
}
function continuesAfter(start2, end2, last) {
  var singleDayDuration = eq(start2, end2, "minutes");
  return singleDayDuration ? gte(end2, last, "minutes") : gt(end2, last, "minutes");
}
function daySpan(start2, end2) {
  return duration(start2, end2, "day");
}
function sortEvents$1(_ref) {
  var _ref$evtA = _ref.evtA, aStart = _ref$evtA.start, aEnd = _ref$evtA.end, aAllDay = _ref$evtA.allDay, _ref$evtB = _ref.evtB, bStart = _ref$evtB.start, bEnd = _ref$evtB.end, bAllDay = _ref$evtB.allDay;
  var startSort = +startOf(aStart, "day") - +startOf(bStart, "day");
  var durA = daySpan(aStart, aEnd);
  var durB = daySpan(bStart, bEnd);
  return startSort || // sort by start Day first
  durB - durA || // events spanning multiple days go first
  !!bAllDay - !!aAllDay || // then allDay single day events
  +aStart - +bStart || // then sort by start time
  +aEnd - +bEnd;
}
function inEventRange(_ref2) {
  var _ref2$event = _ref2.event, start2 = _ref2$event.start, end2 = _ref2$event.end, _ref2$range = _ref2.range, rangeStart = _ref2$range.start, rangeEnd = _ref2$range.end;
  var eStart = startOf(start2, "day");
  var startsBeforeEnd = lte(eStart, rangeEnd, "day");
  var sameMin = neq(eStart, end2, "minutes");
  var endsAfterStart = sameMin ? gt(end2, rangeStart, "minutes") : gte(end2, rangeStart, "minutes");
  return startsBeforeEnd && endsAfterStart;
}
function isSameDate(date1, date2) {
  return eq(date1, date2, "day");
}
function startAndEndAreDateOnly(start2, end2) {
  return isJustDate(start2) && isJustDate(end2);
}
var DateLocalizer = /* @__PURE__ */ _createClass(function DateLocalizer2(spec) {
  var _this = this;
  _classCallCheck(this, DateLocalizer2);
  invariant(typeof spec.format === "function", "date localizer `format(..)` must be a function");
  invariant(typeof spec.firstOfWeek === "function", "date localizer `firstOfWeek(..)` must be a function");
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.format = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  this.startOfWeek = spec.firstOfWeek;
  this.merge = spec.merge || merge;
  this.inRange = spec.inRange || inRange$1;
  this.lt = spec.lt || lt;
  this.lte = spec.lte || lte;
  this.gt = spec.gt || gt;
  this.gte = spec.gte || gte;
  this.eq = spec.eq || eq;
  this.neq = spec.neq || neq;
  this.startOf = spec.startOf || startOf;
  this.endOf = spec.endOf || endOf;
  this.add = spec.add || add;
  this.range = spec.range || range;
  this.diff = spec.diff || diff;
  this.ceil = spec.ceil || ceil;
  this.min = spec.min || min$1;
  this.max = spec.max || max$1;
  this.minutes = spec.minutes || minutes;
  this.daySpan = spec.daySpan || daySpan;
  this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay;
  this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay;
  this.visibleDays = spec.visibleDays || visibleDays;
  this.getSlotDate = spec.getSlotDate || getSlotDate;
  this.getTimezoneOffset = spec.getTimezoneOffset || function(value) {
    return value.getTimezoneOffset();
  };
  this.getDstOffset = spec.getDstOffset || getDstOffset;
  this.getTotalMin = spec.getTotalMin || getTotalMin;
  this.getMinutesFromMidnight = spec.getMinutesFromMidnight || getMinutesFromMidnight;
  this.continuesPrior = spec.continuesPrior || continuesPrior;
  this.continuesAfter = spec.continuesAfter || continuesAfter;
  this.sortEvents = spec.sortEvents || sortEvents$1;
  this.inEventRange = spec.inEventRange || inEventRange;
  this.isSameDate = spec.isSameDate || isSameDate;
  this.startAndEndAreDateOnly = spec.startAndEndAreDateOnly || startAndEndAreDateOnly;
  this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0;
});
function mergeWithDefaults(localizer2, culture, formatOverrides, messages2) {
  var formats2 = _objectSpread2(_objectSpread2({}, localizer2.formats), formatOverrides);
  return _objectSpread2(_objectSpread2({}, localizer2), {}, {
    messages: messages2,
    startOfWeek: function startOfWeek2() {
      return localizer2.startOfWeek(culture);
    },
    format: function format2(value, _format2) {
      return localizer2.format(value, formats2[_format2] || _format2, culture);
    }
  });
}
var Toolbar = /* @__PURE__ */ (function(_React$Component) {
  function Toolbar2() {
    var _this;
    _classCallCheck(this, Toolbar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Toolbar2, [].concat(args));
    _this.navigate = function(action) {
      _this.props.onNavigate(action);
    };
    _this.view = function(view) {
      _this.props.onView(view);
    };
    return _this;
  }
  _inherits(Toolbar2, _React$Component);
  return _createClass(Toolbar2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, messages2 = _this$props.localizer.messages, label = _this$props.label;
      return /* @__PURE__ */ React.createElement("div", {
        className: "rbc-toolbar"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "rbc-btn-group"
      }, /* @__PURE__ */ React.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.TODAY)
      }, messages2.today), /* @__PURE__ */ React.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.PREVIOUS)
      }, messages2.previous), /* @__PURE__ */ React.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.NEXT)
      }, messages2.next)), /* @__PURE__ */ React.createElement("span", {
        className: "rbc-toolbar-label"
      }, label), /* @__PURE__ */ React.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(messages2)));
    }
  }, {
    key: "viewNamesGroup",
    value: function viewNamesGroup(messages2) {
      var _this2 = this;
      var viewNames2 = this.props.views;
      var view = this.props.view;
      if (viewNames2.length > 1) {
        return viewNames2.map(function(name) {
          return /* @__PURE__ */ React.createElement("button", {
            type: "button",
            key: name,
            className: clsx({
              "rbc-active": view === name
            }),
            onClick: _this2.view.bind(null, name)
          }, messages2[name]);
        });
      }
    }
  }]);
})(React.Component);
function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}
var defaultMessages = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "All Day",
  week: "Week",
  work_week: "Work Week",
  day: "Day",
  month: "Month",
  previous: "Back",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "There are no events in this range.",
  showMore: function showMore(total) {
    return "+".concat(total, " more");
  }
};
function messages(msgs) {
  return _objectSpread2(_objectSpread2({}, defaultMessages), msgs);
}
function useClickOutside(_ref) {
  var ref = _ref.ref, callback = _ref.callback;
  reactExports.useEffect(function() {
    var handleClickOutside = function handleClickOutside2(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
var _excluded$7 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
var EventCell = /* @__PURE__ */ (function(_React$Component) {
  function EventCell2() {
    _classCallCheck(this, EventCell2);
    return _callSuper(this, EventCell2, arguments);
  }
  _inherits(EventCell2, _React$Component);
  return _createClass(EventCell2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, style2 = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, onKeyPress = _this$props.onKeyPress, localizer2 = _this$props.localizer, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, accessors = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event2 = _this$props$component.event, EventWrapper = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = _objectWithoutProperties(_this$props, _excluded$7);
      delete props.resizable;
      var title = accessors.title(event);
      var tooltip = accessors.tooltip(event);
      var end2 = accessors.end(event);
      var start2 = accessors.start(event);
      var allDay = accessors.allDay(event);
      var showAsAllDay = isAllDay || allDay || localizer2.diff(start2, localizer2.ceil(end2, "day"), "day") > 1;
      var userProps = getters.eventProp(event, start2, end2, selected);
      var content = /* @__PURE__ */ React.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || void 0
      }, Event2 ? /* @__PURE__ */ React.createElement(Event2, {
        event,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        title,
        isAllDay: allDay,
        localizer: localizer2,
        slotStart,
        slotEnd
      }) : title);
      return /* @__PURE__ */ React.createElement(EventWrapper, Object.assign({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ React.createElement("div", Object.assign({}, props, {
        style: _objectSpread2(_objectSpread2({}, userProps.style), style2),
        className: clsx("rbc-event", className, userProps.className, {
          "rbc-selected": selected,
          "rbc-event-allday": showAsAllDay,
          "rbc-event-continues-prior": continuesPrior2,
          "rbc-event-continues-after": continuesAfter2
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyDown: function onKeyDown(e) {
          return onKeyPress && onKeyPress(event, e);
        }
      }), typeof children === "function" ? children(content) : content));
    }
  }]);
})(React.Component);
function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return isEqual$1$1(event, selected);
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x = _ref.x, y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start2, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots);
  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start2.y && rowBox.bottom > start2.y;
  var isAboveStart = start2.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start2.y;
  var isBetween2 = box.top < rowBox.top && box.bottom > rowBox.bottom;
  if (isBetween2) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start2.x - rowBox.left) / cellWidth) : Math.floor((start2.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;
      else endIdx = currentSlot;
    } else if (start2.y < box.y) {
      endIdx = lastSlotIdx;
    } else {
      startIdx = 0;
    }
  }
  return {
    startIdx,
    endIdx
  };
}
function getPosition(_ref) {
  var target = _ref.target, offset2 = _ref.offset, container = _ref.container, box = _ref.box;
  var _getOffset = offset$2(target), top2 = _getOffset.top, left2 = _getOffset.left, width = _getOffset.width, height2 = _getOffset.height;
  var _getOffset2 = offset$2(container), cTop = _getOffset2.top, cLeft = _getOffset2.left, cWidth = _getOffset2.width, cHeight = _getOffset2.height;
  var _getOffset3 = offset$2(box), bWidth = _getOffset3.width, bHeight = _getOffset3.height;
  var viewBottom = cTop + cHeight;
  var viewRight = cLeft + cWidth;
  var bottom2 = top2 + bHeight;
  var right2 = left2 + bWidth;
  var x = offset2.x, y = offset2.y;
  var topOffset = bottom2 > viewBottom ? top2 - bHeight - y : top2 + y + height2;
  var leftOffset = right2 > viewRight ? left2 + x - bWidth + width : left2 + x;
  return {
    topOffset,
    leftOffset
  };
}
function Pop(_ref2) {
  var containerRef = _ref2.containerRef, accessors = _ref2.accessors, getters = _ref2.getters, selected = _ref2.selected, components2 = _ref2.components, localizer2 = _ref2.localizer, position2 = _ref2.position, show = _ref2.show, events = _ref2.events, slotStart = _ref2.slotStart, slotEnd = _ref2.slotEnd, onSelect = _ref2.onSelect, onDoubleClick = _ref2.onDoubleClick, onKeyPress = _ref2.onKeyPress, handleDragStart = _ref2.handleDragStart, popperRef = _ref2.popperRef, target = _ref2.target, offset2 = _ref2.offset;
  useClickOutside({
    ref: popperRef,
    callback: show
  });
  reactExports.useLayoutEffect(function() {
    var _getPosition = getPosition({
      target,
      offset: offset2,
      container: containerRef.current,
      box: popperRef.current
    }), topOffset = _getPosition.topOffset, leftOffset = _getPosition.leftOffset;
    popperRef.current.style.top = "".concat(topOffset, "px");
    popperRef.current.style.left = "".concat(leftOffset, "px");
  }, [offset2.x, offset2.y, target]);
  var width = position2.width;
  var style2 = {
    minWidth: width + width / 2
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: style2,
    className: "rbc-overlay",
    ref: popperRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rbc-overlay-header"
  }, localizer2.format(slotStart, "dayHeaderFormat")), events.map(function(event, idx) {
    return /* @__PURE__ */ React.createElement(EventCell, {
      key: idx,
      type: "popup",
      localizer: localizer2,
      event,
      getters,
      onSelect,
      accessors,
      components: components2,
      onDoubleClick,
      onKeyPress,
      continuesPrior: localizer2.lt(accessors.end(event), slotStart, "day"),
      continuesAfter: localizer2.gte(accessors.start(event), slotEnd, "day"),
      slotStart,
      slotEnd,
      selected: isSelected(event, selected),
      draggable: true,
      onDragStart: function onDragStart() {
        return handleDragStart(event);
      },
      onDragEnd: function onDragEnd() {
        return show();
      }
    });
  }));
}
var Popup = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Pop, Object.assign({}, props, {
    popperRef: ref
  }));
});
Popup.propTypes = {
  accessors: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  selected: PropTypes.object,
  components: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
  show: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  slotStart: PropTypes.instanceOf(Date).isRequired,
  slotEnd: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  handleDragStart: PropTypes.func,
  style: PropTypes.object,
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};
function CalOverlay(_ref) {
  var containerRef = _ref.containerRef, _ref$popupOffset = _ref.popupOffset, popupOffset = _ref$popupOffset === void 0 ? 5 : _ref$popupOffset, overlay = _ref.overlay, accessors = _ref.accessors, localizer2 = _ref.localizer, components2 = _ref.components, getters = _ref.getters, selected = _ref.selected, handleSelectEvent = _ref.handleSelectEvent, handleDoubleClickEvent = _ref.handleDoubleClickEvent, handleKeyPressEvent = _ref.handleKeyPressEvent, handleDragStart = _ref.handleDragStart, onHide2 = _ref.onHide, overlayDisplay = _ref.overlayDisplay;
  var popperRef = reactExports.useRef(null);
  if (!overlay.position) return null;
  var offset2 = popupOffset;
  if (!isNaN(popupOffset)) {
    offset2 = {
      x: popupOffset,
      y: popupOffset
    };
  }
  var position2 = overlay.position, events = overlay.events, date2 = overlay.date, end2 = overlay.end;
  return /* @__PURE__ */ React.createElement(Overlay, {
    rootClose: true,
    flip: true,
    show: true,
    placement: "bottom",
    onHide: onHide2,
    target: overlay.target
  }, function(_ref2) {
    var props = _ref2.props;
    return /* @__PURE__ */ React.createElement(Popup, Object.assign({}, props, {
      containerRef,
      ref: popperRef,
      target: overlay.target,
      offset: offset2,
      accessors,
      getters,
      selected,
      components: components2,
      localizer: localizer2,
      position: position2,
      show: overlayDisplay,
      events,
      slotStart: date2,
      slotEnd: end2,
      onSelect: handleSelectEvent,
      onDoubleClick: handleDoubleClickEvent,
      onKeyPress: handleKeyPressEvent,
      handleDragStart
    }));
  });
}
var PopOverlay = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  return /* @__PURE__ */ React.createElement(CalOverlay, Object.assign({}, props, {
    containerRef: ref
  }));
});
PopOverlay.propTypes = {
  popupOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })]),
  overlay: PropTypes.shape({
    position: PropTypes.object,
    events: PropTypes.array,
    date: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date)
  }),
  accessors: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  selected: PropTypes.object,
  handleSelectEvent: PropTypes.func,
  handleDoubleClickEvent: PropTypes.func,
  handleKeyPressEvent: PropTypes.func,
  handleDragStart: PropTypes.func,
  onHide: PropTypes.func,
  overlayDisplay: PropTypes.func
};
function addEventListener(type, handler) {
  var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return listen(target, type, handler, {
    passive: false
  });
}
function isOverContainer(container, x, y) {
  return !container || contains$1(container, document.elementFromPoint(x, y));
}
function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, ".rbc-event", node);
}
function getShowMoreNodeFromPoint(node, _ref2) {
  var clientX = _ref2.clientX, clientY = _ref2.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, ".rbc-show-more", node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}
function isShowMore(node, bounds) {
  return !!getShowMoreNodeFromPoint(node, bounds);
}
function getEventCoordinates(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance = 5;
var clickInterval = 250;
var Selection = /* @__PURE__ */ (function() {
  function Selection2(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$global = _ref3.global, global = _ref3$global === void 0 ? false : _ref3$global, _ref3$longPressThresh = _ref3.longPressThreshold, longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh, _ref3$validContainers = _ref3.validContainers, validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
    _classCallCheck(this, Selection2);
    this._initialEvent = null;
    this.selecting = false;
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this.validContainers = validContainers;
    this._listeners = /* @__PURE__ */ Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
    this._removeTouchMoveWindowListener = addEventListener("touchmove", function() {
    }, window);
    this._removeKeyDownListener = addEventListener("keydown", this._keyListener);
    this._removeKeyUpListener = addEventListener("keyup", this._keyListener);
    this._removeDropFromOutsideListener = addEventListener("drop", this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = addEventListener("dragover", this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  return _createClass(Selection2, [{
    key: "on",
    value: function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove: function remove() {
          var idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result;
      var handlers = this._listeners[type] || [];
      handlers.forEach(function(fn3) {
        if (result === void 0) result = fn3.apply(void 0, args);
      });
      return result;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this._initialEvent = null;
      this._initialEventData = null;
      this._selectRect = null;
      this.selecting = false;
      this._lastClickData = null;
      this.isDetached = true;
      this._listeners = /* @__PURE__ */ Object.create(null);
      this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
      this._removeInitialEventListener && this._removeInitialEventListener();
      this._removeEndListener && this._removeEndListener();
      this._onEscListener && this._onEscListener();
      this._removeMoveListener && this._removeMoveListener();
      this._removeKeyUpListener && this._removeKeyUpListener();
      this._removeKeyDownListener && this._removeKeyDownListener();
      this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
      this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function isSelected2(node) {
      var box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }
  }, {
    key: "filter",
    value: function filter(items) {
      var box = this._selectRect;
      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    }
    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function _addLongPressListener(handler, initialEvent) {
      var _this = this;
      var timer = null;
      var removeTouchMoveListener = null;
      var removeTouchEndListener = null;
      var handleTouchStart = function handleTouchStart2(initialEvent2) {
        timer = setTimeout(function() {
          cleanup();
          handler(initialEvent2);
        }, _this.longPressThreshold);
        removeTouchMoveListener = addEventListener("touchmove", function() {
          return cleanup();
        });
        removeTouchEndListener = addEventListener("touchend", function() {
          return cleanup();
        });
      };
      var removeTouchStartListener = addEventListener("touchstart", handleTouchStart);
      var cleanup = function cleanup2() {
        if (timer) {
          clearTimeout(timer);
        }
        if (removeTouchMoveListener) {
          removeTouchMoveListener();
        }
        if (removeTouchEndListener) {
          removeTouchEndListener();
        }
        timer = null;
        removeTouchMoveListener = null;
        removeTouchEndListener = null;
      };
      if (initialEvent) {
        handleTouchStart(initialEvent);
      }
      return function() {
        cleanup();
        removeTouchStartListener();
      };
    }
    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function _addInitialEventListener() {
      var _this2 = this;
      var removeMouseDownListener = addEventListener("mousedown", function(e) {
        _this2._removeInitialEventListener();
        _this2._handleInitialEvent(e);
        _this2._removeInitialEventListener = addEventListener("mousedown", _this2._handleInitialEvent);
      });
      var removeTouchStartListener = addEventListener("touchstart", function(e) {
        _this2._removeInitialEventListener();
        _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
      });
      this._removeInitialEventListener = function() {
        removeMouseDownListener();
        removeTouchStartListener();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function _dropFromOutsideListener(e) {
      var _getEventCoordinates = getEventCoordinates(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
      this.emit("dropFromOutside", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function _dragOverFromOutsideListener(e) {
      var _getEventCoordinates2 = getEventCoordinates(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
      this.emit("dragOverFromOutside", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function _handleInitialEvent(e) {
      this._initialEvent = e;
      if (this.isDetached) {
        return;
      }
      var _getEventCoordinates3 = getEventCoordinates(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
      var node = this.container(), collides, offsetData;
      if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;
      if (!this.globalMouse && node && !contains$1(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0), top2 = _normalizeDistance.top, left2 = _normalizeDistance.left, bottom2 = _normalizeDistance.bottom, right2 = _normalizeDistance.right;
        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top2,
          left: offsetData.left - left2,
          bottom: offsetData.bottom + bottom2,
          right: offsetData.right + right2
        }, {
          top: pageY,
          left: pageX
        });
        if (!collides) return;
      }
      var result = this.emit("beforeSelect", this._initialEventData = {
        isTouch: /^touch/.test(e.type),
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      if (result === false) return;
      switch (e.type) {
        case "mousedown":
          this._removeEndListener = addEventListener("mouseup", this._handleTerminatingEvent);
          this._onEscListener = addEventListener("keydown", this._handleTerminatingEvent);
          this._removeMoveListener = addEventListener("mousemove", this._handleMoveEvent);
          break;
        case "touchstart":
          this._handleMoveEvent(e);
          this._removeEndListener = addEventListener("touchend", this._handleTerminatingEvent);
          this._removeMoveListener = addEventListener("touchmove", this._handleMoveEvent);
          break;
      }
    }
    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function _isWithinValidContainer(e) {
      var eventTarget = e.target;
      var containers = this.validContainers;
      if (!containers || !containers.length || !eventTarget) {
        return true;
      }
      return containers.some(function(target) {
        return !!eventTarget.closest(target);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function _handleTerminatingEvent(e) {
      var selecting = this.selecting;
      var bounds = this._selectRect;
      if (!selecting && e.type.includes("key")) {
        e = this._initialEvent;
      }
      this.selecting = false;
      this._removeEndListener && this._removeEndListener();
      this._removeMoveListener && this._removeMoveListener();
      this._selectRect = null;
      this._initialEvent = null;
      this._initialEventData = null;
      if (!e) return;
      var inRoot = !this.container || contains$1(this.container(), e.target);
      var isWithinValidContainer = this._isWithinValidContainer(e);
      if (e.key === "Escape" || !isWithinValidContainer) {
        return this.emit("reset");
      }
      if (!selecting && inRoot) {
        return this._handleClickEvent(e);
      }
      if (selecting) return this.emit("select", bounds);
      return this.emit("reset");
    }
  }, {
    key: "_handleClickEvent",
    value: function _handleClickEvent(e) {
      var _getEventCoordinates4 = getEventCoordinates(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY, clientX = _getEventCoordinates4.clientX, clientY = _getEventCoordinates4.clientY;
      var now = (/* @__PURE__ */ new Date()).getTime();
      if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
        this._lastClickData = null;
        return this.emit("doubleClick", {
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
      }
      this._lastClickData = {
        timestamp: now
      };
      return this.emit("click", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
    }
  }, {
    key: "_handleMoveEvent",
    value: function _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return;
      }
      var _this$_initialEventDa = this._initialEventData, x = _this$_initialEventDa.x, y = _this$_initialEventDa.y;
      var _getEventCoordinates5 = getEventCoordinates(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY;
      var w = Math.abs(x - pageX);
      var h = Math.abs(y - pageY);
      var left2 = Math.min(pageX, x), top2 = Math.min(pageY, y), old = this.selecting;
      var click = this.isClick(pageX, pageY);
      if (click && !old && !(w || h)) {
        return;
      }
      if (!old && !click) {
        this.emit("selectStart", this._initialEventData);
      }
      if (!click) {
        this.selecting = true;
        this._selectRect = {
          top: top2,
          left: left2,
          x: pageX,
          y: pageY,
          right: left2 + w,
          bottom: top2 + h
        };
        this.emit("selecting", this._selectRect);
      }
      e.preventDefault();
    }
  }, {
    key: "_keyListener",
    value: function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function isClick(pageX, pageY) {
      var _this$_initialEventDa2 = this._initialEventData, x = _this$_initialEventDa2.x, y = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
      return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }
  }]);
})();
function normalizeDistance() {
  var distance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  if (_typeof(distance) !== "object") distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}
function objectsCollide(nodeA, nodeB) {
  var tolerance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var _getBoundsForNode = getBoundsForNode(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !// 'a' bottom doesn't touch 'b' top
  (aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(), left2 = rect.left + pageOffset("left"), top2 = rect.top + pageOffset("top");
  return {
    top: top2,
    left: left2,
    right: (node.offsetWidth || 0) + left2,
    bottom: (node.offsetHeight || 0) + top2
  };
}
function pageOffset(dir) {
  if (dir === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
var BackgroundCells = /* @__PURE__ */ (function(_React$Component) {
  function BackgroundCells2(props, context) {
    var _this;
    _classCallCheck(this, BackgroundCells2);
    _this = _callSuper(this, BackgroundCells2, [props, context]);
    _this.state = {
      selecting: false
    };
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    return _this;
  }
  _inherits(BackgroundCells2, _React$Component);
  return _createClass(BackgroundCells2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.selectable && this.props.selectable) this._selectable();
      if (prevProps.selectable && !this.props.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, range2 = _this$props.range, getNow2 = _this$props.getNow, getters = _this$props.getters, currentDate = _this$props.date, Wrapper = _this$props.components.dateCellWrapper, localizer2 = _this$props.localizer;
      var _this$state = this.state, selecting = _this$state.selecting, startIdx = _this$state.startIdx, endIdx = _this$state.endIdx;
      var current = getNow2();
      return /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, range2.map(function(date2, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        var _getters$dayProp = getters.dayProp(date2), className = _getters$dayProp.className, style2 = _getters$dayProp.style;
        return /* @__PURE__ */ React.createElement(Wrapper, {
          key: index,
          value: date2,
          range: range2
        }, /* @__PURE__ */ React.createElement("div", {
          style: style2,
          className: clsx("rbc-day-bg", className, selected && "rbc-selected-cell", localizer2.isSameDate(date2, current) && "rbc-today", currentDate && localizer2.neq(currentDate, date2, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function _selectable() {
      var _this2 = this;
      var node = this.containerRef.current;
      var selector = this._selector = new Selection(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      });
      var selectorClicksHandler = function selectorClicksHandler2(point, actionType) {
        if (!isEvent(node, point) && !isShowMore(node, point)) {
          var rowBox = getBoundsForNode(node);
          var _this2$props = _this2.props, range2 = _this2$props.range, rtl = _this2$props.rtl;
          if (pointInBox(rowBox, point)) {
            var currentCell = getSlotAtX(rowBox, point.x, rtl, range2.length);
            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point
            });
          }
        }
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
      };
      selector.on("selecting", function(box) {
        var _this2$props2 = _this2.props, range2 = _this2$props2.range, rtl = _this2$props2.rtl;
        var startIdx = -1;
        var endIdx = -1;
        if (!_this2.state.selecting) {
          notify(_this2.props.onSelectStart, [box]);
          _this2._initial = {
            x: box.x,
            y: box.y
          };
        }
        if (selector.isSelected(node)) {
          var nodeBox = getBoundsForNode(node);
          var _dateCellSelection = dateCellSelection(_this2._initial, nodeBox, box, range2.length, rtl);
          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }
        _this2.setState({
          selecting: true,
          startIdx,
          endIdx
        });
      });
      selector.on("beforeSelect", function(box) {
        if (_this2.props.selectable !== "ignoreEvents") return;
        return !isEvent(_this2.containerRef.current, box);
      });
      selector.on("click", function(point) {
        return selectorClicksHandler(point, "click");
      });
      selector.on("doubleClick", function(point) {
        return selectorClicksHandler(point, "doubleClick");
      });
      selector.on("select", function(bounds) {
        _this2._selectSlot(_objectSpread2(_objectSpread2({}, _this2.state), {}, {
          action: "select",
          bounds
        }));
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
        notify(_this2.props.onSelectEnd, [_this2.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function _teardownSelectable() {
      if (!this._selector) return;
      this._selector.teardown();
      this._selector = null;
    }
  }, {
    key: "_selectSlot",
    value: function _selectSlot(_ref) {
      var endIdx = _ref.endIdx, startIdx = _ref.startIdx, action = _ref.action, bounds = _ref.bounds, box = _ref.box;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action,
        bounds,
        box,
        resourceId: this.props.resourceId
      });
    }
  }]);
})(React.Component);
var EventRowMixin = {
  propTypes: {
    slotMetrics: PropTypes.object.isRequired,
    selected: PropTypes.object,
    isAllDay: PropTypes.bool,
    accessors: PropTypes.object.isRequired,
    localizer: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    getters: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onKeyPress: PropTypes.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected;
    props.isAllDay;
    var accessors = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer2 = props.localizer, slotMetrics = props.slotMetrics, components2 = props.components, resizable = props.resizable;
    var continuesPrior2 = slotMetrics.continuesPrior(event);
    var continuesAfter2 = slotMetrics.continuesAfter(event);
    return /* @__PURE__ */ React.createElement(EventCell, {
      event,
      getters,
      localizer: localizer2,
      accessors,
      components: components2,
      onSelect,
      onDoubleClick,
      onKeyPress,
      continuesPrior: continuesPrior2,
      continuesAfter: continuesAfter2,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key) {
    var content = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ";
    var per = Math.abs(len) / slots * 100 + "%";
    return /* @__PURE__ */ React.createElement("div", {
      key,
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};
var EventRow = /* @__PURE__ */ (function(_React$Component) {
  function EventRow2() {
    _classCallCheck(this, EventRow2);
    return _callSuper(this, EventRow2, arguments);
  }
  _inherits(EventRow2, _React$Component);
  return _createClass(EventRow2, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
      var lastEnd = 1;
      return /* @__PURE__ */ React.createElement("div", {
        className: clsx(className, "rbc-row")
      }, segments.reduce(function(row, _ref, li) {
        var event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
        var key = "_lvl_" + li;
        var gap = left2 - lastEnd;
        var content = EventRowMixin.renderEvent(_this.props, event);
        if (gap) row.push(EventRowMixin.renderSpan(slots, gap, "".concat(key, "_gap")));
        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = right2 + 1;
        return row;
      }, []));
    }
  }]);
})(React.Component);
EventRow.defaultProps = _objectSpread2({}, EventRowMixin.defaultProps);
function endOfRange(_ref) {
  var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer2 = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer2.add(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments(event, range2, accessors, localizer2) {
  var _endOfRange = endOfRange({
    dateRange: range2,
    localizer: localizer2
  }), first = _endOfRange.first, last = _endOfRange.last;
  var slots = localizer2.diff(first, last, "day");
  var start2 = localizer2.max(localizer2.startOf(accessors.start(event), "day"), first);
  var end2 = localizer2.min(localizer2.ceil(accessors.end(event), "day"), last);
  var padding = findIndex(range2, function(x) {
    return localizer2.isSameDate(x, start2);
  });
  var span = localizer2.diff(start2, end2, "day");
  span = Math.min(span, slots);
  span = Math.max(span - localizer2.segmentOffset, 1);
  return {
    event,
    span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments) {
  var limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
  var i, j, seg, levels = [], extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function(a, b) {
      return a.left - b.left;
    });
  }
  return {
    levels,
    extra
  };
}
function inRange(e, start2, end2, accessors, localizer2) {
  var event = {
    start: accessors.start(e),
    end: accessors.end(e)
  };
  var range2 = {
    start: start2,
    end: end2
  };
  return localizer2.inEventRange({
    event,
    range: range2
  });
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function(otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortWeekEvents(events, accessors, localizer2) {
  var base = _toConsumableArray(events);
  var multiDayEvents = [];
  var standardEvents = [];
  base.forEach(function(event) {
    var startCheck = accessors.start(event);
    var endCheck = accessors.end(event);
    if (localizer2.daySpan(startCheck, endCheck) > 1) {
      multiDayEvents.push(event);
    } else {
      standardEvents.push(event);
    }
  });
  var multiSorted = multiDayEvents.sort(function(a, b) {
    return sortEvents(a, b, accessors, localizer2);
  });
  var standardSorted = standardEvents.sort(function(a, b) {
    return sortEvents(a, b, accessors, localizer2);
  });
  return [].concat(_toConsumableArray(multiSorted), _toConsumableArray(standardSorted));
}
function sortEvents(eventA, eventB, accessors, localizer2) {
  var evtA = {
    start: accessors.start(eventA),
    end: accessors.end(eventA),
    allDay: accessors.allDay(eventA)
  };
  var evtB = {
    start: accessors.start(eventB),
    end: accessors.end(eventB),
    allDay: accessors.allDay(eventB)
  };
  return localizer2.sortEvents({
    evtA,
    evtB
  });
}
var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot2(segments, slot) {
  return segments.filter(function(seg) {
    return isSegmentInSlot$1(seg, slot);
  }).map(function(seg) {
    return seg.event;
  });
};
var EventEndingRow = /* @__PURE__ */ (function(_React$Component) {
  function EventEndingRow2() {
    _classCallCheck(this, EventEndingRow2);
    return _callSuper(this, EventEndingRow2, arguments);
  }
  _inherits(EventEndingRow2, _React$Component);
  return _createClass(EventEndingRow2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots;
      var rowSegments = eventLevels(segments).levels[0];
      var current = 1, lastEnd = 1, row = [];
      while (current <= slots) {
        var key = "_lvl_" + current;
        var _ref = rowSegments.filter(function(seg) {
          return isSegmentInSlot$1(seg, current);
        })[0] || {}, event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
        if (!event) {
          var hiddenEvents = this.getHiddenEventsForSlot(segments, current);
          if (hiddenEvents.length > 0) {
            var _gap = current - lastEnd;
            if (_gap) {
              row.push(EventRowMixin.renderSpan(slots, _gap, key + "_gap"));
            }
            row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
            lastEnd = current = current + 1;
            continue;
          }
          current++;
          continue;
        }
        var gap = Math.max(0, left2 - lastEnd);
        if (this.canRenderSlotEvent(left2, span)) {
          var content = EventRowMixin.renderEvent(this.props, event);
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
          }
          row.push(EventRowMixin.renderSpan(slots, span, key, content));
          lastEnd = current = right2 + 1;
        } else {
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
          }
          row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }
      return /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row"
      }, row);
    }
    // New helper method to find hidden events for a slot
  }, {
    key: "getHiddenEventsForSlot",
    value: function getHiddenEventsForSlot(segments, slot) {
      var allEventsInSlot = eventsInSlot(segments, slot);
      var rowSegments = eventLevels(segments).levels[0];
      var visibleEventsInSlot = rowSegments.filter(function(seg) {
        return isSegmentInSlot$1(seg, slot);
      }).map(function(seg) {
        return seg.event;
      });
      return allEventsInSlot.filter(function(event) {
        return !visibleEventsInSlot.some(function(visEvent) {
          return visEvent === event;
        });
      });
    }
  }, {
    key: "canRenderSlotEvent",
    value: function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments;
      return range$1(slot, slot + span).every(function(s) {
        var count = eventsInSlot(segments, s).length;
        return count === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function renderShowMore(segments, slot) {
      var _this = this;
      var _this$props2 = this.props, localizer2 = _this$props2.localizer, slotMetrics = _this$props2.slotMetrics, components2 = _this$props2.components;
      var events = slotMetrics.getEventsForSlot(slot);
      var remainingEvents = eventsInSlot(segments, slot);
      var count = remainingEvents.length;
      if (components2 !== null && components2 !== void 0 && components2.showMore) {
        var ShowMore = components2.showMore;
        var slotDate = slotMetrics.getDateForSlot(slot - 1);
        return count ? /* @__PURE__ */ React.createElement(ShowMore, {
          localizer: localizer2,
          slotDate,
          slot,
          count,
          events,
          remainingEvents
        }) : false;
      }
      return count ? /* @__PURE__ */ React.createElement("button", {
        type: "button",
        key: "sm_" + slot,
        className: clsx("rbc-button-link", "rbc-show-more"),
        onClick: function onClick(e) {
          return _this.showMore(slot, e);
        }
      }, localizer2.messages.showMore(count, remainingEvents, events)) : false;
    }
  }, {
    key: "showMore",
    value: function showMore2(slot, e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onShowMore(slot, e.target);
    }
  }]);
})(React.Component);
EventEndingRow.defaultProps = _objectSpread2({}, EventRowMixin.defaultProps);
var ScrollableWeekWrapper = function ScrollableWeekWrapper2(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ React.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, children);
};
var isSegmentInSlot2 = function isSegmentInSlot3(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var isEqual = function isEqual2(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};
function getSlotMetrics$1() {
  return memoizeOne(function(options) {
    var range2 = options.range, events = options.events, maxRows = options.maxRows, minRows = options.minRows, accessors = options.accessors, localizer2 = options.localizer;
    var _endOfRange = endOfRange({
      dateRange: range2,
      localizer: localizer2
    }), first = _endOfRange.first, last = _endOfRange.last;
    var segments = events.map(function(evt) {
      return eventSegments(evt, range2, accessors, localizer2);
    });
    var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)), levels = _eventLevels.levels, extra = _eventLevels.extra;
    var minEventRows = extra.length > 0 ? minRows - 1 : minRows;
    while (levels.length < minEventRows) levels.push([]);
    return {
      first,
      last,
      levels,
      extra,
      range: range2,
      slots: range2.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics$1();
        return metrics(_objectSpread2(_objectSpread2({}, options), args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range2[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date2) {
        return range2.find(function(r2) {
          return localizer2.isSameDate(r2, date2);
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function(seg) {
          return isSegmentInSlot2(seg, slot);
        }).map(function(seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior2(event) {
        return localizer2.continuesPrior(accessors.start(event), first);
      },
      continuesAfter: function continuesAfter2(event) {
        var start2 = accessors.start(event);
        var end2 = accessors.end(event);
        return localizer2.continuesAfter(start2, end2, last);
      }
    };
  }, isEqual);
}
var DateContentRow = /* @__PURE__ */ (function(_React$Component) {
  function DateContentRow2() {
    var _this;
    _classCallCheck(this, DateContentRow2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DateContentRow2, [].concat(args));
    _this.handleSelectSlot = function(slot) {
      var _this$props = _this.props, range2 = _this$props.range, onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range2.slice(slot.start, slot.end + 1), slot);
    };
    _this.handleShowMore = function(slot, target) {
      var _this$props2 = _this.props, range2 = _this$props2.range, onShowMore = _this$props2.onShowMore;
      var metrics = _this.slotMetrics(_this.props);
      var row = qsa(_this.containerRef.current, ".rbc-row-bg")[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range2[slot - 1], cell, slot, target);
    };
    _this.getContainer = function() {
      var container = _this.props.container;
      return container ? container() : _this.containerRef.current;
    };
    _this.renderHeadingCell = function(date2, index) {
      var _this$props3 = _this.props, renderHeader = _this$props3.renderHeader, getNow2 = _this$props3.getNow, localizer2 = _this$props3.localizer;
      return renderHeader({
        date: date2,
        key: "header_".concat(index),
        className: clsx("rbc-date-cell", localizer2.isSameDate(date2, getNow2()) && "rbc-now")
      });
    };
    _this.renderDummy = function() {
      var _this$props4 = _this.props, className = _this$props4.className, range2 = _this$props4.range, renderHeader = _this$props4.renderHeader, showAllEvents = _this$props4.showAllEvents;
      return /* @__PURE__ */ React.createElement("div", {
        className,
        ref: _this.containerRef
      }, /* @__PURE__ */ React.createElement("div", {
        className: clsx("rbc-row-content", showAllEvents && "rbc-row-content-scrollable")
      }, renderHeader && /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row",
        ref: _this.headingRowRef
      }, range2.map(_this.renderHeadingCell)), /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row",
        ref: _this.eventRowRef
      }, /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row-segment"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "rbc-event"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    };
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    _this.headingRowRef = /* @__PURE__ */ reactExports.createRef();
    _this.eventRowRef = /* @__PURE__ */ reactExports.createRef();
    _this.slotMetrics = getSlotMetrics$1();
    return _this;
  }
  _inherits(DateContentRow2, _React$Component);
  return _createClass(DateContentRow2, [{
    key: "getRowLimit",
    value: function getRowLimit() {
      var _this$headingRowRef;
      var eventHeight = height(this.eventRowRef.current);
      var headingHeight = (_this$headingRowRef = this.headingRowRef) !== null && _this$headingRowRef !== void 0 && _this$headingRowRef.current ? height(this.headingRowRef.current) : 0;
      var eventSpace = height(this.containerRef.current) - headingHeight;
      return Math.max(Math.floor(eventSpace / eventHeight), 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, date2 = _this$props5.date, rtl = _this$props5.rtl, range2 = _this$props5.range, className = _this$props5.className, selected = _this$props5.selected, selectable = _this$props5.selectable, renderForMeasure = _this$props5.renderForMeasure, accessors = _this$props5.accessors, getters = _this$props5.getters, components2 = _this$props5.components, getNow2 = _this$props5.getNow, renderHeader = _this$props5.renderHeader, onSelect = _this$props5.onSelect, localizer2 = _this$props5.localizer, onSelectStart = _this$props5.onSelectStart, onSelectEnd = _this$props5.onSelectEnd, onDoubleClick = _this$props5.onDoubleClick, onKeyPress = _this$props5.onKeyPress, resourceId = _this$props5.resourceId, longPressThreshold = _this$props5.longPressThreshold, isAllDay = _this$props5.isAllDay, resizable = _this$props5.resizable, showAllEvents = _this$props5.showAllEvents;
      if (renderForMeasure) return this.renderDummy();
      var metrics = this.slotMetrics(this.props);
      var levels = metrics.levels, extra = metrics.extra;
      var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
      var WeekWrapper = components2.weekWrapper;
      var eventRowProps = {
        selected,
        accessors,
        getters,
        localizer: localizer2,
        components: components2,
        onSelect,
        onDoubleClick,
        onKeyPress,
        resourceId,
        slotMetrics: metrics,
        resizable
      };
      return /* @__PURE__ */ React.createElement("div", {
        className,
        role: "rowgroup",
        ref: this.containerRef
      }, /* @__PURE__ */ React.createElement(BackgroundCells, {
        localizer: localizer2,
        date: date2,
        getNow: getNow2,
        rtl,
        range: range2,
        selectable,
        container: this.getContainer,
        getters,
        onSelectStart,
        onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components: components2,
        longPressThreshold,
        resourceId
      }), /* @__PURE__ */ React.createElement("div", {
        className: clsx("rbc-row-content", showAllEvents && "rbc-row-content-scrollable"),
        role: "row"
      }, renderHeader && /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, range2.map(this.renderHeadingCell)), /* @__PURE__ */ React.createElement(ScrollableWeekComponent, null, /* @__PURE__ */ React.createElement(WeekWrapper, Object.assign({
        isAllDay
      }, eventRowProps, {
        rtl: this.props.rtl
      }), levels.map(function(segs, idx) {
        return /* @__PURE__ */ React.createElement(EventRow, Object.assign({
          key: idx,
          segments: segs
        }, eventRowProps));
      }), !!extra.length && /* @__PURE__ */ React.createElement(EventEndingRow, Object.assign({
        segments: extra,
        onShowMore: this.handleShowMore
      }, eventRowProps))))));
    }
  }]);
})(React.Component);
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var Header = function Header2(_ref) {
  var label = _ref.label;
  return /* @__PURE__ */ React.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, label);
};
var DateHeader = function DateHeader2(_ref) {
  var label = _ref.label, drilldownView = _ref.drilldownView, onDrillDown = _ref.onDrillDown;
  if (!drilldownView) {
    return /* @__PURE__ */ React.createElement("span", null, label);
  }
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: onDrillDown
  }, label);
};
var _excluded$6 = ["date", "className"];
var eventsForWeek = function eventsForWeek2(evts, start2, end2, accessors, localizer2) {
  return evts.filter(function(e) {
    return inRange(e, start2, end2, accessors, localizer2);
  });
};
var MonthView = /* @__PURE__ */ (function(_React$Component) {
  function MonthView2() {
    var _this;
    _classCallCheck(this, MonthView2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MonthView2, [].concat(_args));
    _this.getContainer = function() {
      return _this.containerRef.current;
    };
    _this.renderWeek = function(week, weekIdx) {
      var _this$props = _this.props, events = _this$props.events, components2 = _this$props.components, selectable = _this$props.selectable, getNow2 = _this$props.getNow, selected = _this$props.selected, date2 = _this$props.date, localizer2 = _this$props.localizer, longPressThreshold = _this$props.longPressThreshold, accessors = _this$props.accessors, getters = _this$props.getters, showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state, needLimitMeasure = _this$state.needLimitMeasure, rowLimit = _this$state.rowLimit;
      var weeksEvents = eventsForWeek(_toConsumableArray(events), week[0], week[week.length - 1], accessors, localizer2);
      var sorted = sortWeekEvents(weeksEvents, accessors, localizer2);
      return /* @__PURE__ */ React.createElement(DateContentRow, {
        key: weekIdx,
        ref: weekIdx === 0 ? _this.slotRowRef : void 0,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow2,
        date: date2,
        range: week,
        events: sorted,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected,
        selectable,
        components: components2,
        accessors,
        getters,
        localizer: localizer2,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents
      });
    };
    _this.readerDateHeading = function(_ref) {
      var date2 = _ref.date, className = _ref.className, props = _objectWithoutProperties(_ref, _excluded$6);
      var _this$props2 = _this.props, currentDate = _this$props2.date, getDrilldownView = _this$props2.getDrilldownView, localizer2 = _this$props2.localizer;
      var isOffRange = localizer2.neq(currentDate, date2, "month");
      var isCurrent = localizer2.isSameDate(date2, currentDate);
      var drilldownView = getDrilldownView(date2);
      var label = localizer2.format(date2, "dateFormat");
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return /* @__PURE__ */ React.createElement("div", Object.assign({}, props, {
        className: clsx(className, isOffRange && "rbc-off-range", isCurrent && "rbc-current"),
        role: "cell"
      }), /* @__PURE__ */ React.createElement(DateHeaderComponent, {
        label,
        date: date2,
        drilldownView,
        isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date2, drilldownView, e);
        }
      }));
    };
    _this.handleSelectSlot = function(range2, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range2);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function() {
        return _this.selectDates(slotInfo);
      });
    };
    _this.handleHeadingClick = function(date2, view, e) {
      e.preventDefault();
      _this.clearSelection();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props3 = _this.props, popup = _this$props3.popup, onDrillDown = _this$props3.onDrillDown, onShowMore = _this$props3.onShowMore, getDrilldownView = _this$props3.getDrilldownView, doShowMoreDrillDown = _this$props3.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position$1 = position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: position$1,
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      date: null
    };
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    _this.slotRowRef = /* @__PURE__ */ reactExports.createRef();
    _this._bgRows = [];
    _this._pendingSelection = [];
    return _this;
  }
  _inherits(MonthView2, _React$Component);
  return _createClass(MonthView2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener("resize", this._resizeListener = function() {
        if (!running) {
          request(function() {
            running = false;
            _this2.setState({
              needLimitMeasure: true
            });
          });
        }
      }, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this._resizeListener, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, date2 = _this$props4.date, localizer2 = _this$props4.localizer, className = _this$props4.className, month2 = localizer2.visibleDays(date2, localizer2), weeks = chunk(month2, 7);
      this._weekCount = weeks.length;
      return /* @__PURE__ */ React.createElement("div", {
        className: clsx("rbc-month-view", className),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /* @__PURE__ */ React.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders(row) {
      var _this$props5 = this.props, localizer2 = _this$props5.localizer, components2 = _this$props5.components;
      var first = row[0];
      var last = row[row.length - 1];
      var HeaderComponent = components2.header || Header;
      return localizer2.range(first, last, "day").map(function(day2, idx) {
        return /* @__PURE__ */ React.createElement("div", {
          key: "header_" + idx,
          className: "rbc-header"
        }, /* @__PURE__ */ React.createElement(HeaderComponent, {
          date: day2,
          localizer: localizer2,
          label: localizer2.format(day2, "weekdayFormat")
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay, _this$state2, _this3 = this;
      var overlay = (_this$state$overlay = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props6 = this.props, accessors = _this$props6.accessors, localizer2 = _this$props6.localizer, components2 = _this$props6.components, getters = _this$props6.getters, selected = _this$props6.selected, popupOffset = _this$props6.popupOffset, handleDragStart = _this$props6.handleDragStart;
      var onHide2 = function onHide22() {
        return _this3.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ React.createElement(PopOverlay, {
        overlay,
        accessors,
        localizer: localizer2,
        components: components2,
        getters,
        selected,
        popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide2
      });
    }
  }, {
    key: "measureRowLimit",
    value: function measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function selectDates(slotInfo) {
      var slots = this._pendingSelection.slice();
      this._pendingSelection = [];
      slots.sort(function(a, b) {
        return +a - +b;
      });
      var start2 = new Date(slots[0]);
      var end2 = new Date(slots[slots.length - 1]);
      end2.setDate(slots[slots.length - 1].getDate() + 1);
      notify(this.props.onSelectSlot, {
        slots,
        start: start2,
        end: end2,
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var date2 = _ref2.date, localizer2 = _ref2.localizer;
      return {
        date: date2,
        needLimitMeasure: localizer2.neq(date2, state.date, "month")
      };
    }
  }]);
})(React.Component);
MonthView.range = function(date2, _ref3) {
  var localizer2 = _ref3.localizer;
  var start2 = localizer2.firstVisibleDay(date2, localizer2);
  var end2 = localizer2.lastVisibleDay(date2, localizer2);
  return {
    start: start2,
    end: end2
  };
};
MonthView.navigate = function(date2, action, _ref4) {
  var localizer2 = _ref4.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -1, "month");
    case navigate.NEXT:
      return localizer2.add(date2, 1, "month");
    default:
      return date2;
  }
};
MonthView.title = function(date2, _ref5) {
  var localizer2 = _ref5.localizer;
  return localizer2.format(date2, "monthHeaderFormat");
};
var getKey2 = function getKey22(_ref) {
  var min2 = _ref.min, max2 = _ref.max, step = _ref.step, slots = _ref.slots, localizer2 = _ref.localizer;
  return "".concat(+localizer2.startOf(min2, "minutes")) + "".concat(+localizer2.startOf(max2, "minutes")) + "".concat(step, "-").concat(slots);
};
function getSlotMetrics(_ref2) {
  var start2 = _ref2.min, end2 = _ref2.max, step = _ref2.step, timeslots = _ref2.timeslots, localizer2 = _ref2.localizer;
  var key = getKey2({
    step,
    localizer: localizer2
  });
  var totalMin = 1 + localizer2.getTotalMin(start2, end2);
  var minutesFromMidnight = localizer2.getMinutesFromMidnight(start2);
  var numGroups = Math.ceil((totalMin - 1) / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots);
  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);
    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step;
      slots[slotIdx] = groups[grp][slot] = localizer2.getSlotDate(start2, minutesFromMidnight, minFromStart);
    }
  }
  var lastSlotMinFromStart = slots.length * step;
  slots.push(localizer2.getSlotDate(start2, minutesFromMidnight, lastSlotMinFromStart));
  function positionFromDate(date2) {
    var diff2 = localizer2.diff(start2, date2, "minutes") + localizer2.getDstOffset(start2, date2);
    return Math.min(diff2, totalMin);
  }
  return {
    groups,
    update: function update(args) {
      if (getKey2(args) !== key) return getSlotMetrics(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date2, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return localizer2.inRange(date2, groups[groupIndex][0], nextGroup ? nextGroup[0] : end2, "minutes");
    },
    nextSlot: function nextSlot(slot2) {
      var next = slots[Math.min(slots.findIndex(function(s) {
        return s === slot2 || localizer2.eq(s, slot2);
      }) + 1, slots.length - 1)];
      if (localizer2.eq(next, slot2)) next = localizer2.add(slot2, step, "minutes");
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot2 = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot2];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range2 = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range2);
    },
    closestSlotFromDate: function closestSlotFromDate(date2) {
      var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (localizer2.lt(date2, start2, "minutes")) return slots[0];
      if (localizer2.gt(date2, end2, "minutes")) return slots[slots.length - 1];
      var diffMins = localizer2.diff(start2, date2, "minutes");
      return slots[(diffMins - diffMins % step) / step + offset2];
    },
    startsBeforeDay: function startsBeforeDay(date2) {
      return localizer2.lt(date2, start2, "day");
    },
    startsAfterDay: function startsAfterDay(date2) {
      return localizer2.gt(date2, end2, "day");
    },
    startsBefore: function startsBefore(date2) {
      return localizer2.lt(localizer2.merge(start2, date2), start2, "minutes");
    },
    startsAfter: function startsAfter(date2) {
      return localizer2.gt(localizer2.merge(end2, date2), end2, "minutes");
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = localizer2.min(end2, localizer2.max(start2, rangeStart));
      if (!ignoreMax) rangeEnd = localizer2.min(end2, localizer2.max(start2, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top2 = rangeEndMin > step * numSlots && !localizer2.eq(end2, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top: top2,
        height: rangeEndMin / (step * numSlots) * 100 - top2,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top2 = rangeStartMin / (step * numSlots) * 100;
      return top2;
    }
  };
}
var Event = /* @__PURE__ */ (function() {
  function Event2(data, _ref) {
    var accessors = _ref.accessors, slotMetrics = _ref.slotMetrics;
    _classCallCheck(this, Event2);
    var _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)), start2 = _slotMetrics$getRange.start, startDate = _slotMetrics$getRange.startDate, end2 = _slotMetrics$getRange.end, endDate = _slotMetrics$getRange.endDate, top2 = _slotMetrics$getRange.top, height2 = _slotMetrics$getRange.height;
    this.start = start2;
    this.end = end2;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top2;
    this.height = height2;
    this.data = data;
  }
  return _createClass(Event2, [{
    key: "_width",
    get: function get() {
      if (this.rows) {
        var columns = this.rows.reduce(
          function(max2, row) {
            return Math.max(max2, row.leaves.length + 1);
          },
          // add itself
          0
        ) + 1;
        return 100 / columns;
      }
      if (this.leaves) {
        var availableWidth = 100 - this.container._width;
        return availableWidth / (this.leaves.length + 1);
      }
      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function get() {
      var noOverlap2 = this._width;
      var overlap = Math.min(100, this._width * 1.7);
      if (this.rows) {
        return overlap;
      }
      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap2;
      }
      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap2 : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      if (this.rows) return 0;
      if (this.leaves) return this.container._width;
      var _this$row = this.row, leaves = _this$row.leaves, xOffset = _this$row.xOffset, _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
})();
function onSameRow(a, b, minimumStartDifference) {
  return (
    // Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}
function sortByRender(events) {
  var sortedByTime = sortBy(events, ["startMs", function(e) {
    return -e.endMs;
  }]);
  var sorted = [];
  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);
    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i];
      if (event.endMs > test.startMs) continue;
      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      }
      break;
    }
  }
  return sorted;
}
function getStyledEvents$1(_ref2) {
  var events = _ref2.events, minimumStartDifference = _ref2.minimumStartDifference, slotMetrics = _ref2.slotMetrics, accessors = _ref2.accessors;
  var proxies = events.map(function(event) {
    return new Event(event, {
      slotMetrics,
      accessors
    });
  });
  var eventsInRenderOrder = sortByRender(proxies);
  var containerEvents = [];
  var _loop = function _loop2() {
    var event = eventsInRenderOrder[i];
    var container = containerEvents.find(function(c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    });
    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return 1;
    }
    event.container = container;
    var row = null;
    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }
    if (row) {
      row.leaves.push(event);
      event.row = row;
    } else {
      event.leaves = [];
      container.rows.push(event);
    }
  };
  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    if (_loop()) continue;
  }
  return eventsInRenderOrder.map(function(event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function noOverlap(_ref) {
  var events = _ref.events, minimumStartDifference = _ref.minimumStartDifference, slotMetrics = _ref.slotMetrics, accessors = _ref.accessors;
  var styledEvents = getStyledEvents$1({
    events,
    minimumStartDifference,
    slotMetrics,
    accessors
  });
  styledEvents.sort(function(a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;
    else if (a.height !== b.height) return a.top + a.height < b.top + b.height ? 1 : -1;
    else return 0;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }
  for (var _i2 = 0; _i2 < styledEvents.length - 1; ++_i2) {
    var se1 = styledEvents[_i2];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i2 + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 >= y1 && y4 <= y2 || y4 > y1 && y4 <= y2 || y3 >= y1 && y3 < y2) {
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }
  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var se = styledEvents[_i4];
    var bitmap = [];
    for (var _j2 = 0; _j2 < 100; ++_j2) bitmap.push(1);
    for (var _j4 = 0; _j4 < se.friends.length; ++_j4) if (se.friends[_j4].idx !== void 0) bitmap[se.friends[_j4].idx] = 0;
    se.idx = bitmap.indexOf(1);
  }
  for (var _i6 = 0; _i6 < styledEvents.length; ++_i6) {
    var size2 = 0;
    if (styledEvents[_i6].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i6], 0, allFriends);
    size2 = 100 / (maxIdx + 1);
    styledEvents[_i6].size = size2;
    for (var _j6 = 0; _j6 < allFriends.length; ++_j6) allFriends[_j6].size = size2;
  }
  for (var _i8 = 0; _i8 < styledEvents.length; ++_i8) {
    var e = styledEvents[_i8];
    e.style.left = e.idx * e.size;
    var _maxIdx = 0;
    for (var _j8 = 0; _j8 < e.friends.length; ++_j8) {
      var idx = e.friends[_j8].idx;
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size;
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(".concat(e.size, "% - ").concat(padding, "px)");
    e.style.height = "calc(".concat(e.style.height, "% - 2px)");
    e.style.xOffset = "calc(".concat(e.style.left, "% + ").concat(padding, "px)");
  }
  return styledEvents;
}
var DefaultAlgorithms = {
  overlap: getStyledEvents$1,
  "no-overlap": noOverlap
};
function isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
}
function getStyledEvents(_ref) {
  _ref.events;
  _ref.minimumStartDifference;
  _ref.slotMetrics;
  _ref.accessors;
  var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];
  if (!isFunction(algorithm)) {
    return [];
  }
  return algorithm.apply(this, arguments);
}
var TimeSlotGroup = /* @__PURE__ */ (function(_Component) {
  function TimeSlotGroup2() {
    _classCallCheck(this, TimeSlotGroup2);
    return _callSuper(this, TimeSlotGroup2, arguments);
  }
  _inherits(TimeSlotGroup2, _Component);
  return _createClass(TimeSlotGroup2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, renderSlot = _this$props.renderSlot, resource = _this$props.resource, group = _this$props.group, getters = _this$props.getters, _this$props$component = _this$props.components, _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component, _this$props$component3 = _this$props$component2.timeSlotWrapper, Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;
      var groupProps = getters ? getters.slotGroupProp(group) : {};
      return /* @__PURE__ */ React.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, groupProps), group.map(function(value, idx) {
        var slotProps = getters ? getters.slotProp(value, resource) : {};
        return /* @__PURE__ */ React.createElement(Wrapper, {
          key: idx,
          value,
          resource
        }, /* @__PURE__ */ React.createElement("div", Object.assign({}, slotProps, {
          className: clsx("rbc-time-slot", slotProps.className)
        }), renderSlot && renderSlot(value, idx)));
      }));
    }
  }]);
})(reactExports.Component);
function stringifyPercent(v) {
  return typeof v === "string" ? v : v + "%";
}
function TimeGridEvent(props) {
  var style2 = props.style, className = props.className, event = props.event, accessors = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesPrior2 = props.continuesPrior, continuesAfter2 = props.continuesAfter, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event2 = _props$components.event, EventWrapper = _props$components.eventWrapper;
  var title = accessors.title(event);
  var tooltip = accessors.tooltip(event);
  var end2 = accessors.end(event);
  var start2 = accessors.start(event);
  var userProps = getters.eventProp(event, start2, end2, selected);
  var inner = [/* @__PURE__ */ React.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), /* @__PURE__ */ React.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event2 ? /* @__PURE__ */ React.createElement(Event2, {
    event,
    title
  }) : title)];
  var height2 = style2.height, top2 = style2.top, width = style2.width, xOffset = style2.xOffset;
  var eventStyle = _objectSpread2(_objectSpread2({}, userProps.style), {}, _defineProperty({
    top: stringifyPercent(top2),
    height: stringifyPercent(height2),
    width: stringifyPercent(width)
  }, rtl ? "right" : "left", stringifyPercent(xOffset)));
  return /* @__PURE__ */ React.createElement(EventWrapper, Object.assign({
    type: "time"
  }, props), /* @__PURE__ */ React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick,
    onDoubleClick,
    style: eventStyle,
    onKeyDown: onKeyPress,
    title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
    className: clsx(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
      "rbc-selected": selected,
      "rbc-event-continues-earlier": continuesPrior2,
      "rbc-event-continues-later": continuesAfter2
    })
  }, inner));
}
var DayColumnWrapper = function DayColumnWrapper2(_ref) {
  var children = _ref.children, className = _ref.className, style2 = _ref.style, innerRef = _ref.innerRef;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style: style2,
    ref: innerRef
  }, children);
};
var DayColumnWrapper$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  return /* @__PURE__ */ React.createElement(DayColumnWrapper, Object.assign({}, props, {
    innerRef: ref
  }));
});
var _excluded$5 = ["dayProp"], _excluded2$1 = ["eventContainerWrapper", "timeIndicatorWrapper"];
var DayColumn = /* @__PURE__ */ (function(_React$Component) {
  function DayColumn2() {
    var _this;
    _classCallCheck(this, DayColumn2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DayColumn2, [].concat(_args));
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;
    _this.renderEvents = function(_ref) {
      var events = _ref.events, isBackgroundEvent = _ref.isBackgroundEvent;
      var _this$props = _this.props, rtl = _this$props.rtl, selected = _this$props.selected, accessors = _this$props.accessors, localizer2 = _this$props.localizer, getters = _this$props.getters, components2 = _this$props.components, step = _this$props.step, timeslots = _this$props.timeslots, dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm, resizable = _this$props.resizable;
      var _this2 = _this, slotMetrics = _this2.slotMetrics;
      var messages2 = localizer2.messages;
      var styledEvents = getStyledEvents({
        events,
        accessors,
        slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm
      });
      return styledEvents.map(function(_ref2, idx) {
        var _accessors$eventId;
        var event = _ref2.event, style2 = _ref2.style;
        var end2 = accessors.end(event);
        var start2 = accessors.start(event);
        var key = (_accessors$eventId = accessors.eventId(event)) !== null && _accessors$eventId !== void 0 ? _accessors$eventId : "evt_" + idx;
        var format2 = "eventTimeRangeFormat";
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start2);
        var startsAfterDay = slotMetrics.startsAfterDay(end2);
        if (startsBeforeDay) format2 = "eventTimeRangeEndFormat";
        else if (startsAfterDay) format2 = "eventTimeRangeStartFormat";
        if (startsBeforeDay && startsAfterDay) label = messages2.allDay;
        else label = localizer2.format({
          start: start2,
          end: end2
        }, format2);
        var continuesPrior2 = startsBeforeDay || slotMetrics.startsBefore(start2);
        var continuesAfter2 = startsAfterDay || slotMetrics.startsAfter(end2);
        return /* @__PURE__ */ React.createElement(TimeGridEvent, {
          style: style2,
          event,
          label,
          key,
          getters,
          rtl,
          components: components2,
          continuesPrior: continuesPrior2,
          continuesAfter: continuesAfter2,
          accessors,
          resource: _this.props.resource,
          selected: isSelected(event, selected),
          onClick: function onClick(e) {
            return _this._select(_objectSpread2(_objectSpread2(_objectSpread2({}, event), _this.props.resource && {
              sourceResource: _this.props.resource
            }), isBackgroundEvent && {
              isBackgroundEvent: true
            }), e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          isBackgroundEvent,
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable
        });
      });
    };
    _this._selectable = function() {
      var node = _this.containerRef.current;
      var _this$props2 = _this.props, longPressThreshold = _this$props2.longPressThreshold, localizer2 = _this$props2.localizer;
      var selector = _this._selector = new Selection(function() {
        return node;
      }, {
        longPressThreshold
      });
      var maybeSelect = function maybeSelect2(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start2 = state.startDate, end2 = state.endDate;
        if (onSelecting) {
          if (localizer2.eq(current.startDate, start2, "minutes") && localizer2.eq(current.endDate, end2, "minutes") || onSelecting({
            start: start2,
            end: end2,
            resourceId: _this.props.resource
          }) === false) return;
        }
        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };
      var selectionState = function selectionState2(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }
        var initialSlot = _this._initialSlot;
        if (localizer2.lte(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (localizer2.gt(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }
        var selectRange = _this.slotMetrics.getRange(localizer2.min(initialSlot, currentSlot), localizer2.max(initialSlot, currentSlot));
        return _objectSpread2(_objectSpread2({}, selectRange), {}, {
          selecting: true,
          top: "".concat(selectRange.top, "%"),
          height: "".concat(selectRange.height, "%")
        });
      };
      var selectorClicksHandler = function selectorClicksHandler2(box, actionType) {
        if (!isEvent(_this.containerRef.current, box)) {
          var _selectionState = selectionState(box), startDate = _selectionState.startDate, endDate = _selectionState.endDate;
          _this._selectSlot({
            startDate,
            endDate,
            action: actionType,
            box
          });
        }
        _this.setState({
          selecting: false
        });
      };
      selector.on("selecting", maybeSelect);
      selector.on("selectStart", maybeSelect);
      selector.on("beforeSelect", function(box) {
        if (_this.props.selectable !== "ignoreEvents") return;
        return !isEvent(_this.containerRef.current, box);
      });
      selector.on("click", function(box) {
        return selectorClicksHandler(box, "click");
      });
      selector.on("doubleClick", function(box) {
        return selectorClicksHandler(box, "doubleClick");
      });
      selector.on("select", function(bounds) {
        if (_this.state.selecting) {
          _this._selectSlot(_objectSpread2(_objectSpread2({}, _this.state), {}, {
            action: "select",
            bounds
          }));
          _this.setState({
            selecting: false
          });
        }
      });
      selector.on("reset", function() {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };
    _this._teardownSelectable = function() {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    };
    _this._selectSlot = function(_ref3) {
      var startDate = _ref3.startDate, endDate = _ref3.endDate, action = _ref3.action, bounds = _ref3.bounds, box = _ref3.box;
      var current = startDate, slots = [];
      while (_this.props.localizer.lte(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1e3);
      }
      notify(_this.props.onSelectSlot, {
        slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action,
        bounds,
        box
      });
    };
    _this._select = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this._doubleClick = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this._keyPress = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.slotMetrics = getSlotMetrics(_this.props);
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    return _this;
  }
  _inherits(DayColumn2, _React$Component);
  return _createClass(DayColumn2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
      this.clearTimeIndicatorInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.selectable && !prevProps.selectable) this._selectable();
      if (!this.props.selectable && prevProps.selectable) this._teardownSelectable();
      var _this$props3 = this.props, getNow2 = _this$props3.getNow, isNow = _this$props3.isNow, localizer2 = _this$props3.localizer, date2 = _this$props3.date, min2 = _this$props3.min, max2 = _this$props3.max;
      var getNowChanged = localizer2.neq(prevProps.getNow(), getNow2(), "minutes");
      if (prevProps.isNow !== isNow || getNowChanged) {
        this.clearTimeIndicatorInterval();
        if (isNow) {
          var tail = !getNowChanged && localizer2.eq(prevProps.date, date2, "minutes") && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(tail);
        }
      } else if (isNow && (localizer2.neq(prevProps.min, min2, "minutes") || localizer2.neq(prevProps.max, max2, "minutes"))) {
        this.positionTimeIndicator();
      }
    }
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function setTimeIndicatorPositionUpdateInterval() {
      var _this3 = this;
      var tail = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator();
      }
      this._timeIndicatorTimeout = window.setTimeout(function() {
        _this3.intervalTriggered = true;
        _this3.positionTimeIndicator();
        _this3.setTimeIndicatorPositionUpdateInterval();
      }, 6e4);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function clearTimeIndicatorInterval() {
      this.intervalTriggered = false;
      window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function positionTimeIndicator() {
      var _this$props4 = this.props, min2 = _this$props4.min, max2 = _this$props4.max, getNow2 = _this$props4.getNow;
      var current = getNow2();
      if (current >= min2 && current <= max2) {
        var top2 = this.slotMetrics.getCurrentTimePosition(current);
        this.intervalTriggered = true;
        this.setState({
          timeIndicatorPosition: top2
        });
      } else {
        this.clearTimeIndicatorInterval();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, date2 = _this$props5.date, max2 = _this$props5.max, rtl = _this$props5.rtl, isNow = _this$props5.isNow, resource = _this$props5.resource, accessors = _this$props5.accessors, localizer2 = _this$props5.localizer, _this$props5$getters = _this$props5.getters, dayProp = _this$props5$getters.dayProp, getters = _objectWithoutProperties(_this$props5$getters, _excluded$5), _this$props5$componen = _this$props5.components, EventContainer = _this$props5$componen.eventContainerWrapper, TimeIndicatorWrapper = _this$props5$componen.timeIndicatorWrapper, components2 = _objectWithoutProperties(_this$props5$componen, _excluded2$1);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var slotMetrics = this.slotMetrics;
      var _this$state = this.state, selecting = _this$state.selecting, top2 = _this$state.top, height2 = _this$state.height, startDate = _this$state.startDate, endDate = _this$state.endDate;
      var selectDates = {
        start: startDate,
        end: endDate
      };
      var _dayProp = dayProp(max2, resource), className = _dayProp.className, style2 = _dayProp.style;
      var timeIndicatorProps = {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      };
      var DayColumnWrapperComponent = components2.dayColumnWrapper || DayColumnWrapper$1;
      return /* @__PURE__ */ React.createElement(DayColumnWrapperComponent, {
        ref: this.containerRef,
        date: date2,
        style: style2,
        className: clsx(
          className,
          "rbc-day-slot",
          "rbc-time-column",
          isNow && "rbc-now",
          isNow && "rbc-today",
          // WHY
          selecting && "rbc-slot-selecting"
        ),
        slotMetrics,
        resource
      }, slotMetrics.groups.map(function(grp, idx) {
        return /* @__PURE__ */ React.createElement(TimeSlotGroup, {
          key: idx,
          group: grp,
          resource,
          getters,
          components: components2
        });
      }), /* @__PURE__ */ React.createElement(EventContainer, {
        localizer: localizer2,
        resource,
        accessors,
        getters,
        components: components2,
        slotMetrics
      }, /* @__PURE__ */ React.createElement("div", {
        className: clsx("rbc-events-container", rtl && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: true
      }), this.renderEvents({
        events: this.props.events
      }))), selecting && /* @__PURE__ */ React.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: top2,
          height: height2
        }
      }, /* @__PURE__ */ React.createElement("span", null, localizer2.format(selectDates, "selectRangeFormat"))), isNow && this.intervalTriggered && /* @__PURE__ */ React.createElement(TimeIndicatorWrapper, timeIndicatorProps, /* @__PURE__ */ React.createElement("div", timeIndicatorProps)));
    }
  }]);
})(React.Component);
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var ResourceHeader = function ResourceHeader2(_ref) {
  var label = _ref.label;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, label);
};
var TimeGridHeader = /* @__PURE__ */ (function(_React$Component) {
  function TimeGridHeader2() {
    var _this;
    _classCallCheck(this, TimeGridHeader2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimeGridHeader2, [].concat(args));
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.renderRow = function(resource) {
      var _this$props = _this.props, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, getNow2 = _this$props.getNow, range2 = _this$props.range, getters = _this$props.getters, localizer2 = _this$props.localizer, accessors = _this$props.accessors, components2 = _this$props.components, resizable = _this$props.resizable;
      var resourceId = accessors.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function(event) {
        return accessors.resource(event) === resourceId;
      }) : events;
      return /* @__PURE__ */ React.createElement(DateContentRow, {
        isAllDay: true,
        rtl,
        getNow: getNow2,
        minRows: 2,
        maxRows: _this.props.allDayMaxRows + 1,
        range: range2,
        events: eventsToDisplay,
        resourceId,
        className: "rbc-allday-cell",
        selectable,
        selected: _this.props.selected,
        components: components2,
        accessors,
        getters,
        localizer: localizer2,
        onSelect: _this.props.onSelectEvent,
        onShowMore: _this.props.onShowMore,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable
      });
    };
    return _this;
  }
  _inherits(TimeGridHeader2, _React$Component);
  return _createClass(TimeGridHeader2, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range2) {
      var _this2 = this;
      var _this$props2 = this.props, localizer2 = _this$props2.localizer, getDrilldownView = _this$props2.getDrilldownView, getNow2 = _this$props2.getNow, dayProp = _this$props2.getters.dayProp, _this$props2$componen = _this$props2.components.header, HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
      var today = getNow2();
      return range2.map(function(date2, i) {
        var drilldownView = getDrilldownView(date2);
        var label = localizer2.format(date2, "dayFormat");
        var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
        var header = /* @__PURE__ */ React.createElement(HeaderComponent, {
          date: date2,
          label,
          localizer: localizer2
        });
        return /* @__PURE__ */ React.createElement("div", {
          key: i,
          style: style2,
          className: clsx("rbc-header", className, localizer2.isSameDate(date2, today) && "rbc-today")
        }, drilldownView ? /* @__PURE__ */ React.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          }
        }, header) : /* @__PURE__ */ React.createElement("span", null, header));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props3 = this.props, width = _this$props3.width, rtl = _this$props3.rtl, resources = _this$props3.resources, range2 = _this$props3.range, events = _this$props3.events, getNow2 = _this$props3.getNow, accessors = _this$props3.accessors, selectable = _this$props3.selectable, components2 = _this$props3.components, getters = _this$props3.getters, scrollRef = _this$props3.scrollRef, localizer2 = _this$props3.localizer, isOverflowing = _this$props3.isOverflowing, _this$props3$componen = _this$props3.components, TimeGutterHeader = _this$props3$componen.timeGutterHeader, _this$props3$componen2 = _this$props3$componen.resourceHeader, ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2, resizable = _this$props3.resizable;
      var style2 = {};
      if (isOverflowing) {
        style2[rtl ? "marginLeft" : "marginRight"] = "".concat(scrollbarSize() - 1, "px");
      }
      var groupedEvents = resources.groupEvents(events);
      return /* @__PURE__ */ React.createElement("div", {
        style: style2,
        ref: scrollRef,
        className: clsx("rbc-time-header", isOverflowing && "rbc-overflowing")
      }, /* @__PURE__ */ React.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && /* @__PURE__ */ React.createElement(TimeGutterHeader, null)), resources.map(function(_ref, idx) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
        return /* @__PURE__ */ React.createElement("div", {
          className: "rbc-time-header-content",
          key: id || idx
        }, resource && /* @__PURE__ */ React.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(idx)
        }, /* @__PURE__ */ React.createElement("div", {
          className: "rbc-header"
        }, /* @__PURE__ */ React.createElement(ResourceHeaderComponent, {
          index: idx,
          label: accessors.resourceTitle(resource),
          resource
        }))), /* @__PURE__ */ React.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range2.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, _this3.renderHeaderCells(range2)), /* @__PURE__ */ React.createElement(DateContentRow, {
          isAllDay: true,
          rtl,
          getNow: getNow2,
          minRows: 2,
          maxRows: _this3.props.allDayMaxRows + 1,
          range: range2,
          events: groupedEvents.get(id) || [],
          resourceId: resource && id,
          className: "rbc-allday-cell",
          selectable,
          selected: _this3.props.selected,
          components: components2,
          accessors,
          getters,
          localizer: localizer2,
          onSelect: _this3.props.onSelectEvent,
          onShowMore: _this3.props.onShowMore,
          onDoubleClick: _this3.props.onDoubleClickEvent,
          onKeyDown: _this3.props.onKeyPressEvent,
          onSelectSlot: _this3.props.onSelectSlot,
          longPressThreshold: _this3.props.longPressThreshold,
          resizable
        }));
      }));
    }
  }]);
})(React.Component);
var TimeGridHeaderResources = /* @__PURE__ */ (function(_React$Component) {
  function TimeGridHeaderResources2() {
    var _this;
    _classCallCheck(this, TimeGridHeaderResources2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimeGridHeaderResources2, [].concat(args));
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    return _this;
  }
  _inherits(TimeGridHeaderResources2, _React$Component);
  return _createClass(TimeGridHeaderResources2, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range2) {
      var _this2 = this;
      var _this$props = this.props, localizer2 = _this$props.localizer, getDrilldownView = _this$props.getDrilldownView, getNow2 = _this$props.getNow, dayProp = _this$props.getters.dayProp, _this$props$component = _this$props.components, _this$props$component2 = _this$props$component.header, HeaderComponent = _this$props$component2 === void 0 ? Header : _this$props$component2, _this$props$component3 = _this$props$component.resourceHeader, ResourceHeaderComponent = _this$props$component3 === void 0 ? ResourceHeader : _this$props$component3, resources = _this$props.resources, accessors = _this$props.accessors, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, components2 = _this$props.components, getters = _this$props.getters, resizable = _this$props.resizable;
      var today = getNow2();
      var groupedEvents = resources.groupEvents(events);
      return range2.map(function(date2, idx) {
        var drilldownView = getDrilldownView(date2);
        var label = localizer2.format(date2, "dayFormat");
        var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
        var header = /* @__PURE__ */ React.createElement(HeaderComponent, {
          date: date2,
          label,
          localizer: localizer2
        });
        return /* @__PURE__ */ React.createElement("div", {
          key: idx,
          className: "rbc-time-header-content rbc-resource-grouping"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range2.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, /* @__PURE__ */ React.createElement("div", {
          style: style2,
          className: clsx("rbc-header", className, localizer2.isSameDate(date2, today) && "rbc-today")
        }, drilldownView ? /* @__PURE__ */ React.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          }
        }, header) : /* @__PURE__ */ React.createElement("span", null, header))), /* @__PURE__ */ React.createElement("div", {
          className: "rbc-row"
        }, resources.map(function(_ref, idx2) {
          var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
          return /* @__PURE__ */ React.createElement("div", {
            key: "resource_".concat(id, "_").concat(idx2),
            className: clsx("rbc-header", className, localizer2.isSameDate(date2, today) && "rbc-today")
          }, /* @__PURE__ */ React.createElement(ResourceHeaderComponent, {
            index: idx2,
            label: accessors.resourceTitle(resource),
            resource
          }));
        })), /* @__PURE__ */ React.createElement("div", {
          className: "rbc-row rbc-m-b-negative-3 rbc-h-full"
        }, resources.map(function(_ref3, idx2) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], resource = _ref4[1];
          var filteredEvents = (groupedEvents.get(id) || []).filter(function(event) {
            return localizer2.isSameDate(event.start, date2) || localizer2.isSameDate(event.end, date2);
          });
          return /* @__PURE__ */ React.createElement(DateContentRow, {
            key: "resource_".concat(id, "_").concat(idx2),
            isAllDay: true,
            rtl,
            getNow: getNow2,
            minRows: 2,
            maxRows: _this2.props.allDayMaxRows + 1,
            range: [date2],
            events: filteredEvents,
            resourceId: resource && id,
            className: "rbc-allday-cell",
            selectable,
            selected: _this2.props.selected,
            components: components2,
            accessors,
            getters,
            localizer: localizer2,
            onSelect: _this2.props.onSelectEvent,
            onShowMore: _this2.props.onShowMore,
            onDoubleClick: _this2.props.onDoubleClickEvent,
            onKeyDown: _this2.props.onKeyPressEvent,
            onSelectSlot: _this2.props.onSelectSlot,
            longPressThreshold: _this2.props.longPressThreshold,
            resizable
          });
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, width = _this$props2.width, rtl = _this$props2.rtl, range2 = _this$props2.range, scrollRef = _this$props2.scrollRef, isOverflowing = _this$props2.isOverflowing, TimeGutterHeader = _this$props2.components.timeGutterHeader;
      var style2 = {};
      if (isOverflowing) {
        style2[rtl ? "marginLeft" : "marginRight"] = "".concat(scrollbarSize() - 1, "px");
      }
      return /* @__PURE__ */ React.createElement("div", {
        style: style2,
        ref: scrollRef,
        className: clsx("rbc-time-header", isOverflowing && "rbc-overflowing")
      }, /* @__PURE__ */ React.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && /* @__PURE__ */ React.createElement(TimeGutterHeader, null)), this.renderHeaderCells(range2));
    }
  }]);
})(React.Component);
function adjustForDST(_ref) {
  var min2 = _ref.min, max2 = _ref.max, localizer2 = _ref.localizer;
  if (localizer2.getTimezoneOffset(min2) !== localizer2.getTimezoneOffset(max2)) {
    return {
      start: localizer2.add(min2, -1, "day"),
      end: localizer2.add(max2, -1, "day")
    };
  }
  return {
    start: min2,
    end: max2
  };
}
var TimeGutter = function TimeGutter2(_ref2) {
  var min2 = _ref2.min, max2 = _ref2.max, timeslots = _ref2.timeslots, step = _ref2.step, localizer2 = _ref2.localizer, getNow2 = _ref2.getNow, resource = _ref2.resource, components2 = _ref2.components, getters = _ref2.getters, gutterRef = _ref2.gutterRef;
  var TimeGutterWrapper = components2.timeGutterWrapper;
  var _useMemo = reactExports.useMemo(
    function() {
      return adjustForDST({
        min: min2,
        max: max2,
        localizer: localizer2
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min2 === null || min2 === void 0 ? void 0 : min2.toISOString(), max2 === null || max2 === void 0 ? void 0 : max2.toISOString(), localizer2]
  ), start2 = _useMemo.start, end2 = _useMemo.end;
  var _useState = reactExports.useState(getSlotMetrics({
    min: start2,
    max: end2,
    timeslots,
    step,
    localizer: localizer2
  })), _useState2 = _slicedToArray(_useState, 2), slotMetrics = _useState2[0], setSlotMetrics = _useState2[1];
  reactExports.useEffect(function() {
    if (slotMetrics) {
      setSlotMetrics(slotMetrics.update({
        min: start2,
        max: end2,
        timeslots,
        step,
        localizer: localizer2
      }));
    }
  }, [start2 === null || start2 === void 0 ? void 0 : start2.toISOString(), end2 === null || end2 === void 0 ? void 0 : end2.toISOString(), timeslots, step]);
  var renderSlot = reactExports.useCallback(function(value, idx) {
    if (idx) return null;
    var isNow = slotMetrics.dateIsInGroup(getNow2(), idx);
    return /* @__PURE__ */ React.createElement("span", {
      className: clsx("rbc-label", isNow && "rbc-now")
    }, localizer2.format(value, "timeGutterFormat"));
  }, [slotMetrics, localizer2, getNow2]);
  return /* @__PURE__ */ React.createElement(TimeGutterWrapper, {
    slotMetrics
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: gutterRef
  }, slotMetrics.groups.map(function(grp, idx) {
    return /* @__PURE__ */ React.createElement(TimeSlotGroup, {
      key: idx,
      group: grp,
      resource,
      components: components2,
      renderSlot,
      getters
    });
  })));
};
var TimeGutter$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  return /* @__PURE__ */ React.createElement(TimeGutter, Object.assign({
    gutterRef: ref
  }, props));
});
var NONE = {};
function Resources(resources, accessors) {
  return {
    map: function map(fn3) {
      if (!resources) return [fn3([NONE, null], 0)];
      return resources.map(function(resource, idx) {
        return fn3([accessors.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = /* @__PURE__ */ new Map();
      if (!resources) {
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }
      events.forEach(function(event) {
        var id = accessors.resource(event) || NONE;
        if (Array.isArray(id)) {
          id.forEach(function(item) {
            var resourceEvents2 = eventsByResource.get(item) || [];
            resourceEvents2.push(event);
            eventsByResource.set(item, resourceEvents2);
          });
        } else {
          var resourceEvents = eventsByResource.get(id) || [];
          resourceEvents.push(event);
          eventsByResource.set(id, resourceEvents);
        }
      });
      return eventsByResource;
    }
  };
}
var TimeGrid = /* @__PURE__ */ (function(_Component) {
  function TimeGrid2(props) {
    var _this;
    _classCallCheck(this, TimeGrid2);
    _this = _callSuper(this, TimeGrid2, [props]);
    _this.handleScroll = function(e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };
    _this.handleResize = function() {
      cancel(_this.rafHandle);
      _this.rafHandle = request(_this.checkOverflow);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props = _this.props, popup = _this$props.popup, onDrillDown = _this$props.onDrillDown, onShowMore = _this$props.onShowMore, getDrilldownView = _this$props.getDrilldownView, doShowMoreDrillDown = _this$props.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position$1 = position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: _objectSpread2(_objectSpread2({}, position$1), {}, {
              width: "200px"
            }),
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.handleSelectAllDaySlot = function(slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      var start2 = new Date(slots[0]);
      var end2 = new Date(slots[slots.length - 1]);
      end2.setDate(slots[slots.length - 1].getDate() + 1);
      notify(onSelectSlot, {
        slots,
        start: start2,
        end: end2,
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this.checkOverflow = function() {
      if (_this._updatingOverflow) return;
      var content = _this.contentRef.current;
      if (!(content !== null && content !== void 0 && content.scrollHeight)) return;
      var isOverflowing = content.scrollHeight > content.clientHeight;
      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;
        _this.setState({
          isOverflowing
        }, function() {
          _this._updatingOverflow = false;
        });
      }
    };
    _this.memoizedResources = memoizeOne(function(resources, accessors) {
      return Resources(resources, accessors);
    });
    _this.state = {
      gutterWidth: void 0,
      isOverflowing: null
    };
    _this.scrollRef = /* @__PURE__ */ React.createRef();
    _this.contentRef = /* @__PURE__ */ React.createRef();
    _this.containerRef = /* @__PURE__ */ React.createRef();
    _this._scrollRatio = null;
    _this.gutterRef = /* @__PURE__ */ reactExports.createRef();
    return _this;
  }
  _inherits(TimeGrid2, _Component);
  return _createClass(TimeGrid2, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      this.checkOverflow();
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.width == null) {
        this.measureGutter();
      }
      this.calculateScroll();
      this.applyScroll();
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      cancel(this.rafHandle);
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.applyScroll();
    }
  }, {
    key: "renderDayColumn",
    value: function renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer2, accessors, components2, dayLayoutAlgorithm, now) {
      var _this$props2 = this.props, min2 = _this$props2.min, max2 = _this$props2.max;
      var daysEvents = (groupedEvents.get(id) || []).filter(function(event) {
        return localizer2.inRange(date2, accessors.start(event), accessors.end(event), "day");
      });
      var daysBackgroundEvents = (groupedBackgroundEvents.get(id) || []).filter(function(event) {
        return localizer2.inRange(date2, accessors.start(event), accessors.end(event), "day");
      });
      return /* @__PURE__ */ React.createElement(DayColumn, Object.assign({}, this.props, {
        localizer: localizer2,
        min: localizer2.merge(date2, min2),
        max: localizer2.merge(date2, max2),
        resource: resource && id,
        components: components2,
        isNow: localizer2.isSameDate(date2, now),
        key: "".concat(id, "-").concat(date2),
        date: date2,
        events: daysEvents,
        backgroundEvents: daysBackgroundEvents,
        dayLayoutAlgorithm
      }));
    }
  }, {
    key: "renderResourcesFirst",
    value: function renderResourcesFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors, now, components2, dayLayoutAlgorithm) {
      var _this2 = this;
      return resources.map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
        return range2.map(function(date2) {
          return _this2.renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer2, accessors, components2, dayLayoutAlgorithm, now);
        });
      });
    }
  }, {
    key: "renderRangeFirst",
    value: function renderRangeFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors, now, components2, dayLayoutAlgorithm) {
      var _this3 = this;
      return range2.map(function(date2) {
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            display: "flex",
            minHeight: "100%",
            flex: 1
          },
          key: date2
        }, resources.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], resource = _ref4[1];
          return /* @__PURE__ */ React.createElement("div", {
            style: {
              flex: 1
            },
            key: accessors.resourceId(resource)
          }, _this3.renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer2, accessors, components2, dayLayoutAlgorithm, now));
        }));
      });
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(range2, events, backgroundEvents, now) {
      var _this$props3 = this.props, accessors = _this$props3.accessors, localizer2 = _this$props3.localizer, resourceGroupingLayout = _this$props3.resourceGroupingLayout, components2 = _this$props3.components, dayLayoutAlgorithm = _this$props3.dayLayoutAlgorithm;
      var resources = this.memoizedResources(this.props.resources, accessors);
      var groupedEvents = resources.groupEvents(events);
      var groupedBackgroundEvents = resources.groupEvents(backgroundEvents);
      if (!resourceGroupingLayout) {
        return this.renderResourcesFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors, now, components2, dayLayoutAlgorithm);
      } else {
        return this.renderRangeFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors, now, components2, dayLayoutAlgorithm);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$allDayMax;
      var _this$props4 = this.props, events = _this$props4.events, backgroundEvents = _this$props4.backgroundEvents, range2 = _this$props4.range, width = _this$props4.width, rtl = _this$props4.rtl, selected = _this$props4.selected, getNow2 = _this$props4.getNow, resources = _this$props4.resources, components2 = _this$props4.components, accessors = _this$props4.accessors, getters = _this$props4.getters, localizer2 = _this$props4.localizer, min2 = _this$props4.min, max2 = _this$props4.max, showMultiDayTimes = _this$props4.showMultiDayTimes, longPressThreshold = _this$props4.longPressThreshold, resizable = _this$props4.resizable, resourceGroupingLayout = _this$props4.resourceGroupingLayout;
      width = width || this.state.gutterWidth;
      var start2 = range2[0], end2 = range2[range2.length - 1];
      this.slots = range2.length;
      var allDayEvents = [], rangeEvents = [], rangeBackgroundEvents = [];
      events.forEach(function(event) {
        if (inRange(event, start2, end2, accessors, localizer2)) {
          var eStart = accessors.start(event), eEnd = accessors.end(event);
          if (accessors.allDay(event) || localizer2.startAndEndAreDateOnly(eStart, eEnd) || !showMultiDayTimes && !localizer2.isSameDate(eStart, eEnd)) {
            allDayEvents.push(event);
          } else {
            rangeEvents.push(event);
          }
        }
      });
      backgroundEvents.forEach(function(event) {
        if (inRange(event, start2, end2, accessors, localizer2)) {
          rangeBackgroundEvents.push(event);
        }
      });
      allDayEvents.sort(function(a, b) {
        return sortEvents(a, b, accessors, localizer2);
      });
      var headerProps = {
        range: range2,
        events: allDayEvents,
        width,
        rtl,
        getNow: getNow2,
        localizer: localizer2,
        selected,
        allDayMaxRows: this.props.showAllEvents ? Infinity : (_this$props$allDayMax = this.props.allDayMaxRows) !== null && _this$props$allDayMax !== void 0 ? _this$props$allDayMax : Infinity,
        resources: this.memoizedResources(resources, accessors),
        selectable: this.props.selectable,
        accessors,
        getters,
        components: components2,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable
      };
      return /* @__PURE__ */ React.createElement("div", {
        className: clsx("rbc-time-view", resources && "rbc-time-view-resources"),
        ref: this.containerRef
      }, resources && resources.length > 1 && resourceGroupingLayout ? /* @__PURE__ */ React.createElement(TimeGridHeaderResources, headerProps) : /* @__PURE__ */ React.createElement(TimeGridHeader, headerProps), this.props.popup && this.renderOverlay(), /* @__PURE__ */ React.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /* @__PURE__ */ React.createElement(TimeGutter$1, {
        date: start2,
        ref: this.gutterRef,
        localizer: localizer2,
        min: localizer2.merge(start2, min2),
        max: localizer2.merge(start2, max2),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: components2,
        className: "rbc-time-gutter",
        getters
      }), this.renderEvents(range2, rangeEvents, rangeBackgroundEvents, getNow2())));
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay, _this$state, _this4 = this;
      var overlay = (_this$state$overlay = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props5 = this.props, accessors = _this$props5.accessors, localizer2 = _this$props5.localizer, components2 = _this$props5.components, getters = _this$props5.getters, selected = _this$props5.selected, popupOffset = _this$props5.popupOffset, handleDragStart = _this$props5.handleDragStart;
      var onHide2 = function onHide22() {
        return _this4.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ React.createElement(PopOverlay, {
        overlay,
        accessors,
        localizer: localizer2,
        components: components2,
        getters,
        selected,
        popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide2
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function measureGutter() {
      var _this5 = this;
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
      this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
        var _this5$gutterRef;
        var width = (_this5$gutterRef = _this5.gutterRef) !== null && _this5$gutterRef !== void 0 && _this5$gutterRef.current ? getWidth(_this5.gutterRef.current) : void 0;
        if (width && _this5.state.gutterWidth !== width) {
          _this5.setState({
            gutterWidth: width
          });
        }
      });
    }
  }, {
    key: "applyScroll",
    value: function applyScroll() {
      if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
        var content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio;
        this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function calculateScroll() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var min2 = props.min, max2 = props.max, scrollToTime = props.scrollToTime, localizer2 = props.localizer;
      var diffMillis = localizer2.diff(localizer2.merge(scrollToTime, min2), scrollToTime, "milliseconds");
      var totalMillis = localizer2.diff(min2, max2, "milliseconds");
      this._scrollRatio = diffMillis / totalMillis;
    }
  }]);
})(reactExports.Component);
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  // To be compatible with old versions, default as `false`.
  resourceGroupingLayout: false
};
var _excluded$4 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
var Day = /* @__PURE__ */ (function(_React$Component) {
  function Day2() {
    _classCallCheck(this, Day2);
    return _callSuper(this, Day2, arguments);
  }
  _inherits(Day2, _React$Component);
  return _createClass(Day2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer2 = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer2.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$4);
      var range2 = Day2.range(date2, {
        localizer: localizer2
      });
      return /* @__PURE__ */ React.createElement(TimeGrid, Object.assign({}, props, {
        range: range2,
        eventOffset: 10,
        localizer: localizer2,
        min: min2,
        max: max2,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
})(React.Component);
Day.range = function(date2, _ref) {
  var localizer2 = _ref.localizer;
  return [localizer2.startOf(date2, "day")];
};
Day.navigate = function(date2, action, _ref2) {
  var localizer2 = _ref2.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -1, "day");
    case navigate.NEXT:
      return localizer2.add(date2, 1, "day");
    default:
      return date2;
  }
};
Day.title = function(date2, _ref3) {
  var localizer2 = _ref3.localizer;
  return localizer2.format(date2, "dayHeaderFormat");
};
var _excluded$3 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
var Week = /* @__PURE__ */ (function(_React$Component) {
  function Week2() {
    _classCallCheck(this, Week2);
    return _callSuper(this, Week2, arguments);
  }
  _inherits(Week2, _React$Component);
  return _createClass(Week2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer2 = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer2.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$3);
      var range2 = Week2.range(date2, this.props);
      return /* @__PURE__ */ React.createElement(TimeGrid, Object.assign({}, props, {
        range: range2,
        eventOffset: 15,
        localizer: localizer2,
        min: min2,
        max: max2,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
})(React.Component);
Week.defaultProps = TimeGrid.defaultProps;
Week.navigate = function(date2, action, _ref) {
  var localizer2 = _ref.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -1, "week");
    case navigate.NEXT:
      return localizer2.add(date2, 1, "week");
    default:
      return date2;
  }
};
Week.range = function(date2, _ref2) {
  var localizer2 = _ref2.localizer;
  var firstOfWeek = localizer2.startOfWeek();
  var start2 = localizer2.startOf(date2, "week", firstOfWeek);
  var end2 = localizer2.endOf(date2, "week", firstOfWeek);
  return localizer2.range(start2, end2);
};
Week.title = function(date2, _ref3) {
  var localizer2 = _ref3.localizer;
  var _Week$range = Week.range(date2, {
    localizer: localizer2
  }), _Week$range2 = _toArray(_Week$range), start2 = _Week$range2[0], rest = _Week$range2.slice(1);
  return localizer2.format({
    start: start2,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var _excluded$2 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function workWeekRange(date2, options) {
  return Week.range(date2, options).filter(function(d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}
var WorkWeek = /* @__PURE__ */ (function(_React$Component) {
  function WorkWeek2() {
    _classCallCheck(this, WorkWeek2);
    return _callSuper(this, WorkWeek2, arguments);
  }
  _inherits(WorkWeek2, _React$Component);
  return _createClass(WorkWeek2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer2 = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer2.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$2);
      var range2 = workWeekRange(date2, this.props);
      return /* @__PURE__ */ React.createElement(TimeGrid, Object.assign({}, props, {
        range: range2,
        eventOffset: 15,
        localizer: localizer2,
        min: min2,
        max: max2,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
})(React.Component);
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;
WorkWeek.title = function(date2, _ref) {
  var localizer2 = _ref.localizer;
  var _workWeekRange = workWeekRange(date2, {
    localizer: localizer2
  }), _workWeekRange2 = _toArray(_workWeekRange), start2 = _workWeekRange2[0], rest = _workWeekRange2.slice(1);
  return localizer2.format({
    start: start2,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var DEFAULT_LENGTH = 30;
function Agenda(_ref) {
  var accessors = _ref.accessors, components2 = _ref.components, date2 = _ref.date, events = _ref.events, getters = _ref.getters, _ref$length = _ref.length, length = _ref$length === void 0 ? DEFAULT_LENGTH : _ref$length, localizer2 = _ref.localizer, onDoubleClickEvent = _ref.onDoubleClickEvent, onSelectEvent = _ref.onSelectEvent, selected = _ref.selected;
  var headerRef = reactExports.useRef(null);
  var dateColRef = reactExports.useRef(null);
  var timeColRef = reactExports.useRef(null);
  var contentRef = reactExports.useRef(null);
  var tbodyRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    _adjustHeader();
  });
  var renderDay = function renderDay2(day2, events2, dayKey) {
    var Event2 = components2.event, AgendaDate = components2.date;
    events2 = events2.filter(function(e) {
      return inRange(e, localizer2.startOf(day2, "day"), localizer2.endOf(day2, "day"), accessors, localizer2);
    });
    return events2.map(function(event, idx) {
      var title = accessors.title(event);
      var end22 = accessors.end(event);
      var start2 = accessors.start(event);
      var userProps = getters.eventProp(event, start2, end22, isSelected(event, selected));
      var dateLabel = idx === 0 && localizer2.format(day2, "agendaDateFormat");
      var first = idx === 0 ? /* @__PURE__ */ React.createElement("td", {
        rowSpan: events2.length,
        className: "rbc-agenda-date-cell"
      }, AgendaDate ? /* @__PURE__ */ React.createElement(AgendaDate, {
        day: day2,
        label: dateLabel
      }) : dateLabel) : false;
      return /* @__PURE__ */ React.createElement("tr", {
        key: dayKey + "_" + idx,
        className: userProps.className,
        style: userProps.style
      }, first, /* @__PURE__ */ React.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, timeRangeLabel(day2, event)), /* @__PURE__ */ React.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function onClick(e) {
          return onSelectEvent && onSelectEvent(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return onDoubleClickEvent && onDoubleClickEvent(event, e);
        }
      }, Event2 ? /* @__PURE__ */ React.createElement(Event2, {
        event,
        title
      }) : title));
    }, []);
  };
  var timeRangeLabel = function timeRangeLabel2(day2, event) {
    var labelClass = "", TimeComponent = components2.time, label = localizer2.messages.allDay;
    var end22 = accessors.end(event);
    var start2 = accessors.start(event);
    if (!accessors.allDay(event)) {
      if (localizer2.eq(start2, end22)) {
        label = localizer2.format(start2, "agendaTimeFormat");
      } else if (localizer2.isSameDate(start2, end22)) {
        label = localizer2.format({
          start: start2,
          end: end22
        }, "agendaTimeRangeFormat");
      } else if (localizer2.isSameDate(day2, start2)) {
        label = localizer2.format(start2, "agendaTimeFormat");
      } else if (localizer2.isSameDate(day2, end22)) {
        label = localizer2.format(end22, "agendaTimeFormat");
      }
    }
    if (localizer2.gt(day2, start2, "day")) labelClass = "rbc-continues-prior";
    if (localizer2.lt(day2, end22, "day")) labelClass += " rbc-continues-after";
    return /* @__PURE__ */ React.createElement("span", {
      className: labelClass.trim()
    }, TimeComponent ? /* @__PURE__ */ React.createElement(TimeComponent, {
      event,
      day: day2,
      label
    }) : label);
  };
  var _adjustHeader = function _adjustHeader2() {
    if (!tbodyRef.current) return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    var isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];
    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + "px";
      timeColRef.current.style.width = _widths[1] + "px";
    }
    if (isOverflowing) {
      addClass(header, "rbc-header-overflowing");
      header.style.marginRight = scrollbarSize() + "px";
    } else {
      removeClass(header, "rbc-header-overflowing");
    }
  };
  var messages2 = localizer2.messages;
  var end2 = localizer2.add(date2, length, "day");
  var range2 = localizer2.range(date2, end2, "day");
  events = events.filter(function(event) {
    return inRange(event, localizer2.startOf(date2, "day"), localizer2.endOf(end2, "day"), accessors, localizer2);
  });
  events.sort(function(a, b) {
    return +accessors.start(a) - +accessors.start(b);
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("table", {
    ref: headerRef,
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "rbc-header",
    ref: dateColRef
  }, messages2.date), /* @__PURE__ */ React.createElement("th", {
    className: "rbc-header",
    ref: timeColRef
  }, messages2.time), /* @__PURE__ */ React.createElement("th", {
    className: "rbc-header"
  }, messages2.event)))), /* @__PURE__ */ React.createElement("div", {
    className: "rbc-agenda-content",
    ref: contentRef
  }, /* @__PURE__ */ React.createElement("table", {
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ React.createElement("tbody", {
    ref: tbodyRef
  }, range2.map(function(day2, idx) {
    return renderDay(day2, events, idx);
  }))))) : /* @__PURE__ */ React.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages2.noEventsInRange));
}
Agenda.range = function(start2, _ref2) {
  var _ref2$length = _ref2.length, length = _ref2$length === void 0 ? DEFAULT_LENGTH : _ref2$length, localizer2 = _ref2.localizer;
  var end2 = localizer2.add(start2, length, "day");
  return {
    start: start2,
    end: end2
  };
};
Agenda.navigate = function(date2, action, _ref3) {
  var _ref3$length = _ref3.length, length = _ref3$length === void 0 ? DEFAULT_LENGTH : _ref3$length, localizer2 = _ref3.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -length, "day");
    case navigate.NEXT:
      return localizer2.add(date2, length, "day");
    default:
      return date2;
  }
};
Agenda.title = function(start2, _ref4) {
  var _ref4$length = _ref4.length, length = _ref4$length === void 0 ? DEFAULT_LENGTH : _ref4$length, localizer2 = _ref4.localizer;
  var end2 = localizer2.add(start2, length, "day");
  return localizer2.format({
    start: start2,
    end: end2
  }, "agendaHeaderFormat");
};
var VIEWS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, views.MONTH, MonthView), views.WEEK, Week), views.WORK_WEEK, WorkWeek), views.DAY, Day), views.AGENDA, Agenda);
var _excluded$1 = ["action", "date", "today"];
function moveDate(View, _ref) {
  var action = _ref.action, date2 = _ref.date, today = _ref.today, props = _objectWithoutProperties(_ref, _excluded$1);
  View = typeof View === "string" ? VIEWS[View] : View;
  switch (action) {
    case navigate.TODAY:
      date2 = today || /* @__PURE__ */ new Date();
      break;
    case navigate.DATE:
      break;
    default:
      invariant(View && typeof View.navigate === "function", "Calendar View components must implement a static `.navigate(date, action)` method.s");
      date2 = View.navigate(date2, action, props);
  }
  return date2;
}
function accessor(data, field) {
  var value = null;
  if (typeof field === "function") value = field(data);
  else if (typeof field === "string" && _typeof(data) === "object" && data != null && field in data) value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor2(acc) {
  return function(data) {
    return accessor(data, acc);
  };
};
var _excluded = ["view", "date", "getNow", "onNavigate"], _excluded2 = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function viewNames(_views) {
  if (Array.isArray(_views)) {
    return _views;
  }
  var views2 = [];
  for (var _i = 0, _Object$entries = Object.entries(_views); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
    if (value) {
      views2.push(key);
    }
  }
  return views2;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
var Calendar = /* @__PURE__ */ (function(_React$Component) {
  function Calendar2() {
    var _this;
    _classCallCheck(this, Calendar2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Calendar2, [].concat(_args));
    _this.getViews = function() {
      var views2 = _this.props.views;
      if (Array.isArray(views2)) {
        return transform(views2, function(obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }
      if (_typeof(views2) === "object") {
        return mapValues(views2, function(value, key) {
          if (value === true) {
            return VIEWS[key];
          }
          return value;
        });
      }
      return VIEWS;
    };
    _this.getView = function() {
      var views2 = _this.getViews();
      return views2[_this.props.view];
    };
    _this.getDrilldownView = function(date2) {
      var _this$props = _this.props, view = _this$props.view, drilldownView = _this$props.drilldownView, getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date2, view, Object.keys(_this.getViews()));
    };
    _this.handleRangeChange = function(date2, viewComponent, view) {
      var _this$props2 = _this.props, onRangeChange = _this$props2.onRangeChange, localizer2 = _this$props2.localizer;
      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date2, {
            localizer: localizer2
          }), view);
        }
      }
    };
    _this.handleNavigate = function(action, newDate) {
      var _this$props3 = _this.props, view = _this$props3.view, date2 = _this$props3.date, getNow2 = _this$props3.getNow, onNavigate = _this$props3.onNavigate, props = _objectWithoutProperties(_this$props3, _excluded);
      var ViewComponent = _this.getView();
      var today = getNow2();
      date2 = moveDate(ViewComponent, _objectSpread2(_objectSpread2({}, props), {}, {
        action,
        date: newDate || date2 || today,
        today
      }));
      onNavigate(date2, view, action);
      _this.handleRangeChange(date2, ViewComponent);
    };
    _this.handleViewChange = function(view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }
      var views2 = _this.getViews();
      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views2[view], view);
    };
    _this.handleSelectEvent = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectSlot = function(slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };
    _this.handleDrillDown = function(date2, view) {
      var onDrillDown = _this.props.onDrillDown;
      if (onDrillDown) {
        onDrillDown(date2, view, _this.drilldownView);
        return;
      }
      if (view) _this.handleViewChange(view);
      _this.handleNavigate(navigate.DATE, date2);
    };
    _this.state = {
      context: Calendar2.getContext(_this.props)
    };
    return _this;
  }
  _inherits(Calendar2, _React$Component);
  return _createClass(Calendar2, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props, view = _this$props4.view, toolbar = _this$props4.toolbar, events = _this$props4.events, backgroundEvents = _this$props4.backgroundEvents, resourceGroupingLayout = _this$props4.resourceGroupingLayout, style2 = _this$props4.style, className = _this$props4.className, elementProps = _this$props4.elementProps, current = _this$props4.date, getNow2 = _this$props4.getNow, length = _this$props4.length, showMultiDayTimes = _this$props4.showMultiDayTimes, onShowMore = _this$props4.onShowMore, doShowMoreDrillDown = _this$props4.doShowMoreDrillDown;
      _this$props4.components;
      _this$props4.formats;
      _this$props4.messages;
      _this$props4.culture;
      var props = _objectWithoutProperties(_this$props4, _excluded2);
      current = current || getNow2();
      var View = this.getView();
      var _this$state$context = this.state.context, accessors = _this$state$context.accessors, components2 = _this$state$context.components, getters = _this$state$context.getters, localizer2 = _this$state$context.localizer, viewNames2 = _this$state$context.viewNames;
      var CalToolbar = components2.toolbar || Toolbar;
      var label = View.title(current, {
        localizer: localizer2,
        length
      });
      return /* @__PURE__ */ React.createElement("div", Object.assign({}, elementProps, {
        className: clsx(className, "rbc-calendar", props.rtl && "rbc-rtl"),
        style: style2
      }), toolbar && /* @__PURE__ */ React.createElement(CalToolbar, {
        date: current,
        view,
        views: viewNames2,
        label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: localizer2
      }), /* @__PURE__ */ React.createElement(View, Object.assign({}, props, {
        events,
        backgroundEvents,
        date: current,
        getNow: getNow2,
        length,
        localizer: localizer2,
        getters,
        components: components2,
        accessors,
        showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore,
        doShowMoreDrillDown,
        resourceGroupingLayout
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        context: Calendar2.getContext(nextProps)
      };
    }
  }, {
    key: "getContext",
    value: function getContext(_ref2) {
      var startAccessor = _ref2.startAccessor, endAccessor = _ref2.endAccessor, allDayAccessor = _ref2.allDayAccessor, tooltipAccessor = _ref2.tooltipAccessor, titleAccessor = _ref2.titleAccessor, resourceAccessor = _ref2.resourceAccessor, resourceIdAccessor = _ref2.resourceIdAccessor, resourceTitleAccessor = _ref2.resourceTitleAccessor, eventIdAccessor = _ref2.eventIdAccessor, eventPropGetter = _ref2.eventPropGetter, backgroundEventPropGetter = _ref2.backgroundEventPropGetter, slotPropGetter = _ref2.slotPropGetter, slotGroupPropGetter = _ref2.slotGroupPropGetter, dayPropGetter = _ref2.dayPropGetter, view = _ref2.view, views2 = _ref2.views, localizer2 = _ref2.localizer, culture = _ref2.culture, _ref2$messages = _ref2.messages, messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages, _ref2$components = _ref2.components, components2 = _ref2$components === void 0 ? {} : _ref2$components, _ref2$formats = _ref2.formats, formats2 = _ref2$formats === void 0 ? {} : _ref2$formats;
      var names = viewNames(views2);
      var msgs = messages(messages$1);
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer2, culture, formats2, msgs),
        getters: {
          eventProp: function eventProp() {
            return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function backgroundEventProp() {
            return backgroundEventPropGetter && backgroundEventPropGetter.apply(void 0, arguments) || {};
          },
          slotProp: function slotProp() {
            return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
          },
          slotGroupProp: function slotGroupProp() {
            return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
          },
          dayProp: function dayProp() {
            return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
          }
        },
        components: defaults(components2[view] || {}, omit(components2, names), {
          eventWrapper: NoopWrapper,
          backgroundEventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper,
          timeGutterWrapper: NoopWrapper,
          timeIndicatorWrapper: NoopWrapper
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor),
          eventId: wrapAccessor(eventIdAccessor)
        }
      };
    }
  }]);
})(React.Component);
Calendar.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views.MONTH,
  views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: Infinity,
  doShowMoreDrillDown: true,
  drilldownView: views.DAY,
  titleAccessor: "title",
  tooltipAccessor: "title",
  allDayAccessor: "allDay",
  startAccessor: "start",
  endAccessor: "end",
  resourceAccessor: "resourceId",
  resourceIdAccessor: "id",
  resourceTitleAccessor: "title",
  eventIdAccessor: "id",
  longPressThreshold: 250,
  getNow: function getNow() {
    return /* @__PURE__ */ new Date();
  },
  dayLayoutAlgorithm: "overlap"
};
var Calendar$1 = uncontrollable(Calendar, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
});
var dateRangeFormat$1 = function dateRangeFormat5(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return "".concat(local.format(start2, "P", culture), " – ").concat(local.format(end2, "P", culture));
};
var timeRangeFormat$1 = function timeRangeFormat5(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return "".concat(local.format(start2, "p", culture), " – ").concat(local.format(end2, "p", culture));
};
var timeRangeStartFormat$1 = function timeRangeStartFormat5(_ref3, culture, local) {
  var start2 = _ref3.start;
  return "".concat(local.format(start2, "h:mma", culture), " – ");
};
var timeRangeEndFormat$1 = function timeRangeEndFormat5(_ref4, culture, local) {
  var end2 = _ref4.end;
  return " – ".concat(local.format(end2, "h:mma", culture));
};
var weekRangeFormat$1 = function weekRangeFormat5(_ref5, culture, local) {
  var start2 = _ref5.start, end2 = _ref5.end;
  return "".concat(local.format(start2, "MMMM dd", culture), " – ").concat(local.format(end2, eq(start2, end2, "month") ? "dd" : "MMMM dd", culture));
};
var formats$1 = {
  dateFormat: "dd",
  dayFormat: "dd eee",
  weekdayFormat: "ccc",
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: "p",
  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "cccc MMM dd",
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: "ccc MMM dd",
  agendaTimeFormat: "p",
  agendaTimeRangeFormat: timeRangeFormat$1
};
var dateFnsLocalizer = function dateFnsLocalizer2(_ref6) {
  var startOfWeek2 = _ref6.startOfWeek, getDay2 = _ref6.getDay, _format2 = _ref6.format, locales2 = _ref6.locales;
  return new DateLocalizer({
    formats: formats$1,
    firstOfWeek: function firstOfWeek(culture) {
      return getDay2(startOfWeek2(/* @__PURE__ */ new Date(), {
        locale: locales2[culture]
      }));
    },
    format: function format2(value, formatString, culture) {
      return _format2(new Date(value), formatString, {
        locale: locales2[culture]
      });
    }
  });
};
const toLocalInput = (iso) => {
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
function AppointmentDrawer({ appointment, open, onOpenChange }) {
  const qc = useQueryClient();
  const { data: customers = [] } = useQuery({ queryKey: ["customers"], queryFn: api.listCustomers });
  const { data: services = [] } = useQuery({ queryKey: ["services"], queryFn: api.listServices });
  const [start2, setStart] = reactExports.useState("");
  const [end2, setEnd] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("confirmed");
  const [notes, setNotes] = reactExports.useState("");
  const [customerId, setCustomerId] = reactExports.useState("");
  const [serviceId, setServiceId] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (appointment) {
      setStart(toLocalInput(appointment.start_at));
      setEnd(toLocalInput(appointment.end_at));
      setStatus(appointment.status);
      setNotes(appointment.notes ?? "");
      setCustomerId(appointment.customer_id ?? "");
      setServiceId(appointment.service_id ?? "");
    }
  }, [appointment]);
  const updateMut = useMutation({
    mutationFn: (data) => api.updateAppointment(appointment.id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Updated");
      onOpenChange(false);
    },
    onError: (e) => toast.error(e.message)
  });
  const delMut = useMutation({
    mutationFn: () => api.deleteAppointment(appointment.id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Deleted");
      onOpenChange(false);
    }
  });
  if (!appointment) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: "Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: fmtDateTime(appointment.start_at) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: setStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "confirmed", children: "Confirmed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cancelled", children: "Cancelled" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: status === "completed" ? "default" : status === "cancelled" ? "destructive" : "secondary", children: status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: start2, onChange: (e) => setStart(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "End" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: end2, onChange: (e) => setEnd(e.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: customerId, onValueChange: setCustomerId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select customer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: customers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.id, children: c.name }, c.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: serviceId, onValueChange: setServiceId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select service" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.id, children: s.name }, s.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: notes, onChange: (e) => setNotes(e.target.value), rows: 4 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetFooter, { className: "mt-6 flex-row justify-between sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => delMut.mutate(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => updateMut.mutate({
          start_at: new Date(start2).toISOString(),
          end_at: new Date(end2).toISOString(),
          status,
          notes,
          customer_id: customerId || null,
          service_id: serviceId || null
        }), children: "Save" })
      ] })
    ] })
  ] }) });
}
const locales = {
  "en-US": enUS
};
const localizer = dateFnsLocalizer({
  format,
  startOfWeek,
  getDay,
  locales
});
function Appointments() {
  const qc = useQueryClient();
  const {
    data: appts = []
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: api.listAppointments
  });
  const [selected, setSelected] = reactExports.useState(null);
  const [drawer, setDrawer] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [view, setView] = reactExports.useState("week");
  const [date2, setDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const confirm = useMutation({
    mutationFn: (id) => api.updateAppointment(id, {
      status: "confirmed"
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["appointments"]
      });
      toast.success("Booking confirmed");
    }
  });
  const cancel3 = useMutation({
    mutationFn: (id) => api.updateAppointment(id, {
      status: "cancelled"
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["appointments"]
      });
      toast.success("Booking cancelled");
    }
  });
  const filtered = appts.filter((a) => {
    const q = search.toLowerCase();
    const matchesSearch = !q || a.customer?.name?.toLowerCase().includes(q) || a.service?.name?.toLowerCase().includes(q) || a.status.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "all" || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const events = filtered.map((a) => ({
    id: a.id,
    title: `${a.customer?.name ?? "Walk-in"} · ${a.service?.name ?? ""}`,
    start: new Date(a.start_at),
    end: new Date(a.end_at),
    resource: a
  }));
  const open = (a) => {
    setSelected(a);
    setDrawer(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Meetings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "See all bookings across all appointment types." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search customers...", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[140px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "confirmed", children: "Confirmed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cancelled", children: "Cancelled" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "table", children: "List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "calendar", children: "Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "graph", disabled: true, className: "opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumnIncreasing, { className: "h-4 w-4 mr-2" }),
          " Graph"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "table", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b text-left text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium w-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Date & Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y", children: [
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-4 py-8 text-center text-muted-foreground", children: "No appointments yet." }) }),
          filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-6 w-6", onClick: () => setExpandedId(expandedId === a.id ? null : a.id), children: expandedId === a.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: a.customer?.name ?? "Walk-in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: a.service?.name ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: fmtDateTime(a.start_at) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: a.status === "confirmed" ? "default" : a.status === "pending" ? "secondary" : "destructive", className: "capitalize", children: a.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                a.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8 text-success", onClick: () => confirm.mutate(a.id), title: "Confirm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8 text-destructive", onClick: () => cancel3.mutate(a.id), title: "Cancel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => open(a), children: "Details" })
              ] }) })
            ] }),
            expandedId === a.id && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-12 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase text-muted-foreground", children: "Booking Answers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm border rounded-lg p-3 bg-background", children: a.notes || "No additional answers provided." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase text-muted-foreground", children: "Financials" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm flex justify-between border rounded-lg p-3 bg-background", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Price Paid" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: fmtMoney(a.price_cents) })
                ] })
              ] })
            ] }) }) })
          ] }, a.id))
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calendar", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        height: 650
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { localizer, events, view, date: date2, onView: setView, onNavigate: setDate, views: ["month", "week", "day", "agenda"], onSelectEvent: (e) => open(e.resource), style: {
        height: "100%"
      } }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDrawer, { appointment: selected, open: drawer, onOpenChange: setDrawer })
  ] });
}
export {
  Appointments as component
};
