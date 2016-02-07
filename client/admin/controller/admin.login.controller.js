angular.module('rotaract')
	.controller('adminLoginCtrl',['$scope','$state','$localStorage','adminFactory',function($scope,$state,$localStorage,adminFactory){

		$scope.visible=false;

		$scope.login = function(x){
			adminFactory.doLogin(x)
				.then(function (response) {
					if(response.status){
						$localStorage.admin = response.data;
						$state.go('admin/welcome');
					}
				},function (err) {
					console.log(err);
				});
		}

	}]);