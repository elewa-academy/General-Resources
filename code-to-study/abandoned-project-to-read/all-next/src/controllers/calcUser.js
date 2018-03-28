class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	// (err, op) => {
	// 	if(err) {
	// 		console.log(err)
	// 	} else {
	// 		this.view.render(op.operation(arg1, arg2));
	// 	}
	// }

	doMath(id, arg1, arg2) {
		this.model.get(id)
			.then((result) => {
					var mathDone = result.operation(arg1, arg2);
					this.view.render(mathDone);
				})
			.catch((err) => {
    				console.log(err)
  				});

	};

};

module.exports = Controller;