(function(){

	var app = angular.module("firstTutorial", [] );

	var MainController = function($scope, $log, github){

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

		$scope.search = function(username){
			$log.info("Search: " + username);			
			github.getUser(username).then(onUserComplete, onUserError);
		};

		$scope.username = "tjworkaccount";
	};

	app.controller('MainController', MainController);
}());