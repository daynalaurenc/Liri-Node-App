// LIRI: Lang Interpretation and Recognition Interface
// Retrieve data to power app, send requests using AXIOS: Bands in Town, Sptify, OMDB API
//  Node-Spotify-API, Axios(IMDB,BITA), Moment, DotEnv

// SUBMISSION: Screenshots in README using all the API functions, well written IMPT, just github repo link

// LIRI.JS takes in following commands: concert-this, spotify-this-song, movie-this, dowhat-it-says








require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var moment = require("moment");
var info = process.argv[2];
var search = "";


switch (info) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    default: console.log("\n" + "type any command after 'node liri-js': " + "\n" +
        "concert-this" + "\n" +
        "spotify-this song 'any song title' " + "\n" +
        "movie-this 'any movie title' " + "\n" +
        "do-what-it-says " + "\n" +
        "Use quotes for multiword titles!");

};


function movieThis() {
    var axios = require("axios");

    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";


    axios.get(queryUrl).then(
        function (response) {
            console.log("=======================");
            console.log("The title of the movie is: " + response.data.Title);
            console.log("The year the movie debuted: " + response.data.Year);
            console.log("The movie's IMBD rating is: " + response.data.imdbRating);
            console.log("The movie's Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
            console.log("The country the movie was produced in is: " + response.data.Country);
            console.log("The language of the movie is: " + response.data.Language);
            console.log("The plot of the movie is: " + response.data.Plot);
            console.log("The actors in the movie are: " + response.data.Actors);
            console.log("=======================");

        });
}

function concertThis() {
    var axios = require("axios");
    var queryUrl2 = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl2).then(
        function (response) {
            console.log("=======================");
            console.log("The name of the venue is: " + response.data.Title);
            console.log("The location of the venue is: " + response.data.Year);
            console.log("The date of the event is: " + response.data.imdbRating);
            console.log("=======================");

        });
    // moment.js is happening somewhere here
}


function spotifyThisSong() {

    if (condition) {

    } else {

    }

    function (result) {
        console.log("Artist(s): " + JSON.stringify(result.tracks.artists));
        console.log("Song Name: " + JSON.stringify(result.tracks.song));
        console.log("Preview Link: " + JSON.stringify(result.tracks.external_urls));
        console.log("Album: " + JSON.stringify(results.tracks.name));

        // console.log('this.artist');
        // console.log('this.song');
        // console.log('this.previewLink');
        // console.log('this.album');
    }
}




function doWhatItSays() {
    var fs = require("fs");

    // This block of code will read from the "random.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("movies.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

    });

}