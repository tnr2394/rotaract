angular.module('treasurer')
	.controller('listContactQueriesCtrl', ['$scope','$stateParams','$state', 'treasurerFactory',function($scope,$stateParams,$state,treasurerFactory){
		
		activate();
		function activate () {
			treasurerFactory.getContactQueries()
				.then(function (response) {
					$scope.queries = response.data;
				},function (err) {
					alert("There is some error.");
					console.log(err);
				});
		}


	}])