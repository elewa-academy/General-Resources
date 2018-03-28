"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserController = function (_Controller) {
  _inherits(BrowserController, _Controller);

  function BrowserController() {
    _classCallCheck(this, BrowserController);

    return _possibleConstructorReturn(this, (BrowserController.__proto__ || Object.getPrototypeOf(BrowserController)).apply(this, arguments));
  }

  _createClass(BrowserController, [{
    key: "browse",
    value: function browse(meth, arg1, arg2) {
      if (this[meth] !== undefined) {
        this[meth](arg1, arg2);
      } else {
        this.view.render();
      }
    }
  }]);

  return BrowserController;
}(Controller);

module.exports = BrowserController;
//# sourceMappingURL=browserController.js.map
