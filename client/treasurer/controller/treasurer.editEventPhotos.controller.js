angular.module('treasurer')
	.controller('editEventPhotosCtrl', ['$scope','$stateParams','treasurerFactory','$state', function($scope,$stateParams,treasurerFactory,$state){
		$scope.id = $stateParams.id;
		activate();
		function activate () {
			treasurerFactory.getEventPhotos($scope.id).then(function (response) {
				 $scope.imageList = response.data; 
				 console.log($scope.imageList);
			},function (err) {
				 alert("There seems to be some problem. Please try again later.");
				 console.log(err); 
			});
		}

		$scope.deletePhoto = function (x) {
			if(confirm(x)){
				treasurerFactory.deleteImg(x).then(function(response){
					activate();
					alert("Image Deleted.");
				},function (err) {
					 alert("Image cannot be deleted. Please try again later.");
					 console.log(err);
				});
			} 
		}
		$scope.goTo = function(x){
			$state.go(x,{ 'id' : $scope.id});
		}
		
	}])