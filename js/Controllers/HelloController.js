/**
 * http://usejsdoc.org/
 */
var app = angular.module("EventTracker");
var HelloController = function($scope,$http) {
	$scope.registerEvent=function(){
		$http.post('http://localhost:8080/EventTracker/demo', eventName)
		.success(function(msg){
			if(msg===true)
				console.log("data sent");
			console.log("success");
		})
	}
}
app.controller("HelloController", HelloController);