"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _faTimes = require("@fortawesome/free-solid-svg-icons/faTimes");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Icon = function Icon(props, ref) {
  return _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, _extends({}, props, {
    ref: ref,
    icon: _faTimes.faTimes
  }));
};

var _default = _react["default"].forwardRef(Icon);

exports["default"] = _default;