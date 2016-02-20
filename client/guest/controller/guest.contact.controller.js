angular.module('rotaract')
	.controller('contactCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		$scope.contact = function(x){
			guestFactory.contact(x)
				.then(function(response){
					if(response.data){
						alert("Your query has been submited. We will contact you soon.");
							$state.go('guest.welcome');
					
					}
					else{
						alert("There seems to be some error. Please try again later.");
						$state.go('guest.welcome');
					}
				},function(err){
					alert("There seems to be some error. Please try again later.");
					$state.go('guest.welcome');

				});
		}

	}]);