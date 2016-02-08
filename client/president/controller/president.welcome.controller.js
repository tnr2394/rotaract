angular.module('rotaract')
	.controller('welcomePresidentCtrl',['$scope','$state','$localStorage',function($scope,$state,$localStorage) {
		$scope.presidentName = $localStorage.president.name;
	}]);