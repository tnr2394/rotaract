angular.module('rotaract')
	.controller('welcomeTreasurerCtrl', ['$scope','$state','treasurerFactory','$localStorage', function($scope,$state,treasurerFactory,$localStorage){
		$scope.treasurerName = $localStorage.currentPostHolder.name;
		$scope.goTo = function(x){
			$state.go(x);
		}
	}]);