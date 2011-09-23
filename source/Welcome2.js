enyo.kind({
	name: "welcome2",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	components: [
		{kind: "Header", content:"Villo!"},
				{content: "This app has been optimized to work with Villo! Be sure to sign up for Villo and use all the features!"}
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