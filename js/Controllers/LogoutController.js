/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");
var LogoutController=function($scope,$location, $timeout, AuthenticationService){
	AuthenticationService.setUser(null);
	$location.path('/login');
}
app.controller("LogoutController",LogoutController);