function myController($scope) {
  $scope.message = 'hello';
  $scope.name = 'HYF';

  $scope.display = true;

  $scope.someObject = {
    name: 'apple',
    fruit: true
  };
  $scope.someOtherObject = {
    name: 'table',
    fruit: false
  };

  $scope.cities = [
    {
      displayName: 'Amsterdam',
      name: 'Amsterdam',
      region: 'North Holland',
      button: 'say region'
    },
    {
      displayName: 'Nijmegen',
      name: 'Nijmegen',
      region: 'Gelderland',
      button: 'say region'
    },
  ];

  $scope.sayRegion = function(index) {
    $scope.cities[index].button = $scope.cities[index].region;
  };

  $scope.addCity = function() {
    $scope.cities.push({
      displayName: $scope.newCity,
      name: $scope.newCity,
      region: 'Gelderland',
      button: 'say region'
    });
  };
};
