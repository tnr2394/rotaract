angular.module('treasurer',[]);
angular.module('treasurer')
	.factory('treasurerFactory', ['$http','$q','$rootScope',function ($http,$q,$rootScope) {

		var obj = {};
		obj.doLogin = function(x){
		
			var defer = $q.defer();
			$http.get($rootScope.serverUrl+"/server/treasurer/Login.php?username="+x.username+"&password="+x.password)
				.then(function(success){
					defer.resolve(success);

				},function (err){
			
					  defer.reject(err);
				});
				return defer.promise;
		}


		obj.addEvent = function(x){
			var defer = $q.defer();
			console.log('Factory');
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/events/addEventNewQuery.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.addMessage = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/message/addMessageFromUser.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.getAccount = function(){
			var defer = $q.defer();

			$http.get($rootScope.serverUrl+"/server/treasurer/accounts/getaccountdetails.php")
				.then(function(success){
					defer.resolve(success);
					alert(success.data);
				},function(err){
					defer.reject(err);
				});
			return defer.promise;
		}
		obj.addExpense = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/accounts/addExpense.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.addIncome = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/accounts/addIncome.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.deleteEvent = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/events/deleteEvent.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.getEvent = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/events/getEvent.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.getXid = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/message/getXid.php?from="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}

		obj.getAllEvents = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/events/getAllEvents.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}

		obj.getContactQueries = function(x){
			var defer = $q.defer();
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/events/getContactQueries.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}

		obj.editEvent = function(x){
			var defer = $q.defer();
			console.log("Edit Event:");
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/events/editEvent.php",x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.getEventPhotos = function(x){
			var defer = $q.defer();
			console.log("Get Event Photos:");
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/events/getEventPhotos.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}

		obj.deleteImg = function (x) {
			var defer = $q.defer();
			console.log("Delete Photo :");
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/events/deleteImg.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
			return defer.promise;
		}

		obj.getPostholder = function(x){
			var defer = $q.defer();
			console.log("Get PostHolder :");
			console.log(x);
			$http.get($rootScope.serverUrl+"/server/treasurer/postHolders/get_postholder.php?id="+x)
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.getPostholders = function(){
			var defer = $q.defer();
			console.log("Get PostHolders");
			$http.get($rootScope.serverUrl+"/server/treasurer/postHolders/get_postholders.php")
				.then(function(success){
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.addPostholder = function(x,file){
			var defer = $q.defer();
			console.log("Add PostHolders :");
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/postHolders/addPostholder.php",x)
				.then(function(success){
					alert(success.data);
					uploadFile(file,$rootScope.serverUrl+"/server/treasurer/postHolders/addPostholderPhoto.php?id="+success.data);
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}
		obj.updatePostholder = function(x,photo){
			var defer = $q.defer();
			console.log("Add PostHolders :");
			console.log(x);
			$http.post($rootScope.serverUrl+"/server/treasurer/postHolders/editPostholder.php",x)
				.then(function(success){
					if(typeof photo!='undefined'){
						uploadFile(photo,$rootScope.serverUrl+"/server/treasurer/postHolders/addPostholderPhoto.php?id="+success.data)
						.then(function(res){
						},function (err) {
						 alert("Error Uploading photo.");
						 console.log(err); 
						});
					}
					defer.resolve(success);
				},function (err) {
					  defer.reject(err);
				});
				return defer.promise;
		}

		function uploadFile (file, uploadUrl){
               alert("Uploading");
               var fd = new FormData();
               fd.append('file', file);
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
               .success(function(scs){
               		alert("Photo has been uploaded.");
               })
               .error(function(){
	               	alert("Sorry, the photo couldn't be uploaded. Please Upload the photo from 'EDIT POSTHOLDER'.")
               });
            }


		return obj;		

	}])



.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }])

.service('fileUpload', ['$http', function ($http) {
           
         }]);