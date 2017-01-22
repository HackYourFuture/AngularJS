angular.module('app.people')
    .component('people', {
        templateUrl: 'app/people/people.component.html',
        controller: peopleController
    })

function peopleController() {
    var vm = this;

    vm.person = null;

    vm.onClick = function(person) {
        vm.person = person;
    }
}