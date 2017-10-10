// Stuff necessary to make the node operations work

var keys = require("./keys.js");

var request = require("request");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");

var fs = require("fs");


//================================================================================================================================================================================================================================================//


// Mandatory Commands for liri

// This will show your last 20 tweets and when they were created at in your terminal/bash window.
// my-tweets

// show the following information about the song in your terminal/bash window: artist(s), song's name, preview link of the song from Spotify, album that the song is from. If no song is provided then your program will default to "The Sign" by Ace of Base.
// spotify-this-song '<song name here>'

// This will output the following information to your terminal/bash window: Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, Actors in the movie. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' 40e9cece
// movie-this '<movie name here>'

// This will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// do-what-it-says


//================================================================================================================================================================================================================================================//

// Twitter

var client = new Twitter(keys.twitterkeys);

var params = {screen_name: 'michael_galt'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//================================================================================================================================================================================================================================================//

// Spotify
var spotify = new Spotify({
  id: "7e6b7bdd083944d3ade64fbdc02716cd",
  secret: "727dbf5af4db4b559927e5392b231b4d"
});
 
spotify.search({ 
	type: 'track', 
	query: process.argv[2] }, 

	function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
 
	console.log(data); 
});

