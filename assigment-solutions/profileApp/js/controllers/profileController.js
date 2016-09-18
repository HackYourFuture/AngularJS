function profileController($scope) {

  $scope.hobbies = [];
  $scope.editing = true;

  $scope.addHobbie = function(newHobbie) {
    $scope.hobbies.push({
      name: newHobbie,
      favorite: false
    });
    $scope.newHobbie = '';
  };

  $scope.toggleFavorite = function(index) {
    $scope.hobbies[index].favorite = !$scope.hobbies[index].favorite;
    // This is like coding
    // if ($scope.hobbies[index].favorite == true) {
    //   $scope.hobbies[index].favorite = false;
    // } else {
    //   $scope.hobbies[index].favorite = true;
    // }
  };

  $scope.deleteHobbie = function(index) {
    $scope.hobbies.splice(index, 1);
  };
}
