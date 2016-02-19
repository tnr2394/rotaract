angular.module("rotaract")
	.controller('aboutCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		activate();
		function activate(){
			guestFactory.getAbout()
				.then(function(response){
					$scope.about = response.data.content;
				},function(err){
					alert("There seems to be some error. Please try again later.");
					$state.go('guest.welcome');
					console.log(err);
				})
		}
	}]);