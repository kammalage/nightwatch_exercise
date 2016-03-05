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
		.setValue("input[name=cohort]","Cohort 111")
		.setValue("input[name=startDate]","2122016")
		.setValue("input[name=endDate]","3122016")
		.setValue("input[name=amount]","1000")
		.click(".addAccount")
		.pause(1000)
		.assert.containsText(".cohortMenu","Cohort 111")
		.assert.containsText(".top li:first-child .mainLine a","Cohort 111")
	},
/*
	//"Edit Account Test" : function(browser) {

	//browser
		//.assert.jqueryElementPresent(".cohortMenu li:contains('Cohort 99') .fa-pencil-square-o")
		//.jqueryClick(".cohortMenu li:contains('Cohort 99') .editAccount a:nth-child(2)")
		//.moveToElement(".cohortMenu li:first-child div",0,0)
		//.doubleClick();
		//.jqueryElement(".cohortMenu li:first-child .editAccount a:nth-child(2)", function(element){

			//console.log(element[0]);
			//browser
				//.moveTo(element[0])
				//.doubleClick();
		//})

		.jqueryDblClick(".cohortMenu li:first-child a:nth-child(2)");
		.setValue("input[name=cohort]","Cohort 199")
		.setValue("input[name=startDate]","2122016")
		.setValue("input[name=endDate]","3122016")
		.setValue("input[name=amount]","1500")
	},
*/
	"Student Test" : function(browser) {

	browser
		.jqueryClick(".cohortMenu li:contains('Cohort 111') a .square")
		.click(".toggle")
		.pause(1000)
		.setValue("input[name=firstName]","John")
		.setValue("input[name=lastName]","Doe")
		.setValue("input[name=phone]","0123456789")
		.setValue(".addStudent input:nth-child(5)","email@gmail.com")
		.setValue("input[name=street]","Street St.")
		.setValue("input[name=city]","City")
		.setValue("input[name=state]","CA")
		.setValue("input[name=zip]","12345")
		.click(".addStudent input[value=Add]")
		.pause(1000)
		.assert.containsText(".studentList","John Doe")
		.jqueryClick(".studentList tr:contains('John Doe') .editRemove .removeStudent")
		.acceptAlert()
		.pause(1000)
		.url("https://superqa.herokuapp.com/accounts#")
		.jqueryClick(".cohortMenu li:contains('Cohort 111') .removeAccount")
		.acceptAlert()
		.pause(1000);
		//.end();
	}
};

/*

make payment automation test 
1. pure cash
2. pure check
3. part cash and part check
delete previous payment between these tests
modularize code with functions

function(browser){
	
	return browser
			method
			method;
}
*/