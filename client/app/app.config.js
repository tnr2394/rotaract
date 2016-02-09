angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider

			.state('treasurer',{
				url : '/treasurer',
				views : {
					top : {templateUrl : 'treasurer/view/menu.html'},
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
						template : "<ui-view></ui-view>",
						controller : function(){}
					}
				}
			})


			.state('admin',{
				url : '/admin',
				views : {
					top : {templateUrl : 'admin/view/menu.html'},
					main : {
						template : "<ui-view></ui-view>",
						//controller : function(){}
					}
				}
			})


			.state('president',{
				url : '/president',
				views : {
					top : {templateUrl : 'president/view/menu.html'},
					main : {
						template : "<ui-view></ui-view>",
						//controller : function(){}
					}
				}
			});



		//$urlRouterProvider.otherwise('/guest/');
	}]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});



