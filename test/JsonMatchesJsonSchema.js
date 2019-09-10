(function(){
	var validate = require('jsonschema').validate;
	var assert = require('assert');
	const jsonData = require('../erddaps.json');
	const jsonSchema = require('../json-schema/ErddapInstancesSchema.json');
	assert(validate(jsonData,jsonSchema));
})();