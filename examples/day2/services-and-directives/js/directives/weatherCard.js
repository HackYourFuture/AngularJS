function weatherCard() {
    return {
        restrict: 'EA',
        scope: {
            weather: '='
        },
        template: `<div class="row">
                <div class="col s12">
                  <div class="card grey lighten-3">
                    <div class="card-content">
                      <span class="card-title">{{ weather.city }}</span>
                      <h4>{{ weather.main }}</h4>
                      <p> {{ weather.description }}</p>
                      <p> {{ weather.temperature }}</p>
                    </div>
                  </div>
                </div>
              </div>`
    };
}
