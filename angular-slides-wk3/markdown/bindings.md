## Component Bindings

- Maps HTML attributes to properties on the component controller, as specified in the component definition.
- Values passed through the attributes are bound to the component controller (`$ctrl`)

```
angular.module('app.people')
    .component('peopleItem', {
        template: '<h4>{{ $ctrl.person.name }}</h4>',
        bindings: {
            person: '<'
        }
    })

...

// parent component: peopleList

<people-item ng-repeat="person in $ctrl.persons" person="person"></people-item>

```