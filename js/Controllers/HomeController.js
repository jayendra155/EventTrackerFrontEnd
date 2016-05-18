/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");
var HomeController=function($scope,$location){
	var link=document.getElementById('link_1');
	link.href='Logout';
	link.innerHTML='logout';
	$scope.move=function(){
		console.log("inside move");
		console.log($location);
		$location.path("/main");
	}
}
app.controller("HomeController",HomeController);