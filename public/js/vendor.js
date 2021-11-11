(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor~main"],{

/***/ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js":
/*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js ***!
  \**********************************************************************/
/*! exports provided: _, a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectWithoutProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _inherits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _createSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _slicedToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _getPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _set; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLContenteditableMaskElement; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");





var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLMaskElement; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLMaskElement, _MaskElement);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputMask; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../masked/range.js */ "./node_modules/imask/esm/masked/range.js");



















var _excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__["default"](el);
    this.masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].Masked) && this.masked.constructor === Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["maskedClass"])(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof _masked_date_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts, _excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectIncludes"])(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskElement; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskElement);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");



/** Provides details of changing input */

var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT;
    }
  }]);

  return ActionDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContinuousTailDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IMask; });
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/*! exports provided: DIRECTION, escapeRegExp, forceDirection, indexInDirection, isString, objectIncludes, posInDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceDirection", function() { return forceDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexInDirection", function() { return indexInDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectIncludes", function() { return objectIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posInDirection", function() { return posInDirection; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");


/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["c"])(a) === 'object' && Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["c"])(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/*! exports provided: InputMask, default, Masked, MaskedPattern, MaskedEnum, MaskedRange, MaskedNumber, MaskedDate, MaskedRegExp, MaskedFunction, MaskedDynamic, createMask, MaskElement, HTMLMaskElement, HTMLContenteditableMaskElement, PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masked", function() { return _masked_base_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedPattern", function() { return _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedEnum", function() { return _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRange", function() { return _masked_range_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedNumber", function() { return _masked_number_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDate", function() { return _masked_date_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRegExp", function() { return _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedFunction", function() { return _masked_function_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDynamic", function() { return _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMask", function() { return _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskElement", function() { return _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMaskElement", function() { return _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLContenteditableMaskElement", function() { return _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["PIPE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["createPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["pipe"]; });

/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");


























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch (e) {}


/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Masked; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var checkTail = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedDate; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Date mask */

var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDate, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "typedValue", value, this, true);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedDynamic; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");








var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDynamic, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return Object(_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      if (this.currentMask) {
        var _this$currentMask2;

        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, _excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask3;

      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask4, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask5, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedEnum; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which validates enum values */

var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedEnum, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedEnum);

  function MaskedEnum() {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/*! exports provided: default, maskedClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskedClass", function() { return maskedClass; });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");




/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp; // $FlowFixMe

  if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedFunction; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by custom Function */

var MaskedFunction = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedFunction, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedFunction);

  function MaskedFunction() {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedNumber; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedNumber, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"]).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedPattern; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");












var _excluded = ["_blocks"];

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedPattern, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_INPUT_DEFINITIONS"], opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = Object(_factory_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, _excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      // TODO refactor - extract alignblock
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["forceDirection"])(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"];

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) !== value.length;
}

_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChunksTailDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["chunks"];

var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, _excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternFixedDefinition; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/*! exports provided: DEFAULT_INPUT_DEFINITIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INPUT_DEFINITIONS", function() { return DEFAULT_INPUT_DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternInputDefinition; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts, _excluded);

    this.masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);

  return PatternInputDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/*! exports provided: PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return PIPE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return createPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");





/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedRange; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which accepts ranges */

var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRange, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedRange);

  function MaskedRange() {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedRegExp; });
/* harmony import */ var _rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-a0b34764.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by RegExp */

