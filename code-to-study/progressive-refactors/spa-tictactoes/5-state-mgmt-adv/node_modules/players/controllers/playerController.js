var playerModel = require('../model/playerModel');

var playerController = {
	setFirstPlayer: function(req, res) {
		playerModel.setPlayerState(req.body.data.playerState);
		res.json({success: true});
	},
	togglePlayer: function(req, res) {
		playerModel.togglePlayer();
		res.json({success: true});
	},
	getNextPlayer: function(req, res) {
		res.json({nextPlayer: playerModel.getNextPlayer()});
	},
	buildPlayer: function(req, res) {
		playerModel.buildPlayer(req.body.data.playerState)
	}
}

module.exports = playerController;