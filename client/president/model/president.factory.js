
angular.module('rotaract')
	.factory('presidentFactory', ['$http','$q',function ($http,$q) {
		var obj = {};
		obj.doLogin = function(x){
			var defer = $q.defer();
			$http.get("http://localhost/Angular/rotaract/server/president/presidentLogin.php?username="+x.username+"&password="+x.password)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}


		return obj;		

	}]);