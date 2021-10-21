// symbol, create unique identifiers for objects
function loc() {
  const x = Symbol("x");
  const y = Symbol("x");
  if (!(x === y)) {
    console.log(`symbol object(of same value) (x === y) is false`);
  }
}
loc();
