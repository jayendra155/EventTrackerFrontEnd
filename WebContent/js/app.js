/**
 * http://usejsdoc.org/
 */
(function() {

	var app = angular.module("EventTracker", [ 'ngRoute' ]);

	app.config(function($routeProvider) {
		$routeProvider
		.when("login" || 'signin',{
			templateUrl: "login.html",
			controller: "LoginController"
		})
		.when("/main", {
			templateUrl : "pages/hello.html",
			controller : "HelloController"
		})
		.when("/", {
			templateUrl : "pages/home.html",
			controller : "HomeController"
		})
		.otherwise({
			templateUrl: "pages/error.html"
		});
	});

}());