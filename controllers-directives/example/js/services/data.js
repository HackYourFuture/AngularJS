function iAmDataService() {
	var vm = this;

	vm.name = ''

	vm.cities = [
		{
			name: 'Amsterdam',
			visited: false,
		},
		{
			name: 'Damascus',
			visited: false,
		},
		{
			name: 'Asmara',
			visited: false,
		},
		{
			name: "Sana'a",
			visited: false,
		},
		{
			name: "Barcelona",
			visited: false,
		},
	]

	vm.addCity = function(newCity) {
		vm.cities.push({
			name: newCity,
			visited: false,
		})
	}
}