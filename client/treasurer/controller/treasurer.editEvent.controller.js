angular.module('treasurer')
	.controller('editEventCtrl', ['$scope','$state','$stateParams','treasurerFactory', function($scope,$state,$stateParams,treasurerFactory){
		$scope.id = $stateParams.id;
		activate();
		function activate(){
			console.log("GETTING "+$scope.id);
			treasurerFactory.getEvent($scope.id)
			.then(function (response) {
					 $scope.event = response.data;
					 $scope.event.date = new Date($scope.event.date);

				},function (err) {
					 alert("Something has gone wrong. Please try again later.");
					 console.log(err); 
			});
		}


		
		$scope.updateEvent=function () {
			$scope.event.description=$scope.event.description.replace(/'|\\'/g, "\\'");
			treasurerFactory.editEvent($scope.event)
				.then(function(response){
					$state.go('treasurer.editEventPhotos',{	'id': $scope.id  })
				},function (err) {
					 alert("Sorry! Event couldn't be updated right now. Please try again later."); 
				}) 
		}
		$scope.deleteEvent = function(x){
			if(confirm("Delete this event?")){
				treasurerFactory.deleteEvent(x)
					.then(function(response){
						$state.go('treasurer.eventList');
					},function (err) {
						 alert("Sorry! Event couldn't be updated right now. Please try again later."); 
					}) 
			}

		}
	}])