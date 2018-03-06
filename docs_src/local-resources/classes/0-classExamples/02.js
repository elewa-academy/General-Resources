// classes can give their offspring methods

class nameTag {
	constructor(name) {
        this.name = name;
    } // don't use commas here.  semicolons are ok	
    beRead() {
    	console.log(this.name);
    }
}

//--------------------------------------------//

var pedroNametag = new nameTag('pedro');
pedroNametag.beRead();

var peterNametag = new nameTag('peter');
pedroNametag.beRead();

