angular.module('admin')
	.controller('welcomeAdminCtrl',['$scope','$state','$localStorage',function($scope,$state,$localStorage) {
		$scope.adminName = $localStorage.currentPostHolder.name;
	}]);