angular.module('rotaract')
	.controller('treasurerLoginCtrl', ['$scope','$state','$localStorage','treasurerFactory', function($scope,$state,$localStorage,treasurerFactory){
		
		$scope.login = function(x){
			treasurerFactory.doLogin(x)
				.then(function (response) {
					if(response.status){
						$localStorage.treasurer = response.data;
						$state.go('treasurer.welcome');
					}
				},function (err) {
					console.log(err);
				});
		}

	}]);