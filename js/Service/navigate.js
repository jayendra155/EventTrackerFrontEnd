var app=angular.module("EventTracker");
app.service("navigate",function(location){
	$location.path(location);
});