angular.module('rotaract')
	.controller('adminLoginCtrl',['$scope','$state','$localstorage','adminFactory',function($scope,$state,$localstorage,$adminFactory){

		$scope.login = function(x){
			treasurerFactory.doLogin(x)
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