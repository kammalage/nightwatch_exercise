var cohort = "Cohort 111";
var firstName = "Jane";
var lastName = "Doe";
var email = firstName.toLowerCase() + "@gmail.com";
var paymentAmount = 100;

module.exports = {

	"Login Test" : function (browser){
		login(browser)
	},

	"Add Account Test" : function(browser) {
		addAccount(browser,cohort)

	},

	"Add Student Test" : function(browser) {
		accountToStudent(browser,cohort)
		addStudent(browser,firstName,lastName,email)
	},

	"Payments Test" : function(browser) {
		studentToPayment(browser,firstName,lastName)
		
		addPayment(browser,paymentAmount,"cash")
		
		removePayment(browser)
		
		addPayment(browser,paymentAmount,"check")
		
		removePayment(browser)

		addPayment(browser,paymentAmount/2,"cash")
		addPayment(browser,paymentAmount/2,"check")

		removePayment(browser)
		removePayment(browser)

	},

	"Remove Student Test" : function(browser) {
		removeStudent(browser,cohort,firstName,lastName)
	},

	"Remove Account Test" : function(browser) {
		removeAccount(browser,cohort)
	}
}

function login(browser) {

	return browser
		.url("https://superqa.herokuapp.com/")
	 	.waitForElementVisible("body", 1000)
		.click(".login")
		.pause(1000)
		.setValue("input[name=email]","shanantonfernando@gmail.com")
		.setValue("input[name=password","password")
		.click("input[type=submit")
		.pause(1000)
		.assert.containsText(".menuContainer","Sign out");
}

function addAccount(browser,group_name) {

	return browser
		.click(".accounts-tab")
		.pause(1000)
		.click(".newAccountButton")
		.setValue("input[name=cohort]",group_name)
		.setValue("input[name=startDate]","2122016")
		.setValue("input[name=endDate]","3122016")
		.setValue("input[name=amount]","1000")
		.click(".addAccount")
		.pause(1000)
		.assert.containsText(".cohortMenu",group_name)
		.assert.containsText(".top li:first-child .mainLine a",group_name);
}

function accountToStudent(browser,group_name) {
	return browser
		.jqueryClick(".cohortMenu li:contains('"+ group_name +"') a .square");
}

function addStudent(browser,firstName,lastName,email) {

	return browser
		.click(".toggle")
		.pause(1000)
		.setValue("input[name=firstName]",firstName)
		.setValue("input[name=lastName]",lastName)
		.setValue("input[name=phone]","0123456789")
		.setValue(".addStudent input:nth-child(5)",email)
		.setValue("input[name=street]","Street St.")
		.setValue("input[name=city]","City")
		.setValue("input[name=state]","CA")
		.setValue("input[name=zip]","12345")
		.click(".addStudent input[value=Add]")
		.pause(1000)
		.assert.containsText(".studentList",firstName + " " + lastName);
}
function studentToPayment(browser,firstName,lastName) {
	return browser
		.jqueryClick(".studentList tr:contains('" + firstName + " " + lastName + "') td:first-child a");
}

function addPayment(browser,payment_amount,payment_type) {

	return browser 
		.pause(1000)
		.click(".togglePayment")
		.pause(1000)
		.clearValue(".paymentForm input[name=amount]")
		.setValue(".paymentForm input[name=amount]",payment_amount.toString())
		.click("." + payment_type +" input[type=radio")
		.click(".addPayment")
		.pause(2000)
		.assert.containsText(".paymentList",payment_type)
		.assert.containsText(".paymentList","$" + payment_amount.toString());
}

function removePayment(browser) {
	return browser
		.pause(1000)
		.click(".paymentList tr:nth-child(2) .editPayment .removePayment")
		.pause(1000)
		.acceptAlert()
		.pause(1000);
}

function removeStudent(browser,group_name,firstName,lastName) {
	return browser
		.pause(1000)
		.url("https://superqa.herokuapp.com/accounts#")
		.pause(2000)
		.jqueryClick(".cohortMenu li:contains('"+ group_name +"') a .square")
		.pause(1000)
		.jqueryClick(".studentList tr:contains('" + firstName + " " + lastName + "') .editRemove .removeStudent")
		.acceptAlert()
		.pause(1000);

}

function removeAccount(browser,group_name) {
	return browser
		.url("https://superqa.herokuapp.com/accounts#")
		.jqueryClick(".cohortMenu li:contains('"+ group_name +"') .removeAccount")
		.acceptAlert()
		.pause(1000)
		.end();

}
