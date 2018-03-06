// phase 1
// classes can be used to generate similar objects


class nameTag {
	// 'constructor' is built in.
	// it accepts as arguments the information needed to construct an offspring
	constructor(name) {
        this.name = name;
    }
}

//--------------------------------------------//

var pedroNametag = new nameTag('pedro');
console.log(pedroNametag.name);

var peterNametag = new nameTag('peter');
console.log(peterNametag.name);

