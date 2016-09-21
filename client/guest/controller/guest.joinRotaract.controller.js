angular.module('guest')
	.controller('joinRotaractCtrl',['$state','$scope','guestFactory',function ($state,$scope,guestFactory) {

		$scope.joinRotaract = function(x){
			guestFactory.joinRotaract(x)
			.then(function(response){
				$state.go('guest.welcome');
				alert("Your application has been submitted. We will contact you soon.");
			},function (error) {
				alert("There seems to be some error. Please try again later.");
			});
		}

	}]);