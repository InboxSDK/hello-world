/*!
 * InboxSDK
 * https://www.inboxsdk.com/
 *
 * The use of InboxSDK is governed by the Terms of Services located at
 * https://www.inboxsdk.com/terms


 *  __    __            _     _          _                _                      ___                 _ _ ___
 * / / /\ \ \__ _ _ __ | |_  | |_ ___   | |__   __ _  ___| | __   ___  _ __     / _ \_ __ ___   __ _(_) / _ \
 * \ \/  \/ / _` | '_ \| __| | __/ _ \  | '_ \ / _` |/ __| |/ /  / _ \| '_ \   / /_\/ '_ ` _ \ / _` | | \// /
 *  \  /\  / (_| | | | | |_  | || (_) | | | | | (_| | (__|   <  | (_) | | | | / /_\\| | | | | | (_| | | | \/
 *   \/  \/ \__,_|_| |_|\__|  \__\___/  |_| |_|\__,_|\___|_|\_\  \___/|_| |_| \____/|_| |_| |_|\__,_|_|_| ()
 *
 * Like complex reverse engineering? Want to make Gmail and Inbox a hackable platform?
 *
 * Join us at: www.streak.com/careers?source=sdk
 */

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("core-js/library/fn/date/now");
},{"core-js/library/fn/date/now":8}],2:[function(require,module,exports){
module.exports = require("core-js/library/fn/json/stringify");
},{"core-js/library/fn/json/stringify":9}],3:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/assign");
},{"core-js/library/fn/object/assign":10}],4:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":11}],5:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/keys");
},{"core-js/library/fn/object/keys":12}],6:[function(require,module,exports){
module.exports = require("core-js/library/fn/promise");
},{"core-js/library/fn/promise":13}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],8:[function(require,module,exports){
require('../../modules/es6.date.now');
module.exports = require('../../modules/_core').Date.now;

},{"../../modules/_core":18,"../../modules/es6.date.now":50}],9:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":18}],10:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":18,"../../modules/es6.object.assign":51}],11:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":18,"../../modules/es6.object.define-property":52}],12:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":18,"../../modules/es6.object.keys":53}],13:[function(require,module,exports){
(function (global){
// We only target browsers that natively support Promises, so we replace
// Babel's Promise helper with a reference to the native promise.
module.exports = global.Promise;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],15:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":31}],16:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":43,"./_to-iobject":45,"./_to-length":46}],17:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],18:[function(require,module,exports){
var core = module.exports = { version: '2.6.8' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],19:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":14}],20:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],21:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":25}],22:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":26,"./_is-object":31}],23:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],24:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":18,"./_ctx":19,"./_global":26,"./_has":27,"./_hide":28}],25:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],26:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],27:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],28:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":21,"./_object-dp":34,"./_property-desc":40}],29:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],30:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":17}],31:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],32:[function(require,module,exports){
module.exports = true;

},{}],33:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

},{"./_descriptors":21,"./_fails":25,"./_iobject":30,"./_object-gops":35,"./_object-keys":37,"./_object-pie":38,"./_to-object":47}],34:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":15,"./_descriptors":21,"./_ie8-dom-define":29,"./_to-primitive":48}],35:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],36:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":16,"./_has":27,"./_shared-key":41,"./_to-iobject":45}],37:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":23,"./_object-keys-internal":36}],38:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],39:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":18,"./_export":24,"./_fails":25}],40:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],41:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":42,"./_uid":49}],42:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":18,"./_global":26,"./_library":32}],43:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":44}],44:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],45:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":20,"./_iobject":30}],46:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":44}],47:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":20}],48:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":31}],49:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],50:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":24}],51:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":24,"./_object-assign":33}],52:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":21,"./_export":24,"./_object-dp":34}],53:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":37,"./_object-sap":39,"./_to-object":47}],54:[function(require,module,exports){
/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;

},{}],55:[function(require,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],56:[function(require,module,exports){
'use strict';

// A smaller implementation of lodash/once that doesn't depend on lodash/before.

module.exports = once;

function once(func) {
  if (typeof func != 'function') {
    throw new Error('Parameter must be function');
  }
  var result;
  return function() {
    if (func) {
      var tempFunc = func;
      func = undefined;
      result = tempFunc.apply(this, arguments);
    }
    return result;
  };
}

},{}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delay;

function delay(time, value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, time);
  });
}

},{}],58:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],59:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],60:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":58,"./encode":59}],61:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ajax;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _querystring = _interopRequireDefault(require("querystring"));

