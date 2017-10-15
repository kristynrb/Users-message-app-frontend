const app = angular.module('OmniApp', []);

app.controller('MyController', ['$http', function($http){
    this.foo = "bar";
    const controller = this;

    this.createUser = function(){
      console.log("I'm inside createUser");
      $http({
        method: 'POST',
        url: 'http://localhost:3000/users/',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(
        function(response){
          console.log(response);
          console.log(req.body);
      }, function(){
          console.log('error');
      });
    }
}]);
