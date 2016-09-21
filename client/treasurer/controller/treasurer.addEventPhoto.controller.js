angular.module('treasurer')
.controller('addEventPhotoCtrl',['$scope','$state','treasurerFactory','$stateParams','$rootScope',function($scope,$state,treasurerFactory,$stateParams,$rootScope){
	$scope.eventId = $stateParams.id;
	$scope.action = $rootScope.serverUrl+'/server/treasurer/events/singleUpload.php?id='+$scope.eventId;
	$scope.mimeTypes = '.jpeg,.jpg';
	activate($scope.eventId);
	$scope.goTo = function(x){$state.go(x);}
	function activate(x){
		treasurerFactory.getEvent(x).then(function (response) {
			$scope.event = response.data; 
		},function (err) {
			 alert("There is some error. Please try later.");
			 console.log(err); 
		})};
	$scope.myCallBackMethod = function(reponse) {alert(response);}
}]);
