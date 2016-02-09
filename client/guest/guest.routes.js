angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
			.state('guest.welcome',{
				url : '/',
				templateUrl : 'guest/view/welcome.html', 
				controller : 'welcomeCtrl'
			})
			.state('guest.postHolders',{
				url : '/postHolders',
				templateUrl : 'guest/view/postHolders.html', 
				controller : 'postHoldersCtrl'
			})	
			.state('guest.testimonials',{
				url : '/testimonials',
				templateUrl : 'guest/view/testimonials.html', 
				controller : 'testimonialsCtrl'
				
			})			
			.state('guest.events',{
				url : '/events',
				templateUrl : 'guest/view/events.html', 
				controller : 'eventsCtrl'
				
			})			
			.state('guest.events/details',{
				url : '/events/details/:id',
				templateUrl : 'guest/view/eventsDetails.html', 
				controller : 'eventsDetailsCtrl',
				params : {
					'id' : '1'								
				}
				
			})			
			.state('guest.about',{
				url : '/about',
				templateUrl : 'guest/view/about.html', 
				controller : 'aboutCtrl'
					
			})
		}]);