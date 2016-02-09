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
<<<<<<< HEAD
			.state('guest',{
				url : '/guest',
=======
			.state('treasurer',{
				url : '/treasurer',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	template : '<ui-view></ui-view>', 
								controller : function () {
								}
							}
					
				}
			})
			.state('postHolders',{
				url : '/postHolders',
				
>>>>>>> eea28a977589b6cf36890bc3f47aa1db5b3ea801
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


<<<<<<< HEAD
		$urlRouterProvider.otherwise('/guest/');
	}]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});
=======
		// $urlRouterProvider.otherwise('/');
	}]).run(['$rootScope','$state',function($rootScope, $state){
		$rootScope.$state = $state;
		console.log($rootScope);
		console.log($rootScope.$state);
	}]);
>>>>>>> eea28a977589b6cf36890bc3f47aa1db5b3ea801
