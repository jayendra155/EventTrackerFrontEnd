var app=angular.module("EventTracker");
app.service("checkStrength",function(){
	var passwordElement=document.getElementById('password');
    var password=passwordElement.value;
    if(password.length>=8)
    {
         if(/[A-Z]/.test(password)){
         if(/[0-9]/.test(password) ){
             if( /[!@#\$%^&*()_]/.test(password))
               {
                    var cP=document.getElementById('confirmPassword');
                    cP.disabled=false;
               }
         }
     }
    }
});