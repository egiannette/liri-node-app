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
	//console.log("yeppers");

	var params = {
  		user_id: 'Trojan_Erin',
  		count: 20
	};

	// is statuses/user_timeline the correct one?  Needs the user_id..
	// is there one that uses the owner of the keys above
	client.get('statuses/user_timeline', params, function(error, data) {
		if(error){
			console.log(error);
		}
  		for (var i = 0; i < data.length ; i++) {
    		console.log(data[i].text + ' : ' + data[i].created_at);
  		} 
	});
}
/*
else if(nodeArg[2] == 'spotify-this-song'){
	var song = '';
	if(nodeArg[3] != ''){
		song = nodeArg[3];
	}

	var params = {
		type: 'track',
		query: song
	};
	spotify.search(params, function(error, data) {
    	if ( error ) {
        	console.log(error);
    	}
 
    	console.log(data.artists ' : ' + song + ' : ' + data.spotify + ' : ' + data.name);
	});
}
*/