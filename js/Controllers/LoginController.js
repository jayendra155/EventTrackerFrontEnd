/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");
var LoginController=function($scope){
	console.log("LoginController");
	$scope.appName="Event Tracker";
	console.log($scope);
}
app.controller("LoginController",LoginController);