angular.module('countriesApp', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'countriesController',
    templateUrl: '../pages/countries-list.html',
  })
  .when('/asia', {
    controller: 'asiaController',
    templateUrl: '../pages/countries-list.html',
  })
  .when('/africa', {
    controller: 'africaController',
    templateUrl: '../pages/countries-list.html',
  })
  .when('/europe', {
    controller: 'europeController',
    templateUrl: '../pages/countries-list.html',
  })
  .when('/americas', {
    controller: 'americasController',
    templateUrl: '../pages/countries-list.html',
  })
  .when('/about', {
    templateUrl: '../pages/about.html',
  })
	.when('/detail/:name', {
    controller: 'countriesController',
    templateUrl: '../pages/country.html',
  })
	.otherwise({
    controller: 'countriesController',
    templateUrl: '../pages/countries-list.html',
  });
})
.controller('asiaController', ['$scope', '$location', asiaController])
.controller('africaController', ['$scope', '$location', africaController])
.controller('europeController', ['$scope', '$location', europeController])
.controller('americasController', ['$scope', '$location', americasController])
.controller('countriesController', ['$scope', '$location', '$routeParams', 'country', countriesController])
.service('country', country);
