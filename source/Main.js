YourRadio = {}; //Global Object
enyo.kind({
	name: "Main",
	kind: enyo.VFlexBox,
	components: [
		{name: "mainSlidingPane", kind: "SlidingPane", flex: 1, components: [
			{name: "main", width: "320px", kind:"SlidingView", components: [
				{kind: "Header", content:"Your Radio"},
				{kind: "Scroller", flex: 1, components: [
					{name: "buttonownURL", kind: "Button", caption: "I have my own URL", onclick: "buttonHandler"},
					{name: "buttonshowShoutcast", kind: "Button", caption: "ShoutCast", onclick: "buttonHandler"},
					{name: "buttonshowIcecast", kind: "Button", caption: "IceCast", onclick: "buttonHandler"},
					{name: "buttonlocalFile", kind: "Button", caption: "Local File Playback", onclick: "buttonHandler"},
					{name: "buttonhelpView", kind: "Button", caption: "Help", onclick: "buttonHandler"},
					/*{name: "buttonvilloView", kind: "Button", caption: "Villo", onclick: "buttonHandler"}*/
				]},
				{kind: "Toolbar", components: [
				]}
			]},
			{name: "middle", width: "320px", kind:"SlidingView", flex: 1, components: [
				{name: "patsPane", kind: enyo.Pane, flex: 1, components: [
					{name: "welcome", kind: "welcome", onBack:"backHandler"},
					{name: "showShoutcast", kind: "showShoutcast", onBack:"backHandler"},
					{name: "showIcecast", kind: "showIcecast", onBack:"backHandler"},
					{name: "ownURL", kind: "ownUrl", onBack:"backHandler"},
					{name: "helpView", kind: "helpView", onBack: "backHandler"},
					{name: "prefs", kind: "prefs", onBack:"backHandler"},
					{name: "localFile", kind: "odMedia", onBack:"backHandler"},
					/*{name: "villoView", kind: "villoLogin"}*/
				]},
				{kind: "Toolbar", components: [
					{kind: "GrabButton"}
				]}
			]},
			/*{name: "right", width: "320px", kind:"SlidingView", flex: 1, components: [
				{name: "patsPane2", kind: enyo.Pane, flex: 1, components: [
					{name: "welcome2", kind: "welcome2", onBack:"backHandler"},
					{name: "villoChat", kind: "villoChat"}
				]},
				{kind: "Toolbar", components: [
					{kind: "GrabButton"}
				]}
			]},*/
		]},
			/*{name: "farRight", kind:"SlidingView", flex: 1, components: [
					{kind: "Header", content:"Panel 3"},
					{kind: "Scroller", flex: 1, components: [
						//Insert your components here
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton"}
					]}
			]},*/
			/*{kind: "SlidingPane", flex: 1, multiViewMinWidth: 480, onSelect: "paneSelected", name: "feedSlidingPane", components: [
*/
		{kind: "AppMenu", components: [
			{kind: "EditMenu", autoDisableItems: "true"},
			{caption: "Preferecnes ...", onclick: "buttonHandler"},
			{caption: "Help ...", onclick: "buttonHandler"},
		]},
	],
	initComponents: function() {
		enyo.setLogLevel(99);
		this.inherited(arguments);
		this.log("Initializing");
	},
	create: function() {
		this.inherited(arguments);
		YourRadio.Metrix = new Metrix(); //Instantiate Metrix Library
		YourRadio.Metrix.postDeviceData();
	},
	clickHandler: function(inSender, inEvent) {
		enyo.log("Main.js: ")
		enyo.log(inSender);
		switch (inSender.name) {
			/*case "checker": this.$.patsPane2.selectViewByName("villoChat"); */break;
			default: enyo.log("add "+inSender.name+" to this case if you need to handle the event"); break;
		};
		event.stopPropagation();
	},
	buttonHandler: function(inSender, inEvent) {
		this.$.patsPane.selectViewByName(inSender.name.slice(6));
		event.stopPropagation();
        this.log("Button pressed");
	},
	buttonHandler: function(inSender, inEvent) {
		this.$.patsPane.selectViewByName(inSender.name.slice(6));
		event.stopPropagation();
        this.log("Button pressed");
	},
});
