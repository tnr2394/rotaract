angular.module('rotaract')
	.controller('addExpense', ['$scope','$state','treasurerFactory', function($scope,$state,treasurerFactory){
	


	$scope.addExpense = function(x){

		$scope.action = 'http://localhost/Angular/rotaract/server/treasurer/accounts/addExpense.php?'+scope.x['name'];

			
		alert("Inside addExpense");

			treasurerFactory.addExpense(x)
				.then(function (response) {
					alert("Expense Added.");
					//$state.go("treasurer.welcome"); 
				},function (err) {
					 console.log(err);
				});

	}


}]);