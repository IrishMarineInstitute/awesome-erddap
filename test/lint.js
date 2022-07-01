(function(){
	const markdownlint = require("markdownlint");
	const options = {"files": [ "README.md" ],
			"config": {
				    "default": true,
    				    "line-length": false
				  }};

	markdownlint(options, function callback(err, result) {
	  if (!err) {
	    console.log(result.toString());
	  }
	});
})();
