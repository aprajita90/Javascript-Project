/// <reference path="/Users/aprajitajain/Javascript-Project/Angular_practice/Script_file/angular.js"/>

// var myApp = angular.module("myModule", []);//create a module

// var myController = function ($scope){ //create controller
// 	$scope.messge= "Angular_practice";
// }
// //register with controller with over module
// myApp.controller("myController", myController);//1st perameter name controller, 2nd perameter the name of controller function itself


// var myApp = angular.module("myModule",[]);//create a module

// //register with controller with over module //create controller
// myApp.controller("myController", function ($scope){ 
// 	$scope.message = "Angular practice";
// });

var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope){
	var employee = {
		firstName : "David",
		lastName: "Json",
		gender: "Male"
	}
	$scope.employee = employee;
});