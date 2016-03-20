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
		.state('president.compareAccounts',{
				url : '/compareAccounts',
				templateUrl : 'president/view/compareAccounts.html', 
				controller : 'compareAccountsCtrl'
			                               		
			})
		.state('president.addTestimonial',{
				url : '/addTestimonial',
				templateUrl : 'president/view/addTestimonial.html', 
				controller : 'addTestimonialCtrl'
					
			})
		.state('president.listTestimonials',{
				url : '/listTestimonials',
				templateUrl : 'president/view/listTestimonials.html', 
				controller : 'listTestimonialsCtrl'
					
			})
		.state('president.listUpcomingEvents',{
				url : '/listUpcomingEvents',
				templateUrl : 'president/view/listUpcomingEvents.html', 
				controller : 'listUpcomingEventsCtrl'
					
			})
		.state('president.editTestimonial',{
	
				url : '/editTestimonial/:id',
				templateUrl : 'president/view/editTestimonial.html', 
				controller : 'editTestimonialCtrl',
				params : {
			        id : '0'
			    }
					
			})
		.state('president.editUpcomingEvent',{
	
				url : '/editUpcomingEvent/:id',
				templateUrl : 'president/view/editUpcomingEvent.html', 
				controller : 'editUpcomingEventCtrl',
				params : {
			        id : '0'
			    }
					
			})
		.state('president.editAbout',{
				url : '/edit',
				templateUrl : 'president/view/editAbout.html', 
				controller : 'editAboutCtrl'
					
			})
		.state('president.addUpcomingEvent',{
				url : '/addUpcomingEvent',
				templateUrl : 'president/view/addUpcomingEvent.html', 
				controller : 'addUpcomingEventCtrl'
					
			})
		

}]);