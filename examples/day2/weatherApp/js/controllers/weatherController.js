function weatherController ($scope, weather) {

	$scope.city = ''
	$scope.name = ''
	$scope.main = ''
	$scope.description = ''
	$scope.temperature = ''

	$scope.getWeather = function () {
		weather.getWeatherByCityName($scope.city)
		.then(function (response) {
			$scope.name = response.data.name
			$scope.main = response.data.weather[0].main
			$scope.description = response.data.weather[0].description
			$scope.temperature = response.data.main.temp
		})
		.catch(function (error) {
			console.error(error)
		})
	}
}
