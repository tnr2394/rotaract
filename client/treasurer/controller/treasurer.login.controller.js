angular.module('treasurer')
	.controller('treasurerLoginCtrl', ['$scope','$state','$localStorage','treasurerFactory', function($scope,$state,$localStorage,treasurerFactory){
		
		$scope.login = function(x){
			treasurerFactory.doLogin(x)
				.then(function (response) {

					if(response.data.status){
						$localStorage.currentPostHolder = response.data;
						$state.go('treasurer.welcome');
					}
					else
					{
						$scope.visible=true;
					}
				},function (err) {
					console.log(err);
				});
		}

	}]);