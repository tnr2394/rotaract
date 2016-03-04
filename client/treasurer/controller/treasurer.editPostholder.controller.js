angular.module('treasurer')
	.controller('editPostholderCtrl', ['$scope','treasurerFactory','$stateParams','$state', function($scope,treasurerFactory,$stateParams,$state){
		$scope.id = $stateParams.id;
		activate();
		function activate(){
			treasurerFactory.getPostholder($scope.id)
				.then(function (response) {
					$scope.ph = response.data[0];
				},function (err) {
					alert("There seems to be some error. Please try again later."); 
					console.log(err);
				});
		}

		$scope.updatePostholder = function(x){
			treasurerFactory.updatePostholder(x,$scope.myPhoto)
				.then(function(response){
					activate();

					$state.go('treasurer.listPostholders');
				},function (err) {
					 alert("There seems to be some error. Please try again later.");
					 console.log(err);

					 $state.go('treasurer.listPostholders');
				});
		}
	}]);