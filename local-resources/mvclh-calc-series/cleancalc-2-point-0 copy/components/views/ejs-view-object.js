var view = {
	res: {},
	setRes: function(_res) {
		this.res = _res;
	},
	render_home: function(title) {
		this.res.render('index', {title: title});
	},
	render_add: function(result) {
		this.res.render('add', {number: result});
	},
	render_subtract: function(result) {
		this.res.render('subtract', {number: result});
	},	
	render_multiply: function(result) {
		this.res.render('multiply', {number: result});
	},
	render_divide: function(result) {
		this.res.render('divide', {number: result});
	}
};

module.exports = view;