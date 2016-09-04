angular.module('countriesApp', ['angular.filter'])
.controller('countriesController', ['$scope', 'country', countriesController])
.controller('dateController', ['$scope', dateController])
.service('country', country);
