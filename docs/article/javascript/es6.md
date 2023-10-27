# :computer: ES6


```javascript
var street = user.address && user.address.street;

var fooInput = myForm.querySelector('input[name=foo]')
var fooValue = fooInput ? fooInput.value : undefined

// 简化
var street = user.address?.street
var fooValue = myForm.querySelector('input[name=foo]')?.value
```

