var boardModel = { 
	boardState: [],
	buildBoard: function(boardDimension) {
			var newBoard = [];
			for(var i = 0; i < boardDimension; i++) {
				var innerArray = [];
				for(var j = 0; j < boardDimension; j++) {
					innerArray.push(null);
				};
				newBoard.push(innerArray);
			};
			this.boardState = newBoard;
		},
	getBoardState: function() {
			return this.boardState;
		},
	addMove: function(row, column, nextPlayer, cb1, cb2) {
			var err;
			console.log(nextPlayer)
			if(this.boardState[row][column] == null) {	
				if(nextPlayer) {
					this.boardState[row][column] = 'x';
				} else {
					this.boardState[row][column] = 'o';
				};
				err = null;
			} else {
				err = 'that square has been played, tool';
			};
			cb1(err, this.getBoardState()); // repopulate board
			cb2(err); // toggle player
		},
	setBoardState: function(newBoardState) {
			this.boardState = newBoardState;
	}
};