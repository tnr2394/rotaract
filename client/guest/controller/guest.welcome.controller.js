angular.module('rotaract')
	.controller('welcomeCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		
		activate();
		function activate(){
			guestFactory.getEvents()
			.then(function(response){
				$scope.events = response.data;
			},function(err){
				alert("Sorry, Events Couldn't be loaded.");
				console.log(err);
			});
			
			guestFactory.getAchievements()
			.then(function(response){
				$scope.achievements = response.data;
			},function(err){
				alert("Sorry, Events Couldn't be loaded.");
				console.log(err);
			});

			guestFactory.getPSG()
				.then(function(response){
					$scope.postHolders = response.data;
					console.log("Success");
					console.log($scope.postHolders);

				},function(err){
					alert("There is some error. Please try later.");
					console.log(err);
				});

		}
		$scope.showTooltip = function(x){
			guestFactory.getPhotos(x)
				.then(function (response) {
					$scope.photo =  response.data.splice(0, 2);


				},function (err) {
					  alert("There seems to be some error. Please try again later.");
					  console.log(err);
				});	

			$("#"+x).fadeIn(1000);
		}
		$scope.hideTooltip = function(x){
			$scope.photo =  null;

			$("#"+x).fadeOut(100);
		}



		$scope.showModal = function(x){
			
			$scope.modalContent = $scope.postHolders[x];
			guestFactory.getMessages($scope.postHolders[x].id,'postholders')
				.then(function (response) {
					$scope.modalContent.comments = response.data;
					console.log($scope.modalContent.comments);
				},function (err) {

				});			
			angular.element("#myModal").modal('show');
		}

	}]);