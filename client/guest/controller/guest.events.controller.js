angular.module('guest')
	.controller('eventsCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		activate();
		function activate(){
			guestFactory.getEvents()
				.then(function(response){
					$scope.events = response.data;
				},function(err){
					alert("There seems to be some error. Please try again later.");
				});
		}
		$scope.goTo = function(x){
			$state.go('guest.events/details',{'id': x});
		}
	}]);