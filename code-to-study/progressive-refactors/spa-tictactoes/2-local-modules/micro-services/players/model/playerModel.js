var playerModel = {
	playerState: null,
	setPlayerState: function(whoGoesFirst) {
		this.playerState = whoGoesFirst;
	},
	togglePlayer: function() {
		this.playerState = !this.playerState;
	},
	getNextPlayer: function() {
		return this.playerState;
	}
};

module.exports = playerModel;