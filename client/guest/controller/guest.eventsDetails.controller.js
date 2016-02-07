angular.module('rotaract')
	.controller('eventsDetailsCtrl', ['$scope','$stateParams', 'guestFactory', function($scope,$stateParams,guestFactory){
		$scope.id = $stateParams.id;
		$scope.showComments = false;
		activate();
		function activate(){
			guestFactory.getEvent($scope.id)
				.then(function (response) {
					$scope.event = response.data[0];
				},function (err) {
					  alert("There seems to be some error. Please try again later.");
					  console.log(err);
				});
			guestFactory.getMessages($scope.id,'events')
				.then(function (response) {
					$scope.messages = response.data;
					console.log("Messages");
					console.log($scope.messages);
					if($scope.messages!=""){
						$scope.showComments = true;
					}
				},function (err) {
					  alert("There seems to be some error. Please try again later.");
					  console.log(err);
				});
			guestFactory.getFirstPhoto($scope.id)
				.then(function (response) {
					$scope.photo = response.data;
					
				},function (err) {
					  alert("There seems to be some error. Please try again later.");
					  console.log(err);
				});

		}
	}])