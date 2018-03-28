var boardModel = require('../models/boardModel');

var boardController = {
	buildBoard: function(req, res) {
		boardModel.buildBoard(w);
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
	}
};

module.exports = boardController;