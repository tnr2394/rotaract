<<<<<<< HEAD
angular.module('rotaract').controller('postHoldersCtrl',['$scope','guestFactory',function($scope,guestFactory){activate();function activate(){guestFactory.getPostHolders().then(function(response){$scope.postHolders=response.data;console.log("Success");console.log($scope.postHolders);},function(err){alert("There is some error. Please try later.");console.log(err);});}$scope.showModal=function(x){$scope.modalContent=$scope.postHolders[x];guestFactory.getMessages($scope.postHolders[x].id,'postholders').then(function(response){$scope.modalContent.comments=response.data;console.log($scope.modalContent.comments);},function(err){});angular.element("#myModal").modal('show');}}]);
=======
angular.module('guest').controller('postHoldersCtrl',['$scope','guestFactory',function($scope,guestFactory){activate();function activate(){guestFactory.getPostHolders().then(function(response){$scope.postHolders=response.data;console.log("Success");console.log($scope.postHolders);},function(err){alert("There is some error. Please try later.");console.log(err);});}$scope.showModal=function(x){$scope.modalContent=$scope.postHolders[x];guestFactory.getMessages($scope.postHolders[x].id,'postholders').then(function(response){$scope.modalContent.comments=response.data;console.log($scope.modalContent.comments);},function(err){});angular.element("#myModal").modal('show');}}]);
>>>>>>> b0736ff2f8c8de7cbd40b05a47b51fee4fd2a13f
