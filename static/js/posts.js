(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts"],{

/***/ "./assets/js/posts.js":
/*!****************************!*\
  !*** ./assets/js/posts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("kikou youtube"); // React
//React DOM

var LikeButton = /*#__PURE__*/function (_React$Component) {
  "use strict";

  _inherits(LikeButton, _React$Component);

  var _super = _createSuper(LikeButton);

  function LikeButton() {
    var _this;

    _classCallCheck(this, LikeButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      likes: _this.props.likes || 0,
      isLiked: _this.props.isLiked || false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var isLiked = _this.state.isLiked;
      var likes = _this.state.likes + (isLiked ? -1 : 1); // this.setState({likes: likes})
      // quand le nom de la propriété est le même que la valeur de la propriété, ES6 permet 

      _this.setState({
        likes: likes,
        isLiked: !isLiked
      });
    });

    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",

    /*     render() { 
            // on utilise une zero fonction
            return React.createElement('button' , {className : 'btn btn-link', onClick : ()=> this.handleClick()},
            this.state.likes, 
            " ",
            React.createElement("i", {className : this.state.isLiked ?'fas fa-thumbs-up' : 'far fa-thumbs-up' }),
            " ",
            this.state.isLiked ? "je n'aime plus" : "j'aime" );
    
        };
    } */
    value: function render() {
      var _this2 = this;

      // on utilise une zero fonction
      return /*#__PURE__*/React.createElement("button", {
        className: "btn btn_link",
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }, this.state.likes, "\xA0", /*#__PURE__*/React.createElement("i", {
        className: this.state.isLiked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'
      }), "\xA0", this.state.isLiked ? "je n'aime plus" : "j'aime");
    }
  }]);

  return LikeButton;
}(React.Component);

document.querySelectorAll('span.react-like').forEach(function (span) {
  ReactDOM.render(React.createElement(LikeButton), span);
});

