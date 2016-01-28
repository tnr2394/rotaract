angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
			.state('welcome',{
				url : '/',
				templateUrl : 'guest/view/welcome.html',
				controller : 'welcomeCtrl'
			})
			.state('postHolders',{
				url : '/postHolders',
				templateUrl : 'guest/view/postHolders.html',
				controller : 'postHoldersCtrl'
			})			
			.state('about',{
				url : '/about',
				templateUrl : 'guest/view/about.html',
				controller : 'aboutCtrl'
			});
		$urlRouterProvider.otherwise('/');
	}]);