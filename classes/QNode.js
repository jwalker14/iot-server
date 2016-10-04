function QNode(l, n, d){
	this.label = l
	this.next = n || null
	this.data = d || {}
}

QNode.prototype = {

	getNext: function(){
		return this.next
	},

	setNext: function(n){
		this.next = n
	},

	getLabel: function(){
		return this.label
	},

	setLabel: function(l){
		this.label = l
	},

	getData: function(){
		return this.data
	},

	setData: function(d){
		this.data = d
	}
}

module.exports = QNode