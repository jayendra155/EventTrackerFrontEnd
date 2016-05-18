/**
 * http://usejsdoc.org/
 */
var app=angular.module("EventTracker");

var LoginController=function($scope,$http,$location,$timeout, AuthenticationService){
// code snippet to reload DOM starts
	$scope.$on('$viewContentLoaded', () => {
		  $timeout(() => {
		    componentHandler.upgradeAllRegistered();
		  })
		});
// code snippet to reload DOM ends here
	if(!AuthenticationService.isLoggedIn())
	{console.log('No user is logged in')}
	else 
		{
		$location.path('/profile');
		console.log("Is user logged in : "+AuthenticationService.isLoggedIn());
		}
	console.log("LoginController");
	//console.log(JSON.stringify($scope.user))
	$scope.appName="Event Tracker";
	console.log($scope);
	console.log($location);
	$scope.login=function(){
		console.log('login method called' + "\t" + JSON.stringify($scope.user));
		if($scope.user.username==='jayendra155')
		{
			console.log('username matched')
			if($scope.user.password==='A!1aaaaa'){
				console.log('password matched')
				AuthenticationService.setUser($scope.user);
				$location.path('/profile');
			}
		}
	}
// $scope.register=function(){
// $http.get("http://localhost:8081/EventTracker/register.html?username="+$scope.user.username+"&password="+$scope.user.password)
// .then(function success(result){
// console.log("User registered")
// },function failure(){
// console.log("Registration failed")
// });
// }
};
app.controller("LoginController",LoginController);