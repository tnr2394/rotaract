angular.module('rotaract')
	.controller('editTestimonialCtrl',['$scope','$state','presidentFactory','$stateParams',function($scope,$state,presidentFactory,$stateParams){
		var id = $stateParams.id;
		activate();
		function activate(){
			presidentFactory.getTestimonial(id)
				.then(function(response){
					
					$scope.testimonial = response.data;
					console.log($scope.testimonial);

				},function(error){
					
					alert("There seems to be some error. Please try later.");
					console.log(error);
				
				})
		}


		$scope.editTestimonial = function(x){
			presidentFactory.editTestimonial(x)
				.then(function(response){
					alert("Testimonial Saved.");
					$state.go('president.listTestimonials');
				},function(error){
					alert("There seems to be some error. Please try again later.");
					$state.go('president.listTestimonials');
				});
		}

		

	}]);