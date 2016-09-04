function country($http) {

  var URL = 'https://restcountries.eu/rest/v1/lang/es';

  this.getCountries = function () {
    return $http.get(URL);
  };
}
