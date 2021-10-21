*Symbol : unique identifiers for objects*

- example
```
function loc() {
  const x = Symbol("x");
  const y = Symbol("x");
  if (!(x === y)) {
    console.log(`symbol object(of same value) (x === y) is false`);
  }
}
loc();
```
