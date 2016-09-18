function animalCard() {
  return {
      restrict: 'EA',
      scope: {
              animal: '='
            },
      template: `<div class="card">
                    <div class="card-info">
                        <h3>{{ animal.name }}</h3></br>
                        <span>{{ animal.info }}</span>
                    </div>
                    <img ng-src="{{ animal.image }}"></span>
                </div>`
    };
}