var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRegExp, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedRegExp);

  function MaskedRegExp() {
    Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_a0b34764_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp = MaskedRegExp;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9odG1sLW1hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9hY3Rpb24tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvY2hhbmdlLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9ob2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZW51bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9yZWdleHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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RUFBZTs7QUFFbkI7QUFDQTs7QUFFQSxFQUFFLCtFQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLCtFQUFJLENBQUMsK0VBQWU7QUFDMUI7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLGdEQUFNO0FBQ1IsdURBQUs7O0FBRThCIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBfLCBfY2xhc3NDYWxsQ2hlY2sgYXMgYSwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIGIsIF90eXBlb2YgYXMgYywgX2luaGVyaXRzIGFzIGQsIF9jcmVhdGVTdXBlciBhcyBlLCBfc2xpY2VkVG9BcnJheSBhcyBmLCBfZ2V0IGFzIGcsIF9nZXRQcm90b3R5cGVPZiBhcyBoLCBfc2V0IGFzIGkgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5pbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9tYXNrLWVsZW1lbnQuanMnO1xuXG52YXIgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfSFRNTE1hc2tFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQsIF9IVE1MTWFza0VsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHJldHVybiBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmRcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHJldHVybiBzZWxlY3Rpb24gJiYgdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQgKyBTdHJpbmcoc2VsZWN0aW9uKS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKCF0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKSByZXR1cm47XG4gICAgICB2YXIgcmFuZ2UgPSB0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmlucHV0LmZpcnN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgc3RhcnQpO1xuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuaW5wdXQubGFzdENoaWxkIHx8IHRoaXMuaW5wdXQsIGVuZCk7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG59KEhUTUxNYXNrRWxlbWVudCk7XG5JTWFzay5IVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiBCcmlkZ2UgYmV0d2VlbiBIVE1MRWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIEhUTUxNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MTWFza0VsZW1lbnQsIF9NYXNrRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MTWFza0VsZW1lbnQpO1xuXG4gIC8qKiBNYXBwaW5nIGJldHdlZW4gSFRNTEVsZW1lbnQgZXZlbnRzIGFuZCBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xuXG4gIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gIC8qKlxuICAgIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxuICAqL1xuICBmdW5jdGlvbiBIVE1MTWFza0VsZW1lbnQoaW5wdXQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTE1hc2tFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICBfdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4MzlcblxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcInJvb3RFbGVtZW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5nZXRSb290Tm9kZSA/IHRoaXMuaW5wdXQuZ2V0Um9vdE5vZGUoKSA6IGRvY3VtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgIElzIGVsZW1lbnQgaW4gZm9jdXNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8kRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA9PT0gdGhpcy5yb290RWxlbWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmRcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBIVE1MRWxlbWVudCB2YWx1ZVxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBVbmJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdG9nZ2xlRXZlbnRIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xuICAgICAgICBkZWxldGUgdGhpcy5faGFuZGxlcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MTWFza0VsZW1lbnQ7XG59KE1hc2tFbGVtZW50KTtcbkhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xuICBzZWxlY3Rpb25DaGFuZ2U6ICdrZXlkb3duJyxcbiAgaW5wdXQ6ICdpbnB1dCcsXG4gIGRyb3A6ICdkcm9wJyxcbiAgY2xpY2s6ICdjbGljaycsXG4gIGZvY3VzOiAnZm9jdXMnLFxuICBjb21taXQ6ICdibHVyJ1xufTtcbklNYXNrLkhUTUxNYXNrRWxlbWVudCA9IEhUTUxNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgSFRNTE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWEwYjM0NzY0LmpzJztcbmltcG9ydCB7IG9iamVjdEluY2x1ZGVzLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBBY3Rpb25EZXRhaWxzIGZyb20gJy4uL2NvcmUvYWN0aW9uLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZERhdGUgZnJvbSAnLi4vbWFza2VkL2RhdGUuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2ssIHsgbWFza2VkQ2xhc3MgfSBmcm9tICcuLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IEhUTUxNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4uanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcmVnZXhwLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3JhbmdlLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcIm1hc2tcIl07XG4vKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBJbnB1dE1hc2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICBWaWV3IGVsZW1lbnRcbiAgICBAcmVhZG9ubHlcbiAgKi9cblxuICAvKipcbiAgICBJbnRlcm5hbCB7QGxpbmsgTWFza2VkfSBtb2RlbFxuICAgIEByZWFkb25seVxuICAqL1xuXG4gIC8qKlxuICAgIEBwYXJhbSB7TWFza0VsZW1lbnR8SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBlbFxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICovXG4gIGZ1bmN0aW9uIElucHV0TWFzayhlbCwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dE1hc2spO1xuXG4gICAgdGhpcy5lbCA9IGVsIGluc3RhbmNlb2YgTWFza0VsZW1lbnQgPyBlbCA6IGVsLmlzQ29udGVudEVkaXRhYmxlICYmIGVsLnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZWwudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyA/IG5ldyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoZWwpIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7IC8vIHJlZnJlc2hcblxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuICAvKiogUmVhZCBvciB1cGRhdGUgbWFzayAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0TWFzaywgW3tcbiAgICBrZXk6IFwibWFza1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChtYXNrKSB7XG4gICAgICBpZiAodGhpcy5tYXNrRXF1YWxzKG1hc2spKSByZXR1cm47XG5cbiAgICAgIGlmICghKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpICYmIHRoaXMubWFza2VkLmNvbnN0cnVjdG9yID09PSBtYXNrZWRDbGFzcyhtYXNrKSkge1xuICAgICAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgICAgbWFzazogbWFza1xuICAgICAgfSk7XG4gICAgICBtYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICB9XG4gICAgLyoqIFJhdyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHJldHVybiBtYXNrID09IG51bGwgfHwgbWFzayA9PT0gdGhpcy5tYXNrZWQubWFzayB8fCBtYXNrID09PSBEYXRlICYmIHRoaXMubWFza2VkIGluc3RhbmNlb2YgTWFza2VkRGF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIFVubWFza2VkIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdW5tYXNrZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVHlwZWQgdW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC50eXBlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICB0aGlzLm1hc2tlZC50eXBlZFZhbHVlID0gdmFsO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5fc2F2ZVNlbGVjdGlvbixcbiAgICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgICAgY2xpY2s6IHRoaXMuX29uQ2xpY2ssXG4gICAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgICBjb21taXQ6IHRoaXMuX29uQ2hhbmdlXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTdG9wcyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VuYmluZEV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLmVsKSB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudFxuICAgICAgQHByb3RlY3RlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpcmVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUV2ZW50KGV2KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQ3VycmVudCBzZWxlY3Rpb24gc3RhcnRcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImN1cnNvclBvc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvbkVuZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHBvcykge1xuICAgICAgaWYgKCF0aGlzLmVsIHx8ICF0aGlzLmVsLmlzQWN0aXZlKSByZXR1cm47XG4gICAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG5cbiAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTdG9yZXMgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NhdmVTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NhdmVTZWxlY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICB9XG4gICAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ29udHJvbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDb250cm9sKCkge1xuICAgICAgdmFyIG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICB2YXIgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuZWwudmFsdWUgIT09IG5ld1ZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBpZiAoaXNDaGFuZ2VkKSB0aGlzLl9maXJlQ2hhbmdlRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMgQHtsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgICByZXN0T3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBfZXhjbHVkZWQpO1xuXG4gICAgICB2YXIgdXBkYXRlTWFzayA9ICF0aGlzLm1hc2tFcXVhbHMobWFzayk7XG4gICAgICB2YXIgdXBkYXRlT3B0cyA9ICFvYmplY3RJbmNsdWRlcyh0aGlzLm1hc2tlZCwgcmVzdE9wdHMpO1xuICAgICAgaWYgKHVwZGF0ZU1hc2spIHRoaXMubWFzayA9IG1hc2s7XG4gICAgICBpZiAodXBkYXRlT3B0cykgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyhyZXN0T3B0cyk7XG4gICAgICBpZiAodXBkYXRlTWFzayB8fCB1cGRhdGVPcHRzKSB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB9XG4gICAgLyoqIFVwZGF0ZXMgY3Vyc29yICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgaWYgKGN1cnNvclBvcyA9PSBudWxsKSByZXR1cm47XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvczsgLy8gYWxzbyBxdWV1ZSBjaGFuZ2UgY3Vyc29yIGZvciBtb2JpbGUgYnJvd3NlcnNcblxuICAgICAgdGhpcy5fZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBEZWxheXMgY3Vyc29yIHVwZGF0ZSB0byBzdXBwb3J0IG1vYmlsZSBicm93c2Vyc1xuICAgICAgQHByaXZhdGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2RlbGF5VXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG5cbiAgICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgICAgdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5lbCkgcmV0dXJuOyAvLyBpZiB3YXMgZGVzdHJveWVkXG5cbiAgICAgICAgX3RoaXMuY3Vyc29yUG9zID0gX3RoaXMuX2NoYW5naW5nQ3Vyc29yUG9zO1xuXG4gICAgICAgIF90aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudHNcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpcmVDaGFuZ2VFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVDaGFuZ2VFdmVudHMoKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoJ2FjY2VwdCcsIHRoaXMuX2lucHV0RXZlbnQpO1xuXG4gICAgICBpZiAodGhpcy5tYXNrZWQuaXNDb21wbGV0ZSkgdGhpcy5fZmlyZUV2ZW50KCdjb21wbGV0ZScsIHRoaXMuX2lucHV0RXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGVcbiAgICAgIEBwcml2YXRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hYm9ydFVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWJvcnRVcGRhdGVDdXJzb3IoKSB7XG4gICAgICBpZiAodGhpcy5fY3Vyc29yQ2hhbmdpbmcpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2N1cnNvckNoYW5naW5nKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2N1cnNvckNoYW5naW5nO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogQWxpZ25zIGN1cnNvciB0byBuZWFyZXN0IGF2YWlsYWJsZSBwb3NpdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxpZ25DdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25DdXJzb3IoKSB7XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLmN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpO1xuICAgIH1cbiAgICAvKiogQWxpZ25zIGN1cnNvciBvbmx5IGlmIHNlbGVjdGlvbiBpcyBlbXB0eSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxpZ25DdXJzb3JGcmllbmRseVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvckZyaWVuZGx5KCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgIT09IHRoaXMuY3Vyc29yUG9zKSByZXR1cm47IC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcblxuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogQWRkcyBsaXN0ZW5lciBvbiBjdXN0b20gZXZlbnQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHRoaXMuX2xpc3RlbmVyc1tldl0gPSBbXTtcblxuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIFJlbW92ZXMgY3VzdG9tIGV2ZW50IGxpc3RlbmVyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldl07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgaEluZGV4ID0gdGhpcy5fbGlzdGVuZXJzW2V2XS5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICBpZiAoaEluZGV4ID49IDApIHRoaXMuX2xpc3RlbmVyc1tldl0uc3BsaWNlKGhJbmRleCwgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBpbnB1dCBldmVudCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uSW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uSW5wdXQoZSkge1xuICAgICAgdGhpcy5faW5wdXRFdmVudCA9IGU7XG5cbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7IC8vIGZpeCBzdHJhbmdlIElFIGJlaGF2aW9yXG5cblxuICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24pIHJldHVybiB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKCAvLyBuZXcgc3RhdGVcbiAgICAgIHRoaXMuZWwudmFsdWUsIHRoaXMuY3Vyc29yUG9zLCAvLyBvbGQgc3RhdGVcbiAgICAgIHRoaXMudmFsdWUsIHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICB2YXIgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbikub2Zmc2V0OyAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcblxuICAgICAgdmFyIHJlbW92ZURpcmVjdGlvbiA9IG9sZFJhd1ZhbHVlID09PSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlID8gZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy51cGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9pbnB1dEV2ZW50O1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGNoYW5nZSBldmVudCBhbmQgY29tbWl0cyBtb2RlbCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuXG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgZHJvcCBldmVudCwgcHJldmVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Ecm9wKGV2KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25Gb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Gb2N1cyhldikge1xuICAgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gICAgfVxuICAgIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DbGljayhldikge1xuICAgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gICAgfVxuICAgIC8qKiBVbmJpbmQgdmlldyBldmVudHMgYW5kIHJlbW92ZXMgZWxlbWVudCByZWZlcmVuY2UgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX3VuYmluZEV2ZW50cygpOyAvLyAkRmxvd0ZpeE1lIHdoeSBub3QgZG8gc28/XG5cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7IC8vICRGbG93Rml4TWVcblxuICAgICAgZGVsZXRlIHRoaXMuZWw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0TWFzaztcbn0oKTtcbklNYXNrLklucHV0TWFzayA9IElucHV0TWFzaztcblxuZXhwb3J0IHsgSW5wdXRNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqXG4gIEdlbmVyaWMgZWxlbWVudCBBUEkgdG8gdXNlIHdpdGggbWFza1xuICBAaW50ZXJmYWNlXG4qL1xudmFyIE1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFza0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tFbGVtZW50KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6XG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBzdGFydCAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzdGFydDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBzdGFydCAhPSBudWxsID8gc3RhcnQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGVuZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fCBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7fVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrRWxlbWVudDtcbn0oKTtcbklNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXG5cbnZhciBBY3Rpb25EZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIEN1cnJlbnQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cbiAgZnVuY3Rpb24gQWN0aW9uRGV0YWlscyh2YWx1ZSwgY3Vyc29yUG9zLCBvbGRWYWx1ZSwgb2xkU2VsZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICB0aGlzLm9sZFNlbGVjdGlvbiA9IG9sZFNlbGVjdGlvbjsgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcblxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgIH1cbiAgfVxuICAvKipcbiAgICBTdGFydCBjaGFuZ2luZyBwb3NpdGlvblxuICAgIEByZWFkb25seVxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEFjdGlvbkRldGFpbHMsIFt7XG4gICAga2V5OiBcInN0YXJ0Q2hhbmdlUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBJbnNlcnRlZCBzeW1ib2xzIGNvdW50XG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgICB9XG4gICAgLyoqXG4gICAgICBJbnNlcnRlZCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJlbW92ZWQgc3ltYm9scyBjb3VudFxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHwgLy8gZm9yIERlbGV0ZVxuICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmVtb3ZlZCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBVbmNoYW5nZWQgaGVhZCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGVhZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFVuY2hhbmdlZCB0YWlsIHN5bWJvbHNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0YWlsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmVtb3ZlIGRpcmVjdGlvblxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURpcmVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0IG9yIGlmIHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuXG4gICAgICByZXR1cm4gdGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MgPyBESVJFQ1RJT04uUklHSFQgOiBESVJFQ1RJT04uTEVGVDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IHsgQWN0aW9uRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWEwYjM0NzY0LmpzJztcblxuLyoqXG4gIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgbW9kZWwgdmFsdWVcbiAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxuICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xuICBAcGFyYW0ge2Jvb2xlYW59IFtkZXRhaWxzLnNraXBdIC0gQ2FuIHNraXAgY2hhcnNcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXG4qL1xudmFyIENoYW5nZURldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogSW5zZXJ0ZWQgc3ltYm9scyAqL1xuXG4gIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xuXG4gIC8qKiBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbCAqL1xuXG4gIC8qKiBSYXcgaW5zZXJ0ZWQgaXMgdXNlZCBieSBkeW5hbWljIG1hc2sgKi9cbiAgZnVuY3Rpb24gQ2hhbmdlRGV0YWlscyhkZXRhaWxzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5nZURldGFpbHMpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpbnNlcnRlZDogJycsXG4gICAgICByYXdJbnNlcnRlZDogJycsXG4gICAgICBza2lwOiBmYWxzZSxcbiAgICAgIHRhaWxTaGlmdDogMFxuICAgIH0sIGRldGFpbHMpO1xuICB9XG4gIC8qKlxuICAgIEFnZ3JlZ2F0ZSBjaGFuZ2VzXG4gICAgQHJldHVybnMge0NoYW5nZURldGFpbHN9IGB0aGlzYFxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5nZURldGFpbHMsIFt7XG4gICAga2V5OiBcImFnZ3JlZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZ2dyZWdhdGUoZGV0YWlscykge1xuICAgICAgdGhpcy5yYXdJbnNlcnRlZCArPSBkZXRhaWxzLnJhd0luc2VydGVkO1xuICAgICAgdGhpcy5za2lwID0gdGhpcy5za2lwIHx8IGRldGFpbHMuc2tpcDtcbiAgICAgIHRoaXMuaW5zZXJ0ZWQgKz0gZGV0YWlscy5pbnNlcnRlZDtcbiAgICAgIHRoaXMudGFpbFNoaWZ0ICs9IGRldGFpbHMudGFpbFNoaWZ0O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBUb3RhbCBvZmZzZXQgY29uc2lkZXJpbmcgYWxsIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5nZURldGFpbHM7XG59KCk7XG5cbmV4cG9ydCB7IENoYW5nZURldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNvbnRpbnVvdXMgZXh0cmFjdGVkIHRhaWwgKi9cbnZhciBDb250aW51b3VzVGFpbERldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogVGFpbCB2YWx1ZSBhcyBzdHJpbmcgKi9cblxuICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xuXG4gIC8qKiBTdGFydCBwb3NpdGlvbiAqL1xuICBmdW5jdGlvbiBDb250aW51b3VzVGFpbERldGFpbHMoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICB2YXIgc3RvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRpbnVvdXNUYWlsRGV0YWlscyk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRpbnVvdXNUYWlsRGV0YWlscywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsKSB7XG4gICAgICB0aGlzLnZhbHVlICs9IFN0cmluZyh0YWlsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICByZXR1cm4gbWFza2VkLmFwcGVuZCh0aGlzLnRvU3RyaW5nKCksIHtcbiAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgfSkuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICBzdG9wOiB0aGlzLnN0b3BcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0QmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xuICAgICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMudmFsdWUubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGludW91c1RhaWxEZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgeyBDb250aW51b3VzVGFpbERldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiLyoqXG4gKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR8TWFza0VsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBhcHBseSBtYXNrXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcbiAqIEByZXR1cm4ge0lucHV0TWFza31cbiAqL1xuZnVuY3Rpb24gSU1hc2soZWwpIHtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcbiAgcmV0dXJuIG5ldyBJTWFzay5JbnB1dE1hc2soZWwsIG9wdHMpO1xufVxuXG5leHBvcnQgeyBJTWFzayBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBjIGFzIF90eXBlb2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWEwYjM0NzY0LmpzJztcblxuLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuLyoqXG4gIERpcmVjdGlvblxuICBAcHJvcCB7c3RyaW5nfSBOT05FXG4gIEBwcm9wIHtzdHJpbmd9IExFRlRcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfTEVGVFxuICBAcHJvcCB7c3RyaW5nfSBSSUdIVFxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9SSUdIVFxuKi9cblxudmFyIERJUkVDVElPTiA9IHtcbiAgTk9ORTogJ05PTkUnLFxuICBMRUZUOiAnTEVGVCcsXG4gIEZPUkNFX0xFRlQ6ICdGT1JDRV9MRUZUJyxcbiAgUklHSFQ6ICdSSUdIVCcsXG4gIEZPUkNFX1JJR0hUOiAnRk9SQ0VfUklHSFQnXG59O1xuLyoqXG4gIERpcmVjdGlvblxuICBAZW51bSB7c3RyaW5nfVxuKi9cblxuLyoqIFJldHVybnMgbmV4dCBjaGFyIGluZGV4IGluIGRpcmVjdGlvbiAqL1xuZnVuY3Rpb24gaW5kZXhJbkRpcmVjdGlvbihwb3MsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkgLS1wb3M7XG4gIHJldHVybiBwb3M7XG59XG4vKiogUmV0dXJucyBuZXh0IGNoYXIgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG5cbmZ1bmN0aW9uIHBvc0luRGlyZWN0aW9uKHBvcywgZGlyZWN0aW9uKSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgcmV0dXJuIC0tcG9zO1xuXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICByZXR1cm4gKytwb3M7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBvcztcbiAgfVxufVxuLyoqICovXG5cbmZ1bmN0aW9uIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XG5cbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfUklHSFQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuLyoqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNvbnRyb2wgY2hhcnMgKi9cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbn0gLy8gY2xvbmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbCB3aXRoIHNtYWxsIGNoYW5nZXNcblxuZnVuY3Rpb24gb2JqZWN0SW5jbHVkZXMoYiwgYSkge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIHZhciBhcnJBID0gQXJyYXkuaXNBcnJheShhKSxcbiAgICAgIGFyckIgPSBBcnJheS5pc0FycmF5KGIpLFxuICAgICAgaTtcblxuICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhICYmIGIgJiYgX3R5cGVvZihhKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHAsXG4gICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpOyAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYltrZXlzW2ldXSwgYVtrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbmV4cG9ydCB7IERJUkVDVElPTiwgZXNjYXBlUmVnRXhwLCBmb3JjZURpcmVjdGlvbiwgaW5kZXhJbkRpcmVjdGlvbiwgaXNTdHJpbmcsIG9iamVjdEluY2x1ZGVzLCBwb3NJbkRpcmVjdGlvbiB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dE1hc2sgfSBmcm9tICcuL2NvbnRyb2xzL2lucHV0LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkIH0gZnJvbSAnLi9tYXNrZWQvYmFzZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFBhdHRlcm4gfSBmcm9tICcuL21hc2tlZC9wYXR0ZXJuLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRW51bSB9IGZyb20gJy4vbWFza2VkL2VudW0uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSYW5nZSB9IGZyb20gJy4vbWFza2VkL3JhbmdlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkTnVtYmVyIH0gZnJvbSAnLi9tYXNrZWQvbnVtYmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRGF0ZSB9IGZyb20gJy4vbWFza2VkL2RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSZWdFeHAgfSBmcm9tICcuL21hc2tlZC9yZWdleHAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRGdW5jdGlvbiB9IGZyb20gJy4vbWFza2VkL2Z1bmN0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRHluYW1pYyB9IGZyb20gJy4vbWFza2VkL2R5bmFtaWMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNYXNrIH0gZnJvbSAnLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgUElQRV9UWVBFLCBjcmVhdGVQaXBlLCBwaXBlIH0gZnJvbSAnLi9tYXNrZWQvcGlwZS5qcyc7XG5pbXBvcnQgJy4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5pbXBvcnQgJy4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9hY3Rpb24tZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcblxudHJ5IHtcbiAgZ2xvYmFsVGhpcy5JTWFzayA9IElNYXNrO1xufSBjYXRjaCAoZSkge31cbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiBTdXBwb3J0ZWQgbWFzayB0eXBlICovXG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xudmFyIE1hc2tlZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcblxuICAvKiogQHR5cGUge01hc2t9ICovXG5cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGb3JtYXQgdHlwZWQgdmFsdWUgdG8gc3RyaW5nICovXG5cbiAgLyoqIFBhcnNlIHN0cmdpbiB0byBnZXQgdHlwZWQgdmFsdWUgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gTWFza2VkKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkKTtcblxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG5cbiAgICB0aGlzLl91cGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkLkRFRkFVTFRTLCBvcHRzKSk7XG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkLCBbe1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRzKS5sZW5ndGgpIHJldHVybjtcbiAgICAgIHRoaXMud2l0aFZhbHVlUmVmcmVzaCh0aGlzLl91cGRhdGUuYmluZCh0aGlzLCBvcHRzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU2V0cyBuZXcgb3B0aW9uc1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqIE1hc2sgc3RhdGUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gICAgfVxuICAgIC8qKiBSZXNldHMgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKiBSZXNvbHZlIG5ldyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHt9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9QYXJzZSh0aGlzLnZhbHVlKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5kb0Zvcm1hdCh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKiBWYWx1ZSB0aGF0IGluY2x1ZGVzIHJhdyB1c2VyIGlucHV0ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyYXdJbnB1dFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy52YWx1ZS5sZW5ndGgsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqIEZpbmRzIG5lYXJlc3QgaW5wdXQgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB0YWlsIGluIHJhbmdlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHRhaWwgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgaW5zZXJ0ZWQ6IGNoLFxuICAgICAgICByYXdJbnNlcnRlZDogY2hcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBjaGFyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXJSYXcodGhpcy5kb1ByZXBhcmUoY2gsIGZsYWdzKSwgZmxhZ3MpO1xuXG4gICAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCkge1xuICAgICAgICB2YXIgY29uc2lzdGVudFRhaWw7XG4gICAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuZG9WYWxpZGF0ZShmbGFncykgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChhcHBlbmRlZCAmJiBjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIHZhbGlkYXRpb24gb2ssIGNoZWNrIHRhaWxcbiAgICAgICAgICB2YXIgYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgIGlmICh0aGlzLm92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgY29uc2lzdGVudFRhaWwgPSBjaGVja1RhaWwuc3RhdGU7XG4gICAgICAgICAgICBjaGVja1RhaWwuc2hpZnRCZWZvcmUodGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xuICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpOyAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxuXG4gICAgICAgICAgaWYgKGFwcGVuZGVkICYmIHRhaWxEZXRhaWxzLmluc2VydGVkKSB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICB9IC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcblxuXG4gICAgICAgIGlmICghYXBwZW5kZWQpIHtcbiAgICAgICAgICBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gY29uc2lzdGVudFN0YXRlO1xuICAgICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBwbGFjZWhvbGRlciBhdCBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgc3ltYm9scyBjb25zaWRlcmluZyBmbGFncyAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG4gICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCkpO1xuICAgICAgfSAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG5cblxuICAgICAgaWYgKGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpLnRhaWxTaGlmdDsgLy8gVE9ETyBpdCdzIGEgZ29vZCBpZGVhIHRvIGNsZWFyIHN0YXRlIGFmdGVyIGFwcGVuZGluZyBlbmRzXG4gICAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxuICAgICAgICAvLyB0aGlzLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIENhbGxzIGZ1bmN0aW9uIGFuZCByZWFwcGxpZXMgY3VycmVudCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aFZhbHVlUmVmcmVzaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoVmFsdWVSZWZyZXNoKGZuKSB7XG4gICAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4oKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIHJhd0lucHV0ID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciByZXQgPSBmbigpO1xuICAgICAgdGhpcy5yYXdJbnB1dFZhbHVlID0gcmF3SW5wdXQ7IC8vIGFwcGVuZCBsb3N0IHRyYWlsaW5nIGNoYXJzIGF0IGVuZFxuXG4gICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLnNsaWNlKHRoaXMudmFsdWUubGVuZ3RoKSwge30sICcnKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJ1bklzb2xhdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bklzb2xhdGVkKGZuKSB7XG4gICAgICBpZiAodGhpcy5faXNvbGF0ZWQgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKHRoaXMpO1xuICAgICAgdGhpcy5faXNvbGF0ZWQgPSB0cnVlO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciByZXQgPSBmbih0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9pc29sYXRlZDtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUHJlcGFyZXMgc3RyaW5nIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmdcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5wcmVwYXJlID8gdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY29tbWl0KSB0aGlzLmNvbW1pdCh0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0Zvcm1hdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQodmFsdWUsIHRoaXMpIDogdmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1BhcnNlKHN0cikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2UgPyB0aGlzLnBhcnNlKHN0ciwgdGhpcykgOiBzdHI7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGluc2VydGVkLCByZW1vdmVEaXJlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsUG9zID0gc3RhcnQgKyBkZWxldGVDb3VudDtcbiAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgIHZhciBzdGFydENoYW5nZVBvcyA9IHRoaXMubmVhcmVzdElucHV0UG9zKHN0YXJ0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdmFyIGNoYW5nZURldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXG5cbiAgICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChpbnNlcnRlZCwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgdGFpbCkpO1xuICAgICAgcmV0dXJuIGNoYW5nZURldGFpbHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZDtcbn0oKTtcbk1hc2tlZC5ERUZBVUxUUyA9IHtcbiAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodikge1xuICAgIHJldHVybiB2O1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uodikge1xuICAgIHJldHVybiB2O1xuICB9XG59O1xuSU1hc2suTWFza2VkID0gTWFza2VkO1xuXG5leHBvcnQgeyBNYXNrZWQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGYgYXMgX3NsaWNlZFRvQXJyYXksIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBNYXNrZWRSYW5nZSBmcm9tICcuL3JhbmdlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogRGF0ZSBtYXNrICovXG5cbnZhciBNYXNrZWREYXRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRGF0ZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRGF0ZSk7XG5cbiAgLyoqIFBhdHRlcm4gbWFzayBmb3IgZGF0ZSBhY2NvcmRpbmcgdG8ge0BsaW5rIE1hc2tlZERhdGUjZm9ybWF0fSAqL1xuXG4gIC8qKiBTdGFydCBkYXRlICovXG5cbiAgLyoqIEVuZCBkYXRlICovXG5cbiAgLyoqICovXG5cbiAgLyoqXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZERhdGUpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREYXRlLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzayA9PT0gRGF0ZSkgZGVsZXRlIG9wdHMubWFzaztcbiAgICAgIGlmIChvcHRzLnBhdHRlcm4pIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgIHZhciBibG9ja3MgPSBvcHRzLmJsb2NrcztcbiAgICAgIG9wdHMuYmxvY2tzID0gT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MoKSk7IC8vIGFkanVzdCB5ZWFyIGJsb2NrXG5cbiAgICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcbiAgICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBvcHRzLmJsb2Nrcy5ZLmZyb20gPT09IG9wdHMuYmxvY2tzLlkudG8pIHtcbiAgICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICBpZiAob3B0cy5ibG9ja3MubS5mcm9tID09PSBvcHRzLmJsb2Nrcy5tLnRvKSB7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC5mcm9tID0gb3B0cy5taW4uZ2V0RGF0ZSgpO1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLmJsb2NrcywgYmxvY2tzKTsgLy8gYWRkIGF1dG9maXhcblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5ibG9ja3MpLmZvckVhY2goZnVuY3Rpb24gKGJrKSB7XG4gICAgICAgIHZhciBiID0gb3B0cy5ibG9ja3NbYmtdO1xuICAgICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBkYXRlID0gdGhpcy5kYXRlO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSAmJiAoIXRoaXMuaXNDb21wbGV0ZSB8fCB0aGlzLmlzRGF0ZUV4aXN0KHRoaXMudmFsdWUpICYmIGRhdGUgIT0gbnVsbCAmJiAodGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA8PSBkYXRlKSAmJiAodGhpcy5tYXggPT0gbnVsbCB8fCBkYXRlIDw9IHRoaXMubWF4KSk7XG4gICAgfVxuICAgIC8qKiBDaGVja3MgaWYgZGF0ZSBpcyBleGlzdHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzRGF0ZUV4aXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGF0ZUV4aXN0KHN0cikge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMucGFyc2Uoc3RyLCB0aGlzKSwgdGhpcykuaW5kZXhPZihzdHIpID49IDA7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgRGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGUpIHtcbiAgICAgIHRoaXMudHlwZWRWYWx1ZSA9IGRhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwidHlwZWRWYWx1ZVwiLCB0aGlzKSA6IG51bGw7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcInR5cGVkVmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREYXRlO1xufShNYXNrZWRQYXR0ZXJuKTtcbk1hc2tlZERhdGUuREVGQVVMVFMgPSB7XG4gIHBhdHRlcm46ICdkey59YG17Ln1gWScsXG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLicpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgdmFyIF9zdHIkc3BsaXQgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAzKSxcbiAgICAgICAgZGF5ID0gX3N0ciRzcGxpdDJbMF0sXG4gICAgICAgIG1vbnRoID0gX3N0ciRzcGxpdDJbMV0sXG4gICAgICAgIHllYXIgPSBfc3RyJHNwbGl0MlsyXTtcblxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gIH1cbn07XG5cbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGQ6IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAzMSxcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgbToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDEyLFxuICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgfSxcbiAgICBZOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDE5MDAsXG4gICAgICB0bzogOTk5OVxuICAgIH1cbiAgfTtcbn07XG5cbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xuXG5leHBvcnQgeyBNYXNrZWREYXRlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBpIGFzIF9zZXQsIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJjb21waWxlZE1hc2tzXCIsIFwiY3VycmVudE1hc2tSZWZcIiwgXCJjdXJyZW50TWFza1wiXTtcblxuLyoqIER5bmFtaWMgbWFzayBmb3IgY2hvb3NpbmcgYXByb3ByaWF0ZSBtYXNrIGluIHJ1bi10aW1lICovXG52YXIgTWFza2VkRHluYW1pYyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRHluYW1pYywgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWREeW5hbWljKTtcblxuICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG5cbiAgLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXG5cbiAgLyoqIENob29zZXMge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIGlucHV0IHZhbHVlICovXG5cbiAgLyoqXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRHluYW1pYyhvcHRzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZER5bmFtaWMpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREeW5hbWljLkRFRkFVTFRTLCBvcHRzKSk7XG4gICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREeW5hbWljLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgaWYgKCdtYXNrJyBpbiBvcHRzKSB7XG4gICAgICAgIC8vIG1hc2sgY291bGQgYmUgdG90YWxseSBkeW5hbWljIHdpdGggb25seSBgZGlzcGF0Y2hgIG9wdGlvblxuICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MgPSBBcnJheS5pc0FycmF5KG9wdHMubWFzaykgPyBvcHRzLm1hc2subWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hc2sobSk7XG4gICAgICAgIH0pIDogW107XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2goY2gsIGZsYWdzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kQ2hhcihjaCwgZmxhZ3MpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseURpc3BhdGNoKCkge1xuICAgICAgdmFyIGFwcGVuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXG4gICAgICBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XG4gICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHByZXZNYXNrU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5zdGF0ZTsgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcblxuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwgT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MpKTsgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBkaXNwYXRjaFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcbiAgICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcblxuICAgICAgICAgIGlmIChpbnNlcnRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFpbFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxuICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQodGFpbFZhbHVlLCB7XG4gICAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgfSkudGFpbFNoaWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEaXNwYXRjaCBjYW4gZG8gc29tZXRoaW5nIGJhZCB3aXRoIHN0YXRlLCBzb1xuICAgICAgICAgIC8vIHJlc3RvcmUgcHJldiBtYXNrIHN0YXRlXG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IHByZXZNYXNrU3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Rpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDIsIF90aGlzJGN1cnJlbnRNYXNrO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSAmJiAoIXRoaXMuY3VycmVudE1hc2sgfHwgKF90aGlzJGN1cnJlbnRNYXNrID0gdGhpcy5jdXJyZW50TWFzaykuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzaywgYXJncykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLnJlc2V0KCk7XG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlIDogJyc7XG4gICAgfSAvLyBwcm9iYWJseSB0eXBlZFZhbHVlIHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIGR5bmFtaWNcbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB1bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTsgLy8gZG91YmxlIGNoZWNrIGl0XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB1bm1hc2tlZFZhbHVlID0gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suaXNDb21wbGV0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMjtcblxuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSgoX3RoaXMkY3VycmVudE1hc2syID0gdGhpcy5jdXJyZW50TWFzaykucmVtb3ZlLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrMiwgYXJndW1lbnRzKSkgLy8gdXBkYXRlIHdpdGggZGlzcGF0Y2hcbiAgICAgICAgLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBseURpc3BhdGNoKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnN0YXRlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgIGN1cnJlbnRNYXNrOiB0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suc3RhdGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjb21waWxlZE1hc2tzID0gc3RhdGUuY29tcGlsZWRNYXNrcyxcbiAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxuICAgICAgICAgIGN1cnJlbnRNYXNrID0gc3RhdGUuY3VycmVudE1hc2ssXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIF9leGNsdWRlZCk7XG5cbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChtLCBtaSkge1xuICAgICAgICByZXR1cm4gbS5zdGF0ZSA9IGNvbXBpbGVkTWFza3NbbWldO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjdXJyZW50TWFza1JlZiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjdXJyZW50TWFza1JlZjtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IGN1cnJlbnRNYXNrO1xuICAgICAgfVxuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMztcblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2szID0gdGhpcy5jdXJyZW50TWFzaykuZXh0cmFjdElucHV0LmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrMywgYXJndW1lbnRzKSA6ICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazQsIF9nZXQzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazQsIGFyZ3MpIDogKF9nZXQzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQzLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5kb0NvbW1pdCgpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcygpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazUsIF9nZXQ0O1xuXG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKS5uZWFyZXN0SW5wdXRQb3MuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s1LCBhcmdzKSA6IChfZ2V0NCA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJuZWFyZXN0SW5wdXRQb3NcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDQsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvdmVyd3JpdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5vdmVyd3JpdGUgOiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwib3ZlcndyaXRlXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3ZlcndyaXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1wib3ZlcndyaXRlXCIgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gZHluYW1pYyBtYXNrLCB1c2UgdGhpcyBvcHRpb24gaW4gc2libGluZ3MnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRHluYW1pYztcbn0oTWFza2VkKTtcbk1hc2tlZER5bmFtaWMuREVGQVVMVFMgPSB7XG4gIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhcHBlbmRlZCwgbWFza2VkLCBmbGFncykge1xuICAgIGlmICghbWFza2VkLmNvbXBpbGVkTWFza3MubGVuZ3RoKSByZXR1cm47XG4gICAgdmFyIGlucHV0VmFsdWUgPSBtYXNrZWQucmF3SW5wdXRWYWx1ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgIHZhciBpbnB1dHMgPSBtYXNrZWQuY29tcGlsZWRNYXNrcy5tYXAoZnVuY3Rpb24gKG0sIGluZGV4KSB7XG4gICAgICBtLnJlc2V0KCk7XG4gICAgICBtLmFwcGVuZChpbnB1dFZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBtLmFwcGVuZChhcHBlbmRlZCwgZmxhZ3MpO1xuICAgICAgdmFyIHdlaWdodCA9IG0ucmF3SW5wdXRWYWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgIH0pOyAvLyBwb3AgbWFza3Mgd2l0aCBsb25nZXIgdmFsdWVzIGZpcnN0XG5cbiAgICBpbnB1dHMuc29ydChmdW5jdGlvbiAoaTEsIGkyKSB7XG4gICAgICByZXR1cm4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0O1xuICAgIH0pO1xuICAgIHJldHVybiBtYXNrZWQuY29tcGlsZWRNYXNrc1tpbnB1dHNbMF0uaW5kZXhdO1xuICB9XG59O1xuSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG5cbmV4cG9ydCB7IE1hc2tlZER5bmFtaWMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWEwYjM0NzY0LmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gd2hpY2ggdmFsaWRhdGVzIGVudW0gdmFsdWVzICovXG5cbnZhciBNYXNrZWRFbnVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRW51bSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRW51bSk7XG5cbiAgZnVuY3Rpb24gTWFza2VkRW51bSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRW51bSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRW51bSwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICovXG4gICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIGlmIChvcHRzLmVudW0pIG9wdHMubWFzayA9ICcqJy5yZXBlYXQob3B0cy5lbnVtWzBdLmxlbmd0aCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEVudW0ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgfSkgJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRFbnVtO1xufShNYXNrZWRQYXR0ZXJuKTtcbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuXG5leHBvcnQgeyBNYXNrZWRFbnVtIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWEwYjM0NzY0LmpzJztcblxuLyoqIEdldCBNYXNrZWQgY2xhc3MgYnkgbWFzayB0eXBlICovXG5cbmZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2spIHtcbiAgaWYgKG1hc2sgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWFzayBwcm9wZXJ0eSBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gSU1hc2suTWFza2VkUmVnRXhwOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKGlzU3RyaW5nKG1hc2spKSByZXR1cm4gSU1hc2suTWFza2VkUGF0dGVybjsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRGF0ZSB8fCBtYXNrID09PSBEYXRlKSByZXR1cm4gSU1hc2suTWFza2VkRGF0ZTsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgTnVtYmVyIHx8IHR5cGVvZiBtYXNrID09PSAnbnVtYmVyJyB8fCBtYXNrID09PSBOdW1iZXIpIHJldHVybiBJTWFzay5NYXNrZWROdW1iZXI7IC8vICRGbG93Rml4TWVcblxuICBpZiAoQXJyYXkuaXNBcnJheShtYXNrKSB8fCBtYXNrID09PSBBcnJheSkgcmV0dXJuIElNYXNrLk1hc2tlZER5bmFtaWM7IC8vICRGbG93Rml4TWVcblxuICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sucHJvdG90eXBlIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzazsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHJldHVybiBJTWFzay5NYXNrZWRGdW5jdGlvbjsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzay5jb25zdHJ1Y3RvcjtcbiAgY29uc29sZS53YXJuKCdNYXNrIG5vdCBmb3VuZCBmb3IgbWFzaycsIG1hc2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiBJTWFzay5NYXNrZWQ7XG59XG4vKiogQ3JlYXRlcyBuZXcge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXNrKG9wdHMpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICBpZiAoSU1hc2suTWFza2VkICYmIG9wdHMgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBvcHRzO1xuICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cyk7XG4gIHZhciBtYXNrID0gb3B0cy5tYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcbiAgdmFyIE1hc2tlZENsYXNzID0gbWFza2VkQ2xhc3MobWFzayk7XG4gIGlmICghTWFza2VkQ2xhc3MpIHRocm93IG5ldyBFcnJvcignTWFza2VkIGNsYXNzIGlzIG5vdCBmb3VuZCBmb3IgcHJvdmlkZWQgbWFzaywgYXBwcm9wcmlhdGUgbW9kdWxlIG5lZWRzIHRvIGJlIGltcG9ydCBtYW51YWxseSBiZWZvcmUgY3JlYXRpbmcgbWFzay4nKTtcbiAgcmV0dXJuIG5ldyBNYXNrZWRDbGFzcyhvcHRzKTtcbn1cbklNYXNrLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xuXG5leHBvcnQgeyBjcmVhdGVNYXNrIGFzIGRlZmF1bHQsIG1hc2tlZENsYXNzIH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXG5cbnZhciBNYXNrZWRGdW5jdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRnVuY3Rpb24sIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRnVuY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEZ1bmN0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRGdW5jdGlvbik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRnVuY3Rpb24sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IG9wdHMubWFzaztcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRnVuY3Rpb24ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xufShNYXNrZWQpO1xuSU1hc2suTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcblxuZXhwb3J0IHsgTWFza2VkRnVuY3Rpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGYgYXMgX3NsaWNlZFRvQXJyYXksIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IHsgZXNjYXBlUmVnRXhwLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbi8qKlxuICBOdW1iZXIgbWFza1xuICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5yYWRpeCAtIFNpbmdsZSBjaGFyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnRob3VzYW5kc1NlcGFyYXRvciAtIFNpbmdsZSBjaGFyXG4gIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1pblxuICBAcGFyYW0ge251bWJlcn0gb3B0cy5tYXhcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnNpZ25lZCAtIEFsbG93IG5lZ2F0aXZlXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5ub3JtYWxpemVaZXJvcyAtIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXG4qL1xudmFyIE1hc2tlZE51bWJlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkTnVtYmVyLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZE51bWJlcik7XG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cblxuICAvKiogKi9cblxuICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuICBmdW5jdGlvbiBNYXNrZWROdW1iZXIob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWROdW1iZXIpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZE51bWJlci5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxuICAgIEBvdmVycmlkZVxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZE51bWJlciwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVSZWdFeHBzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSZWdFeHBzKCkge1xuICAgICAgLy8gdXNlIGRpZmZlcmVudCByZWdleHAgdG8gcHJvY2VzcyB1c2VyIGlucHV0IChtb3JlIHN0cmljdCwgaW5wdXQgc3VmZml4KSBhbmQgdGFpbCBzaGlmdGluZ1xuICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgIHZhciBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcbiAgICAgIHZhciBtaWQgPSAnXFxcXGQqJztcbiAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWRJbnB1dCArIGVuZCk7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHAgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkICsgZW5kKTtcbiAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MDExMDIvaG93LXRvLXByaW50LWEtbnVtYmVyLXdpdGgtY29tbWFzLWFzLXRob3VzYW5kcy1zZXBhcmF0b3JzLWluLWphdmFzY3JpcHRcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXMsIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc3RyLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCkpXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9zZXBhcmF0b3JzQ291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlcGFyYXRvcnNDb3VudCh0bykge1xuICAgICAgdmFyIGV4dGVuZE9uU2VwYXJhdG9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCB0bzsgKytwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgaWYgKGV4dGVuZE9uU2VwYXJhdG9ycykgdG8gKz0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoKSB7XG4gICAgICB2YXIgc2xpY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcnNDb3VudCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHNsaWNlKS5sZW5ndGgsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQsIDIpO1xuXG4gICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlswXTtcbiAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlsxXTtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImV4dHJhY3RJbnB1dFwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zLCBmbGFncykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShwcmV2QmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuXG4gICAgICB2YXIgYXBwZW5kRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIGFwcGVuZERldGFpbHMuc2tpcCA9ICFhcHBlbmREZXRhaWxzLnJhd0luc2VydGVkICYmIGNoID09PSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcjtcbiAgICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU2VwYXJhdG9yQXJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgaWYgKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSB7XG4gICAgICAgIHZhciBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuXG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDMgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzLCAyKTtcblxuICAgICAgZnJvbVBvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMF07XG4gICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMV07XG4gICAgICB2YXIgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xuICAgICAgdmFyIHZhbHVlQWZ0ZXJQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcblxuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHZhbHVlQmVmb3JlUG9zLmxlbmd0aCk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlQmVmb3JlUG9zICsgdmFsdWVBZnRlclBvcykpO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSh2YWx1ZUJlZm9yZVBvcyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gY3Vyc29yUG9zO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdEVuZFBvcyA9IHNlcGFyYXRvckF0TGVmdFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcblxuICAgICAgICAgICAgICBpZiAoY3Vyc29yUG9zIDwgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0TGVmdFBvcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRSaWdodFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdFJpZ2h0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICB2YXIgcmVnZXhwID0gZmxhZ3MuaW5wdXQgPyB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA6IHRoaXMuX251bWJlclJlZ0V4cDsgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXG5cbiAgICAgIHZhciB2YWxpZCA9IHJlZ2V4cC50ZXN0KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSkpO1xuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgYXMgbnVtYmVyXG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJiAodGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA+PSAwIHx8IHRoaXMubWluIDw9IHRoaXMubnVtYmVyKSAmJiAodGhpcy5tYXggPT0gbnVsbCB8fCB0aGlzLm1heCA8PSAwIHx8IHRoaXMubnVtYmVyIDw9IHRoaXMubWF4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkICYmIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBmbGFncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xuXG4gICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xuICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgfVxuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ub3JtYWxpemVaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm9ybWFsaXplWmVyb3ModmFsdWUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpOyAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xuXG5cbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XG4gICAgICB9KTsgLy8gYWRkIGxlYWRpbmcgemVyb1xuXG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcblxuICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFkRnJhY3Rpb25hbFplcm9zKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fbm9ybWFsaXplWmVyb3ModGhpcy52YWx1ZSkpLnJlcGxhY2UodGhpcy5yYWRpeCwgJy4nKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZS5yZXBsYWNlKCcuJywgdGhpcy5yYWRpeCksIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMudW5tYXNrZWRWYWx1ZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIFN0cmluZyhuKSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgTnVtYmVyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXIpIHtcbiAgICAgIHRoaXMudHlwZWRWYWx1ZSA9IG51bWJlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICBJcyBuZWdhdGl2ZSBhbGxvd2VkXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb3dOZWdhdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnbmVkIHx8IHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwIHx8IHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPCAwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWROdW1iZXI7XG59KE1hc2tlZCk7XG5NYXNrZWROdW1iZXIuREVGQVVMVFMgPSB7XG4gIHJhZGl4OiAnLCcsXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXG4gIG1hcFRvUmFkaXg6IFsnLiddLFxuICBzY2FsZTogMixcbiAgc2lnbmVkOiBmYWxzZSxcbiAgbm9ybWFsaXplWmVyb3M6IHRydWUsXG4gIHBhZEZyYWN0aW9uYWxaZXJvczogZmFsc2Vcbn07XG5JTWFzay5NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG5cbmV4cG9ydCB7IE1hc2tlZE51bWJlciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMsIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OLCBmb3JjZURpcmVjdGlvbiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgUGF0dGVybklucHV0RGVmaW5pdGlvbiwgeyBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TIH0gZnJvbSAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0IFBhdHRlcm5GaXhlZERlZmluaXRpb24gZnJvbSAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0IENodW5rc1RhaWxEZXRhaWxzIGZyb20gJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJfYmxvY2tzXCJdO1xuXG4vKipcbiAgUGF0dGVybiBtYXNrXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmJsb2Nrc1xuICBAcGFyYW0ge09iamVjdH0gb3B0cy5kZWZpbml0aW9uc1xuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbGFjZWhvbGRlckNoYXJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLmxhenlcbiovXG52YXIgTWFza2VkUGF0dGVybiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkUGF0dGVybiwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRQYXR0ZXJuKTtcblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXG5cbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xuICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRQYXR0ZXJuKTtcblxuICAgIC8vIFRPRE8gdHlwZSAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9IGRvZXMgbm90IHdvcmtcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFBhdHRlcm4sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZSgpIHtcbiAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmluaXRpb25zLCBvcHRzLmRlZmluaXRpb25zKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fcmVidWlsZE1hc2soKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVidWlsZE1hc2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYnVpbGRNYXNrKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGRlZnMgPSB0aGlzLmRlZmluaXRpb25zO1xuICAgICAgdGhpcy5fYmxvY2tzID0gW107XG4gICAgICB0aGlzLl9zdG9wcyA9IFtdO1xuICAgICAgdGhpcy5fbWFza2VkQmxvY2tzID0ge307XG4gICAgICB2YXIgcGF0dGVybiA9IHRoaXMubWFzaztcbiAgICAgIGlmICghcGF0dGVybiB8fCAhZGVmcykgcmV0dXJuO1xuICAgICAgdmFyIHVubWFza2luZ0Jsb2NrID0gZmFsc2U7XG4gICAgICB2YXIgb3B0aW9uYWxCbG9jayA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBhdHRlcm4uc2xpY2UoaSk7XG4gICAgICAgICAgICB2YXIgYk5hbWVzID0gT2JqZWN0LmtleXMoX3RoaXMuYmxvY2tzKS5maWx0ZXIoZnVuY3Rpb24gKGJOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwLmluZGV4T2YoYk5hbWUpID09PSAwO1xuICAgICAgICAgICAgfSk7IC8vIG9yZGVyIGJ5IGtleSBsZW5ndGhcblxuICAgICAgICAgICAgYk5hbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgICAgICB9KTsgLy8gdXNlIGJsb2NrIG5hbWUgd2l0aCBtYXggbGVuZ3RoXG5cbiAgICAgICAgICAgIHZhciBiTmFtZSA9IGJOYW1lc1swXTtcblxuICAgICAgICAgICAgaWYgKGJOYW1lKSB7XG4gICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcbiAgICAgICAgICAgICAgdmFyIG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IF90aGlzLFxuICAgICAgICAgICAgICAgIGxhenk6IF90aGlzLmxhenksXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiBfdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBfdGhpcy5vdmVyd3JpdGVcbiAgICAgICAgICAgICAgfSwgX3RoaXMuYmxvY2tzW2JOYW1lXSkpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7IC8vIHN0b3JlIGJsb2NrIGluZGV4XG5cblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhciA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgdmFyIF9pc0lucHV0ID0gKGNoYXIgaW4gZGVmcyk7XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XG4gICAgICAgICAgdGhpcy5fc3RvcHMucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoKTtcblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICB1bm1hc2tpbmdCbG9jayA9ICF1bm1hc2tpbmdCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAnWycgfHwgY2hhciA9PT0gJ10nKSB7XG4gICAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcbiAgICAgICAgICArK2k7XG4gICAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcbiAgICAgICAgICBfaXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZiA9IF9pc0lucHV0ID8gbmV3IFBhdHRlcm5JbnB1dERlZmluaXRpb24oe1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxuICAgICAgICAgIGlzT3B0aW9uYWw6IG9wdGlvbmFsQmxvY2tcbiAgICAgICAgfSkgOiBuZXcgUGF0dGVybkZpeGVkRGVmaW5pdGlvbih7XG4gICAgICAgICAgY2hhcjogY2hhcixcbiAgICAgICAgICBpc1VubWFza2luZzogdW5tYXNraW5nQmxvY2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2goZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX2Jsb2NrczogdGhpcy5fYmxvY2tzLm1hcChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiBiLnN0YXRlO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIF9ibG9ja3MgPSBzdGF0ZS5fYmxvY2tzLFxuICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBfZXhjbHVkZWQpO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYiwgYmkpIHtcbiAgICAgICAgcmV0dXJuIGIuc3RhdGUgPSBfYmxvY2tzW2JpXTtcbiAgICAgIH0pO1xuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZXNldFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNDb21wbGV0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmRvQ29tbWl0KCk7XG4gICAgICB9KTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBiLnVubWFza2VkVmFsdWU7XG4gICAgICB9LCAnJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJhcHBlbmRUYWlsXCIsIHRoaXMpLmNhbGwodGhpcywgdGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgdmFyIGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAoIWJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIGZvciAodmFyIGJpID0gYmxvY2tJdGVyLmluZGV4OzsgKytiaSkge1xuICAgICAgICB2YXIgX2Jsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgaWYgKCFfYmxvY2spIGJyZWFrO1xuXG4gICAgICAgIHZhciBibG9ja0RldGFpbHMgPSBfYmxvY2suX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcblxuICAgICAgICB2YXIgc2tpcCA9IGJsb2NrRGV0YWlscy5za2lwO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShibG9ja0RldGFpbHMpO1xuICAgICAgICBpZiAoc2tpcCB8fCBibG9ja0RldGFpbHMucmF3SW5zZXJ0ZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBjaHVua1RhaWwgPSBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIGNodW5rVGFpbDtcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBiaSwgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICB2YXIgYmxvY2tDaHVuayA9IGIuZXh0cmFjdFRhaWwoYkZyb21Qb3MsIGJUb1Bvcyk7XG4gICAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IF90aGlzMi5fZmluZFN0b3BCZWZvcmUoYmkpO1xuICAgICAgICBibG9ja0NodW5rLmZyb20gPSBfdGhpczIuX2Jsb2NrU3RhcnRQb3MoYmkpO1xuICAgICAgICBpZiAoYmxvY2tDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSBibG9ja0NodW5rLmJsb2NrSW5kZXggPSBiaTtcbiAgICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2h1bmtUYWlsO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xuICAgICAgdmFyIGlucHV0ID0gJyc7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgZnJvbVBvcywgdG9Qb3MpIHtcbiAgICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU3RvcEJlZm9yZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xuICAgICAgdmFyIHN0b3BCZWZvcmU7XG5cbiAgICAgIGZvciAodmFyIHNpID0gMDsgc2kgPCB0aGlzLl9zdG9wcy5sZW5ndGg7ICsrc2kpIHtcbiAgICAgICAgdmFyIHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XG4gICAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO2Vsc2UgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIodG9CbG9ja0luZGV4KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMubGF6eSAmJiB0b0Jsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIHZhciBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICBpZiAoIXN0YXJ0QmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBzdGFydEJsb2NrSW5kZXggPSBzdGFydEJsb2NrSXRlci5pbmRleDtcbiAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuXG4gICAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICghYi5sYXp5IHx8IHRvQmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBgX2Jsb2Nrc2AgbWF5IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgdmFyIGFyZ3MgPSBiLl9ibG9ja3MgIT0gbnVsbCA/IFtiLl9ibG9ja3MubGVuZ3RoXSA6IFtdO1xuXG4gICAgICAgICAgdmFyIGJEZXRhaWxzID0gYi5fYXBwZW5kUGxhY2Vob2xkZXIuYXBwbHkoYiwgYXJncyk7XG5cbiAgICAgICAgICBfdGhpczMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJEZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogRmluZHMgYmxvY2sgaW4gcG9zICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbWFwUG9zVG9CbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFwUG9zVG9CbG9jayhwb3MpIHtcbiAgICAgIHZhciBhY2NWYWwgPSAnJztcblxuICAgICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9ibG9jazIgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgICB2YXIgYmxvY2tTdGFydFBvcyA9IGFjY1ZhbC5sZW5ndGg7XG4gICAgICAgIGFjY1ZhbCArPSBfYmxvY2syLnZhbHVlO1xuXG4gICAgICAgIGlmIChwb3MgPD0gYWNjVmFsLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogYmksXG4gICAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3NcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Jsb2NrU3RhcnRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zbGljZSgwLCBibG9ja0luZGV4KS5yZWR1Y2UoZnVuY3Rpb24gKHBvcywgYikge1xuICAgICAgICByZXR1cm4gcG9zICs9IGIudmFsdWUubGVuZ3RoO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZvckVhY2hCbG9ja3NJblJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zKSB7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcblxuICAgICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcbiAgICAgICAgdmFyIHRvQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1Bvcyk7IC8vIHByb2Nlc3MgZmlyc3QgYmxvY2tcblxuXG4gICAgICAgIHZhciBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xuICAgICAgICB2YXIgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcbiAgICAgICAgdmFyIGZyb21CbG9ja0VuZFBvcyA9IHRvQmxvY2tJdGVyICYmIGlzU2FtZUJsb2NrID8gdG9CbG9ja0l0ZXIub2Zmc2V0IDogdGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcblxuICAgICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XG4gICAgICAgICAgLy8gcHJvY2VzcyBpbnRlcm1lZGlhdGUgYmxvY2tzXG4gICAgICAgICAgZm9yICh2YXIgYmkgPSBmcm9tQmxvY2tJdGVyLmluZGV4ICsgMTsgYmkgPCB0b0Jsb2NrSXRlci5pbmRleDsgKytiaSkge1xuICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICB9IC8vIHByb2Nlc3MgbGFzdCBibG9ja1xuXG5cbiAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICB2YXIgcmVtb3ZlRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZW1vdmVcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIC8vIFRPRE8gcmVmYWN0b3IgLSBleHRyYWN0IGFsaWduYmxvY2tcbiAgICAgIHZhciBiZWdpbkJsb2NrRGF0YSA9IHRoaXMuX21hcFBvc1RvQmxvY2soY3Vyc29yUG9zKSB8fCB7XG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH07XG4gICAgICB2YXIgYmVnaW5CbG9ja09mZnNldCA9IGJlZ2luQmxvY2tEYXRhLm9mZnNldCxcbiAgICAgICAgICBiZWdpbkJsb2NrSW5kZXggPSBiZWdpbkJsb2NrRGF0YS5pbmRleDtcbiAgICAgIHZhciBiZWdpbkJsb2NrID0gdGhpcy5fYmxvY2tzW2JlZ2luQmxvY2tJbmRleF07XG4gICAgICBpZiAoIWJlZ2luQmxvY2spIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICB2YXIgYmVnaW5CbG9ja0N1cnNvclBvcyA9IGJlZ2luQmxvY2tPZmZzZXQ7IC8vIGlmIHBvc2l0aW9uIGluc2lkZSBibG9jayAtIHRyeSB0byBhZGp1c3QgaXRcblxuICAgICAgaWYgKGJlZ2luQmxvY2tDdXJzb3JQb3MgIT09IDAgJiYgYmVnaW5CbG9ja0N1cnNvclBvcyA8IGJlZ2luQmxvY2sudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrLm5lYXJlc3RJbnB1dFBvcyhiZWdpbkJsb2NrT2Zmc2V0LCBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnNvckF0UmlnaHQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSBiZWdpbkJsb2NrLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBjdXJzb3JBdExlZnQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSAwOyAvLyAgY3Vyc29yIGlzIElOU0lERSBmaXJzdCBibG9jayAobm90IGF0IGJvdW5kcylcblxuICAgICAgaWYgKCFjdXJzb3JBdExlZnQgJiYgIWN1cnNvckF0UmlnaHQpIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJlZ2luQmxvY2tJbmRleCkgKyBiZWdpbkJsb2NrQ3Vyc29yUG9zO1xuICAgICAgdmFyIHNlYXJjaEJsb2NrSW5kZXggPSBjdXJzb3JBdFJpZ2h0ID8gYmVnaW5CbG9ja0luZGV4ICsgMSA6IGJlZ2luQmxvY2tJbmRleDtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgLy8gTk9ORSBkaXJlY3Rpb24gdXNlZCB0byBjYWxjdWxhdGUgc3RhcnQgaW5wdXQgcG9zaXRpb24gaWYgbm8gY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAgIC8vIEZPUiBOT05FOlxuICAgICAgICAvLyAtXG4gICAgICAgIC8vIGlucHV0fGFueVxuICAgICAgICAvLyAtPlxuICAgICAgICAvLyAgYW55fGlucHV0XG4gICAgICAgIC8vIDwtXG4gICAgICAgIC8vICBmaWxsZWQtaW5wdXR8YW55XG4gICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IGxlZnQgaXMgaW5wdXRcbiAgICAgICAgaWYgKHNlYXJjaEJsb2NrSW5kZXggPiAwKSB7XG4gICAgICAgICAgdmFyIGJsb2NrSW5kZXhBdExlZnQgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTtcbiAgICAgICAgICB2YXIgYmxvY2tBdExlZnQgPSB0aGlzLl9ibG9ja3NbYmxvY2tJbmRleEF0TGVmdF07XG4gICAgICAgICAgdmFyIGJsb2NrSW5wdXRQb3MgPSBibG9ja0F0TGVmdC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG4gICAgICAgICAgaWYgKCFibG9ja0F0TGVmdC52YWx1ZS5sZW5ndGggfHwgYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhzZWFyY2hCbG9ja0luZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gLT5cblxuXG4gICAgICAgIHZhciBmaXJzdElucHV0QXRSaWdodCA9IHNlYXJjaEJsb2NrSW5kZXg7XG5cbiAgICAgICAgZm9yICh2YXIgYmkgPSBmaXJzdElucHV0QXRSaWdodDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICAgICAgdmFyIGJsb2NrQXRSaWdodCA9IHRoaXMuX2Jsb2Nrc1tiaV07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MgPSBibG9ja0F0UmlnaHQubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcblxuICAgICAgICAgIGlmICghYmxvY2tBdFJpZ2h0LnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2tBdFJpZ2h0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgX2Jsb2NrSW5wdXRQb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIDwtXG4gICAgICAgIC8vIGZpbmQgZmlyc3Qgbm9uLWZpeGVkIHN5bWJvbFxuXG5cbiAgICAgICAgZm9yICh2YXIgX2JpID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7IF9iaSA+PSAwOyAtLV9iaSkge1xuICAgICAgICAgIHZhciBfYmxvY2szID0gdGhpcy5fYmxvY2tzW19iaV07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MyID0gX2Jsb2NrMy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG5cbiAgICAgICAgICBpZiAoIV9ibG9jazMudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zMiAhPT0gX2Jsb2NrMy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaSkgKyBfYmxvY2szLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgIC8vIC1cbiAgICAgICAgLy8gIGFueXxmaWxsZWQtaW5wdXRcbiAgICAgICAgLy8gPC1cbiAgICAgICAgLy8gIGFueXxmaXJzdCBub3QgZW1wdHkgaXMgbm90LWxlbi1hbGlnbmVkXG4gICAgICAgIC8vICBub3QtMC1hbGlnbmVkfGFueVxuICAgICAgICAvLyAtPlxuICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZCBvciBlbmRcbiAgICAgICAgLy8gY2hlY2sgaWYgZmlyc3QgYmxvY2sgYXQgcmlnaHQgaXMgZmlsbGVkIGlucHV0XG4gICAgICAgIHZhciBmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0O1xuXG4gICAgICAgIGZvciAodmFyIF9iaTIgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmkyIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmkyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tfYmkyXS52YWx1ZSkge1xuICAgICAgICAgICAgZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCA9IF9iaTI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIGZpbGxlZEJsb2NrID0gdGhpcy5fYmxvY2tzW2ZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHRdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zMyA9IGZpbGxlZEJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uUklHSFQpO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zMyA9PT0gMCAmJiBmaWxsZWRCbG9jay51bm1hc2tlZFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gZmlsbGVkIGJsb2NrIGlzIGlucHV0XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0KSArIF9ibG9ja0lucHV0UG9zMztcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gPC1cbiAgICAgICAgLy8gZmluZCB0aGlzIHZhcnNcblxuXG4gICAgICAgIHZhciBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IC0xO1xuICAgICAgICB2YXIgZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleDsgLy8gVE9ETyBjb25zaWRlciBuZXN0ZWQgZW1wdHkgaW5wdXRzXG5cbiAgICAgICAgZm9yICh2YXIgX2JpMyA9IHNlYXJjaEJsb2NrSW5kZXggLSAxOyBfYmkzID49IDA7IC0tX2JpMykge1xuICAgICAgICAgIHZhciBfYmxvY2s0ID0gdGhpcy5fYmxvY2tzW19iaTNdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNCA9IF9ibG9jazQubmVhcmVzdElucHV0UG9zKF9ibG9jazQudmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uRk9SQ0VfTEVGVCk7XG5cbiAgICAgICAgICBpZiAoIV9ibG9jazQudmFsdWUgfHwgX2Jsb2NrSW5wdXRQb3M0ICE9PSAwKSBmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4ID0gX2JpMztcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczQgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczQgIT09IF9ibG9jazQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIGFsaWduZWQgaW5zaWRlIGJsb2NrIC0gcmV0dXJuIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTMpICsgX2Jsb2NrSW5wdXRQb3M0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gZm91bmQgZmlsbGVkXG4gICAgICAgICAgICAgIGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID0gX2JpMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgICAvLyB0cnkgZmluZCBmaXJzdCBlbXB0eSBpbnB1dCBiZWZvcmUgc3RhcnQgc2VhcmNoaW5nIHBvc2l0aW9uIG9ubHkgd2hlbiBub3QgZm9yY2VkXG4gICAgICAgICAgZm9yICh2YXIgX2JpNCA9IGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ICsgMTsgX2JpNCA8PSBNYXRoLm1pbihzZWFyY2hCbG9ja0luZGV4LCB0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7ICsrX2JpNCkge1xuICAgICAgICAgICAgdmFyIF9ibG9jazUgPSB0aGlzLl9ibG9ja3NbX2JpNF07XG5cbiAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczUgPSBfYmxvY2s1Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XG5cbiAgICAgICAgICAgIHZhciBibG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTQpICsgX2Jsb2NrSW5wdXRQb3M1O1xuXG4gICAgICAgICAgICBpZiAoYmxvY2tBbGlnbmVkUG9zID4gY3Vyc29yUG9zKSBicmVhazsgLy8gaWYgYmxvY2sgaXMgbm90IGxhenkgaW5wdXRcblxuICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNSAhPT0gX2Jsb2NrNS52YWx1ZS5sZW5ndGgpIHJldHVybiBibG9ja0FsaWduZWRQb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHByb2Nlc3Mgb3ZlcmZsb3dcblxuXG4gICAgICAgIGlmIChmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgpICsgdGhpcy5fYmxvY2tzW2ZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4XS52YWx1ZS5sZW5ndGg7XG4gICAgICAgIH0gLy8gZm9yIGxhenkgaWYgaGFzIGFsaWduZWQgbGVmdCBpbnNpZGUgZml4ZWQgYW5kIGhhcyBjYW1lIHRvIHRoZSBzdGFydCAtIHVzZSBzdGFydCBwb3NpdGlvblxuXG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQgfHwgdGhpcy5sYXp5ICYmICF0aGlzLmV4dHJhY3RJbnB1dCgpICYmICFpc0lucHV0KHRoaXMuX2Jsb2Nrc1tzZWFyY2hCbG9ja0luZGV4XSkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4KTtcbiAgICAgICAgfSAvLyBmaW5kIGZpcnN0IGlucHV0XG5cblxuICAgICAgICBmb3IgKHZhciBfYmk1ID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpNSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNSkge1xuICAgICAgICAgIHZhciBfYmxvY2s2ID0gdGhpcy5fYmxvY2tzW19iaTVdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNiA9IF9ibG9jazYubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcblxuXG4gICAgICAgICAgaWYgKCFfYmxvY2s2LnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvczYgIT09IF9ibG9jazYudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk1KSArIF9ibG9ja0lucHV0UG9zNjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XG4gICAgICAgIC8vIC0+XG4gICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkIGFuZCBmaWxsZWRcbiAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWRcbiAgICAgICAgLy8gPC1cbiAgICAgICAgLy8gIG5vdC0wLWFsaWduZWQgb3Igc3RhcnR8YW55XG4gICAgICAgIHZhciBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7XG4gICAgICAgIHZhciBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zO1xuXG4gICAgICAgIGZvciAodmFyIF9iaTYgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmk2IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk2KSB7XG4gICAgICAgICAgdmFyIF9ibG9jazcgPSB0aGlzLl9ibG9ja3NbX2JpNl07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M3ID0gX2Jsb2NrNy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNyAhPT0gX2Jsb2NrNy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTYpICsgX2Jsb2NrSW5wdXRQb3M3O1xuICAgICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ID0gX2JpNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXggIT0gbnVsbCAmJiBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKHZhciBfYmk3ID0gZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4OyBfYmk3IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk3KSB7XG4gICAgICAgICAgICB2YXIgX2Jsb2NrOCA9IHRoaXMuX2Jsb2Nrc1tfYmk3XTtcblxuICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zOCA9IF9ibG9jazgubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5GT1JDRV9SSUdIVCk7XG5cbiAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczggIT09IF9ibG9jazgudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTcpICsgX2Jsb2NrSW5wdXRQb3M4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCA/IHRoaXMudmFsdWUubGVuZ3RoIDogZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9iaTggPSBNYXRoLm1pbihzZWFyY2hCbG9ja0luZGV4LCB0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7IF9iaTggPj0gMDsgLS1fYmk4KSB7XG4gICAgICAgICAgdmFyIF9ibG9jazkgPSB0aGlzLl9ibG9ja3NbX2JpOF07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M5ID0gX2Jsb2NrOS5uZWFyZXN0SW5wdXRQb3MoX2Jsb2NrOS52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5MRUZUKTtcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczkgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBhbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk4KSArIF9ibG9ja0lucHV0UG9zOTtcblxuICAgICAgICAgICAgaWYgKGFsaWduZWRQb3MgPj0gY3Vyc29yUG9zKSByZXR1cm4gYWxpZ25lZFBvcztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tlZEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tlZEJsb2NrKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZEJsb2NrcyhuYW1lKVswXTtcbiAgICB9XG4gICAgLyoqIEdldCBhbGwgYmxvY2tzIGJ5IG5hbWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tlZEJsb2Nrc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9ja3MobmFtZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBpbmRpY2VzID0gdGhpcy5fbWFza2VkQmxvY2tzW25hbWVdO1xuICAgICAgaWYgKCFpbmRpY2VzKSByZXR1cm4gW107XG4gICAgICByZXR1cm4gaW5kaWNlcy5tYXAoZnVuY3Rpb24gKGdpKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuX2Jsb2Nrc1tnaV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUGF0dGVybjtcbn0oTWFza2VkKTtcbk1hc2tlZFBhdHRlcm4uREVGQVVMVFMgPSB7XG4gIGxhenk6IHRydWUsXG4gIHBsYWNlaG9sZGVyQ2hhcjogJ18nXG59O1xuTWFza2VkUGF0dGVybi5TVE9QX0NIQVIgPSAnYCc7XG5NYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSID0gJ1xcXFwnO1xuTWFza2VkUGF0dGVybi5JbnB1dERlZmluaXRpb24gPSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uO1xuTWFza2VkUGF0dGVybi5GaXhlZERlZmluaXRpb24gPSBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xuXG5mdW5jdGlvbiBpc0lucHV0KGJsb2NrKSB7XG4gIGlmICghYmxvY2spIHJldHVybiBmYWxzZTtcbiAgdmFyIHZhbHVlID0gYmxvY2sudmFsdWU7XG4gIHJldHVybiAhdmFsdWUgfHwgYmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKSAhPT0gdmFsdWUubGVuZ3RoO1xufVxuXG5JTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcblxuZXhwb3J0IHsgTWFza2VkUGF0dGVybiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcImNodW5rc1wiXTtcblxudmFyIENodW5rc1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG4gIGZ1bmN0aW9uIENodW5rc1RhaWxEZXRhaWxzKCkge1xuICAgIHZhciBjaHVua3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rc1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2h1bmtzVGFpbERldGFpbHMsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xuICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICAgIGlmICghU3RyaW5nKHRhaWxDaHVuaykpIHJldHVybjtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsQ2h1bmspKSB0YWlsQ2h1bmsgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsQ2h1bmspKTtcbiAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBleHRlbmRMYXN0ID0gbGFzdENodW5rICYmIChsYXN0Q2h1bmsuc3RvcCA9PT0gdGFpbENodW5rLnN0b3AgfHwgdGFpbENodW5rLnN0b3AgPT0gbnVsbCkgJiYgLy8gaWYgdGFpbCBjaHVuayBnb2VzIGp1c3QgYWZ0ZXIgbGFzdCBjaHVua1xuICAgICAgdGFpbENodW5rLmZyb20gPT09IGxhc3RDaHVuay5mcm9tICsgbGFzdENodW5rLnRvU3RyaW5nKCkubGVuZ3RoO1xuXG4gICAgICBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ29udGludW91c1RhaWxEZXRhaWxzKSB7XG4gICAgICAgIC8vIGNoZWNrIHRoZSBhYmlsaXR5IHRvIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICBpZiAoZXh0ZW5kTGFzdCkge1xuICAgICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICAgIGxhc3RDaHVuay5leHRlbmQodGFpbENodW5rLnRvU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFwcGVuZCBuZXcgY2h1bmtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIHtcbiAgICAgICAgaWYgKHRhaWxDaHVuay5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXG4gICAgICAgICAgdmFyIGZpcnN0VGFpbENodW5rO1xuXG4gICAgICAgICAgd2hpbGUgKHRhaWxDaHVuay5jaHVua3MubGVuZ3RoICYmIHRhaWxDaHVuay5jaHVua3NbMF0uc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgICBmaXJzdFRhaWxDaHVuayA9IHRhaWxDaHVuay5jaHVua3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XG4gICAgICAgICAgICB0aGlzLmV4dGVuZChmaXJzdFRhaWxDaHVuayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXG5cblxuICAgICAgICBpZiAodGFpbENodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBpZiBjaHVua3MgY29udGFpbnMgc3RvcHMsIHRoZW4gcG9wdXAgc3RvcCB0byBjb250YWluZXJcbiAgICAgICAgICB0YWlsQ2h1bmsuc3RvcCA9IHRhaWxDaHVuay5ibG9ja0luZGV4O1xuICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGlmICghKG1hc2tlZCBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICAgIHZhciB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCB0aGlzLmNodW5rcy5sZW5ndGggJiYgIWRldGFpbHMuc2tpcDsgKytjaSkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG5cbiAgICAgICAgdmFyIGxhc3RCbG9ja0l0ZXIgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2sobWFza2VkLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgdmFyIHN0b3AgPSBjaHVuay5zdG9wO1xuICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoc3RvcCAhPSBudWxsICYmICghbGFzdEJsb2NrSXRlciB8fCBsYXN0QmxvY2tJdGVyLmluZGV4IDw9IHN0b3ApKSB7XG4gICAgICAgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgfHwgLy8gZm9yIGNvbnRpbnVvdXMgYmxvY2sgYWxzbyBjaGVjayBpZiBzdG9wIGlzIGV4aXN0XG4gICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcbiAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoc3RvcCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNodW5rQmxvY2sgPSBjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzICYmIG1hc2tlZC5fYmxvY2tzW3N0b3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNodW5rQmxvY2spIHtcbiAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSBjaHVua0Jsb2NrLmFwcGVuZFRhaWwoY2h1bmspO1xuICAgICAgICAgIHRhaWxEZXRhaWxzLnNraXAgPSBmYWxzZTsgLy8gYWx3YXlzIGlnbm9yZSBza2lwLCBpdCB3aWxsIGJlIHNldCBvbiBsYXN0XG5cbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0YWlsRGV0YWlscyk7XG4gICAgICAgICAgbWFza2VkLl92YWx1ZSArPSB0YWlsRGV0YWlscy5pbnNlcnRlZDsgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xuXG4gICAgICAgICAgdmFyIHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xuICAgICAgICAgIGlmIChyZW1haW5DaGFycykgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChyZW1haW5DaGFycywge1xuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKGNodW5rLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2h1bmtzOiB0aGlzLmNodW5rcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5zdGF0ZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wLFxuICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNodW5rcyA9IHN0YXRlLmNodW5rcyxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgX2V4Y2x1ZGVkKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gICAgICB0aGlzLmNodW5rcyA9IGNodW5rcy5tYXAoZnVuY3Rpb24gKGNzdGF0ZSkge1xuICAgICAgICB2YXIgY2h1bmsgPSBcImNodW5rc1wiIGluIGNzdGF0ZSA/IG5ldyBDaHVua3NUYWlsRGV0YWlscygpIDogbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygpOyAvLyAkRmxvd0ZpeE1lIGFscmVhZHkgY2hlY2tlZCBhYm92ZVxuXG4gICAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xuICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnRCZWZvcmUocG9zKSB7XG4gICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IHBvcyAtIHRoaXMuZnJvbTtcbiAgICAgIHZhciBjaSA9IDA7XG5cbiAgICAgIHdoaWxlIChjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICAgIHZhciBzaGlmdENoYXIgPSBjaHVuay5zaGlmdEJlZm9yZShjaHVua1NoaWZ0UG9zKTtcblxuICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICAgKytjaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaHVua3NUYWlsRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IHsgQ2h1bmtzVGFpbERldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBQYXR0ZXJuRml4ZWREZWZpbml0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1VubWFza2luZyA/IHRoaXMudmFsdWUgOiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLl92YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIG1pblBvcyA9IDA7XG4gICAgICB2YXIgbWF4UG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXhQb3M7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHJldHVybiBmbGFncy5yYXcgJiYgdGhpcy5faXNSYXdJbnB1dCAmJiB0aGlzLl92YWx1ZS5zbGljZShmcm9tUG9zLCB0b1BvcykgfHwgJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5jaGFyID09PSBzdHJbMF07XG4gICAgICB2YXIgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIWZsYWdzLnRhaWw7XG4gICAgICBpZiAoaXNSZXNvbHZlZCkgZGV0YWlscy5yYXdJbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgX2lzUmF3SW5wdXQ6IHRoaXMuX2lzUmF3SW5wdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5GaXhlZERlZmluaXRpb247XG59KCk7XG5cbmV4cG9ydCB7IFBhdHRlcm5GaXhlZERlZmluaXRpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb3JlL2hvbGRlci5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJtYXNrXCJdO1xudmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICcwJzogL1xcZC8sXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgJyonOiAvLi9cbn07XG4vKiogKi9cblxudmFyIFBhdHRlcm5JbnB1dERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5JbnB1dERlZmluaXRpb24pO1xuXG4gICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgIGJsb2NrT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBfZXhjbHVkZWQpO1xuXG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGJsb2NrT3B0cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0dGVybklucHV0RGVmaW5pdGlvbiwgW3tcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXNrZWQucmVzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgaWYgKGZyb21Qb3MgPT09IDAgJiYgdG9Qb3MgPj0gMSkge1xuICAgICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNrZWQucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHwgKHRoaXMuX2lzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKHN0cikge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihzdHIsIGZsYWdzKTtcblxuICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IGRldGFpbHMucmF3SW5zZXJ0ZWQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgfVxuXG4gICAgICBkZXRhaWxzLnNraXAgPSAhZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBCb29sZWFuKGRldGFpbHMuaW5zZXJ0ZWQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKS5hcHBlbmQuYXBwbHkoX3RoaXMkbWFza2VkLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX2lzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IHRydWU7XG4gICAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQyID0gdGhpcy5tYXNrZWQpLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJG1hc2tlZDIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQzO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDMgPSB0aGlzLm1hc2tlZCkuYXBwZW5kVGFpbC5hcHBseShfdGhpcyRtYXNrZWQzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgdmFyIG1heFBvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGJvdW5kUG9zID0gTWF0aC5taW4oTWF0aC5tYXgoY3Vyc29yUG9zLCBtaW5Qb3MpLCBtYXhQb3MpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWF4UG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkNCwgX3RoaXMkcGFyZW50O1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hc2tlZDogdGhpcy5tYXNrZWQuc3RhdGUsXG4gICAgICAgIF9pc0ZpbGxlZDogdGhpcy5faXNGaWxsZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IHN0YXRlLl9pc0ZpbGxlZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgUGF0dGVybklucHV0RGVmaW5pdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuXG4vKiogTWFzayBwaXBlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdHlwZXMgKi9cblxudmFyIFBJUEVfVFlQRSA9IHtcbiAgTUFTS0VEOiAndmFsdWUnLFxuICBVTk1BU0tFRDogJ3VubWFza2VkVmFsdWUnLFxuICBUWVBFRDogJ3R5cGVkVmFsdWUnXG59O1xuLyoqIENyZWF0ZXMgbmV3IHBpcGUgZnVuY3Rpb24gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVBpcGUobWFzaykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogUElQRV9UWVBFLk1BU0tFRDtcbiAgdmFyIHRvID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBQSVBFX1RZUEUuTUFTS0VEO1xuICB2YXIgbWFza2VkID0gY3JlYXRlTWFzayhtYXNrKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBtYXNrZWQucnVuSXNvbGF0ZWQoZnVuY3Rpb24gKG0pIHtcbiAgICAgIG1bZnJvbV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBtW3RvXTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKiBQaXBlcyB2YWx1ZSB0aHJvdWdoIG1hc2sgZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbmZ1bmN0aW9uIHBpcGUodmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBpcGVBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwaXBlQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUGlwZS5hcHBseSh2b2lkIDAsIHBpcGVBcmdzKSh2YWx1ZSk7XG59XG5JTWFzay5QSVBFX1RZUEUgPSBQSVBFX1RZUEU7XG5JTWFzay5jcmVhdGVQaXBlID0gY3JlYXRlUGlwZTtcbklNYXNrLnBpcGUgPSBwaXBlO1xuXG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBmIGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1hMGIzNDc2NC5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXG5cbnZhciBNYXNrZWRSYW5nZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJhbmdlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSYW5nZSk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmFuZ2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJhbmdlKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSYW5nZSwgW3tcbiAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgIE9wdGlvbmFsbHkgc2V0cyBtYXggbGVuZ3RoIG9mIHBhdHRlcm4uXG4gICAgICBVc2VkIHdoZW4gcGF0dGVybiBsZW5ndGggaXMgbG9uZ2VyIHRoZW4gYHRvYCBwYXJhbSBsZW5ndGguIFBhZHMgemVyb3MgYXQgc3RhcnQgaW4gdGhpcyBjYXNlLlxuICAgICovXG5cbiAgICAvKiogTWluIGJvdW5kICovXG5cbiAgICAvKiogTWF4IGJvdW5kICovXG5cbiAgICAvKiogKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG86IHRoaXMudG8gfHwgMCxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tIHx8IDBcbiAgICAgIH0sIG9wdHMpO1xuICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICBpZiAob3B0cy5tYXhMZW5ndGggIT0gbnVsbCkgbWF4TGVuZ3RoID0gTWF0aC5tYXgobWF4TGVuZ3RoLCBvcHRzLm1heExlbmd0aCk7XG4gICAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKG9wdHMudG8pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciBzYW1lQ2hhcnNDb3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIG9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdChtYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJpc0NvbXBsZXRlXCIsIHRoaXMpICYmIEJvb2xlYW4odGhpcy52YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJvdW5kYXJpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYm91bmRhcmllcyhzdHIpIHtcbiAgICAgIHZhciBtaW5zdHIgPSAnJztcbiAgICAgIHZhciBtYXhzdHIgPSAnJztcblxuICAgICAgdmFyIF9yZWYgPSBzdHIubWF0Y2goL14oXFxEKikoXFxkKikoXFxEKikvKSB8fCBbXSxcbiAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDMpLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjJbMV0sXG4gICAgICAgICAgbnVtID0gX3JlZjJbMl07XG5cbiAgICAgIGlmIChudW0pIHtcbiAgICAgICAgbWluc3RyID0gJzAnLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgICAgICBtYXhzdHIgPSAnOScucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICB9XG5cbiAgICAgIG1pbnN0ciA9IG1pbnN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICBtYXhzdHIgPSBtYXhzdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnOScpO1xuICAgICAgcmV0dXJuIFttaW5zdHIsIG1heHN0cl07XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgc3RyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykuY2FsbCh0aGlzLCBzdHIsIGZsYWdzKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgaWYgKCF0aGlzLmF1dG9maXgpIHJldHVybiBzdHI7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcHJlcFN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICB2YXIgbmV4dFZhbCA9IHZhbCArIHByZXBTdHIgKyBzdHJbY2ldO1xuXG4gICAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzID0gdGhpcy5ib3VuZGFyaWVzKG5leHRWYWwpLFxuICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzBdLFxuICAgICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczJbMV07XG5cbiAgICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSBwcmVwU3RyICs9IGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHByZXBTdHIgKz0gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIHByZXBTdHIgKz0gc3RyW2NpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXBTdHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgdmFyIHN0ciA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xuICAgICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xuXG4gICAgICB2YXIgX3RoaXMkYm91bmRhcmllczMgPSB0aGlzLmJvdW5kYXJpZXMoc3RyKSxcbiAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzNCA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMzLCAyKSxcbiAgICAgICAgICBtaW5zdHIgPSBfdGhpcyRib3VuZGFyaWVzNFswXSxcbiAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzNFsxXTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZyb20gPD0gTnVtYmVyKG1heHN0cikgJiYgTnVtYmVyKG1pbnN0cikgPD0gdGhpcy50byAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSYW5nZTtcbn0oTWFza2VkUGF0dGVybik7XG5JTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xuXG5leHBvcnQgeyBNYXNrZWRSYW5nZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYTBiMzQ3NjQuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5cbnZhciBNYXNrZWRSZWdFeHAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJlZ0V4cCwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSZWdFeHApO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZFJlZ0V4cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUmVnRXhwKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSZWdFeHAsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcbiAgICAgIH07XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJlZ0V4cC5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmVnRXhwO1xufShNYXNrZWQpO1xuSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xuXG5leHBvcnQgeyBNYXNrZWRSZWdFeHAgYXMgZGVmYXVsdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==