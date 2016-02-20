angular.module('rotaract')
	.controller('treasurerLoginCtrl', ['$scope','$state','$localStorage','treasurerFactory', function($scope,$state,$localStorage,treasurerFactory){
		
		$scope.login = function(x){
			treasurerFactory.doLogin(x)
				.then(function (response) {

					alert(response.data.status);

					if(response.data.status){
						$localStorage.currentPostHolder = response.data;
						$state.go('treasurer.welcome');
						alert("login Successful");
					}
					else
					{
						alert("Login Unsuccessfull");
						$scope.visible=true;
					}
				},function (err) {
					console.log(err);
				});
		}

	}]);