angular.module('app.user')
    .component('profile', {
        templateUrl: 'app/user/profile-creator/profile.component.html',
        controller: profileController
    })

function profileController(userService) {
	var vm = this

	vm.editing = true;
	vm.user = {
		name: '',
		surname: '',
		role: '',
		pictureUrl: '',
		linkedInUrl: '',
	}

	vm.onSubmit = function() {
		vm.user.id = vm.user.name + vm.user.surname
		userService.postUser(vm.user)
		vm.editing = false;
	}
}