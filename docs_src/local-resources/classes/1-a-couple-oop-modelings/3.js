// very basic. make it more interesting	

class Team {
	constructor(options) {
		this.sport = options.sport;
		this.coach = options.coach;
		this.city = options.city;
		this.players = [];
	}

	addPlayer(newPlayer) {
		this.players.push(newPlayer);
	}

}

class Player {
	constructor(name, position, number) {
		this.name = name;
		this.position = position;
		this.number = number;
	}
}
