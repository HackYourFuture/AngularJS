angular.module('mainApp', [])
.controller('weatherController', ['$scope', 'weather', weatherController])
.service('weather', weather)
.directive('weatherCard', weatherCard)
