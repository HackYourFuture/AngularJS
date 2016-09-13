function weather($http) {
  var URL = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&APPID=73964a3da4fcdeb23c06e99ac6e6e45d';
  var API = 'http://api.openweathermap.org/data/2.5/weather?';
  var API_PARAMETERS = '&units=metric&APPID=73964a3da4fcdeb23c06e99ac6e6e45d';

  this.getData = function() {
    return $http.get(URL);
  };

  this.getDataByCity = function(city) {
    return $http.get(API + 'q=' + city + API_PARAMETERS);
  };
}
