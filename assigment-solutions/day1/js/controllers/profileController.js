function profileController($scope) {

	$scope.newHobby
	$scope.hobbies = []
	$scope.editing = true

	$scope.addHobby = function() {

		var newHobby = {
			name: $scope.newHobby,
			favorite: false,
		}

		if($scope.hobbies.indexOf(newHobby) == -1) {
			$scope.hobbies.push(newHobby)
		}
	}

	$scope.deleteHobby = function(index) {
		$scope.hobbies.splice(index, 1)
	}
}
