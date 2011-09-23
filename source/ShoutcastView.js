enyo.kind({
	name: "showShoutcast",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	components: [
		{kind: "Header", content:"Shoutcast"},
			 	
					/*{kind: "Input", hint: "Station Name ...", components: [
              {kind: "Button", caption: "Search", onclick: "playStream"},
          ]},*/		
				{content: "Coming soon . . ."}
				
			/*{name: "sound", kind: "Sound", src: "/media/internal/ringtones/Flurry.mp3", preload:true}*/
	],
	create: function() {
		this.inherited(arguments);
	},
	backHandler: function(inSender, e) {
			this.doBack();
	}
});