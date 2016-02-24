module.exports = {

	"Login Test" : function (browser) {

	browser
		.url("https://superqa.herokuapp.com/")
	 	.waitForElementVisible("body", 1000)
		.click(".login")
		.pause(1000)
		.setValue("input[name=email]","shanantonfernando@gmail.com")
		.setValue("input[name=password","password")
		.click("input[type=submit")
		.pause(1000)
		.assert.containsText(".menuContainer","Sign out")
	},

	"Account Test" : function(browser) {

	browser
		.click(".accounts-tab")
		.pause(1000)
		.click(".newAccountButton")
		.setValue("input[name=cohort]","Cohort 99")
		.setValue("input[name=startDate]","2122016")
		.setValue("input[name=endDate]","3122016")
		.setValue("input[name=amount]","1000")
		.click(".addAccount")
		.pause(1000)
		.assert.containsText(".cohortMenu","Cohort 99")
		.assert.containsText(".top li:first-child .mainLine a","Cohort 99")
		.jqueryClick(".cohortMenu li:contains('Cohort 99') .removeAccount")
		.acceptAlert()
		.pause(1000)
		.end();
	}
};

/*
0. verify if user exists, if so skip to step 2
1. register
2. log in

figure out how to test registration multiple times
*/