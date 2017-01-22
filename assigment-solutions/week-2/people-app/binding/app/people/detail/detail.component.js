angular.module('app.people')
    .component('peopleDetail', {
        templateUrl: 'app/people/detail/detail.component.html',
        bindings: {
            person: '<'
        }
    })