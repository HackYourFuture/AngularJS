function weatherCard() {
  return {
    restrict: 'EA',
    controller: 'weatherController',
    template: `<input type="text" ng-model='cityInput' /> <button ng-click="getWeather()">get weather</button>
                  <div class="row">
                      <div class="col s12">
                          <div class="card grey lighten-3">
                              <div class="card-content">
                                  <span class="card-title"> {{ weather.name }}</span>
                                  <h4>{{ weather.weather[0].main }}</h4>
                                  <p>{{ weather.weather[0].description }}</p>
                                  <p>{{ weather.main.temp }}</p>
                              </div>
                          </div>
                      </div>
                  </div>`
  };
}
