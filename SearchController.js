(function(){

	var app = angular.module("firstTutorial");

	var SearchController = function($scope, $location){

		$scope.search = function(username){
			$location.path("/user/" + username);
		};

		$scope.username = "tjworkaccount";
	};
	
	app.controller('SearchController', SearchController);
}());