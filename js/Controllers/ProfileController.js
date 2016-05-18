/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");

var ProfileController=function($scope,$location, AuthenticationService){

	if(!AuthenticationService.isLoggedIn())
		{
			console.log('access denied');
			$location.path('/login');
		}
	else
		{
			$scope.user=AuthenticationService.isLoggedIn();
			console.log('access granted');
		}
	console.log('Profile invoked');
};
app.controller("ProfileController",ProfileController);