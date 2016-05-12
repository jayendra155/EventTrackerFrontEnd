/**
 * http://usejsdoc.org/
 */
(function() {

	var app = angular.module("EventTracker", [ 'ngRoute' ]);

	app.config(function($routeProvider) {
		$routeProvider
		.when("/login" ,{
			templateUrl: "pages/login.html",
			controller: "LoginController"
		})
		.when("/signup",{
			templateUrl : "pages/register.html",
			controller : "RegistrationController"
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