var _pdelay = _interopRequireDefault(require("pdelay"));

var _cachebustUrl = _interopRequireDefault(require("./cachebust-url"));

var MAX_TIMEOUT = 64 * 1000; //64 seconds

var MAX_RETRIES = 5;
var serversToIgnore = {}; // Simple ajax helper.
// opts:
// * url
// * [method]
// * [cachebust] - boolean
// * [headers] - object
// * [xhrFields] - object
// * [data]

function ajax(opts) {
  if (!opts || typeof opts.url !== 'string') {
    throw new Error('URL must be given');
  }

  return new _promise["default"](function (resolve, reject) {
    var method = opts.method ? opts.method : 'GET';
    var url = opts.url;
    var stringData = null;

    if (opts.data) {
      stringData = typeof opts.data === 'string' ? opts.data : _querystring["default"].stringify(opts.data);

      if (method === 'GET' || method === 'HEAD') {
        url += (/\?/.test(url) ? '&' : '?') + stringData;
        stringData = null;
      }
    }

    var canRetry = opts.canRetry != null ? opts.canRetry : method === 'GET' || method === 'HEAD';
    var match = url.match(/(?:(?:[a-z]+:)?\/\/)?([^/]*)\//);

    if (!match) {
      throw new Error('Failed to match url');
    }

    var server = match[1];

    if (Object.prototype.hasOwnProperty.call(serversToIgnore, server)) {
      reject(new Error("Server at ".concat(url, " has told us to stop connecting")));
      return;
    }

    if (opts.cachebust) {
      url = (0, _cachebustUrl["default"])(url);
    }

    var xhr = new XMLHttpRequest();
    (0, _assign["default"])(xhr, opts.xhrFields);

    xhr.onerror = function (event) {
      if ((opts.retryNum || 0) < MAX_RETRIES) {
        if (xhr.status === 502 || (xhr.status === 0 || xhr.status >= 500) && canRetry) {
          resolve(_retry(opts));
          return;
        }
      }

      var err = (0, _assign["default"])(new Error("Failed to load ".concat(url)), {
        event: event,
        xhr: xhr,
        status: xhr.status
      }); // give a way for a server to tell us to go away for now. Good fallback
      // in case a bug ever causes clients to spam a server with requests.

      if (xhr.status == 490) {
        serversToIgnore[server] = true;
      }

      reject(err);
    };

    xhr.onload = function (event) {
      if (xhr.status === 200) {
        resolve({
          xhr: xhr,
          text: xhr.responseText
        });
      } else {
        xhr.onerror(event);
      }
    };

    xhr.open(method, url, true);

    if (opts.headers) {
      var headers = opts.headers;
      (0, _keys["default"])(headers).forEach(function (name) {
        var value = headers[name];
        xhr.setRequestHeader(name, value);
      });
    }

    xhr.send(stringData);
  });
}

function _retry(opts) {
  var retryNum = (opts.retryNum || 0) + 1; // 2000 4000 8000...

  var retryTimeout = Math.min(Math.pow(2, retryNum) * 1000, MAX_TIMEOUT);
  return (0, _pdelay["default"])(retryTimeout).then(function () {
    return ajax((0, _assign["default"])({}, opts, {
      retryNum: retryNum
    }));
  });
}

},{"./cachebust-url":62,"@babel/runtime-corejs2/core-js/object/assign":3,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/core-js/object/keys":5,"@babel/runtime-corejs2/core-js/promise":6,"@babel/runtime-corejs2/helpers/interopRequireDefault":7,"pdelay":57,"querystring":60}],62:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = cachebustUrl;

var _now = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/date/now"));

var r = /([?&])_=[^&]*/;
var nonce = (0, _now["default"])() + Math.floor(Math.random() * Math.pow(2, 32));

function cachebustUrl(url) {
  if (r.test(url)) {
    return url.replace(r, '$1_=' + nonce++);
  } else {
    return url + (/\?/.test(url) ? '&' : '?') + '_=' + nonce++;
  }
}

},{"@babel/runtime-corejs2/core-js/date/now":1,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/helpers/interopRequireDefault":7}],63:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = connectivityTest;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _cachebustUrl = _interopRequireDefault(require("./cachebust-url"));

var _fromPairs = _interopRequireDefault(require("lodash/fromPairs"));

var URLS = ['https://mailfoogae.appspot.com/build/images/composeOverflowToggle.png', 'https://www.streak.com/build/images/composeOverflowToggle.png', 'https://www.inboxsdk.com/images/logo-red.png'];

function imageTest(url) {
  return new _promise["default"](function (resolve) {
    var img = document.createElement('img');

    img.onload = function () {
      resolve(true);
    };

    img.onloadend = img.onerror = function () {
      resolve(false);
    };

    img.src = (0, _cachebustUrl["default"])(url);
  });
}

function connectivityTest() {
  return _promise["default"].all(URLS.map(function (url) {
    return imageTest(url).then(function (success) {
      return [url, success];
    });
  })).then(function (results) {
    return (0, _fromPairs["default"])(results);
  });
}

},{"./cachebust-url":62,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/core-js/promise":6,"@babel/runtime-corejs2/helpers/interopRequireDefault":7,"lodash/fromPairs":54}],64:[function(require,module,exports){
(function (global){
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = getExtensionId;

function getExtensionId() {
  var chrome = global.chrome;

  if (chrome && chrome.extension && chrome.extension.getURL) {
    return chrome.extension.getURL('');
  }

  return null;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"@babel/runtime-corejs2/core-js/object/define-property":4}],65:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = getSessionId;

var _now = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/date/now"));

function getSessionId() {
  var attrValue = typeof document !== 'undefined' && document.documentElement.getAttribute('data-inboxsdk-session-id');

  if (typeof attrValue === 'string') {
    return attrValue;
  } else {
    var sessionId = (0, _now["default"])() + '-' + Math.random();

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-inboxsdk-session-id', sessionId);
    }

    return sessionId;
  }
}

},{"@babel/runtime-corejs2/core-js/date/now":1,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/helpers/interopRequireDefault":7}],66:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = getStackTrace;

function getStackTrace() {
  var err = new Error('Stack saver'); // Cut the first two lines off. The first line has the error name, and the
  // second line is inside this function.

  return ('' + err.stack).replace(/^([^\n]*\n){2}/, '');
}

},{"@babel/runtime-corejs2/core-js/object/define-property":4}],67:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = loadScript;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _once = _interopRequireDefault(require("lodash/once"));

