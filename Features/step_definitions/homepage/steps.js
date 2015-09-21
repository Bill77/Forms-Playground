var support = require('../support');

var steps = function() {
	this.Given(/^I am on the homepage$/, function(callback){
		support.get(this, 'http://localhost:5000', function(result) {
			setTimeout(callback, 1000);
		});
	});
	
	
}