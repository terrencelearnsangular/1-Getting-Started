(function(){
	var app = angular.module("firstTutorial", ["ngRoute"] );
    app.config(function($routeProvider){
        $routeProvider
            .when("/search", {
                templateUrl: "search.html",
                controller: "SearchController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/contributor/:username/:reponame", {
            	templateUrl:"contributor.html",
            	controller: "ContributorController"
            })
            .otherwise({redirectTo:"/search"});
    });
}());