## Angular Filters

- Angular filters transform data before it is processed by a component
- They can help to reduce the logic in controllers
- Most often used in HTML, but can also be used in code (`$filter`)
- Can roll your own
- Examples of standard Angular filters:

```
<ul>
    <li ng-repeat="person in $ctrl.people | limitTo:$ctrl.limit">
        {{ person.name }}
    </li>
</ul>

...

     <li ng-repeat="person in $ctrl.people | orderBy:'name'">
     <li ng-repeat="person in $ctrl.people | orderBy:'name' | limitTo:5">

...

    <input type="text" ng-model="$ctrl.filterText">
    <li ng-repeat="person in $ctrl.people | filter:{$: $ctrl.filterText}">
...

```