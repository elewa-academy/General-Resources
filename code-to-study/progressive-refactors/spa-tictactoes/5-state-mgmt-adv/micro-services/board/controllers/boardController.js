var boardModel = require('../model/boardModel');

var boardController = {
	buildBoard: function(req, res) {
		var dimension = req.body.data.boardDimension;
		boardModel.buildBoard(dimension); 
		res.json({success: true});
	},
	addMove: function(req, res) {
		var row = req.body.data.row;
		var column = req.body.data.column;
		var player = req.body.data.player;
		console.log(boardModel.getBoardState())
		var moveStatus = boardModel.addMove(row, column, player);
		if(moveStatus) {
			res.json({success: false, error: 'pick an empty square'});
		} else {
			res.json({success: true});
		};
	},
	getBoardState: function(req, res) {
		res.json({boardState: boardModel.getBoardState()});
	},
	setBoardState: function(req, res) {
		var newBoardState = req.body.data.newBoardState;
		boardModel.setBoardState(newBoardState)
		res.json({success: true})
	}
};

module.exports = boardController;