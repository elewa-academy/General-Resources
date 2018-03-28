var app = {
	datAxios: {},
	dimension: 0000,
	// everything is now local to browser but loadgame and savegame
	play: function(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		var player = this.playerModel.getNextPlayer();
		this.boardModel.addMove(row, column, player, this.repopulateBoard.bind(this), this.playerModel.togglePlayer.bind(this.playerModel));
	},
	repopulateBoard: function (err, newBoardState) {
		if (err) {
			console.log(err);
			alert(err)
		} else {		
			console.log(newBoardState)
			var board = document.getElementById('ticTacBoard').children[0].children;
			var row;
			var column;
			for(var i = 0; i < this.dimension; i++) {
				row = board[i].children;
				for(var j = 0; j < this.dimension; j++) {
					column = row[j];
					column.innerHTML = newBoardState[i][j];
				};	
			};
		}
	},
	initialize: function() {
		console.log('hi');		
		this.datAxios = axios.create({
		  baseURL: 'http://localhost:3001'
		});
		this.boardModel = boardModel;
		this.playerModel = playerModel;
		this.dimension = 3; // hardcoding it
		this.boardModel.buildBoard(this.dimension); // build local memory board
		this.playerModel.setPlayerState(true); // set first player locally
		this.buildBoard(this.dimension); // build view board
		this.buildButtons();
		var dimension = this.dimension;
		this.datAxios.post('/buildBoard', {data: {boardDimension: dimension} })  // axios call to build board with dimension
			.then((response) => {
				console.log('board built');
			})
			.catch((error) => {
			  console.log(error);
			});
		this.datAxios.post('/buildPlayer', {data: {playerState: true} })  // axios call to initialize player
			.then((response) => {
				console.log('player set');
			})
			.catch((error) => {
				console.log(error);
			});
	},
	buildBoard: function() {
		var board = document.getElementById('ticTacBoard');
		var row;
		var cell;
		for(var i = 0; i < this.dimension; i++) {
			row = board.insertRow(i);
			row.setAttribute('row', i);
			for(var j = 0; j < this.dimension; j++) {
				cell = row.insertCell(j); 
				cell.innerHTML = null;
				cell.setAttribute('column', j);
				cell.setAttribute('onclick', 'app.play(this)');
			};
		};
	},
	buildButtons: function() {
		document.body.innerHTML += '<div onclick=\'app.saveGame()\'> save current game </div>'
		document.body.innerHTML += '<div onclick=\'app.loadGame()\'> load last save </div>'
		document.body.innerHTML += '<div onclick=\'app.reset()\'> reset game </div>'  	
	},
	saveGame: function() {
		var currentBoard = this.boardModel.getBoardState();
		this.datAxios.post('/setBoardState', {data: {newBoardState: currentBoard} })  // axios call to save current game
			.then((response) => {
				console.log('board state saved');
			})
			.catch((error) => {
			  console.log(error);
			});
		var player = this.playerModel.getNextPlayer()
		this.datAxios.post('/setFirstPlayer', {data: {playerState: player} })  // axios call to save current player
			.then((response) => {
				console.log('player set');
			})
			.catch((error) => {
				console.log(error);
			});
	},
	loadGame: function() {
		var player = this.playerModel.getNextPlayer()
		this.datAxios.get('/getNextPlayer', {data: {playerState: player} })  // axios call to save current player
			.then((response) => {
				this.playerModel.setPlayerState(response.data.nextPlayer)
			})
			.catch((error) => {
				console.log(error);
			})
		this.datAxios.get('/getBoardState')  // axios call to get last save game
			.then((response) => {
				app.boardModel.setBoardState(response.data.boardState);
				app.repopulateBoard(null, this.boardModel.getBoardState());
			})
			.catch((error) => {
			  console.log(error);
			});
	},
	reset: function() {
		this.boardModel.buildBoard(this.dimension);
		this.playerModel.setPlayerState(true);
		this.repopulateBoard(null, this.boardModel.getBoardState());
	}
};

