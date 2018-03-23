# DOUBLY LINKED LIST
___
![](http://3.bp.blogspot.com/-dIV-5j1EY7A/TyLkRUm7WwI/AAAAAAAAARk/h7L55KuCb60/s1600/c+program+of+doubly+linked+list-+delete+-+inser.png) 
___
### Starter Code:

function listNode(value) {
	var protected_values = {
		next: null,
		value: value
	};

	function getNext() {
		return this.next;
	}.bind(protected_values);

	function setNext(nextNode) {
		this.next = nextNode;
	}.bind(protected_values);

	function getNext() {
		return this.next;
	}.bind(protected_values);

	function setNext(nextNode) {
		this.next = nextNode;
	}.bind(protected_values);

	function getValue() {
		return this.value;
	}.bind(protected_values);

	function getValue() {
		return this.value;
	}.bind(protected_values);

	return {
		getNext,
		setNext,
		getPrevious,
		setPrevious,
		getValue,
		setValue
	};
};

function doublyLinkedList() {
	function addNode(_value) {
		var newNode = new ListNode(_value);
		// place this node where it belongs
	};
	function removeNode(_value) {
		// remove the node with the value _value
		// be sure not to break your list !!
	};
	// a helper method, meaning it's only called within the class
	function findNext(currentNode) {
		// logic
		return nextNode;
	};
	// a helper method
	function findPrevious(currentNode) {
		// logic
		return previousNode;
	};
	function findValue(value) {
		// find the node with that value, or say it doesn't exist
		return node;
	};
	return {
			firstNode: null,
			addNode,
			removeNode,
			findNext,
			findPrevious,
			findValue
		};
};
```
___
### Assignments:
0. make it work
1. extend DoublyLinkedList to create a stack
2.  extend DoublyLinkedList to create a queue
___  
### Resources:  
* [linked lists](http://www.thatjsdude.com/interview/linkedList.html)  
* [another linked list](http://js-algorithms.tutorialhorizon.com)  