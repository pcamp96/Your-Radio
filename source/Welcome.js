enyo.kind({
	name: "welcome",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	components: [
		{kind: "Header", content:"Welcome!"},
				{content: "Welcome to the Your Radio Beta! Have fun, and don't forget to report all bugs or features to the forums!"}
	],
	create: function() {
		this.inherited(arguments);
	},
	/*help: function() {
	//put link to the help site here
	},*/
	backHandler: function(inSender, e) {
		this.doBack();
	}
});