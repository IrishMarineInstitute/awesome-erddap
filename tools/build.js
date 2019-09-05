(function (){
	const fs = require('fs');
	const jsonData = require('../erddaps.json');
	const outData = 'var awesomeErddaps = ' + JSON.stringify(jsonData) + ';';
	fs.writeFile("erddaps.js", outData, function(err) {
		if(err) {
			return console.log(err);
		}
		else {
			console.log('[awesome-erddap] erddaps.js re-written...');
		}
	}); 
})();