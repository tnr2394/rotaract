angular.module('rotaract')
	.controller('testimonialsCtrl', ['$scope','guestFactory', function($scope,guestFactory){

		activate();
		function activate(){
			guestFactory.getTestimonials()
				.then(function (success) {
					$scope.testimonials = success.data;				
				},function (err) {
					alert("There seems to be some error. Please try again later.");
					console.log(err);
				});
		}
		$scope.whatIsIt = function (x) {
			return (x%2==0)?"":"blockquotereverse";
		}
	}]);