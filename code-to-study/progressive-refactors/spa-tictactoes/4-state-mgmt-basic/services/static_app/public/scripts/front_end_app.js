// notice all the 'app' calls in the the app object?
// I've said not to do this 
// but I'm doing it here because the alternative is context hell.
// that's not the point of this codalong
var app = {
	api_connection: {},
	local_state: 'local state',
	// react doesn't provide you these methods
	//	controller and routes
	read_api: function() {
		app.api_connection.get('/get') // axios call to get the data
			.then((response) => {
				app.render_display(response.data); // rerender dom with new data
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	update_api: function() {	
		var text_input = document.getElementById('text_input');
		var new_state = text_input.value;	
		var route = '/post/' + new_state;
		app.api_connection.post(route, {
				prop: 'val'
			}) // axios call to get the data
				.then((response) => {
					app.render_display(response.data);
				})
				.catch((error) => {
					if(error) {	
						console.log(error);
					}
				});
	},
	read_local: function() {
		app.render_display(app.local_state);
		// comment so the method collapses
	},
	update_local: function() {
		var text_input = document.getElementById('text_input');
		var new_state = text_input.value;
		app.local_state = new_state;		
	},
	// react does these things
	//	view stuff
	initialize: function() {
		console.log('hi');		
		this.api_connection = axios.create({
			baseURL: 'http://localhost:3001'
		});
		this.render_input();
		this.read_api();
	},
	render_display: function (state_object) {
		var display_component = document.getElementById('display_component');

		if (display_component == null) {

			var container = document.getElementById('container');
			var display_component = document.createElement('DIV');
			display_component.id = 'display_component';

			var data_div = document.createElement('DIV');
			data_div.id = 'data_div';
			display_component.appendChild(data_div);

			var read_global = document.createElement('BUTTON');
			read_global.id = 'read_global_button';
			read_global.onclick = this.read_api;
			read_global.innerHTML = 'read global state';
			display_component.appendChild(read_global);

			var read_local = document.createElement('BUTTON');
			read_local.id = 'submit_global_button';
			read_local.onclick = this.read_local;
			read_local.innerHTML = 'read local state';
			display_component.appendChild(read_local);

			container.appendChild(display_component);
		};

		var new_text = JSON.stringify(state_object);
		var data_div =  document.getElementById('data_div');
		data_div.innerHTML = new_text;
	},
	render_input: function () {
		var input_component = document.getElementById('input_component');
		
		if (input_component == null) {

			var container = document.getElementById('container');
			var input_component = document.createElement('DIV');
			input_component.id = 'input_component';

			var text_input = document.createElement("INPUT");
			text_input.id = 'text_input';
			text_input.value = 'phht';
			input_component.appendChild(text_input);

			var submit_global = document.createElement('BUTTON');
			submit_global.id = 'submit_global';
			submit_global.onclick = this.update_api;
			submit_global.innerHTML = 'update global state';
			input_component.appendChild(submit_global);

			var submit_local = document.createElement('BUTTON');
			submit_local.id = 'submit_local';
			submit_local.onclick = this.update_local;
			submit_local.innerHTML = 'update local state';
			input_component.appendChild(submit_local);

			container.appendChild(input_component);

		};
	}
};


/// I AM REACT









