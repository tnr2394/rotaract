angular.module('president')
	.controller('listUpcomingEventsCtrl', ['$scope','$state','presidentFactory', function($scope,$state,presidentFactory){
		activate();
		function activate(){
			presidentFactory.getAllUpcomingEvents().then(function(response){
				$scope.eventList = response.data;
			},function(err){
				alert("Couldn't Retrive Events. Please try again later.");
				console.log(err);
			});
		}

		$scope.goTo = function (x) {
			
			$state.go('president.editUpcomingEvent',{	'id' : x    });
		}

		$scope.deleteUpcomingEvent = function (id) {
			presidentFactory.deleteUpcomingEvent(id).then(function (response) {
				alert("Event Deleted.");
				activate();
			},function (err) {
				 alert("Sorry, event couldn't be deleted. Please try again later.");
			});
		}


	}]);