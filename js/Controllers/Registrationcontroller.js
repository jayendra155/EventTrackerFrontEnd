var app=angular.module("EventTracker");
var RegistrationController=function($scope,$http,$location){
	console.log("LoginController");
	console.log(JSON.stringify($scope.user))
	$scope.appName="Event Tracker";
	console.log($scope);
	$scope.register=function(){
		$http.get("http://localhost:8081/EventTracker/register.html?username="+$scope.user.username+"&password="+$scope.user.password)
		.then(function success(result){
			console.log("User registered")
		},function failure(){
			console.log("Registration failed")
		});
	}
}
app.controller("RegistrationController",RegistrationController);