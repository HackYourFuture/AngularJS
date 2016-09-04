angular.module('animalsControllers', [])
.controller('animalsController', ['$scope', myController]);

function myController($scope) {

  $scope.animals = [
    {
      name: 'felix',
      specie: 'cat',
      noise: 'miau'
    },
    {
      name: 'pluto',
      specie: 'dog',
      noise: 'guau'
    },
    {
      name: 'babe',
      specie: 'pig',
      noise: 'oink'
    },
    {
      name: 'donald',
      specie: 'duck',
      noise: 'quak'
    }
  ];

  $scope.rename = function(index, newName) {
    $scope.animals[index].name = newName;
    $scope.newName = '';
  };

  $scope.cuddle = function(index) {
    alert($scope.animals[index].noise);
  };
}