var _connectivityTest = _interopRequireDefault(require("./connectivity-test"));

var _logError = _interopRequireDefault(require("./log-error"));

var _ajax = _interopRequireDefault(require("./ajax"));

var _pdelay = _interopRequireDefault(require("pdelay"));

var isContentScript = (0, _once["default"])(function () {
  if (global.chrome && global.chrome.extension) return true;
  if (global.safari && global.safari.extension) return true;
  return false;
});

function addScriptToPage(url, cors) {
  var script = document.createElement('script');
  script.type = 'text/javascript';

  if (cors) {
    script.crossOrigin = 'anonymous';
  }

  var promise = new _promise["default"](function (resolve, reject) {
    script.addEventListener('error', function (event) {
      reject(event.error || new Error(event.message || 'Load failure: ' + url, event.filename, event.lineno, event.column));
    }, false);
    script.addEventListener('load', function () {
      // Make sure the script has a moment to execute before this promise
      // resolves.
      setTimeout(resolve, 1);
    }, false);
  });
  script.src = url;
  if (!document.head) throw new Error('missing head');
  document.head.appendChild(script);
  return promise;
}

function loadScript(url, opts) {
  var pr;

  if (isContentScript()) {
    var attempt = function attempt(retryNum, lastErr) {
      if (retryNum > 3) {
        throw lastErr || new Error('Ran out of loadScript attempts for unknown reason');
      }

      return (0, _ajax["default"])({
        url: url,
        cachebust: retryNum > 0
      }).then(function (response) {
        // Q: Why put the code into a function before executing it instead of
        //    evaling it immediately?
        // A: Chrome would execute it before applying any remembered
        //    breakpoints.
        // Q: Why not just use `... = new Function(...)`?
        // A: The sourcemaps would be off by one line in Chrome because of
        //    https://code.google.com/p/chromium/issues/detail?id=109362
        // Q: indirectEval?
        // A: Using the eval value rather than the eval keyword causes the
        //    code passed to it to be run in the global scope instead of the
        //    current scope. (Seriously, it's a javascript thing.)
        var originalCode = response.text;
        var indirectEval = eval;
        var codeParts = [];

        if (opts && opts.disableSourceMappingURL) {
          // Don't remove a data: URI sourcemap (used in dev)
          codeParts.push(originalCode.replace(/\/\/# sourceMappingURL=(?!data:)[^\n]*\n?$/, ''));
        } else {
          codeParts.push(originalCode);
        }

        if (!opts || !opts.nowrap) {
          codeParts.unshift('(function(){');
          codeParts.push('\n});');
        }

        codeParts.push('\n//# sourceURL=' + url + '\n');
        var codeToRun = codeParts.join('');
        var program;

        try {
          program = indirectEval(codeToRun);
        } catch (err) {
          if (err && err.name === 'SyntaxError') {
            (0, _logError["default"])(err, {
              retryNum: retryNum,
              caughtSyntaxError: true,
              url: url,
              message: "SyntaxError in loading ".concat(url, ". Did we not load it fully? Trying again...")
            }, {});
            return (0, _pdelay["default"])(5000).then(function () {
              return attempt(retryNum + 1, err);
            });
          } // SyntaxErrors are the only errors that can happen during eval that we
          // retry because sometimes AppEngine doesn't serve the full javascript.
          // No other error is retried because other errors aren't likely to be
          // transient.


          throw err;
        }

        if (!opts || !opts.nowrap) {
          program.call(global);
        }
      });
    };

    pr = attempt(0, null);
  } else {
    // Try to add script as CORS first so we can get error stack data from it.
    pr = addScriptToPage(url, true)["catch"](function () {
      // Only show the warning if we successfully load the script on retry.
      return addScriptToPage(url, false).then(function () {
        // eslint-disable-next-line no-console
        console.warn('Script ' + url + ' included without CORS headers. Error logs might be censored by the browser.');
      });
    });
  }

  pr["catch"](function (err) {
    return (0, _connectivityTest["default"])().then(function (connectivityTestResults) {
      (0, _logError["default"])(err, {
        url: url,
        connectivityTestResults: connectivityTestResults,
        status: err && err.status,
        response: err && err.xhr ? err.xhr.responseText : null,
        message: 'Failed to load script'
      }, {});
    });
  });
  return pr;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ajax":61,"./connectivity-test":63,"./log-error":68,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/core-js/promise":6,"@babel/runtime-corejs2/helpers/interopRequireDefault":7,"lodash/once":56,"pdelay":57}],68:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = logError;

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/date/now"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _ajax = _interopRequireDefault(require("./ajax"));

var _rateLimit = _interopRequireDefault(require("./rate-limit"));

var _getStackTrace = _interopRequireDefault(require("./get-stack-trace"));

var _getExtensionId = _interopRequireDefault(require("./get-extension-id"));

var _getSessionId = _interopRequireDefault(require("./get-session-id"));

var _version = require("./version");

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var sessionId = (0, _getSessionId["default"])(); // code inside the platform-implementation should use logger.js instead of
// interacting with this directly!

function logError(err, details, context) {
  if (typeof document === 'undefined') {
    // In tests, just throw the error.
    throw err;
  } // It's important that we can't throw an error or leave a rejected promise
  // unheard while logging an error in order to make sure to avoid ever
  // getting into an infinite loop of reporting uncaught errors.


  try {
    var _console;

    if (haveWeSeenThisErrorAlready(err)) {
      return;
    } else {
      markErrorAsSeen(err);
    }

    if (!(err instanceof Error)) {
      // eslint-disable-next-line no-console
      console.warn('First parameter to Logger.error was not an error object:', err);
      err = new Error('Logger.error called with non-error: ' + err);
      markErrorAsSeen(err);
    }

    var appIds = context.appIds,
        implVersion = context.implVersion,
        isUsingSyncAPI = context.isUsingSyncAPI,
        isUsingMaterialGmailUI = context.isUsingMaterialGmailUI,
        userEmailHash = context.userEmailHash;
    var loaderVersion = context.loaderVersion || _version.BUILD_VERSION;
    var sentByApp = !!context.sentByApp;
    var errorProperties = {};

    for (var name in err) {
      if (Object.prototype.hasOwnProperty.call(err, name)) {
        try {
          var value = err[name];
          (0, _stringify["default"])(value);
          errorProperties[name] = value;
        } catch (err) {// ignore
        }
      }
    }

    if ((0, _keys["default"])(errorProperties).length > 0) {
      details = {
        errorProperties: errorProperties,
        details: details
      };
    } // Might not have been passed a useful error object with a stack, so get
    // our own current stack just in case.


    var nowStack = (0, _getStackTrace["default"])();
    var stuffToLog = ['Error logged:', err];

    if (err && err.stack) {
      stuffToLog.push('\n\nOriginal error stack:\n' + err.stack);
    }

    stuffToLog.push('\n\nError logged from:\n' + nowStack);

    if (details) {
      stuffToLog.push('\n\nError details:', details);
    }

    stuffToLog.push('\n\nExtension App Ids:', (0, _stringify["default"])(appIds, null, 2));
    stuffToLog.push('\nSent by App:', sentByApp);
    stuffToLog.push('\nSession Id:', sessionId);
    stuffToLog.push('\nExtension Id:', (0, _getExtensionId["default"])());
    stuffToLog.push('\nInboxSDK Loader Version:', loaderVersion);
    stuffToLog.push('\nInboxSDK Implementation Version:', implVersion);
    stuffToLog.push('\nIs Using Sync API:', isUsingSyncAPI);
    stuffToLog.push('\nIs Using Material Gmail UI:', isUsingMaterialGmailUI); // eslint-disable-next-line no-console

    (_console = console).error.apply(_console, stuffToLog);

    var report = {
      message: err && err.message || err,
      stack: err && err.stack,
      loggedFrom: nowStack,
      details: details,
      appIds: appIds,
      sentByApp: sentByApp,
      sessionId: sessionId,
      emailHash: userEmailHash,
      extensionId: (0, _getExtensionId["default"])(),
      loaderVersion: loaderVersion,
      implementationVersion: implVersion,
      isUsingSyncAPI: isUsingSyncAPI,
      isUsingMaterialGmailUI: isUsingMaterialGmailUI,
      origin: document.location.origin,
      timestamp: (0, _now["default"])() * 1000
    };
    sendError(report);

    if (document.documentElement.getAttribute('inboxsdk-emit-error-event') === 'true') {
      document.documentElement.dispatchEvent(new CustomEvent('inboxSDKerror', {
        bubbles: false,
        cancelable: false,
        detail: {
          message: err && err.message || err,
          stack: err && err.stack,
          loggedFrom: nowStack,
          details: details,
          sentByApp: sentByApp
        }
      }));
    }
  } catch (err2) {
    tooManyErrors(err2, [err, details, context]);
  }
}

var _extensionSeenErrors = function () {
  // Safari <9 doesn't have WeakSet and we don't want to pull in the polyfill,
  // so we make one out of a WeakMap.
  if (!global.__inboxsdk_extensionSeenErrors && global.WeakMap) {
    (0, _defineProperty["default"])(global, '__inboxsdk_extensionSeenErrors', {
      value: new global.WeakMap()
    });
  }

  return {
    has: function has(e) {
      if (global.__inboxsdk_extensionSeenErrors) {
        return global.__inboxsdk_extensionSeenErrors.has(e);
      } else {
        try {
          return !!e.__inboxsdk_extensionHasSeenError;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return false;
        }
      }
    },
    add: function add(e) {
      if (global.__inboxsdk_extensionSeenErrors && global.__inboxsdk_extensionSeenErrors.set) {
        // It's a WeakMap.
        global.__inboxsdk_extensionSeenErrors.set(e, true);
      } else if (global.__inboxsdk_extensionSeenErrors && global.__inboxsdk_extensionSeenErrors.add) {
        // Older versions of inboxsdk.js initialized it as a WeakSet instead,
        // so handle that too.
        global.__inboxsdk_extensionSeenErrors.add(e);
      } else {
        try {
          (0, _defineProperty["default"])(e, '__inboxsdk_extensionHasSeenError', {
            value: true
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      }
    }
  };
}();

function haveWeSeenThisErrorAlready(error) {
  if ((0, _isObject["default"])(error)) {
    return _extensionSeenErrors.has(error);
  }

  return false;
}

function markErrorAsSeen(error) {
  if ((0, _isObject["default"])(error)) {
    _extensionSeenErrors.add(error);
  }
} // Only let 10 errors be sent per minute.


var sendError = (0, _rateLimit["default"])(function (report) {
  try {
    (0, _ajax["default"])({
      url: 'https://www.inboxsdk.com/api/v2/errors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: (0, _stringify["default"])(report)
    })["catch"](function (err2) {
      tooManyErrors(err2, [report]);
    });
  } catch (err2) {
    tooManyErrors(err2, [report]);
  }
}, 60 * 1000, 10);

function tooManyErrors(err2, originalArgs) {
  // eslint-disable-next-line no-console
  console.error('ERROR REPORTING ERROR', err2); // eslint-disable-next-line no-console

  console.error('ORIGINAL ERROR', originalArgs);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ajax":61,"./get-extension-id":64,"./get-session-id":65,"./get-stack-trace":66,"./rate-limit":69,"./version":70,"@babel/runtime-corejs2/core-js/date/now":1,"@babel/runtime-corejs2/core-js/json/stringify":2,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/core-js/object/keys":5,"@babel/runtime-corejs2/helpers/interopRequireDefault":7,"lodash/isObject":55}],69:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = rateLimit;

var _now = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/date/now"));

// Returns a wrapped version of the function which throws an exception if it's
// called more than count times within period amount of time.
function rateLimit(fn, period, count) {
  var calls = [];
  return function () {
    var now = (0, _now["default"])();
    calls = calls.filter(function (time) {
      return time > now - period;
    });

    if (calls.length >= count) {
      throw new Error('Function rate limit exceeded');
    }

    calls.push(now);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(this, args);
  };
}

},{"@babel/runtime-corejs2/core-js/date/now":1,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/helpers/interopRequireDefault":7}],70:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.BUILD_VERSION = void 0;
// This is in its own file so that updates to the version value don't cause a
// reload of everything.
var BUILD_VERSION = "0.7.25-1559685862664-5d64fc572c9e024a";
exports.BUILD_VERSION = BUILD_VERSION;

if (module.hot) {
  module.hot.accept();
}

},{"@babel/runtime-corejs2/core-js/object/define-property":4}],71:[function(require,module,exports){
(function (global){
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = checkRequirements;

function checkRequirements(opts) {
  if (!opts.TEMPORARY_INTERNAL_skipWeakMapRequirement && !global.WeakMap) {
    throw new Error('Browser does not support WeakMap');
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"@babel/runtime-corejs2/core-js/object/define-property":4}],72:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _logError = _interopRequireDefault(require("../common/log-error"));

var _platformImplementationLoader = _interopRequireDefault(require("./loading/platform-implementation-loader"));

var _checkRequirements = _interopRequireDefault(require("./check-requirements"));

var _version = require("../common/version");

var _loadScript = _interopRequireDefault(require("../common/load-script"));

var InboxSDK = {
  LOADER_VERSION: _version.BUILD_VERSION,
  loadScript: _loadScript["default"],
  load: function load(version, appId, opts) {
    opts = (0, _assign["default"])({
      // defaults
      globalErrorLogging: true
    }, opts, {
      // stuff that can't be overridden, such as extra stuff this file passes to
      // the implementation script.
      VERSION: InboxSDK.LOADER_VERSION,
      REQUESTED_API_VERSION: version
    });
    (0, _checkRequirements["default"])(opts);
    return _platformImplementationLoader["default"].load(appId, opts);
  }
};
var pageOrigin = "production" === 'test' && global.__test_origin || document.location.origin;

if (['https://mail.google.com', 'https://inbox.google.com'].indexOf(pageOrigin) != -1) {
  _platformImplementationLoader["default"].preload();
}

var _default = InboxSDK;
exports["default"] = _default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/load-script":67,"../common/log-error":68,"../common/version":70,"./check-requirements":71,"./loading/platform-implementation-loader":73,"@babel/runtime-corejs2/core-js/object/assign":3,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/helpers/interopRequireDefault":7}],73:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _once = _interopRequireDefault(require("lodash/once"));

var _loadScript = _interopRequireDefault(require("../../common/load-script"));

var PlatformImplementationLoader = {
  load: function load(appId, opts) {
    return _promise["default"].resolve().then(function () {
      if (!global.__InboxSDKImpLoader) {
        return PlatformImplementationLoader._loadScript().then(function () {
          if (!global.__InboxSDKImpLoader) {
            throw new Error('Implementation file did not load correctly');
          }
        });
      }
    }).then(function () {
      return global.__InboxSDKImpLoader.load('0.1', appId, opts);
    });
  },
  _loadScript: (0, _once["default"])(function () {
    var disableSourceMappingURL = true;

    if (window.localStorage) {
      try {
        disableSourceMappingURL = localStorage.getItem('inboxsdk__enable_sourcemap') !== 'true';
      } catch (err) {
        console.error(err); //eslint-disable-line no-console
      }
    }

    return (0, _loadScript["default"])("https://www.inboxsdk.com/build/platform-implementation.js", {
      nowrap: true,
      // platform-implementation has no top-level vars so no need for function wrapping
      disableSourceMappingURL: disableSourceMappingURL
    });
  }),
  preload: function preload() {
    // Prime the load by calling it and letting the promise be memoized.
    this._loadScript();
  }
};
var _default = PlatformImplementationLoader;
exports["default"] = _default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/load-script":67,"@babel/runtime-corejs2/core-js/object/define-property":4,"@babel/runtime-corejs2/core-js/promise":6,"@babel/runtime-corejs2/helpers/interopRequireDefault":7,"lodash/once":56}],74:[function(require,module,exports){
"use strict";

/* eslint-disable flowtype/require-valid-file-annotation, no-undef */
var oldDefine;

try {
  if (typeof define !== 'undefined' && define && define.amd) {
    // work around amd compatibility issue
    // https://groups.google.com/forum/#!msg/inboxsdk/U_bq82Exmwc/I3iIinxxCAAJ
    oldDefine = define;
    define = null;
  } // exposes main as a global for browsers


  window.InboxSDK = require('./inboxsdk')["default"];
} finally {
  if (oldDefine) {
    define = oldDefine;
  }
}

},{"./inboxsdk":72}]},{},[74])

