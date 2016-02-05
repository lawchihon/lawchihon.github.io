Parse.initialize("xmmq0Y2Sl1tPDOm3aXpbjPKiRefUZvfvnq3ej7FK", "FKE4KYeMgFNINd81epnasSGJ4qBfx1E80dyJeduy");

var homePage = "home.html";

if (Parse.User.current()){
     window.location.href = homePage;
}

var index = angular.module('index', []);

index.controller("indexCtrl",function($scope) {

     $scope.logIn = function() {
          /*
          Parse.Cloud.run('logIn', {    logInEmail: $scope.logInEmail, 
                                        logInPassword: $scope.logInPassword     }, {
               success: function() {
                    window.location.href = "home.html";
               },
               error: function() {
                    // The login failed. Check error to see why.
                    alert("Incorrect email or password detected. \nPlease try again :(");
               }
          });
          */
          Parse.User.logIn($scope.logInEmail, $scope.logInPassword, {
               success: function(user) {
                    window.location.href = homePage;
               },
               error: function(user, error) {
                    alert("Incorrect email or password detected. \nPlease try again :(");
               }
          });
          
     }

     $scope.signUp = function(){
          //Check if the first name is filled
          if (!$scope.signUpFirstName)
          {
               return;
          }

          //Check if the last name is filled
          if (!$scope.signUpLastName)
          {
               return;
          }

          //Check if the email is filled
          if (!$scope.signUpEmail)
          {
               return;
          }

          //Check if the password is filled
          if (!$scope.signUpPassword)
          {
               return;
          }

          Parse.Cloud.run('signUp', {   firstName: $scope.signUpFirstName, 
                                        lastName: $scope.signUpLastName, 
                                        email: $scope.signUpEmail, 
                                        password: $scope.signUpPassword    }, {
               success: function(result) {
                    //Since the account is created, automatically login
                    $scope.logInEmail = $scope.signUpEmail;
                    $scope.logInPassword = $scope.signUpPassword;

                    $scope.logIn();
               },
               error: function(error) {
                    alert(error.message);
               }
          });
     }
});

