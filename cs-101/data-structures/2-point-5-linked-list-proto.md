# LINKED LIST with proto 
___
![](http://xenomachina.com/images/linked-list.png)
___
### Starter Code: 
```javascript
function listNode(_value) {
	var new_node = Object.create(listNode.prototype);
	new_node.value = _value;
	return new_node;
};
listNode.prototype.getNext = function() {
									return this.next;
								};
listNode.prototype.setNext = function(nextNode) {
									this.next = nextNode;
								};
listNode.prototype.getValue = function() {
									return this.value;
								};
listNode.prototype.setValue = function(newValue) {
									this.value = newValue;
								};

function linkedList() {
	function addNode(_value) {
		var newNode = new ListNode(_value);
		// place this node where it belongs
	},
	function removeNode(_value) {
		// remove the node with the value _value
		// be sure not to break your list !!
	},
	// a helper method, meaning it's only called within the class
	function findNext(currentNode) {
		// logic
		return nextNode;
	},
	function findValue(value) {
		// find the node with that value, or say it doesn't exist
		return node;
	},
	return {
		firstNode: null,
		addNode,
		removeNode,
		findNext,
		findValue
	}
};
```
___
### Assignments:
0. make it work
1. extend LinkedList to create a stack
2.  extend LinkedList to create a queue

___  
### Resources:  
* [linked lists](http://www.thatjsdude.com/interview/linkedList.html)  
* [another linked list](http://js-algorithms.tutorialhorizon.com)  

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>