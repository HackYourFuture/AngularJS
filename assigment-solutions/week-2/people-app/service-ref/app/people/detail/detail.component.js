angular.module('app.people')
    .component('peopleDetail', {
        templateUrl: 'app/people/detail/detail.component.html',
        controller: personController,
    })

function personController(peopleService) {
    var vm = this
    vm.person = peopleService.person
}