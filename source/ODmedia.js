enyo.kind({
   name : "odMedia",
   kind : enyo.VFlexBox,
   components : [ 
     { flex : 1,
      kind : "Pane",
      components : [{
         flex : 1,
         kind : "Scroller",
         components : [
         {
            name : "getPerm",
            kind : "PalmService",
            service : "palm://com.palm.mediapermissions",
            method : "request",
            onSuccess : "getPermSuccess",
            onFailure : "getPermFailure",
            subscribe : true
         },
         {kind : "Button", name : "getPermButton", caption : "Get Permissions", onclick : "getPermClick"}
        ]
      }]
    }],
    getPermClick: function() {  
         var params = {"read":[album, albumimage, artist, audio, genre, image, playlist, video]};        
         this.$.getPerm.call({ "rights":params});
         var album      = "com.palm.media.audio.album:1";
         var albumimage = "com.palm.media.image.album:1";
         var artist     = "com.palm.media.audio.artist:1";
         var audio      = "com.palm.media.audio.file:1";
         var genre      = "com.palm.media.audio.genre:1";
         var image      = "com.palm.media.image.file:1";
         var playlist   = "com.palm.media.audio.playlist.object:1";
         var video      = "com.palm.media.video.file:1";
    },  
    getPermSuccess: function(inSender, inResponse) {
        console.log("Get Permissions success, results=" + enyo.json.stringify(inResponse));
    },          
    // Log errors to the console for debugging
    getPermFailure: function(inSender, inError, inRequest) {
        console.log(enyo.json.stringify(inError));
    }
});
