angular.module('guest')
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
			var x = (x%2==0)?"":"blockquote-reverse";
			// console.log("x ="+ x);
			return x;
		}
		$scope.whatIsIt2 = function (x) {
			var z = (x%2==0)?"fa myfa fa-quote-right fa-5x":"fa myfa fa-quote-left fa-5x";
			//console.log("z ="+ z);
			return z;
		}


	}]);