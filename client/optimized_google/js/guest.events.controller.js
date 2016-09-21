<<<<<<< HEAD
angular.module('rotaract').controller('eventsCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){activate();function activate(){guestFactory.getEvents().then(function(response){$scope.events=response.data;},function(err){alert("There seems to be some error. Please try again later.");});}$scope.goTo=function(x){$state.go('guest.events/details',{'id':x});}}]);
=======
angular.module('guest').controller('eventsCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){activate();function activate(){guestFactory.getEvents().then(function(response){$scope.events=response.data;},function(err){alert("There seems to be some error. Please try again later.");});}$scope.goTo=function(x){$state.go('guest.events/details',{'id':x});}}]);
>>>>>>> b0736ff2f8c8de7cbd40b05a47b51fee4fd2a13f
