
angular.module('president',[])
	.factory('presidentFactory', ['$http','$q','$rootScope',function ($http,$q,$rootScope) {
		var obj = {};
		obj.doLogin = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/president/login.php?username="+x.username+"&password="+x.password)
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
			$http.post($rootScope.serverUrl+"Angular/rotaract/server/president/addTestimonial.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
					  console.log(err);
				});
				return defer.promise;
		}

		obj.getTestimonials = function(){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/president/getTestimonials.php")
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
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/president/getTestimonial.php?id="+x)
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
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/treasurer/accounts/compareAccounts.php")
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
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/president/deleteTestimonial.php?id="+x)
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
			$http.post($rootScope.serverUrl+"Angular/rotaract/server/president/editTestimonial.php",x)
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
			$http.post($rootScope.serverUrl+"Angular/rotaract/server/president/saveAbout.php",x)
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
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/president/getAbout.php")
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
			$http.post($rootScope.serverUrl+"Angular/rotaract/server/president/saveContactUs.php",x)
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
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/president/getContactUs.php")
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