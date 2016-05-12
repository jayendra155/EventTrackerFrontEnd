/**
 * http://usejsdoc.org/
 */
var app = angular.module("EventTracker");
var HelloController = function($scope,$http) {
	$scope.registerEvent=function(){
		console.log($scope.events);
		$scope.x=Hello;
		$scope.x();
		$http.post('http://localhost:8081/EventTracker/demo.html', $scope.events)
		.success(function(msg){
			if(msg==="true")
				console.log("data sent");
			console.log("success");
			console.log(msg);
		})
	}
}
function Hello(){
	console.log('hello called');
}
app.controller("HelloController", HelloController);