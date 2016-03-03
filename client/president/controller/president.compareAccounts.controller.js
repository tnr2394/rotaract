angular.module('rotaract')
	.controller('compareAccountsCtrl',['$scope', '$state', 'presidentFactory',function($scope,$state,presidentFactory){
		activate();
		function activate(){
			presidentFactory.compareAccounts()
				.then(function(response){
					
					$scope.compareAccounts=response.data;
					angular.forEach($scope.compareAccounts, function(value, key) {  
  					$scope.dbin=value.totalin;
  					$scope.dbout=value.totalout;
  					$scope.dbtotal=value.total; 
  					$scope.login=value.totalinlog;
  					$scope.logout=value.totaloutlog;
  					$scope.logtotal=value.totallog;
  					$scope.status=value.status;

					}) ;
				
				
				},function(error){
					
				});
		}
	}]);