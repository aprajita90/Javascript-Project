/// <reference path="./Script_file/script3.js"/>

//custom filter in angular

myApp.filter("gender", function () {
	return function(gender){
		switch(gender){
			case 1: 
			return "Male";
			case 2: 
			return "Female";
			case 3:
			return "Not disclosed";
		}
	}
});