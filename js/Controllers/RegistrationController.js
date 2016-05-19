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
		// $http.post("http://eventtracker.cfapps.io/register.html",$scope.user)
		$http.post("http://localhost:8081/EventTracker/register.html",$scope.user)
		.then(function success(result){
			console.log("User registered")
		},function failure(reason){
			console.log("Registration failed \t" + JSON.stringify(reason))
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
	            	 	$scope.passwordStrength='&#10003 ';
	            	 	var pS=document.getElementById('passwordStrength');
	            	 	pS.className="mdl-color-text--green-800";
	                    var cP=document.getElementById('confirmPassword');
	                    cP.disabled=false;
	               }
	         }
	     }
	         
	    }
	    else 
       	 {
	    	$scope.passwordStrength="Invalid";
	    	var pS=document.getElementById('passwordStrength');
    	 	pS.className="mdl-color-text--red-A700";
	    	var cP=document.getElementById('confirmPassword');
            cP.disabled=true;
       	 }
	}
	$scope.confirmPassword=function(){
		var password=document.getElementById('password').value;
		var confirmPasswordElement=document.getElementById('confirmPassword');
		$scope.confirmPasswordMatch="";
		if(confirmPasswordElement.value === password)
			 {
			confirmPasswordStrength.className= "mdl-color-text--green-800";
			
			 }
		else 
			confirmPasswordStrength.className="mdl-color-text--red-A700";
	}
};
app.controller("RegistrationController",RegistrationController);
