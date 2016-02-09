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
			.state('events',{
				url : '/events',
				views : {
					'top' : {	templateUrl : 'guest/view/menu.html'},
					'main' : {	templateUrl : 'guest/view/events.html', 
								controller : 'eventsCtrl'
							}
					
				}
			})			
			.state('events/details',{
				url : '/events/details/:id',
				views : {
					'top' : {	templateUrl : 'guest/view/menu.html'},
					'main' : {	templateUrl : 'guest/view/eventsDetails.html', 
								controller : 'eventsDetailsCtrl',
								params : {
									'id' : '1'								}
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


		// $urlRouterProvider.otherwise('/');
}]);

