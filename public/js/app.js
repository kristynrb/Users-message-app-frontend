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
    templateUrl: 'views/public-messages.html',
    controller: function(){
      controller = this;
      this.publicMessages = "no public messages yet";

      this.getPublicMessages = function(){
        controller.publicMessages = "getPublicMessages was clicked";
       $http({
           method:'GET',
           url:'localhost:3000/messages'
       }).then(
           function(response){
               controller.publicMessages = response.data;
           },
           function(error){
           }
       );
      }
      this.getPublicMessages();
    },
    controllerAs: 'publicMessageCtrl'
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
