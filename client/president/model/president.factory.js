
angular.module('rotaract')
	.factory('presidentFactory', ['$http','$q',function ($http,$q) {
		var obj = {};
		obj.doLogin = function(x){
			var defer = $q.defer();
			$http.get("http://localhost/Angular/rotaract/server/president/login.php?username="+x.username+"&password="+x.password)
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
			$http.post("http://localhost/Angular/rotaract/server/president/addTestimonial.php",x)
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
			$http.get("http://localhost/Angular/rotaract/server/president/getTestimonials.php")
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
			$http.get("http://localhost/Angular/rotaract/server/president/getTestimonial.php?id="+x)
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
			$http.get("http://localhost/Angular/rotaract/server/president/deleteTestimonial.php?id="+x)
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
			$http.post("http://localhost/Angular/rotaract/server/president/editTestimonial.php",x)
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