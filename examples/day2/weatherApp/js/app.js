angular.module('weatherApp', [])
.controller('weatherController', ['$scope', 'weather', weatherController])
.service('weather', weather)
.directive('weatherCard', weatherCard);
