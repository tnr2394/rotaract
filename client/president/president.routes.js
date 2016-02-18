angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
		.state('president.login',{

				url : '',
				templateUrl : 'president/view/login.html', 
				controller : 'presidentLoginCtrl'
					
			})


		.state('president.welcome',{
				url : '/welcome',
				templateUrl : 'president/view/welcomePresident.html', 
				controller : 'welcomePresidentCtrl'
					
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
		.state('president.editTestimonial',{
	
				url : '/editTestimonial/:id',
				templateUrl : 'president/view/editTestimonial.html', 
				controller : 'editTestimonialCtrl',
				params : {
			        id : '0'
			    }
					
			})

}]);