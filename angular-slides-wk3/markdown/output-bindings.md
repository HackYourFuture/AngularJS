## Output Binding: '&'

- Passing events up to the parent controller

```
angular.module('app.people')
    .component('peopleList', {
        templateUrl: 'app/people/list/list.component.html',
        controller: peopleListController,
        bindings: {
            onClick: '&'
        }
    })

<li ng-repeat='person in $ctrl.people'>
    {{ person.name }}
    <button ng-click="$ctrl.onClick({person: person})">see</button>
</li>

...

// parent component

<people-list on-click="$ctrl.onClick(person)"></people-list>

```