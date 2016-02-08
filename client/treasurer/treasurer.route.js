angular.module("rotaract")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
			.state('addEvent',{
				url : '/treasurer/addEvent',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/addEvent.html', 
								controller : 'addEventCtrl'
							}
				},
					
			})
			.state('treasurer/addEventPhoto',{
				url : '/treasurer/addEventPhoto/:id',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/addEventPhotos.html', 
								controller : 'addEventPhotoCtrl',
								 params: {
								    'id': '1', 
								  }
							}
				},
					
			})
			.state('treasurer/addPostholder',{
				url : '/treasurer/addPostholder',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/addPostholder.html', 
								controller : 'addPostholderCtrl'
							}
				},
					
			})
			.state('treasurer/editPostholder',{
				url : '/treasurer/editPostholder/:id',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/editPostholder.html', 
								controller : 'editPostholderCtrl',
								 params: {
								    'id': '1', 
								  }
							}
				},
					
			})
			.state('treasurer/listPostholders',{
				url : '/treasurer/listPostholders',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/listPostholders.html', 
								controller : 'listPostholdersCtrl'							}
				},
					
			})
			.state('treasurer/addMessage',{
				url : '/treasurer/addMessage',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/addMessage.html', 
								controller : 'addMessageCtrl'							
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
			.state('treasurer/eventList',{
				url : '/treasurer/eventList',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/eventList.html', 
								controller : 'eventListCtrl'
							}
				},
					
			})
			.state('treasurer/editEvent',{
				url : '/treasurer/editEvent/:id',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/editEvent.html', 
								controller : 'editEventCtrl',
								params: {
								    'id': '1'
								  }
							}
				},
					
			})
			.state('treasurer/editEventPhotos',{
				url : '/treasurer/editEventPhotos/:id',
				views : {
					'top' : {	templateUrl : 'treasurer/view/menu.html'},
					'main' : {	templateUrl : 'treasurer/view/editEventPhotos.html', 
								controller : 'editEventPhotosCtrl',
								params: {
								    'id': '1'
								  }
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