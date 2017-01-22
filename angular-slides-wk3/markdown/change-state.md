## Changing Router State

```
//  url: '/person/:id'

<button ui-sref="person({id: person.id})">see</button>

<a ui-sref="person({id: person.id})">see</a>

<a ng-href="person/{{id}}">see</a>

function myController($state) {
    var vm = this

    vm.onClick = function(id) {
        $state.go('person', {id: id})
    }
}
```
