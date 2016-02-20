module.exports = {

	"Verify About us tab" : function (browser) {

 		browser
	 		.url("https://superqa.herokuapp.com/")
	 		.waitForElementVisible("body", 1000)
	 		.click(".aboutus-tab")
	 		.assert.urlEquals("https://superqa.herokuapp.com/aboutus")
	 		.end()
 	},

 	"Verify Courses tab" : function (browser) {

 		browser
 			.url("https://superqa.herokuapp.com/")
	 		.waitForElementVisible("body", 1000)
	 		.click(".courses-tab")
	 		.assert.urlEquals("https://superqa.herokuapp.com/courses")
	 		.end()
 	},

 	"Verify Staff tab" : function (browser) {

 		browser
 			.url("https://superqa.herokuapp.com/")
	 		.waitForElementVisible("body", 1000)
	 		.click(".staff-tab")
 			.assert.urlEquals("https://superqa.herokuapp.com/courses")
	 		.end()
 	},

 	"Verify Login tab" : function (browser) {

 		browser
 			.click(".login")
	      	.pause(1000)
	      	.assert.elementPresent(".login-title")
	      	.assert.elementPresent("form")
	      	.assert.elementPresent("input[name=email]")
	      	.assert.elementPresent("input[name=password]")
	      	.assert.elementPresent("input[value=Login]")
	      	.assert.containsText(".loginForm","Login")
	      	.click(".login")
	      	.pause(1000)
	      	.end()
 	},

 	"Verify Registration tab" : function (browser) {

 		browser
 			.click(".register")
	 		.pause(1000)
	 		.assert.elementPresent("input[name=email]")
	 		.assert.elementPresent("input[name=fullname]")
	      	.assert.elementPresent("input[name=password]")
	      	.assert.elementPresent("input[name=confirmPassword]")
	      	.assert.elementPresent("input[value=Register]")
	      	.click(".register")
	      	.pause(1000)
	      	.end()
 	} 
 };
