angular.module('president')
.controller('addUpcomingEventCtrl', ['$scope','presidentFactory','$state', function ($scope,presidentFactory,$state) {
	$scope.addUpcomingEvent = function(x){
	var data = {
				'data' : x
			}
			presidentFactory.addUpcomingEvent(data).then(function(response){
				if(response.data){
					alert("Upcoming Event Added");
					$state.go('president.welcome');
				}
				else{
					alert("Sorry Event couldn't be added");
					$state.go('president.welcome');
				}
			},function (err) {
				console.log(err); 
				$state.go('president.welcome');
			})
	}

/*  Date.prototype.ymd = function() {
   var y = this.getFullYear();
   var m = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
   var d  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
   return ""+y+"/"+m+"/"+d;
  };*/
}]);