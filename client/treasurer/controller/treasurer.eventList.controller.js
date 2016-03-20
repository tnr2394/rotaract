angular.module('treasurer')
	.controller('eventListCtrl', ['$scope','$state','treasurerFactory', function($scope,$state,treasurerFactory){
		activate();
		function activate(){
			treasurerFactory.getAllEvents().then(function(response){
				$scope.eventList = response.data;
			},function(err){
				alert("Couldn't Retrive Events. Please try again later.");
				console.log(err);
			});
		}

		$scope.editEvent = function (x) {
			$state.go('treasurer.editEvent',{	'id' : x    });
		}

		$scope.deleteEvent = function(x){
			if(confirm("Delete this event?")){
				treasurerFactory.deleteEvent(x)
					.then(function(response){
						activate();
					},function (err) {
						 alert("Sorry! Event couldn't be updated right now. Please try again later."); 
					}) 
			}

		}

	}]);