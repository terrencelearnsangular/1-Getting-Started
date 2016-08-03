(function(){

	var app = angular.module("firstTutorial", [] );

	var MainController = function($scope, $http){

		var onUserComplete = function(response){
			$scope.user = response.data;
			$scope.userError = null;

			$http.get($scope.user.repos_url)
				.then(onReposComplete, onReposError);
		};

		var onUserError = function(reason){
			$scope.userError = reason.statusText || "Request Failed";
			$scope.user = null;
		};

		var onReposComplete = function(response){
			$scope.repos = response.data;
			$scope.reposError = null;
		};

		var onReposError = function(reason){
			$scope.reposError = reason.statusText || "Request Failed";
			$scope.repos = null;
		};

		$scope.search = function(username){
			$http.get("https://api.github.com/users/" + username)
				.then(onUserComplete, onUserError);
		};

		$scope.username = "tjworkaccount";
	};

	app.controller('MainController', MainController);
}());