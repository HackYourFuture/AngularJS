function weather($http) {
    var URL = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&APPID=73964a3da4fcdeb23c06e99ac6e6e45d';

    this.getWeather = function () {
        return $http.get(URL);
    };
}