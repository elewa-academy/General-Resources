"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserView = function (_View) {
  _inherits(BrowserView, _View);

  function BrowserView(template) {
    _classCallCheck(this, BrowserView);

    return _possibleConstructorReturn(this, (BrowserView.__proto__ || Object.getPrototypeOf(BrowserView)).call(this, template));
  }

  _createClass(BrowserView, [{
    key: "render",
    value: function render(name) {
      if (name !== undefined) {
        document.getElementById("display").textContent = this.template + ' ' + name;
        document.getElementById("db").textContent = JSON.stringify(this.db);
      } else {
        document.getElementById("display").textContent = "that doesn't exist";
        document.getElementById("db").textContent = JSON.stringify(this.db);
      }
    }
  }]);

  return BrowserView;
}(View);

module.exports = BrowserView;
//# sourceMappingURL=browserView.js.map
