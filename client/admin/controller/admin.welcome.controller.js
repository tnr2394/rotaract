angular.module('rotaract')
	.controller('welcomeAdminCtrl',['$scope','$state','$localStorage',function($scope,$state,$localStorage) {
		$scope.adminName = $localStorage.admin.name;
	}]);