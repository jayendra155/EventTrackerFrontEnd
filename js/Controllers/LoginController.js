/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");

var LoginController=function($scope,$http,$location,$timeout){
//	code snippet to reload DOM starts
	$scope.$on('$viewContentLoaded', () => {
		  $timeout(() => {
		    componentHandler.upgradeAllRegistered();
		  })
		});
//	code snippet to reload DOM ends here
	console.log("LoginController");
	console.log(JSON.stringify($scope.user))
	$scope.appName="Event Tracker";
	console.log($scope);
	console.log($location);
	$scope.register=function(){
		$http.get("http://localhost:8081/EventTracker/register.html?username="+$scope.user.username+"&password="+$scope.user.password)
		.then(function success(result){
			console.log("User registered")
		},function failure(){
			console.log("Registration failed")
		});
	}
}
app.controller("LoginController",LoginController);