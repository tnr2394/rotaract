angular.module('rotaract')
	.controller('compareAccountsCtrl',['$scope', '$state', 'presidentFactory',function($scope,$state,presidentFactory){
		activate();
		function activate(){
			presidentFactory.compareAccounts()
				.then(function(response){
					if(response.data)
					{
						$scope.visibility=true;
					}
					else
					{
						$scope.visibility=false;
					}
				
				},function(error){
					
				});
		}
	}]);