/**
 * http://usejsdoc.org/
 */
(function() {

	var app = angular.module("EventTracker", [ 'ngRoute' ]);

	app.config(function($routeProvider , $locationProvider) {
		$routeProvider
		.when("/login" ,{
			templateUrl: "pages/login.html",
			controller: "LoginController"
		})
		.when("/logout" ,{
			templateUrl: "pages/logout.html",
			controller: "LogoutController"
		})
		.when("/signup",{
			templateUrl : "pages/register.html",
			controller : "RegistrationController"
		})
		.when("/register",{
			templateUrl : "pages/register.html",
			controller : "RegistrationController"
		})
		.when("/main", {
			templateUrl : "pages/hello.html",
			controller : "HelloController"
		})
		.when("/profile", {
			templateUrl : "pages/profile.html",
			controller : "ProfileController"
		})
		.when("/home", {
			templateUrl : "pages/home.html",
			controller : "HomeController"
		})
		.when("/", {
			templateUrl : "pages/login.html",
			controller : "LoginController"
		})
		.otherwise({
			templateUrl: "pages/error.html"
		});
	});
	
}());