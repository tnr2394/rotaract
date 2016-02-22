angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
			.state('treasurer.addEvent',{
				url : '/addEvent',
				templateUrl : 'treasurer/view/addEvent.html', 
				controller : 'addEventCtrl'
					
			})
			.state('treasurer.addEventPhoto',{
				url : '/addEventPhoto/:id',
				templateUrl : 'treasurer/view/addEventPhotos.html', 
				controller : 'addEventPhotoCtrl',
				params: {
				    'id': '1' 
				  }
			})
			.state('treasurer.addPostholder',{
				url : '/addPostholder',
				templateUrl : 'treasurer/view/addPostholder.html', 
				controller : 'addPostholderCtrl'
			})
			.state('treasurer.editPostholder',{
				url : '/editPostholder/:id',
				templateUrl : 'treasurer/view/editPostholder.html', 
				controller : 'editPostholderCtrl',
				 params: {
				    'id': '1'
				  }
			})
			.state('treasurer.listPostholders',{
				url : '/listPostholders',
				templateUrl : 'treasurer/view/listPostholders.html', 
				controller : 'listPostholdersCtrl'
			})
			.state('treasurer.addMessage',{
				url : '/addMessage',
				templateUrl : 'treasurer/view/addMessage.html', 
				controller : 'addMessageCtrl'							
			})

			.state('treasurer.addExpense',{
				url : '/addExpense',
				templateUrl : 'treasurer/view/addExpense.html', 
				controller : 'addExpense'							
			})
			.state('treasurer.addIncome',{
				url : '/addIncome',
				templateUrl : 'treasurer/view/addIncome.html', 
				controller : 'addIncome'							
			})

			.state('treasurer.welcome',{
				url : '/welcome',
				templateUrl : 'treasurer/view/welcomeTreasurer.html', 
				controller : 'welcomeTreasurerCtrl'
			})
			.state('treasurer.eventList',{
				url : '/eventList',
				templateUrl : 'treasurer/view/eventList.html', 
				controller : 'eventListCtrl'
					
			})
			.state('treasurer.editEvent',{
				url : '/editEvent/:id',
				templateUrl : 'treasurer/view/editEvent.html', 
				controller : 'editEventCtrl',
				params: {
				    'id': '1'
				  }
			})
			.state('treasurer.editEventPhotos',{
				url : '/editEventPhotos/:id',
				templateUrl : 'treasurer/view/editEventPhotos.html', 
				controller : 'editEventPhotosCtrl',
				params: {
				    'id': '1'
				  }
			})
			.state('treasurer.login',{
				url : '/login',
				templateUrl : 'treasurer/view/login.html', 
				controller : 'treasurerLoginCtrl'
			});

	}]);