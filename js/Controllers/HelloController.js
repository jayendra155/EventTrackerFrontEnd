/**
 * http://usejsdoc.org/
 */
var app = angular.module("EventTracker");
var HelloController = function($scope,$http) {
	$scope.registerEvent=function(){
		console.log($scope.events);
		$http.post('http://localhost:8081/EventTracker/demo.html', $scope.events)
		.success(function(msg){
			if(msg==="true")
				console.log("data sent");
			console.log("success");
			console.log(msg);
		})
	}
}
app.controller("HelloController", HelloController);