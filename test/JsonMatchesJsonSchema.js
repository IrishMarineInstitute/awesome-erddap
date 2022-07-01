(function(){
	var Ajv = require('ajv');
	var assert = require('assert');
	var ajv = new Ajv({schemaId: 'id'});
	ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-07.json'));
	const jsonData = require('../erddaps.json');
	const jsonSchema = require('../json-schema/ErddapInstancesSchema.json');
	assert(ajv.addSchema(jsonSchema,'erddapSchema').validate('erddapSchema',jsonData));
})();
