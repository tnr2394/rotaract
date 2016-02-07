angular.module('rotaract')
	.controller('adminWelcomeCtrl',['$scope','$state','$localstorage',function($scope,$state,localstorage) {
		$scope.adminName = $localStorage.admin.name;
	}]);