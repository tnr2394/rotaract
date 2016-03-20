angular.module('guest')
	.controller('welcomeCtrl',['$scope','$state','guestFactory','$rootScope','events','achievements','PSG','upcomingEvents',function($scope,$state,guestFactory,$rootScope,events,achievements,PSG,upcomingEvents){

		activate();
		function activate(){

			console.log("Events From Resolved.");
			console.log(events);
			console.log("-------------");

			$scope.events = events;
			console.log('Controller events : '+$scope.events);
			
			$scope.achievements = achievements;
			console.log('Controller achievements : '+$scope.achievements);

			$scope.postHolders = PSG;
			console.log('Controller postholders : '+$scope.postHolders);

			$scope.upcomingEvents = upcomingEvents;
			console.log('Controller upcomingEvents : '+$scope.upcomingEvents);

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