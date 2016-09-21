angular.module('president')
	.controller('editUpcomingEventCtrl', ['$scope','$state','$stateParams','presidentFactory', function($scope,$state,$stateParams,presidentFactory){
		$scope.id = $stateParams.id;


		activate();
		function activate(){
			presidentFactory.getUpcomingEvent($scope.id)
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
			presidentFactory.editUpcomingEvent($scope.event)
				.then(function(response){
					// alert("Event Updated.");
					console.log(response);
					activate();
					// $state.go('president.welcome');
				},function (err) {

					 alert("Sorry! Event couldn't be updated right now. Please try again later."); 
				}) 
		}
		
	}])