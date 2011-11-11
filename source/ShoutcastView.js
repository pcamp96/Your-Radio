enyo.kind({
	name: "showShoutcast",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	components: [
		{kind: "Header", content:"Shoutcast"},
			 	
				/*	{kind: "Button", caption: "Search", onclick: "searcchPopup"},
			{kind: "Popup", name: "newSearchPopup", components: [
			{style: "font-size: 1.1em; text-align: center", className: "enyo-item enyo-first", components: [
				{content: "Search SHOUTCast", style: "align: center"}
			]},
			{className: "enyo-item enyo-last", components: [
				{kind: enyo.Input, name: "searchParams", hint: "Search...", autoCapitalize: "lowercase"}
			]},
			{flex: 1, components: [
				{kind: enyo.Button, onclick: "search", caption: "Search", className: "enyo-button-affirmative"},
				{kind: enyo.Button, onclick: "closePopup", caption: "Cancel", className: "enyo-button-negative"}
			]},
		]},	*/	  
		
{kind: "PickerGroup", label: "Search Top", onChange: "pickerPick",
  components: [
      {name: "topSearch", value: "5", items: ["5", "250", "500"]},
  ]
},
  {kind: "VirtualList", style: "width: 100%; height: 100%;",
      onSetupRow: "setupRow", components: [
          {kind: "Item", layoutKind: "HFlexLayout", components: [
              {name: "caption", flex: 1},
              {kind: "Button", onclick: "buttonClick"}
          ]}
      ]
  }
				
				
			/*{name: "sound", kind: "Sound", src: "/media/internal/ringtones/Flurry.mp3", preload:true}*/
	],
	create: function() {
		this.inherited(arguments);
	},
	
setupRow: function(inSender, inIndex) {
  if (this.$.topSearch.getValue() == 5) {
      this.$.caption.setContent("Top 5");
      this.$.button.setCaption("Play Song" + inIndex);
      return true;
  }
  else if (this.$.topSearch.getValue() == 250) {
      this.$.caption.setContent("Top 250");
      this.$.button.setCaption("Play Song" + inIndex);
      return true;
  }
  else {
      this.$.caption.setContent("Top 500");
      this.$.button.setCaption("Play Song" + inIndex);
      return true;
  }
},
	pickerPick: function(inSender, inEvent) {
		var ext = this.$.topSearch.getValue();
		this.log(ext);
		this.fieldType = this.$.topSearch.getValue();
   	    this.$.virtualList.refresh();
		//var jsonText = JSON.stringify(xmlToJson(xmlDoc));

		
	},
	searcchPopup: function() {
		this.$.newSearchPopup.openAtCenter();
	},
	search: function() {
		var ext = this.$.searchParams.getValue();
		this.log(ext);
		this.$.newSearchPopup.close();
		},
	closePopup: function() {
		this.$.newSearchPopup.close();
		},
	stop: function() {
		this.$.urlSrc.audio.pause();
	},
	// Changes XML to JSON
	xmlToJson: function(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].length) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
},
	backHandler: function(inSender, e) {
			this.doBack();
	}
});