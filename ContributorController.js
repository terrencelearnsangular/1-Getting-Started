(function(){
	var app = angular.module("firstTutorial");

	var ContributorController = function($scope, $routeParams, github){
		
		var onContributorComplete = function(data){
			$scope.repo = data;
		};

		var onContributorError = function(reason){
			$scope.error = reason;
		};

		var username = $routeParams.username;
		var reponame = $routeParams.reponame;

		github.getContributors(username, reponame).then(onContributorComplete, onContributorError);
	};

	app.controller('ContributorController', ContributorController);
}());