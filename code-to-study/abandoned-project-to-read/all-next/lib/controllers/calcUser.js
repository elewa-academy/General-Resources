"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
	function Controller(model, view) {
		_classCallCheck(this, Controller);

		this.model = model;
		this.view = view;
	}

	_createClass(Controller, [{
		key: "doMath",
		value: function doMath(id, arg1, arg2) {
			var _this = this;

			this.model.get(id, function (err, op) {
				if (err) {
					console.log(err);
				} else {
					_this.view.render(op.operation(arg1, arg2));
				}
			});
		}
	}]);

	return Controller;
}();

module.exports = Controller;
//# sourceMappingURL=calcUser.js.map
