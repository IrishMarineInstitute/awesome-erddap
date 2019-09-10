(function(){
	var fs = require('fs');
	var assert = require('assert');
	var _ = require('underscore');
	const jsonData = require('../erddaps.json');
	eval(fs.readFileSync('erddaps.js')+'');
	assert(_.isEqual(awesomeErddaps,jsonData));
})();