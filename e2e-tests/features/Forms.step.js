var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var formSteps = function() {
	this.Given(/^I go to "([^]*)"$/, function (url, next) {
	  	browser.get('http://' + url);
	  	next();
	});
	
	this.Then(/I should see "([^"]*)"$/, function(content, next) {
		assertPageContains(content, next);
	});
	
	this.When(/I type "([^"]*)" in the input control with an ID of "([^"]*)"$/, function (text, inputControl, next) {
		element(by.id(inputControl)).clear().sendKeys(text);
		element(by.css('.btn')).click();
		next();
	});
	
	this.Then(/I should expect no validation errors$/, function(next){
		var errCount = element.all(by.css('.has-error')).count();
		
		expect(errCount).to.eventually.equal(0);		
		next();		
	});
	
	this.Then(/I should expect validation errors$/, function(next){
		var errCount = element.all(by.css('.has-error')).count();
		
		expect(errCount).to.be.eventually.gt(0);
		next();		
	});
	
	function assertPageContains(content, next) {
		browser.getPageSource().then(function (source) {
			expect(source).to.contain(content);
			next();
		})
	}
};

module.exports = formSteps;