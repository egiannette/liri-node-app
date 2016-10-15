var keys = require("./keys.js");
var Twitter = require('twitter');
var fs = require ("fs");
var client = new Twitter({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});

var spotify = require('spotify');
var request = require('request');

var nodeArg = process.argv;

function myTweets(){
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
function spotifySong(arg){
		var song = '';
	if(arg != '' && arg != undefined){
		song = arg;
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
function movieThis(arg){
	var movieName = '';

	if(arg != '' && arg != undefined){
		movieName = arg;
		//console.log('movie: ' + movie);
	}
	else{
		movieName = 'Mr. Nobody';
	}

	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&type=movie&tomatoes=true&plot=short&r=json';

	request(queryUrl, function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			console.log(JSON.parse(body)["Title"]);
    		console.log(JSON.parse(body)["Year"]);
    		console.log(JSON.parse(body)["imdbRating"]); 
    		console.log(JSON.parse(body)["Country"]); 
    		console.log(JSON.parse(body)["Language"]); 
    		console.log(JSON.parse(body)["Plot"]);
    		console.log(JSON.parse(body)["Actors"]);
    		console.log(JSON.parse(body)["tomatoRating"]);
    		console.log(JSON.parse(body)["tomatoURL"]);
  		}
  		else{
  			console.log(error);
  		}
	});
}
function doWhatItSays(){
		fs.readFile("./random.txt", "UTf8", function(error,data){
		if(error){
			console.log(error);
		}

		//console.log(data);
		var dataArr = data.split(',');
		var command = dataArr[0];
		var arg = dataArr[1];
		switch(command){
			case 'my-tweets':myTweets();
			break;

			case 'spotify-this-song':spotifySong(arg);
			break;

			case 'movie-this':movieThis(arg);
			break;
		}

		//console.log(command);
		//console.log(arg);

		console.log('node liri.js ' + command + ' ' + arg);
	})
}
var argument = nodeArg[2];

switch(argument){
	case 'my-tweets':myTweets();
	break;

	case 'spotify-this-song':spotifySong(nodeArg[3]);
	break;

	case 'movie-this':movieThis(nodeArg[3]);
	break;

	case 'do-what-it-says':doWhatItSays();
	break;
}
//console.log(nodeArg);
// if(nodeArg[2] == 'my-tweets'){

// 	var params = {
//   		screen_name: 'Trojan_Erin',
//   		count: 20
// 	};

	
// 	client.get('statuses/user_timeline', params, function(error, data) {
// 		if(error){
// 			console.log(error);
// 		}
//   		for (var i = 0; i < data.length ; i++) {
//     		console.log(data[i].text + ' : ' + data[i].created_at);
//   		} 
// 	});
// }
// else if(nodeArg[2] == 'spotify-this-song'){
// 	var song = '';
// 	if(nodeArg[3] != '' && nodeArg[3] != undefined){
// 		song = nodeArg[3];
// 		//console.log('song: ' + song);
// 	}
// 	else{
// 		//console.log('song is blank');
// 		console.log("Ace of Base");
// 		console.log("The Sign");
// 		console.log("https://play.spotify.com/album/5UwIyIyFzkM7wKeGtRJPgB/0hrBpAOgrt8RXigk83LLNE");
// 		console.log("Happy Nation");

// 	}
// 	var params = {
// 		type: 'track',
// 		query: song
// 	};
// 	if(song != ''){
// 		spotify.search(params, function(error, data) {
//     		if ( error ) {
//         		console.log(error);
//     		}
//     		else{
//     			var songInfo = data.tracks.items[0];

//     		}
//  			for(var i = 0; i< songInfo.artists.length; i++){


//     			console.log(songInfo.artists[i].name);
//     		}
//     		console.log(song);
//     		console.log(songInfo.preview_url);
//     		console.log(songInfo.album.name);
    	
// 		});
// 	}
// }
// else if(nodeArg[2] == 'movie-this'){
// 	var movieName = '';

// 	if(nodeArg[3] != '' && nodeArg[3] != undefined){
// 		movieName = nodeArg[3];
// 		//console.log('movie: ' + movie);
// 	}
// 	else{
// 		movieName = 'Mr. Nobody';
// 	}

// 	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&type=movie&tomatoes=true&plot=short&r=json';

// 	request(queryUrl, function (error, response, body) {
//   		if (!error && response.statusCode == 200) {
//   			console.log(JSON.parse(body)["Title"]);
//     		console.log(JSON.parse(body)["Year"]);
//     		console.log(JSON.parse(body)["imdbRating"]); 
//     		console.log(JSON.parse(body)["Country"]); 
//     		console.log(JSON.parse(body)["Language"]); 
//     		console.log(JSON.parse(body)["Plot"]);
//     		console.log(JSON.parse(body)["Actors"]);
//     		console.log(JSON.parse(body)["tomatoRating"]);
//     		console.log(JSON.parse(body)["tomatoURL"]);
//   		}
//   		else{
//   			console.log(error);
//   		}
// 	});
// }
// else if(nodeArg[2] == 'do-what-it-says'){
// 	fs.readFile("./random.txt", "UTf8", function(error,data){
// 		if(error){
// 			console.log(error);
// 		}

// 		//console.log(data);
// 		var dataArr = data.split(',');
// 		var command = dataArr[0];
// 		var arg = dataArr[1];
// 		//console.log(command);
// 		//console.log(arg);

// 		console.log('node liri.js ' + command + ' ' + arg);
// 	})
// }
