angular.module('app.weather')
.component('weather', {
  templateUrl: 'app/weather/weather.component.html',
  controller: weatherController,
  controllerAs: 'ctrl'
})

function weatherController(weatherService) {
	var self = this

	self.cityInput = ''
	self.name = ''
	self.main = ''
	self.description = ''
	self.temperature = ''

	self.getWeather = function() {
		weatherService.getWeatherByCityName(self.cityInput).then(function(response) {
			self.name = response.data.name
			self.main = response.data.weather[0].main
			self.description = response.data.weather[0].description
			self.temperature = response.data.main.temp
		}).catch(function(error) {
			console.log(error)
		})
	}
}