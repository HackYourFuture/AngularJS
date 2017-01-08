function iAmAController(data) {
	var vm = this;

	vm.hello = 'Hello'
	vm.name = vm.name

	vm.cities = data.cities
	vm.newCity = ''

	vm.addCity = function() {
		data.addCity(vm.newCity)
	}
}