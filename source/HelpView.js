enyo.kind({
	name: "helpView",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	components: [
			{kind: "Header", content:"Help"},
			 
					/*{kind: "Button", caption: "Help Site", onclick: "help"},*/
				{content: "Email awesomeapps@suplify.me for feature requests/bug reports. Make sure to mark bugs with [BUG] and features with [FEATURE] in the subject."}
				],
	create: function() {
		this.inherited(arguments);
	},
	help: function() {
	//put link to the help site here
	},
	backHandler: function(inSender, e) {
		this.doBack();
	}
});