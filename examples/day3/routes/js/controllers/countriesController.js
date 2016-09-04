function countriesController($scope, $location, $routeParams, country) {

  $scope.countries;
  $scope.country;

  if ($location.path().includes('detail')) {

    var name = $routeParams.name;

    country.getCountry(name).then(function (response) {

      $scope.country = response.data;
    }, function (error) {

      console.error(error);
    });

  } else {
    country.getCountries().then(function (response) {

      $scope.countries = response.data;
    }, function (error) {

      console.error(error);
    });
  }
}
