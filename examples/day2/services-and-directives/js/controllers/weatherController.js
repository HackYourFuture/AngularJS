function weatherController($scope, weather) {

    $scope.weather;

    weather.getWeather().then(function (response) {

        $scope.weather = {
            city: response.data.name,
            main: response.data.weather[0].main,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp
        };
    }, function (error) {

        console.error(error);
    });
}