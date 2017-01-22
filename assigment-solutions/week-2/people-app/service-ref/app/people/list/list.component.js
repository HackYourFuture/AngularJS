angular.module('app.people')
    .component('peopleList', {
        templateUrl: 'app/people/list/list.component.html',
        controller: peopleController
    })

function peopleController(peopleService) {
    var vm = this

    vm.people = peopleService.list

    peopleService.getAll().then(function(response) {
        peopleService.setList(response.data)
    }).catch(function(error) {
        console.log(error)
    })

    vm.select = function(index) {
        peopleService.setPerson(peopleService.list[index])
    }
}