var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});
/*
console.log('consumer_key: ' + myTwitterKeys.consumer_key);
console.log('consumer_secret: ' + myTwitterKeys.consumer_secret);
console.log('access_token_key: ' + myTwitterKeys.access_token_key);
console.log('access_token_secret: ' + myTwitterKeys.access_token_secret);
*/

var spotify = require('spotify');
var request = require('request');

var nodeArg = process.argv;
//console.log(nodeArg);
if(nodeArg[2] == 'my-tweets'){

	var params = {
  		screen_name: 'Trojan_Erin',
  		count: 20
	};

	
	client.get('statuses/user_timeline', params, function(error, data) {
		if(error){
			console.log(error);
		}
  		for (var i = 0; i < data.length ; i++) {
    		console.log(data[i].text + ' : ' + data[i].created_at);
  		} 
	});
}

else if(nodeArg[2] == 'spotify-this-song'){
	var song = '';
	if(nodeArg[3] != '' && nodeArg[3] != undefined){
		song = nodeArg[3];
		//console.log('song: ' + song);
	}
	else{
		//console.log('song is blank');
		console.log("Ace of Base");
		console.log("The Sign");
		console.log("https://play.spotify.com/album/5UwIyIyFzkM7wKeGtRJPgB/0hrBpAOgrt8RXigk83LLNE");
		console.log("Happy Nation");
		
	}
	var params = {
		type: 'track',
		query: song
	};
	if(song != ''){
		spotify.search(params, function(error, data) {
    		if ( error ) {
        		console.log(error);
    		}
    		else{
    			var songInfo = data.tracks.items[0];

    		}
 			for(var i = 0; i< songInfo.artists.length; i++){


    			console.log(songInfo.artists[i].name);
    		}
    		console.log(song);
    		console.log(songInfo.preview_url);
    		console.log(songInfo.album.name);
    	
		});
	}
}
