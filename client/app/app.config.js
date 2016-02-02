angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
			.state('welcome',{
				url : '/',

				views : {
					'top' : {	templateUrl : 'guest/view/menu.html'},
					'main' : {	templateUrl : 'guest/view/welcome.html', 
								controller : 'welcomeCtrl'
							}
					
				}
			})
			.state('postHolders',{
				url : '/postHolders',
				
				views : {
					'top' : {	templateUrl : 'guest/view/menu.html'},
					'main' : {	templateUrl : 'guest/view/postHolders.html', 
								controller : 'postHoldersCtrl'
							}
					
				}
			})	
			.state('testimonials',{
				url : '/testimonials',
				views : {
					'top' : {	templateUrl : 'guest/view/menu.html'},
					'main' : {	templateUrl : 'guest/view/testimonials.html', 
								controller : 'testimonialsCtrl'
							}
					
				}
			})			
			.state('about',{
				url : '/about',
				views : {
					'top' : {	templateUrl : 'guest/view/menu.html'},
					'main' : {	templateUrl : 'guest/view/about.html', 
								controller : 'aboutCtrl'
							}
				},
					
			})
			.state('addEvent',{
				url : '/treasurer/addEvent',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/addEvent.html', 
								controller : 'addEventCtrl'
							}
				},
					
			})
			.state('treasurer/welcome',{
				url : '/treasurer/welcome',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/welcomeTreasurer.html', 
								controller : 'welcomeTreasurerCtrl'
							}
				},
					
			})
			.state('treasurerLogin',{
				url : '/treasurer',
				views : {
					'main' : {	templateUrl : 'treasurer/view/login.html', 
								controller : 'treasurerLoginCtrl'
							}
				}
			});

		$urlRouterProvider.otherwise('/');
	}]);