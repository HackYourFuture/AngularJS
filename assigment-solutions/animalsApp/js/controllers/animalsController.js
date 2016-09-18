function animalsController($scope, animals) {
  $scope.animal;
  $scope.animals;

  animals.getOne().then(function(response) {
    $scope.animal = response.data;
  }, function(error) {
    console.error(error);
  });

  animals.getAll().then(function(response) {
    $scope.animals = response.data;
  }, function(error) {
    console.error(error);
  });
}
