angular.module('quoteControllers', [])
.controller('quoteController', ['$scope', myController]);

function myController($scope) {

  $scope.quote = {
    quote: 'Dont believ everything you read on the internet just because there is a picture with a quote next to it',
    author: 'Abraham Lincoln',
    remarked: true
  };
}
