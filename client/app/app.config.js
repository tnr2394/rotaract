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

			.state('adminLogin',{
				url : '/admin',
				views : {
					'main' : {	templateUrl : 'admin/view/login.html', 
								controller : 'adminLoginCtrl'
							}
				}
			})


			.state('admin/welcome',{
				url : '/admin/welcome',
				views : {
					'main' : {	templateUrl : 'admin/view/welcomeAdmin.html', 
								controller : 'welcomeAdminCtrl'
							}
				}
			})

			.state('presidentLogin',{
				url : '/president',
				views : {
					'main' : {	templateUrl : 'president/view/login.html', 
								controller : 'presidentLoginCtrl'
							}
				}
			})


			.state('president/welcome',{
				url : '/president/welcome',
				views : {
					'main' : {	templateUrl : 'president/view/welcomePresident.html', 
								controller : 'welcomePresidentCtrl'
							}
				}
			});


		$urlRouterProvider.otherwise('/guest/');
	}]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});