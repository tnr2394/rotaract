angular.module('rotaract')
	.controller('welcomePresidentCtrl',['$scope','$state','$localStorage',function($scope,$state,$localStorage) {
		$scope.presidentName = $localStorage.currentPostHolder.name;

		$scope.goTo = function(x){
			$state.go(x);
		}
	}]);