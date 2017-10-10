// Stuff necessary to make the node operations work

var keys = require("./keys.js");

var request = require("request");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");

var inquirer = require("inquirer");

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
var tweets_from_node =  function() {

	var client = new Twitter(keys.twitterkeys);

	var params = {screen_name: 'michael_galt'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets);
	    console.log(tweets[i].created_at);
	    console.log("");
	    console.log(tweets[i].text);
	  }
	});
};

// tweets_from_node();
// console.log(tweets_from_node);

//================================================================================================================================================================================================================================================//

// Spotify

var spotify_using_node = function() {

	var spotify = new Spotify({
	  id: "7e6b7bdd083944d3ade64fbdc02716cd",
	  secret: "727dbf5af4db4b559927e5392b231b4d"
	});
	 
	spotify.search({type: 'track', query: "Unforgiven"}, 

		function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		// console.log(data.tracks.items); 
		// console.log(data.tracks.items.artists);
		// console.log(data.tracks.items.name);
		// console.log(data.tracks.items.preview_url);
		// console.log(data.tracks.items.album.name);
	});
};

// spotify_using_node();
// console.log(spotify_using_node);
//================================================================================================================================================================================================================================================//

// OMDB

var node_OMDB_pull = function() {

	var HOST = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&apikey=40e9cece";

	request(HOST, function(err, response, body) {
	    if(err) {
	        return console.error(err);
	    }
	 
	    if(movies.length < 1) {
	        return console.log('No movies were found!');
	    }
	 	    
    // console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    // console.log(movie.plot);
	    
	});
};

// node_OMDB_pull();
// console.log(node_OMDB_pull);

//================================================================================================================================================================================================================================================//

// Using inquirer to create a "Prompt" with a series of questions. Depending on the answer you provide, it will then call the appropriate function.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["Read tweets", "Look up movie info", "Look up song info"],
      name: "function_to_run_choices"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },

    if ("Read tweets" === true) {
    	tweets_from_node();
		console.log(tweets_from_node);
    },

    else if ("Look up song info" ===true) {
    	{
	      type: "input",
	      message: "What is the name of the song?",
	      name: "song_name"
	    },
	    {
	      type: "confirm",
	      message: "Are you sure:",
	      name: "confirm",
	      default: true
	    },

	    spotify_using_node();
		console.log(spotify_using_node);
    },

    else if ("Look up movie info" ===true) {   

	    {
	      type: "input",
	      message: "What is the name of the movie?",
	      name: "movie_name"
	    },
	    {
	      type: "confirm",
	      message: "Are you sure:",
	      name: "confirm",
	      default: true
	    },   

	    node_OMDB_pull();
		console.log(node_OMDB_pull);
  ])

  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome!");
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
  });