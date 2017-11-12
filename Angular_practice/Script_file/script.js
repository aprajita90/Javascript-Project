/// <reference path="./Script_file/angular.js"/>

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

var myApp = angular
			.module("myModule", [])
			.controller("myController", function($scope){
	// var employee = {
	// 	firstName : "David",
	// 	lastName: "Json",
	// 	gender: "Male"
	// },
	var country = {
		name : "India",
		capital: "Delhi",
		flag: "/Image/delhi-flag.png"
	},
	employees = [
                        {firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000},
                        {firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000},
                        {firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
                        {firstName: "Pam", lastName: "Mackintosh", gender: "Male", salary: 53000},
                        {firstName: "Todd", lastName: "Barber", gender: "Female", salary: 60000},

    ],
    countries = [
    				{
    					name: "UK",
    					cities: [
    						{name:"London"},
    						{name:"Manchester"},
    						{name:"Brimingham"},
    					]
    				},
    				{
    					name: "USA",
    					cities:[
	    					{name: "Los Angeles"},
	    					{name: "Chicago"},
	    					{name: "Houston"}
    					]
    				},
    				{
    					name: "India",
    					cities:[
	    					{name: "Hyderabad"},
	    					{name: "Chennai"},
	    					{name: "Mumbai"}
    					]	
    				}

    ];



    //$scope.employee = employee;
	$scope.employees = employees;
	$scope.countries = countries;
	//$scope.country = country;
	$scope.message = "Angular practice";
});