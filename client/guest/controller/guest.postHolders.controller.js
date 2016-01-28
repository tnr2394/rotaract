angular.module('rotaract')
	.controller('postHoldersCtrl',['$scope','guestFactory',function($scope,guestFactory){
		activate();
		function activate(){
			guestFactory.getPostHolders()
				.then(function(response){
					$scope.postHolders = response.data;
					console.log("Success");
					console.log($scope.postHolders);

				},function(err){
					alert("There is some error. Please try later.");
					console.log(err);
				});
		}

		$scope.showModal = function(x){
			$scope.modalContent = $scope.postHolders[x];
			
			angular.element("#myModal").modal('show');
		}
	}]);