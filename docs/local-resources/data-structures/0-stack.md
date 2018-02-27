# STACK
___
![](http://static.flickr.com/1350/1490540282_c96252968c.jpg)
___
### Starter Code:
```javascript
var stack = {
	data: [],
	push: function(newValue) {
		this.data.push(newValue);
	},
	pop: function() {
		return this.data.pop();
	}
};
```
___
### Assignments:
1.  rewrite this using a factory instead of an object literal
2.  refactor your factory to use an object instead of an array