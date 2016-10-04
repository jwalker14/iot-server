/**

Now we get to the meat of the problem. I am not a typical programmer
I can't write things out. I do things. I tinker. I figure something out. 
I redo it. Rinse and Repeat.

AUTOMATA CLOUD PROCESSOR;

In there this is a fairly simple idea.

You give me a graph depicting an automaton and a state you want to be in.
I'll tell you how to get there. Fairly simple concept.

~ Thanks to Zach H. for helping me flesh this out.

var automata = new Automata(Graph, DesiredState);
var NewStateQ = automata.compute()

NewStateQ.execute()

NewStateQ.execute = function(){
	while(this != null){
		var transitionName = this.name;
		this.Head = this.Head.next;

		transitionName();
		//wait here for transition to complete.
	}
}

The problem arises when we are trying to ensure functions get fired
IN ORDER. Meaning we NEED to wait for callback to ensure the automata
stays current and working correctly.

**/

function AutomataProcessor(G, DS){
	this.graph = G;
	this.desiredState = DS;
}


AutomataProcessor.prototype.compute = function(){
	console.log('compute')
	return 'something';
}

module.exports = AutomataProcessor ;