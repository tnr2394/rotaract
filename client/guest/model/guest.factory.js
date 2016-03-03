angular.module('rotaract')
	.factory('guestFactory',['$http','$q','$rootScope',function($http,$q,$rootScope){
		var obj = {};
		obj.getPostHolders = function(){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_postholders.php")
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}
		obj.getTestimonials = function(){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_testimonials.php")
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}

		obj.getEvents = function(){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_events.php")
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}

		obj.getPSG = function(){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_PSG.php")
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}

		obj.getAchievements = function(){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_achievements.php")
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}
		
		obj.getEvent = function(x){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_event.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}
		obj.getMessages = function(x,y){
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_messages.php?id="+x+"&for="+y)
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}
		obj.getFirstPhoto = function(x){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_firstphoto.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}

		obj.getPhotos = function(x){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"Angular/rotaract/server/guest/get_photos.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}
	
		obj.contact = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.post($rootScope.serverUrl+"Angular/rotaract/server/guest/addContact.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
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

		return obj;
	}])
	.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });