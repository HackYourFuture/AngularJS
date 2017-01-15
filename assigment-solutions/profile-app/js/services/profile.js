function profile() {
	var vm = this

	vm.name = ''
	vm.surname = ''
	vm.hobbies = []

	vm.addHobby =  function(name) {
		var hobby = { name: name, favourite: false }
		vm.hobbies.push(hobby)
	}

	vm.removeHobby = function(index) {
		vm.hobbies.splice(index, 1)
	}
}