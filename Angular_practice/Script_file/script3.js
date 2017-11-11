//we made filter things. filter can do 3 different things
//filter is  formate, sort, and filter data
//filter can use with a binding expression or a directive
//to apply a filter use pipe(|) character.

var myApp = angular
			.module("myModule", [])
			.controller("myController", function ($scope){
				var employees = [
				{name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender:"Male", salary: 55000.788},
				{name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender:"Female", salary: 68000},
				{name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender:"Male", salary: 57000},
				{name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender:"Female", salary: 53000},
				{name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender:"Male", salary: 50000}

				];
				$scope.employees = employees;
				$scope.rowLimit =3;
				$scope.sortColumn=name;
			});