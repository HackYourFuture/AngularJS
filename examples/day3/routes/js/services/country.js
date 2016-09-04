function country($http) {

  var URL_ALL = 'https://restcountries.eu/rest/v1/all';
  var URL_ONE = 'https://restcountries.eu/rest/v1/name/';

  this.getCountry = function (countryName) {
    return $http.get(URL_ONE + countryName);
  };

  this.getCountries = function () {
    return $http.get(URL_ALL);
  };
}
