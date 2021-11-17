(function(){
	
	function awesomeErddapsCb(data){
		return data;
	}
	
	var fs = require('fs');
	var assert = require('assert');
	var _ = require('underscore');
	const jsonData = require('../erddaps.json');
	awesomeErddaps = eval(fs.readFileSync('erddaps.jsonp').toString());
	assert(_.isEqual(awesomeErddaps,jsonData));	
})();
