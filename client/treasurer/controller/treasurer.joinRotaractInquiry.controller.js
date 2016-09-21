angular.module('treasurer')
	.controller('joinRotaractInquiryCtrl', ['$scope','$state','treasurerFactory', function ($scope,$state,treasurerFactory) {
		
		activate();
		function activate () {
			treasurerFactory.getJoinRotaractInquiry()
			.then(function(response){
				$scope.inquiry = response.data;
			},function (error) {
				alert("There seems to be some error. Please try again later.");
				console.log(error);  
			});
		}

		$scope.update = function (x) {
			treasurerFactory.updateJoinRotaractInquiry(x)
			.then(function (response) {
				activate();  
			},function (error) {
				alert("There seems to be some error. Please try again later.");
			});
		}

	}]);