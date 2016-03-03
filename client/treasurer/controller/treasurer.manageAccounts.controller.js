angular.module('rotaract')
	.controller('manageAccountsCtrl', ['$scope','$state','treasurerFactory','$localStorage', function($scope,$state,treasurerFactory,$localStorage){
	
		$scope.goTo = function(x){
			$state.go(x);
		}
	}]);