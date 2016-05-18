var app = angular.module("EventTracker");
app.factory("AuthenticationService", function() {
	var user=null;
	return {
		setUser : function(aUser) {
			console.log(JSON.stringify(aUser)+"AuthenticationService");
			user=aUser;
		},
		isLoggedIn : function() {
			return(user)?user:false;
		}
	}
});