enyo.kind({
	name: "ownUrl",
	kind: enyo.SlidingView,
	layoutKind: enyo.VFlexLayout,
	events: {
		onBack: ""
	},
	components: [
		{kind: "Header", content:"Define Your Own URL"},
				
					/*{kind: "Input", name: "url", hint: "Station URL", components: [
              {kind: "Button", caption: "Play Stream", onclick: "play"},
			]},*/
			{kind: "Button", caption: "Play", onclick: "play"},
			{kind: "Popup", name: "newUrlPopup", components: [
			{style: "font-size: 1.1em; text-align: center", className: "enyo-item enyo-first", components: [
				{content: "Play Station By URL", style: "align: center"}
			]},
			{className: "enyo-item enyo-last", components: [
				{kind: enyo.Input, name: "url", hint: "Station URL", autoCapitalize: "lowercase"}
			]},
			{flex: 1, components: [
				{kind: enyo.Button, onclick: "playUrl", caption: "Play", className: "enyo-button-affirmative"},
				{kind: enyo.Button, onclick: "closePopup", caption: "Cancel", className: "enyo-button-negative"}
			]},
		]},		  
		{kind: "Button", caption: "Stop", onclick: "stop", className: "enyo-button-negative"},
		{name: "urlSrc", kind: "Sound", src: ""}
	
	],
	create: function() {
		this.inherited(arguments);
	},	
	play: function() {
		this.$.newUrlPopup.openAtCenter();
	},
	playUrl: function() {
		var ext = this.$.url.getValue();
		this.log(ext);
		this.$.urlSrc.setSrc(ext);
		this.$.urlSrc.play();
		this.$.newUrlPopup.close();
		},
	closePopup: function() {
		this.$.newUrlPopup.close();
		},
	stop: function() {
		this.$.urlSrc.audio.pause();
	},
	backHandler: function(inSender, e) {
		this.$.urlSrc.audio.pause();
		if (inSender.kind == "AudioObjectView"){
			this.$.audioPaneLo.back();
		} else
		{
			this.doBack();
		}
	}
});