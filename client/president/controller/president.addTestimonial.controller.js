angular.module('president')
	.controller('addTestimonialCtrl',['$scope','$state','presidentFactory',function($scope,$state,presidentFactory){
		$scope.addTestimonial = function(x){
			presidentFactory.addTestimonial(x)
				.then(function(response){
					if(response.data){
						alert("Testimonial Added");
						$state.go('president.welcome');
					}
					else{
						alert("Testimonial couldn't be added. Please try again later.");
					}
				},function(error){
					alert("There seems to be some error. Please try again later.");
					console.log(error);
				});
		}
	}]);