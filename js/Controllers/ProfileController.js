/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");

var ProfileController=function($scope,$location,$timeout, AuthenticationService){

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
	// code snippet to reload DOM starts
	$scope.$on('$viewContentLoaded', () => {
		  $timeout(() => {
		    componentHandler.upgradeAllRegistered();
		  })
		});
// code snippet to reload DOM ends here
};
app.controller("ProfileController",ProfileController);