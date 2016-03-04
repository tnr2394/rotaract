angular.module('treasurer')
	.controller('addMessageCtrl', ['$scope','$state','treasurerFactory', function($scope,$state,treasurerFactory){

		$scope.addMessage = function(x){
			treasurerFactory.addMessage(x)
				.then(function (response) {
					alert("Message Added.");
					$state.go("treasurer.welcome"); 
				},function (err) {
					 
				});
		}
		$scope.getXid = function(x){
			treasurerFactory.getXid(x)
				.then(function (response) {
					$scope.xids = response.data;
				},function (err) {
					 alert("There seems to be some error. Please try again later.");
					 console.log(err); 
				});
		}

	}]);