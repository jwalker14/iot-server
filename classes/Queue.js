var Node = require('./QNode.js')


function Queue(l, data){
	var Q = new Node(l, null, data)
	this.head = Q
	this.tail = Q
}

Queue.prototype = {
	//remove head
	dequeue: function(){
		temp = this.head
		this.head = this.head.getNext()
		return temp
	},
	//add to tail
	enqueue: function(l, data){
		var n = new Node(l, null, data)
		this.tail.setNext(n)
		this.tail = n
	},

	toString: function(){
		tmp = this.head
		var s = ''

		while(tmp != null){
			s += tmp.getLabel()
			if(tmp.getNext() != null)
				s += ' -> '
			tmp = tmp.getNext()
		}

		return s
	}
}

module.exports = Queue