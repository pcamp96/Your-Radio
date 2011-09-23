enyo.kind({
	name: "villoLogin",
	kind: enyo.SlidingView,
	layoutKind: enyo.VFlexLayout,
	events: {
		onBack: ""
	},
	components: [
			
			{kind: "Header", content:"Villo"},
				
					/*{kind: "Input", name: "username", hint: "Username"}, 
					{kind: "PasswordInput", name: "password", hint: "Password", autoCapitalize: "lowercase"}, */
					{kind: "Popup", name: "villoPopup", components: [
						{style: "font-size: 1.1em; text-align: center", className: "enyo-item enyo-first", components: [
							{content: "Log into Villo", style: "align: center"}
						]},
						{className: "enyo-item enyo-last", components: [
							{kind: enyo.Input, name: "username", hint: "Username"},
						{kind: "PasswordInput", name: "password", hint: "Password", autoCapitalize: "lowercase"}, 		
						]},
						{flex: 1, components: [
				{kind: enyo.Button, name: "loginPopup", caption: "Login", onclick: "loginPopup", className: "enyo-button-affirmative"},
				{kind: enyo.Button, onclick: "closePopup", caption: "Cancel", className: "enyo-button-negative"}
			]},
		]},	
					{kind: "Button", name: "login", caption: "Login", onclick: "login"},
					{kind: "Button", name: "logout", caption: "Logout", onclick: "logout", className: "enyo-button-negative"},
					{kind: "Button", name: "checker", caption: "Login Checker", onclick: "check"},
			{name: "someContent"}
	],
	
	
	
	create: function() {
		this.inherited(arguments);
	},	
	logout: function(){
		villo.user.logout();
		this.$.villoPopup.close();
		this.$.someContent.setContent("Logged Out");
	},
	login: function(){
		this.$.villoPopup.openAtCenter();
	},
	closePopup: function() {
		this.$.villoPopup.close();
		},
	loginPopup: function(){
		villo.user.login({
			username: this.$.username.getValue(),
			password: this.$.password.getValue()
		}, enyo.bind(this, this.loggedIn));
		this.$.villoPopup.close();
	},
	loggedIn: function(inSender){
		if(inSender == "0"){
			this.$.someContent.setContent("Logged In!");
		}else{
			this.$.someContent.setContent("Error code " + inSender);
		}
	},
	check: function(){
		this.$.someContent.setContent(villo.user.isLoggedIn());
	},
	clickHandler: function(inSender, inEvent) {
		enyo.log("VilloLogin.js: " + inSender.name);
	},
	backHandler: function(inSender, e) {
		this.doBack();
	}
});
