angular.module('app.people')
    .component('peopleList', {
        templateUrl: 'app/people/list/list.component.html',
        controller: peopleListController,
        bindings: {
            onClick: '&'
        }
    })

function peopleListController(peopleService) {
    var vm = this;

    peopleService.getAll().then(function(people) {
        vm.people = people;
    }).catch(function(error) {
        console.log(error)
    })
}