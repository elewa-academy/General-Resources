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
		key: "getOne",
		value: function getOne(key) {
			var _this = this;

			this.model.get(key, function (err, object) {
				if (err) {
					console.log(err);
				} else {
					_this.view.render(object);
				}
			});
		}
	}, {
		key: "getAll",
		value: function getAll() {
			var _this2 = this;

			this.model.getAll(function (err, allEm) {
				if (err) {
					console.log(err);
				} else {
					_this2.view.render(allEm);
				}
			});
		}
	}, {
		key: "update",
		value: function update(id, key, valueNew) {
			var _this3 = this;

			this.model.update(id, key, valueNew, function (err) {
				if (err) {
					console.log(err);
				} else {
					_this3.model.getAll(function (err, allEm) {
						if (err) {
							console.log(err);
						} else {
							_this3.view.render(allEm);
						}
					});
				}
			});
		}
	}, {
		key: "post",
		value: function post(newObject) {
			var _this4 = this;

			this.model.add(newObject, function (err) {
				if (err) {
					console.log(err);
				} else {
					_this4.model.getAll(function (err, allOfem) {
						if (err) {
							console.log(err);
						} else {
							_this4.view.render(allOfem);
						};
					});
				};
			});
		}
	}, {
		key: "delete",
		value: function _delete(id) {
			var _this5 = this;

			this.model.delete(id, function (err) {
				if (err) {
					console.log(err);
				} else {
					_this5.model.getAll(function (err, allOfem) {
						if (err) {
							console.log(err);
						} else {
							_this5.view.render(allOfem);
						};
					});
				};
			});
		}
	}]);

	return Controller;
}();

module.exports = Controller;
//# sourceMappingURL=controller.js.map
