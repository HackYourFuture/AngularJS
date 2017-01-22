## Accessing URL parameters

```
angular.module('app.people')
    .component('personDetail', {
        templateUrl: 'app/people/detail/detail.component.html',
        controller: peopleDetailController
    })

function peopleDetailController($stateParams, peopleService) {

    var vm = this

    peopleService.getById($stateParams.id)
        .then(function(person) {
            vm.person = person
        })
}

```