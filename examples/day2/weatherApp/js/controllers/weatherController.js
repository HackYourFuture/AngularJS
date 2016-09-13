function weatherController($scope, weather) {
  $scope.weather;

  $scope.getWeather = function() {
    weather.getDataByCity($scope.cityInput).then(function(response) {
      $scope.weather = response.data;
    }, function(error) {
      console.error(error);
    });
  };
}
