angular.module('myControllers', [])
.controller('myController', ['$scope', myController]);

function myController($scope) {

  $scope.message = 'Is there life on Mars?';
  $scope.display = true;
}
