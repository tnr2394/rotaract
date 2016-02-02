angular.module('rotaract')
	.factory('treasurerFactory', ['$http','$q',function ($http,$q) {
		var obj = {};
		obj.doLogin = function(x){
			var defer = $q.defer();
			$http.get("http://localhost/Angular/rotaract/server/treasurer/treasurerLogin.php?username="+x.username+"&password="+x.password)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}


		obj.addEvent = function(x){
			var defer = $q.defer();
			$http.post("treasurerLogin.php?username="+x.username+"&password="+x.password)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
		}



		return obj;		

	}])