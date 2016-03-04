angular.module('treasurer')
	.controller('treasurerLoginCtrl', ['$scope','$state','$localStorage','treasurerFactory', function($scope,$state,$localStorage,treasurerFactory){
		
		$scope.login = function(x){
			treasurerFactory.doLogin(x)
				.then(function (response) {

<<<<<<< HEAD
					

=======
>>>>>>> b0736ff2f8c8de7cbd40b05a47b51fee4fd2a13f
					if(response.data.status){
						$localStorage.currentPostHolder = response.data;
						$state.go('treasurer.welcome');
					}
					else
					{
<<<<<<< HEAD
						
=======
>>>>>>> b0736ff2f8c8de7cbd40b05a47b51fee4fd2a13f
						$scope.visible=true;
					}
				},function (err) {
					console.log(err);
				});
		}

	}]);