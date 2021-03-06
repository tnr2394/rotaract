angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider

			.state('treasurer',{
				url : '/treasurer',
				views : {
					top : {templateUrl : 'treasurer/view/menu.html',
							controller : ['$scope','$localStorage','$state',function($scope,$localStorage,$state){
								$scope.logout = function(){

  									$localStorage.currentPostHolder='null';
									$state.go('guest.welcome');
								}		
							}]
						},
					main : {
						template : "<ui-view></ui-view>"
					}
				}
			})

			.state('guest',{
				url : '/guest',
				views : {
					top : {templateUrl : 'guest/view/menu.html'},
					main : {
						template : '<ui-view></ui-view>',
						controller : function(){}
					}
				}
			})


			.state('admin',{
				url : '/admin',
				views : {
					top : {templateUrl : 'admin/view/menu.html',
							controller : ['$scope','$state','$localStorage',function($scope,$state,$localStorage){
								$scope.logout = function(){

  									$localStorage.currentPostHolder='null';
									$state.go('guest.welcome');
								}
							}]
						},
					main : {
						template : "<ui-view></ui-view>"
					}
				}
			})


			.state('president',{
				url : '/president',
				views : {
					top : {templateUrl : 'president/view/menu.html',
							controller : ['$scope','$localStorage','$state',function($scope,$localStorage,$state){

								$scope.logout = function(){

  									$localStorage.currentPostHolder='null';
									$state.go('guest.welcome');
								}		
							}]
						},
					main : {
						template : "<ui-view></ui-view>"
					}
				}
			});



			$urlRouterProvider.otherwise('/guest/');
	}]).run(['$state','$stateParams','$rootScope','$localStorage',function ($state,$stateParams,$rootScope,$localStorage) {

		// $rootScope.serverUrl = "http://www.vvprotaract.club";
    	
    	$rootScope.serverUrl = "http://localhost/Angular/rotaract";
    	$rootScope.$state = $state;
    	$rootScope.$stateParams = $stateParams;
    	$rootScope.$on('$stateChangeSuccess',function(event, toState, fromState){

			if(toState.name.substr(0,9).localeCompare('treasurer')==0||toState.name.substr(0,9).localeCompare('president')==0||toState.name.substr(0,5).localeCompare('admin')==0)	{

				if(toState.name.localeCompare("treasurer.login")==0 || toState.name.localeCompare("president.login")==0 || toState.name.localeCompare("admin.login")==0){
				}
				else{
					if(typeof($localStorage.currentPostHolder)=='undefined' || $localStorage.currentPostHolder=='null'){
						//console.log(typeof($localStorage.currentPostHolder));
						$state.go('guest.welcome');
					}
				}
			}
			else{
				//console.log("IT HAS TO BE LOGGED IN OR GUEST");
			}
    	});
  }]);
