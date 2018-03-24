# BINARY SEARCH TREE
New nodes are placed according to value.  
The left child of a node will always have a lesser value.
The right child will always have a greater value.
___
![](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/insertEx.bmp)
___
### Starter Code: 
``` javascript
function BSTnode() {
	var protected_values = {
		value: null,
		rightChild: null,
		leftChild: null
	}; 
	
	setRightChild(_Rchild) {
		this.rightChild =  _Rchild;
	}.bind(protected_values);

	setLeftChild(_Lchild) {
		this.leftChild =  _Lchild;
	}.bind(protected_values);

	getRightChild() {
		return  this.rightChild;
	}.bind(protected_values);

	getLeftChild() {
		return this.leftChild;
	}.bind(protected_values);

	setValue(_value) {
		this.value =  _value;
	}.bind(protected_values);

	getValue() {
		return this.value;
	}.bind(protected_values);

	return {
		setRightChild,
		setLeftChild,
		getRightChild,
		getLeftChild,
		setValue,
		getValue
	};
};

// each parent can only have two children
var BST = {
	
	topNode: null;
	
	addNode(_newValue) {
		// place this node where it belongs
		// greater values go right, lesser to the left
	}; 
	removeNode(_value) {
		// remove the first node with value _value
		// be sure to reset children !!
	};
	findValue(value) {
		// search the tree for that value
		// remember lesser values are to the right, greater to the left
		// try drawing this on paper first
		return node
	}
	// any helper methods?
};
```
___
### Assignments:
0. Make it work.

___ 
### Resources  
* [bst](https://khan4019.github.io/front-end-Interview-Questions/bst.html)
    	https://github.com/tivrama/DataStructures
	    https://github.com/mgechev/javascript-algorithms/tree/master/src/data-structures

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>