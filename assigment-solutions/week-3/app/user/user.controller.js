function userController(userService, $stateParams) {
	var vm = this

	vm.person = {}
	vm.people = []

	if(userService.people.length == 0) {
		userService.getAll().then(function(response) {
			userService.people = response
			vm.people = userService.people
			vm.person = response.filter(function(person) {
				return person.id == $stateParams.id
			})[0]
		}).catch(function(error) {
			// stuff to catch error
		})
	} else {
		vm.people = userService.people
		vm.person = userService.people.filter(function(person) {
			return person.id == $stateParams.id
		})[0]
	}
}