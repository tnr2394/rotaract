<<<<<<< HEAD
angular.module("rotaract").controller('aboutCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){activate();function activate(){guestFactory.getAbout().then(function(response){$scope.about=response.data.content;},function(err){alert("There seems to be some error. Please try again later.");$state.go('guest.welcome');console.log(err);})}}]);
=======
angular.module("guest").controller('aboutCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){activate();function activate(){guestFactory.getAbout().then(function(response){$scope.about=response.data.content;},function(err){alert("There seems to be some error. Please try again later.");$state.go('guest.welcome');console.log(err);})}}]);
>>>>>>> b0736ff2f8c8de7cbd40b05a47b51fee4fd2a13f
