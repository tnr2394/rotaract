angular.module('rotaract')
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

		$scope.goTo = function (x) {
			$state.go('treasurer/editEvent',{	'id' : x    });
		}



	}]);