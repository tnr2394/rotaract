angular.module('rotaract')
	.controller('listPostholdersCtrl', ['$scope','$stateParams','$state', 'treasurerFactory',function($scope,$stateParams,$state,treasurerFactory){
		
		activate();
		function activate () {
			treasurerFactory.getPostholders()
				.then(function (response) {
					$scope.listPostholders = response.data;
				},function (err) {
					alert("There is some error.");
					console.log(err);
				});
		}

		$scope.goTo = function(x){
			$state.go('treasurer/editPostholder',{	'id' : x  });
		}
	}])