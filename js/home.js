Parse.initialize("xmmq0Y2Sl1tPDOm3aXpbjPKiRefUZvfvnq3ej7FK", "FKE4KYeMgFNINd81epnasSGJ4qBfx1E80dyJeduy");

if (!Parse.User.current()) {
    window.location.href = "index.html";
}

var home = angular.module('home', []);

home.controller("homeCtrl",function($scope) {
	/* Welcome message */
	Parse.Cloud.run("getfirstName", null)
		.then(function(firstName){
			$scope.name = firstName;
			$scope.$digest();
		});

	$scope.logOut = function() {
		Parse.User.logOut();
		window.location.href = "index.html";
	}

});