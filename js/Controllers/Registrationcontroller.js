var app=angular.module("EventTracker");
var RegistrationController=function($scope,$http,$location,$timeout){
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
	$scope.register=function(){
		$http.get("http://localhost:8082/EventTracker/register.html?username="+$scope.user.username+"&password="+$scope.user.password)
		.then(function success(result){
			console.log("User registered")
		},function failure(){
			console.log("Registration failed")
		});
	}
	
	$scope.checkPassword=function(){
		var passwordElement=document.getElementById('password');
	    var password=passwordElement.value;
	    if(password.length>=8 && password.length<=16)
	    {
	         if(/[A-Z]/.test(password)){
	         if(/[0-9]/.test(password) ){
	             if( /[!@#\$%^&*()_]/.test(password))
	               {
	            	 	$scope.passwordStrength='\&\#10003 ';
	                    var cP=document.getElementById('confirmPassword');
	                    cP.disabled=false;
	               }
	         }
	     }
	         
	    }
	    else
       	 {
	    	$scope.passwordStrength="Invalid";$scope.passwordStrength="Invalid";
	    	var cP=document.getElementById('confirmPassword');
            cP.disabled=true;
       	 }
	}
};
app.controller("RegistrationController",RegistrationController);