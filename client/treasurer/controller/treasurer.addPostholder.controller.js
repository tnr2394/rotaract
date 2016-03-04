angular.module('treasurer')
	.controller('addPostholderCtrl', ['$scope','treasurerFactory', function($scope,treasurerFactory){
		$scope.addPostholder = function (x) {
			$scope.myPhoto;
			treasurerFactory.addPostholder(x,$scope.myPhoto)
			.then(function (response) {
				 console.log("Postholder has been added.");
			},function (err) {
				 alert("There seems to be some error. Please try again later."); 
				console.log(err);
			});
		}
	}]);