function weatherController($scope, weather) {

    $scope.city;
    $scope.weather;
    $scope.searched = false;

    $scope.search = function () {
        weather.getWeatherByCity($scope.city).then(function (response) {

            $scope.weather = {
                city: response.data.name,
                main: response.data.weather[0].main,
                description: response.data.weather[0].description,
                temperature: response.data.main.temp
            };

            $scope.searched = true;

        }, function (error) {
            console.error(error);
        });
    };
}
