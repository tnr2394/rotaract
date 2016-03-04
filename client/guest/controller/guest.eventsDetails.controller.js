angular.module('guest')
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
			guestFactory.getPhotos($scope.id)
				.then(function (response) {
					$scope.images = response.data;
					console.log("EVENT PHOTOS");
					console.log($scope.images);
				},function (err) {
					  alert("There seems to be some error. Please try again later.");
					  console.log(err);
				});

		}
		$scope.myIcon="fa-arrow-right";
		var counter = 1;
		$scope.showPhotos = function(){
			counter++;
			if(counter%2==0){
				$scope.myIcon = "fa-arrow-down";
				$scope.show = true;
			}
			else{
				$scope.myIcon = "fa-arrow-right";
				$scope.show = false;
			}
			
		}
		$scope.showModal = function(x){
			$scope.modalContent = x;
			angular.element("#myModal").modal('show');
		}
	}])