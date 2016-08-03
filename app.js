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
            .otherwise({redirectTo:"/search"});
    });
}());