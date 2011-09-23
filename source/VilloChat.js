enyo.kind({
	name: "villoChat",
	kind: enyo.SlidingView,
	layoutKind: enyo.VFlexLayout,
	events: {
		onBack: ""
	},
	components: [
			
			{kind: "Header", content:"Chat"},
			{name: "jaf0", kind: "Button", caption: "jaf0's the bomb", onclick: "clickme", className: "enyo-button-affirmative"}
				
					
	],
	
	
	
	create: function() {
		this.inherited(arguments);
	},	
	backHandler: function(inSender, e) {
		this.doBack();
	}
});
