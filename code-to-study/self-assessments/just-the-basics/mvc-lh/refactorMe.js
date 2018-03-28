// here's a simple function to print text from an input form
// your task, should you choose to accept it:
//		refactor this single function into components/app architecture

function prinTit() {
	var inputedText = document.getElementById('typeLand').value;
	document.getElementById('printLand').innerHTML += ', ' + inputedText;
};
