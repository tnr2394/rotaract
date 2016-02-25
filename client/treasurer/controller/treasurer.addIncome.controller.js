angular.module('rotaract')
	.controller('addIncome', ['$scope','$state','treasurerFactory', function($scope,$state,treasurerFactory){
		$scope.addIncome = function(x){
			treasurerFactory.addIncome(x)
				.then(function (response) {
					alert("Income Added.");
					//$state.go("treasurer.welcome"); 
				},function (err) {
					 console.log(err);
				});

	}
}]);