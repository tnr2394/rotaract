angular.module('rotaract')
	.controller('listTestimonialsCtrl',['$scope', '$state', 'presidentFactory',function($scope,$state,presidentFactory){
		activate();
		function activate(){
			presidentFactory.getTestimonials()
				.then(function(response){
					$scope.testimonials = response.data;
				},function(error){
					alert("There seems to be some error. Please try again later.");
					console.log(error);
					$state.go('president.welcome');
				});
		}

		$scope.goTo = function(x){
			$state.go('president.editTestimonial',{'id' : x.id})
		}

		$scope.deleteTestimonial = function(x){
			if(confirm("Delete this testimonial?")){

			presidentFactory.deleteTestimonial(x)
				.then(function(response){
					if(response.data){
						alert("Testimonial Deleted.");
						activate();
					}
					else{
						alert("Couldn't delete testimonial.");
						$state.go('president.listTestimonials');
					}
					},function(error){
						alert("There seems to be some error. Please try again later.");
						$state.go('president.listTestimonials');
				});
			}
		}


	}]);