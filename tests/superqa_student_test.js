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
		.jqueryClick(".cohortMenu li:contains('Cohort 99') a .square")
	},

	"Student Test" : function(browser) {

	browser
		.click(".toggle")
		.pause(1000)
		.setValue("input[name=firstName]","Shan")
		.setValue("input[name=lastName]","Fernando")
		.setValue("input[name=phone]","0123456789")
		.setValue(".addStudent input:nth-child(5)","shanantonfernando@gmail.com")
		.setValue("input[name=street]","Street St.")
		.setValue("input[name=city]","City")
		.setValue("input[name=state]","CA")
		.setValue("input[name=zip]","12345")
		.click(".addStudent input[value=Add]")
		.pause(1000)
		.assert.containsText(".studentList","Shan Fernando")
		.jqueryClick(".studentList tr:contains('Shan Fernando') .editRemove .removeStudent")
		.acceptAlert()
		.pause(1000)
		.url("https://superqa.herokuapp.com/accounts#")
		.jqueryClick(".cohortMenu li:contains('Cohort 99') .removeAccount")
		.acceptAlert()
		.pause(1000)
		.end();
	}
};
