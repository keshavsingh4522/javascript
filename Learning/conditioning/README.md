# Conditioning

The purpose of conditioning is to tell the program which block of code can be executed. In javascript there are three kinds of conditioning, namely:

1. `if`

In the javascript programming language there is a way in which we can execute code, if the conditions we specify are met (`true`), namely by using the if statement, usually the conditions in the if statement use the comparison operator or logical operator. the code inside the if statement will be executed only if the condition returns `true`.

for example:

```js
if (true) {
  console.log("This code must be executed");
}
```

2. `else`

Javascript also has a way to execute code if the specified condition is not met (`false`) by using the else statement. If the code in the if is not executed because the condition is not met or returns false, then the code in the else block will be executed.

for example:

```js
if (false) {
  console.log("This code will never run");
} else {
  console.log("This code must be executed");
}
```

3. `else if`

There is another method to perform sequential checking, namely the else if. If the first if block is false, then the code will check with the second condition in the else if block. If the second condition evaluates to true, the else if block will be executed.

for example:

```js
const date = 10;

if (date < 5) {
  console.log("This code will never run");
} else if (date > 8) {
  console.log("This code must be executed");
} else {
  console.log("This code will never run");
}
```

4. `switch case`

There is another alternative to check sequentially, namely with a switch case. We can determine which variable we will check, then add some cases below it to check the contents of the variable that we specified in the switch earlier. We can also provide a default condition as well as the else above.

for example:

```js
const fruit = "Oranges";

switch (fruit) {
  case "Apple":
    console.log("This code will never run");
    break;
  case "Pineapple":
    console.log("This code will never run");
    break;
  default:
    console.log("This code must be executed");
    break;
}
```

Lihat kode lengkapnya [disini](conditional.js).