/***/ })

},[["./assets/js/posts.js","runtime","vendors~posts"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdHMuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkxpa2VCdXR0b24iLCJsaWtlcyIsInByb3BzIiwiaXNMaWtlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNwYW4iLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFLENBRUE7QUFDQTs7SUFJTUMsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQWdCVztBQUNKQyxXQUFLLEVBQUUsTUFBS0MsS0FBTCxDQUFXRCxLQUFYLElBQW9CLENBRHZCO0FBRUpFLGFBQU8sRUFBRSxNQUFLRCxLQUFMLENBQVdDLE9BQVgsSUFBc0I7QUFGM0IsSzs7a0VBTUMsWUFBSztBQUNmLFVBQU1BLE9BQU8sR0FBRyxNQUFLQyxLQUFMLENBQVdELE9BQTNCO0FBQ0EsVUFBTUYsS0FBSyxHQUFHLE1BQUtHLEtBQUwsQ0FBV0gsS0FBWCxJQUFvQkUsT0FBTyxHQUFHLENBQUUsQ0FBTCxHQUFTLENBQXBDLENBQWQsQ0FGZSxDQUdmO0FBQ0E7O0FBQ0EsWUFBS0UsUUFBTCxDQUFjO0FBQUNKLGFBQUssRUFBTEEsS0FBRDtBQUFRRSxlQUFPLEVBQUcsQ0FBQ0E7QUFBbkIsT0FBZDtBQUNILEs7Ozs7Ozs7O0FBRUw7Ozs7Ozs7Ozs7OzZCQWFTO0FBQUE7O0FBQ0w7QUFDQSwwQkFDSTtBQUFRLGlCQUFTLEVBQUMsY0FBbEI7QUFBaUMsZUFBTyxFQUFFO0FBQUEsaUJBQUssTUFBSSxDQUFDRyxXQUFMLEVBQUw7QUFBQTtBQUExQyxTQUNLLEtBQUtGLEtBQUwsQ0FBV0gsS0FEaEIsdUJBR0k7QUFBRyxpQkFBUyxFQUNKLEtBQUtHLEtBQUwsQ0FBV0QsT0FBWCxHQUFvQixrQkFBcEIsR0FBeUM7QUFEakQsUUFISixVQU9LLEtBQUtDLEtBQUwsQ0FBV0QsT0FBWCxHQUFxQixnQkFBckIsR0FBd0MsUUFQN0MsQ0FESjtBQWFIOzs7O0VBMUR3QkksS0FBSyxDQUFDQyxTOztBQThEL0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFTQyxJQUFULEVBQWM7QUFDL0RDLFVBQVEsQ0FBQ0MsTUFBVCxDQUFnQlAsS0FBSyxDQUFDUSxhQUFOLENBQW9CZixVQUFwQixDQUFoQixFQUFpRFksSUFBakQ7QUFDSCxDQUZELEUiLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImtpa291IHlvdXR1YmVcIik7XHJcblxyXG4vLyBSZWFjdFxyXG4vL1JlYWN0IERPTVxyXG5cclxuXHJcblxyXG5jbGFzcyBMaWtlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyB1bmUgZm9pcyBxdWUgaidhaSBpbnTDqWdyw6kgYmFiZWwsIGplIG4nYWkgcGx1cyBiZXNvaW4gZGUgbW9uIGNvbnRydWN0b3IgPyE/XHJcbiAgICAvLyBMQyBleHBsaXF1ZSBxdWUgamUgcGV1eCB1dGlsaXNlciBsYSBcImZvbmN0aW9ubmFsaXTDqSBkZXMgY2xhc3NlIHByb3BlcnR5XCIgcXVpIG4nZXhpc3RhaXQgcGFzIGRhbnMgbGUgalMgbmF0aWZcclxuLyogICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxyXG4gICAgICAgICAgICBsaWtlcyA6IHRoaXMucHJvcHMubGlrZXMgfHwgMCxcclxuICAgICAgICAgICAgaXNMaWtlZCA6IHRoaXMucHJvcHMuaXNMaWtlZCB8fCBmYWxzZVxyXG4gICAgICAgICB9OyAqL1xyXG5cclxuICAgICAgICAgLy8gdGhpcy5oYW5kbGVDbGljayA6IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgIC8vIHN0YXRlIGRldmllbnQgdW4gb2JqZXRcclxuICAgICAgICAgLy8gbWFpcyBqZSBkw6l0ZXN0ZS4uLlxyXG5cclxuICAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICBsaWtlczogdGhpcy5wcm9wcy5saWtlcyB8fCAwLFxyXG4gICAgICAgICAgICAgaXNMaWtlZCA6dGhpcy5wcm9wcy5pc0xpa2VkIHx8IGZhbHNlXHJcbiAgICAgICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGlzTGlrZWQgPSB0aGlzLnN0YXRlLmlzTGlrZWQ7XHJcbiAgICAgICAgY29uc3QgbGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgKGlzTGlrZWQgPyAtIDEgOiAxKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtsaWtlczogbGlrZXN9KVxyXG4gICAgICAgIC8vIHF1YW5kIGxlIG5vbSBkZSBsYSBwcm9wcmnDqXTDqSBlc3QgbGUgbcOqbWUgcXVlIGxhIHZhbGV1ciBkZSBsYSBwcm9wcmnDqXTDqSwgRVM2IHBlcm1ldCBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaWtlcywgaXNMaWtlZCA6ICFpc0xpa2VkfSk7XHJcbiAgICB9XHJcblxyXG4vKiAgICAgcmVuZGVyKCkgeyBcclxuICAgICAgICAvLyBvbiB1dGlsaXNlIHVuZSB6ZXJvIGZvbmN0aW9uXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicgLCB7Y2xhc3NOYW1lIDogJ2J0biBidG4tbGluaycsIG9uQ2xpY2sgOiAoKT0+IHRoaXMuaGFuZGxlQ2xpY2soKX0sXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5saWtlcywgXHJcbiAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZSA6IHRoaXMuc3RhdGUuaXNMaWtlZCA/J2ZhcyBmYS10aHVtYnMtdXAnIDogJ2ZhciBmYS10aHVtYnMtdXAnIH0pLFxyXG4gICAgICAgIFwiIFwiLFxyXG4gICAgICAgIHRoaXMuc3RhdGUuaXNMaWtlZCA/IFwiamUgbidhaW1lIHBsdXNcIiA6IFwiaidhaW1lXCIgKTtcclxuXHJcbiAgICB9O1xyXG59ICovXHJcblxyXG5cclxucmVuZGVyKCkgeyBcclxuICAgIC8vIG9uIHV0aWxpc2UgdW5lIHplcm8gZm9uY3Rpb25cclxuICAgIHJldHVybihcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG5fbGlua1wiIG9uQ2xpY2s9eygpPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubGlrZXN9XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMaWtlZCA/J2ZhcyBmYS10aHVtYnMtdXAnIDogJ2ZhciBmYS10aHVtYnMtdXAnXHJcbiAgICAgICAgICAgICAgICB9Lz5cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTGlrZWQgPyBcImplIG4nYWltZSBwbHVzXCIgOiBcImonYWltZVwiIH1cclxuICAgICAgICA8L2J1dHRvbj4gICAgXHJcbiAgICBcclxuICAgICk7XHJcblxyXG59XHJcblxyXG59XHJcbiBcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5yZWFjdC1saWtlJykuZm9yRWFjaChmdW5jdGlvbihzcGFuKXtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KExpa2VCdXR0b24pLCBzcGFuKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==