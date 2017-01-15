angular.module('app.weather')
.service('weatherService', weatherService)

function weatherService($http, api) {
	var self = this

	self.getSampleData = function() {
		return $http.get(api.sampleUrl)
	}

	self.getWeatherByCityName = function(city) {
		return $http.get(api.url + 'q=' + city + '&units=metric' + '&' + api.key)
	}
}
