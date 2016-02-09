// Interceptor example for angularJs.

angular.module('rotaract').factory('rotaractInterceptor', ['$q', function($q) { 

  var myInterceptor = {
          // On request success
      request: function (config) {
         // Contains the data about the request before it is sent.
         //alert("Inside requestSuccess");
         //console.log(config);

        // Return the config or wrap it in a promise if blank.
        return config || $q.when(config);
      },

      // On request failure
      requestError: function (rejection) {
        // Contains the data about the error on the request.
        alert("Inside requestFailure");
        console.log(rejection);

      // Return the promise rejection.
      return $q.reject(rejection);
      },

      // On response success
      response: function (response) {
        // Contains the data from the response.
        // console.log(response); 
        //alert("Inside responseSuccess");
      // Return the response or promise.
      return response || $q.when(response);
      },

      // On response failture
      responseError: function (rejection) {
        // Contains the data about the error.

         if(rejection.status == 401)
         {
           alert("Inside responseError");
           window.location("http://localhost/Angular/rotaract/client/#/");
         }
       
        console.log(rejection);
      // Return the promise rejection.
      return $q.reject(rejection);
      }
    }

  return myInterceptor;
}]);


angular.module('rotaract').config(['$httpProvider', function($httpProvider) {  
   $httpProvider.interceptors.push('rotaractInterceptor');
}]);