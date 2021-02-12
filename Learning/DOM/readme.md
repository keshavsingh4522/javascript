### Selecting Element
- Get the element with specific ID
```javascript
document.getElementById("some-ID")
```

- Get the elements with specific class name
```javascript
document.getElementsByClassName("classname")
```

- Get the elements with specified HTML tag as
```javascript
document.getElementsByTagName("html tag")
```

- Get the first element matching specified selector
```javascript
document.querySelector(".main-nav a")
```

- Get the All elements matching specified selector
```javascript
document.querySelectorAll(".main-nav a")
```

### Access and change element
- get id of tag/element
```javascript
document.querySelector('div').id
```

- change id / create id
```javascript
document.querySelector('div').id = 'PK'
```

- what inside tag/element
```javascript
document.querySelector('div').innerHTML
```

- change inside element
```javascript
document.querySelector('div').innerHTML = 'hi how are you'
document.querySelector('div').innerHTML = '<h4> hi how are you</h4>'

```

- all with element
```javascript
document.querySelector('div').outerHTML
```

- get classes of element in form of array
```javascript
document.querySelector('div').classList
// classList is readonly we cannot change as we changed id.
// for changing class use methods
```


**[more info](https://developer.mozilla.org/en-us/docs/Web/API/Element)**


### Access and change class
- 1. Access and change class
```javascript
let el = document.getElementById('item');

if (el.className === 'active'){
  el.className = 'inactive';
} else {
  el.className = 'active';
}
```

- 2. method using classList
```javascript
const div = document.createElement('div');
div.className = 'foo';

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
```

**[more info](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)**


### Access and change attributes
- hasAttribute()
```javascript
//return true/false
document.querySelectorAll('a')[0].hasAttribute('id')
document.querySelectorAll('a')[0].hasAttribute('id_')
document.querySelectorAll('a')[0].hasAttribute('ID')
document.querySelectorAll('a')[0].hasAttribute('class')
document.querySelectorAll('a')[0].hasAttribute('href')
```

- getAttribute()
```javascript
//return value of attribute
document.querySelectorAll('a')[0].getAttribute('id')
```

- setAttribute()
```javascript
// set the attribute
document.querySelectorAll('a')[0].getAttribute('id','PK')
```

- removeAttribute()
```javascript
// set the attribute
document.querySelectorAll('a')[0].getAttribute('id')
```

### Add DOM Elements
- [click here](create_DOM/)

### Add inline css to element
- Add any css propert to any element via Javascript using the **style** attribute

- **Method 1.1** one property at a time
```javascript
document.querySelector('.main a').style.color='red';
document.querySelector('.main a').style.backgroundColor='black';
document.querySelector('.main a').style.border='1px solid violet;';
```
- **Method 1.2** more propert at a time
```javascript
document.querySelector('.main a').style.cssText='color:red;background-color:black;border:1px solid violet;';
```

- **Method 2.1** one property at a time
```javascript
document.querySelector('.main a').setAttribute(style,'color:red;')
```

- **Method 2,2** more property at a time
```javascript
document.querySelector('.main a').setAttribute(style,'color:red;background-color:black;border:1px solid violet;');
```