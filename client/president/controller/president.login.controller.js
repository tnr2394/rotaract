angular.module('rotaract')
	.controller('presidentLoginCtrl',['$scope','$state','$localStorage','presidentFactory',function($scope,$state,$localStorage,presidentFactory){
		
		$scope.login = function(x){
			
			presidentFactory.doLogin(x)
				.then(function (response) {
					if(response.data.status){
						$localStorage.currentPostHolder = response.data;
						$state.go('president.welcome');
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