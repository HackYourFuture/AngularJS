function animalsController($scope, animals) {
  $scope.animals;

  animals.getAll().then(function(response) {
    $scope.animals = response.data;
  }, function(error) {
    console.error(error);
  });
}
