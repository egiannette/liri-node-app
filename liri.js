var keys = require("./keys.js");

var myTwitterKeys = {
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
}
/*
console.log('consumer_key: ' + myTwitterKeys.consumer_key);
console.log('consumer_secret: ' + myTwitterKeys.consumer_secret);
console.log('access_token_key: ' + myTwitterKeys.access_token_key);
console.log('access_token_secret: ' + myTwitterKeys.access_token_secret);
*/
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

