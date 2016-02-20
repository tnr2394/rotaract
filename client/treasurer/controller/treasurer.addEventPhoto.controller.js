angular.module('rotaract')
.controller('addEventPhotoCtrl',['$scope','$state','treasurerFactory','$stateParams',function($scope,$state,treasurerFactory,$stateParams){
	$scope.eventId = $stateParams.id;
	$scope.action = 'http://localhost/Angular/rotaract/server/treasurer/events/singleUpload.php?id='+$scope.eventId;
	activate($scope.eventId);
	$scope.goTo = function(x){
		$state.go(x);
	}

	function activate(x){
		treasurerFactory.getEvent(x).then(function (response) {
			$scope.event = response.data; 
	    	

		
		},function (err) {
			 alert("There is some error. Please try later.");
			 console.log(err); 
		})
	}


	
}]);
