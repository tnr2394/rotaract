angular.module('rotaract')
	.controller('addEventCtrl', ['$scope','$state','treasurerFactory', function($scope,$state,treasurerFactory){
		$scope.addEvent = function(x){
			var data = {
				'data' : x
			}
			treasurerFactory.addEvent(data).then(function(response){
				 $scope.event = response.data;
				 $state.go('treasurer/addEventPhoto',{ 'id' :  $scope.event.id});
			},function (err) {
				 console.log(err); 
			})
		}
		function setAction(){
		    $scope.action = 'http://localhost/Angular/rotaract/server/treasurer/events/singleUpload.php?id='+$scope.event.id;
		};
	}]);