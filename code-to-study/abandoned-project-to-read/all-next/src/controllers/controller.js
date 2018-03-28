class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	getOne(key) {
		this.model.get(key, (err, object) => {
			if(err) {
				console.log(err);
			} else {
				this.view.render(object)
			}
		})
	}

	getAll() {
		this.model.getAll((err, allEm) => {
			if(err) {
				console.log(err);
			} else {
				this.view.render(allEm)
			}
		});
	}

	update(id, key, valueNew) {
		this.model.update(id, key, valueNew, (err) => {
			if(err) {
				console.log(err)
			} else {
				this.model.getAll((err, allEm) => {
					if(err) {
						console.log(err);
					} else {
						this.view.render(allEm)
					}
				});
			}
		});
	}

	post(newObject) {
		this.model.add(newObject, (err) => {
			if (err) {
				console.log(err);
			} else {	
				this.model.getAll((err, allOfem) => {
					if(err) {
						console.log(err);
					} else {	
						this.view.render(allOfem);
					};
				});
			};
		});
	}

	delete(id) {
		this.model.delete(id, (err) => {
			if (err) {
				console.log(err);
			} else {	
				this.model.getAll((err, allOfem) => {
					if(err) {
						console.log(err);
					} else {	
						this.view.render(allOfem);
					};
				});
			};
		});
	}


}

module.exports = Controller;