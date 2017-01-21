## Input Bindings: '<', '@'

- Passing data down to the child component

```
bindings: {
  person: '<',          // one-way binding
  comment: '@',         // special case: string literals
  myTitle: '<'          // alternative: double quoted strings
}

<people-detail person="$ctrl.person" comment="Just some comment" my-title="'Mentor'">
```
