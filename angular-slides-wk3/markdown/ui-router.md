## AngularUI Router

```
angular.module('app', ['ui.router', 'app.people'])

...

angular.module('app.people')
    .config(routing)

function routing($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            component: 'peopleList'
        })
        .state('person', {
            url: '/person/:id',
            component: 'personDetail'
        })
}

```