angular.module('admin',[])
	.factory('adminFactory', ['$http','$q','$rootScope',function ($http,$q,$rootScope) {
		var obj = {};
		obj.doLogin = function(x){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/admin/Login.php?username="+x.username+"&password="+x.password)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					defer.reject(err);
				});
				return defer.promise;
		}


		return obj;		

	}]);