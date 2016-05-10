/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");
var HomeController=function($scope,$location){
	$scope.move=function(){
		console.log("inside move");
		console.log($location);
		$location.path("/main");
	}
}
app.controller("HomeController",HomeController);