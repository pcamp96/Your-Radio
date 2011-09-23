enyo.kind({
	name: "prefs",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	components: [
			{kind: "Header", content:"Preferences"},
				
		{kind: "Item", align: "center", tapHighlight: false, layoutKind: "HFlexLayout", components: [
			{flex: 1, content: "Metrix Data Collection"},
			{kind: "ToggleButton", name: "metrixToggle", state: "true", onChange: "metrixToggleChange"},
		
		{kind: "Button", caption: "Villo", onclick: "villoLogin"}
	]},
	],
	create: function() {
		this.inherited(arguments);
	},	
	metrixToggleChange: function(inSender, inState) {
    this.log("Toggled to state" + inState);
	},
	villoLogin: function(){
		this.$.prefs.selectViewByName("villoLogin");
	},	
	backHandler: function(inSender, e) {
		enyo.setCookie('metrixToggle', 'this.$.metrixToggle.getState()');
		var metrixToggle = enyo.getCookie("metrixToggle");		
		this.$.metrixToggle.setContent(enyo.json.stringify(metrixToggle));
		this.doBack();
	}
});