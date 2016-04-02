
angular.module('president',[])
	.factory('presidentFactory', ['$http','$q','$rootScope',function ($http,$q,$rootScope) {
		var obj = {};
		obj.doLogin = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/login.php?username="+x.username+"&password="+x.password)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		

		obj.addTestimonial = function(x){
			var defer = $q.defer();
			$http.post($rootScope.serverUrl+"/server/president/addTestimonial.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		obj.addUpcomingEvent = function(x){
			var defer = $q.defer();
			$http.post($rootScope.serverUrl+"/server/president/addUpcomingEvent.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		obj.deleteUpcomingEvent = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/president/deleteUpcomingEvent.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.getUpcomingEvent = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/getUpcomingEvent.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					defer.reject(err);
				});
				return defer.promise;
		}

		obj.editUpcomingEvent = function(x){
			var defer = $q.defer();
			console.log("Edit Event:");
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/president/editUpcomingEvent.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}

		obj.getTestimonials = function(){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/getTestimonials.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		obj.getAllUpcomingEvents = function(){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/getAllUpcomingEvents.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}

		obj.getTestimonial = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/getTestimonial.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		obj.compareAccounts = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/treasurer/accounts/compareAccounts.php")
				.then(function(success){
					
					defer.resolve(success);
				},function (err) {
					
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		obj.deleteTestimonial = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/deleteTestimonial.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		
		obj.editTestimonial = function(x){
			var defer = $q.defer();
			$http.post($rootScope.serverUrl+"/server/president/editTestimonial.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}

		obj.saveAbout = function(x){
			var defer = $q.defer();
			$http.post($rootScope.serverUrl+"/server/president/saveAbout.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}


		obj.getAbout = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/getAbout.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}
		obj.saveContactUs = function(x){
			var defer = $q.defer();
			$http.post($rootScope.serverUrl+"/server/president/saveContactUs.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}


		obj.getContactUs = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/president/getContactUs.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}


		return obj;		

	}]);