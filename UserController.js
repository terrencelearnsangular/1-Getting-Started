(function(){
	var app = angular.module("firstTutorial");

	var UserController = function($scope, $log, $routeParams, github){

		var onUserComplete = function(data){
			$scope.user = data;
			$scope.userError = null;
			$log.info("User Found");
			github.getRepos($scope.user).then(onReposComplete, onReposError);
		};

		var onUserError = function(reason){
			$scope.userError = reason.statusText || "Request Failed";
			$scope.user = null;
			$log.info("User Error: " + $scope.userError);			
		};

		var onReposComplete = function(data){
			$scope.repos = data;
			$scope.reposError = null;
			$log.info("User Repositories Found");			
		};

		var onReposError = function(reason){
			$scope.reposError = reason.statusText || "Request Failed";
			$scope.repos = null;
			$log.info("Repository Error: " + $scope.reposError);			
		};

		$scope.username = $routeParams.username;
		$log.info("Search: " + $scope.username);
		github.getUser($scope.username).then(onUserComplete, onUserError);
	};

	app.controller('UserController', UserController);
}());