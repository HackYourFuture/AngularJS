## Two-way Binding: '='

- Two-way sharing of data between child and parent component
- Changes in child component are reflected in the parent component
- ... and vice-versa
- Do not use without good reason: performance-wise expensive (watchers)

```
bindings: {
    item: '='
}
```