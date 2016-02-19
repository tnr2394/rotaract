angular.module('rotaract')
.controller('addEventPhotoCtrl',['$scope','$state','treasurerFactory','$stateParams',function($scope,$state,treasurerFactory,$stateParams){
	$scope.eventId = $stateParams.id;
	$scope.action = 'http://localhost/Angular/rotaract/server/treasurer/events/singleUpload.php?id='+$scope.eventId;
	activate($scope.eventId);
	$scope.goTo = function(x){
		$state.go(x);
	}

	function activate(x){
		treasurerFactory.getEvent(x).then(function (response) {
			$scope.event = response.data; 
			// Dropzone.options.myDropzone = {
			//   init: function() {
			//     this.on("processingfile", function(file) {
			//       this.options.url = action;
			//     });
			//   }
			// };
			//  $scope.diver ='<div action="'+action+'" class="dropzone" drop-zone call-back="myCallBackMethod(response)" data-max="5" auto-process="false" message="Drop file here or click to select" mimetypes=".doc,.docx,.pages,.pdf,.odt" id="file-dropzone"></div>';
			// $("#myDiv").html($scope.diver);
		},function (err) {
			 alert("There is some error. Please try later.");
			 console.log(err); 
		})
	}


	
}]);
