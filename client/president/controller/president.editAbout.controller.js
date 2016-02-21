angular.module('rotaract')
	.controller('editAboutCtrl',['$scope','$state','presidentFactory',function($scope,$state,presidentFactory){
		activate();
		function activate(){
			presidentFactory.getAbout()
				.then(function(response){
					$scope.about = response.data;
					console.log($scope.about);
				},function(err){
					alert("There seems to be some error. Please try again later.");
					console.log(err);
				})
		}

		$scope.saveAbout = function(){
			presidentFactory.saveAbout($scope.about)
				.then(function(response){
					if(response.data){
						alert("Saved!");
						$state.go('president.welcome');
					}
					else{
						alert("There seems to be some error. Please try later.");
						$state.go('president.welcome');

					}

				},function(err){
					alert("There seems to be some error. Please try later.");
					$state.go('president.welcome');
				})
		}

	}])