angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider

	
		.state('admin.login',{
				url : '',
				templateUrl : 'admin/view/login.html', 
				controller : 'adminLoginCtrl'
					
			})


		.state('admin.welcome',{
				url : '/welcome',
				templateUrl : 'admin/view/wellcomeAdmin.html', 
				controller : 'welcomeAdminCtrl'
					
			})

}]);