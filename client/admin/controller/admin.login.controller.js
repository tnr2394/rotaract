angular.module('admin')
	.controller('adminLoginCtrl',['$scope','$state','$localStorage','adminFactory',function($scope,$state,$localStorage,adminFactory){

		$scope.visible=false;

		$scope.login = function(x){
			adminFactory.doLogin(x)
				.then(function (response) {
					if(response.status){
						$localStorage.currentPostHolder = response.data;
						$state.go('admin.welcome');
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