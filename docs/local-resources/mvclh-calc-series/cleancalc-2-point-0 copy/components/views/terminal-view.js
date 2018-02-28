var view = {
	render_add: function(result) {
		console.log('you made a  -' + result + '- with addition');
	},
	render_subtract: function(result) {
		console.log('you made a  -' + result + '- with subtraction');
	},
	render_multiply: function(result) {
		console.log('you made a  -' + result + '- with multiplication');
	},
	render_divide: function(result) {
		console.log('you made a  -' + result + '- with division');
	}	
};

module.exports = view;