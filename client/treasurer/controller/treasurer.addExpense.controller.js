angular.module('rotaract')
	.controller('addExpense', ['$scope','$state','treasurerFactory', function($scope,$state,treasurerFactory){
	$scope.addExpense = function(x){
		$scope.action = 'http://localhost/Angular/rotaract/server/treasurer/accounts/addBill.php?+'scope.x['name'];
			treasurerFactory.addExpense(x)
				.then(function (response) {
					alert("Expense Added.");
					scope.dropvisible=true;
					//$state.go("treasurer.welcome"); 
				},function (err) {
					 console.log(err);
				});

	}

	$scope.navigate=function(){
		$state.go("treasurer.welcome"); 
	}



}]);