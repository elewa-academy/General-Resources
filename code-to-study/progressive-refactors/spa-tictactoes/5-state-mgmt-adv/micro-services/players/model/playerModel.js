var playerModel = {
	playerState: null,
	buildPlayer: function(firstPlayer) { // only reset player on page refresh if the server is also restarted
		if (this.playerState == null) {
			this.playerState = firstPlayer;
		}
	},
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