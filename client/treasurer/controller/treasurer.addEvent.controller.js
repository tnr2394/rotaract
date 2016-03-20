angular.module('treasurer')
	.controller('addEventCtrl', ['$scope','$state','treasurerFactory','$rootScope', function($scope,$state,treasurerFactory,$rootScope){
		$scope.addEvent = function(x){
			x.eventDate= new Date(x.eventDate);
			// var year = x.eventDate.getFullYear();
			// var month = x.eventDate.getMonth();
			// var day = x.eventDate.getDate();
			// var z = year+'-'+month+'-'+day;
			// x.eventDate=z;
			// alert(year);
			// alert(month);
			// alert(day);
			// var z = new Date(z);

			// alert(x.eventDate);
			var data = {
				'data' : x
			};
			treasurerFactory.addEvent(data).then(function(response){
				 $scope.event = response.data;
				 $state.go('treasurer.addEventPhoto',{ 'id' :  $scope.event.id});
			},function (err) {
				 console.log('Add event factory error');
				 console.log(err); 
			})
		}
		function setAction(){
		    $scope.action = $rootScope.serverUrl+'/Angular/rotaract/server/treasurer/events/singleUpload.php?id='+$scope.event.id;
		};
	}]);