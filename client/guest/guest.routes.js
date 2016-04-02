angular.module('rotaract')
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

	$stateProvider
			.state('guest.welcome',{
				url : '/',
				templateUrl : 'guest/view/welcome.html', 
				controller : 'welcomeCtrl',
				resolve : {
						events : ['guestFactory','$rootScope','$q',function(guestFactory,$rootScope,$q){

								var defer = $q.defer();

									guestFactory.getRecentEvents()
									.then(function(response){
										defer.resolve(response.data);
									},function(err){
										console.log(err);
										defer.reject(err);
									});
									return defer.promise;
							}],

						achievements : ['guestFactory','$rootScope','$q',function(guestFactory,$rootScope,$q){
									var defer = $q.defer();

									guestFactory.getAchievements()
									.then(function(response){
										defer.resolve(response.data);
									},function(err){
										console.log(err);
										defer.reject(err);
									});
									return defer.promise;
							}],
						PSG : ['guestFactory','$rootScope','$q',function(guestFactory,$rootScope,$q){
									var defer = $q.defer();
									guestFactory.getPSG()
									.then(function(response){
										defer.resolve(response.data);

									},function(err){
										alert("There is some error. Please try later.");
										console.log(err);
										defer.reject(err);
									});
									return defer.promise;
							}],
							upcomingEvents	 : ['guestFactory','$rootScope','$q',function(guestFactory,$rootScope,$q){
									var defer = $q.defer();
									guestFactory.getUpcomingEvents()
									.then(function(response){
										defer.resolve(response.data);
									},function(err){
										alert("There is some error. Please try later.");
										console.log(err);
										defer.reject(err);
									});
									$rootScope.showSpinner=false;
									return defer.promise;
							}]
				}


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
			.state('guest.contact',{
				url : '/contact',
				templateUrl : 'guest/view/contact.html', 
				controller : 'contactCtrl'
					
			})
			.state('guest.joinRotaract',{
				url : '/joinRotaract',
				templateUrl : 'guest/view/joinRotaract.html', 
				controller : 'joinRotaractCtrl'
					
			})
		}]);