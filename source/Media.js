YourRadio = {}; //Global Object
enyo.kind({
	name: "Media",
	kind: enyo.VFlexBox,
	components: [
	{name: "mainPane", flex: 1, kind: "Pane", onclick: "paneClick", transitionKind: "enyo.transitions.Simple", components: [
			{kind:"VFlexBox", components: [
				{kind: "PageHeader", components: [
					{kind: "VFlexBox", flex: 1, components: [
						{content: "Your Radio (Enyo)"},
						{content: "Your Radio, Radio your way.", style: "font-size: 14px"}
					]},
				]},
				{kind: "Button", caption: "I have my own URL", onclick: "ownURL"},
				{kind: "Button", caption: "ShoutCast", onclick: "showShoutcast"},
				{kind: "Button", caption: "IceCast", onclick: "showIcecast"},
				{kind: "Button", caption: "Local File Playback", onclick: "localFile"},
				{kind: "Button", caption: "Help", onclick: "helpView"},
				{kind: "AppMenu", components: [
					{kind: "EditMenu", autoDisableItems: "true"},
					{caption: "Preferecnes ...", onclick: "prefsView"},
					{caption: "Help ...", onclick: "helpView"},
				]},
			]},
			{name: "showShoutcast", kind: "ShowShoutcast", onBack:"backHandler"},
			{name: "showIcecast", kind: "ShowIcecast", onBack:"backHandler"},
			{name: "ownURL", kind: "OwnURL", onBack:"backHandler"},
			{name: "helpView", kind: "HelpView", onBack: "backHandler"},
			{name: "prefs", kind: "Prefs", onBack:"backHandler"},
			{name: "localFilePB", kind: "ODmedia", onBack:"backHandler"},

		]}
	],
	
	create: function() {
		this.inherited(arguments);
		YourRadio.Metrix = new Metrix(); //Instantiate Metrix Library
		YourRadio.Metrix.postDeviceData();
	},
	ownURL: function(){
		this.$.mainPane.selectViewByName("ownURL");
	},	
	showShoutcast: function(){
		this.$.mainPane.selectViewByName("showShoutcast");
	},
	showIcecast: function(){
		this.$.mainPane.selectViewByName("showIcecast");
	},
	localFile: function(){
		this.$.mainPane.selectViewByName("localFilePB")
	},
	helpView: function() {
		this.$.mainPane.selectViewByName("helpView");
	},	
	prefsView: function(){
		this.$.mainPane.selectViewByName("prefs");
	},
	backHandler: function(inSender, e) {
		this.$.mainPane.back();
	}
});	