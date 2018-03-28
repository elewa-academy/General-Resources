var playerModel = {
	playerState: null,
	setPlayerState: function(whoGoesFirst) {
		this.playerState = whoGoesFirst;
	},
	togglePlayer: function(err) {
		if (err) {
			console.log(err);
		} else {
			this.playerState = !this.playerState;
		}
	},
	getNextPlayer: function() {
		return this.playerState;
	}
};