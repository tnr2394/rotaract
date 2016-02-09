angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider



		.state('president.login',{
				url : '/login',
				templateUrl : 'president/view/login.html', 
				controller : 'presidentLoginCtrl'
					
			})


		.state('president.welcome',{
				url : '/welcome',
				templateUrl : 'president/view/welcomePresident.html', 
				controller : 'welcomePresidentCtrl'
					
			})



}]);