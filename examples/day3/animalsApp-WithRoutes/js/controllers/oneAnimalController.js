function oneAnimalController($scope, $routeParams, animals) {
  console.log($routeParams);
  $scope.animal;

  animals.getOne($routeParams.name).then(function(response) {
    $scope.animal = response.data;
  }, function(error) {
    console.error(error);
  });
}
