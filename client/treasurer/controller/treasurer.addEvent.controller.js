angular.module('rotaract')
	.controller('addEventCtrl', ['$scope', function($scope){
		$scope.dropzoneConfig = {
		  parallelUploads: 3,
		  maxFileSize: 30
		};
		
	}])