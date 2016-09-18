angular.module('animalsApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'animalsController',
    templateUrl: '../pages/home.html'
  })
  .when('/details/:name', {
    controller: 'oneAnimalController',
    templateUrl: '../pages/details.html'
  })
  .when('/about', {
    controller: 'animalsController',
    template: 'about'
  });
})
.controller('animalsController', ['$scope', 'animals', animalsController])
.controller('oneAnimalController', ['$scope', '$routeParams', 'animals', oneAnimalController])
.service('animals', animals)
.directive('animalCard', animalCard);
