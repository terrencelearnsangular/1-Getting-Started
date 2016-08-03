(function(){

	var app = angular.module("firstTutorial", [] );

	var MainController = function($scope, $http){

		var onComplete = function(response){
			$scope.user = response.data;
		};

		var onError = function(reason){
			$scope.error = reason.statusText || "Request Failed";
		};

		$http.get("https://api.github.com/users/tjworkaccount")
			.then(onComplete, onError);

		$scope.message = "Success";
	};

	app.controller('MainController', MainController);
}());