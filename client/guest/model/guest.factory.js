angular.module('rotaract')
	.factory('guestFactory',['$http','$q',function($http,$q){
		var obj = {};

		obj.getPostHolders = function(){
			var defer = $q.defer();

			$http.get("http://localhost/Angular/rotaract/server/get_postholders.php")
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}


		return obj;
	}]);