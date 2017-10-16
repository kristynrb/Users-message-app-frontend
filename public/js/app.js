const app = angular.module('OmniApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({enabled:true});
  $routeProvider.when('/user/new', {
    templateUrl: 'views/registration.html'
  });
  $routeProvider.when('/user/signIn', {
    templateUrl: 'views/sign-in.html'
  });
  $routeProvider.when('/messages/public', {
    templateUrl: 'views/public-messages.html'
  });
  $routeProvider.when('/messages/private', {
    templateUrl: 'views/private-messages.html'
  });
  $routeProvider.when('/messages/new', {
    templateUrl: 'views/new-messages.html',
    controller: function(){
      this.type = "This needs to be changed";
      this.message = ""
    },
      controllerAs: 'messageCtrl'
  });
}]);

// app.controller('MyController', ['$http', function($http){
//     this.foo = "bar";
//     const controller = this;
//
//     this.createUser = function(){
//       console.log("I'm inside createUser");
//       $http({
//         method: 'POST',
//         url: 'http://localhost:3000/users/',
//         data: {
//           username: this.username,
//           password: this.password
//         }
//       }).then(
//         function(response){
//           console.log(response);
//           console.log(req.body);
//       }, function(){
//           console.log('error');
//       });
//     }
// }]);
