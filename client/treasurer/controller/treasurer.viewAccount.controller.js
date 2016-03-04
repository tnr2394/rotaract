angular.module('treasurer')
	.controller('viewAccountCtrl',['$scope','$state','$localStorage','treasurerFactory',function($scope,$state,$localStorage,treasurerFactory) {
		
		treasurerFactory.getAccount()
			.then(function(response){
					$scope.account = response.data;
					$scope.totalin=0;
					$scope.totalout=0;
					$scope.total=0;
					
					alert($scope.account[0].type);	

					for(var i =0;i<$scope.account.length;i++)
					{	
						if($scope.account[i].type=="In")
						{
							$scope.totalin+=parseInt($scope.account[i].amount);
						}
						if($scope.account[i].type=="Out")
						{
							$scope.totalout+=parseInt($scope.account[i].amount);
						}
						
					}

					$scope.total=parseInt(parseInt($scope.totalin)-parseInt($scope.totalout));

			},function(err){
					alert("There might be some error try after sometime.");
		});

	}]);