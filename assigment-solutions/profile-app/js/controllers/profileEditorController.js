function profileEditorController(profile) {
	var vm = this

	vm.profile = profile
	vm.hobbyNameInput = ''
	vm.editing = true

	vm.addHobby =  function() {
		vm.profile.addHobby(vm.hobbyNameInput)
		vm.hobbyNameInput = ''
	}

	vm.removeHobby = function(index) {
		vm.profile.removeHobby(index)
	}
}