module.exports = {

	"Superqa Registration Test" : function (browser) {

 	browser
 		.url("https://superqa.herokuapp.com/")
 		.waitForElementVisible("body", 1000)
 		.click(".register")
 		.pause(1000)
 		.setValue("input[type=email]", "fake_email8@gmail.com")
 		.setValue("input[name=fullname]", "Shan Anton Fernando")
 		.setValue(".registrationForm input:nth-child(3)", "password")
 		.setValue("input[name=confirmPassword]","password")
 		.click("input[value=Register]")
 		.pause(1000)
 		.waitForElementVisible(".main-notice", 1000, false, function(visible) {

 				if(visible.value){
 					browser
 						.click(".login")
 						.pause(1000)
 						.setValue("input[name=email]","fake_email8@gmail.com")
 						.setValue("input[name=password]","password")
 						.click("input[type=submit")
 						.assert.containsText(".menuContainer","Sign out");

 				}
 				if(!visible.value){

 					browser
 						.assert.containsText(".menuContainer","Sign out");

 				}


 		});
 	}

};

/*
0. verify if user exists, if so skip to step 2
1. register
2. log in

figure out how to test registration multiple times
*/