angular.module('animalsApp', [])
.controller('animalsController', ['$scope', 'animals', animalsController])
.service('animals', animals)
.directive('animalCard', animalCard);
