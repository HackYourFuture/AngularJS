function weather($http) {
    var API_KEY = '73964a3da4fcdeb23c06e99ac6e6e45d';
    var units = 'metric';

    this.getWeather = function () {
        return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&APPID=73964a3da4fcdeb23c06e99ac6e6e45d');
    };

    this.getWeatherByCity = function (city) {
        return $http.get('http://api.openweathermap.org/data/2.5/weather?q='
        	+ city + '&units=' + units + '&APPID=' + API_KEY);
    };
}
