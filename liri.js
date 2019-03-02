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
var moment = require("moment");
var info = process.argv[2];
var search = process.argv.slice(3).join("+");
var divider = "\n------------------------------------------------------------\n\n";


switch (info) {
    case "concert-this":
        concertThis(search);
        break;

    case "spotify-this-song":
        spotifyThisSong(search);
        break;

    case "movie-this":
        movieThis(search);
        break;

    case "do-what-it-says":
        doWhatItSays(search);
        break;

    default: console.log("Please use a valid command!");
        return;

};


function movieThis(search) {
    var axios = require("axios");
    var movie = search;
    if (!movie) {
        movie = "Mr. Nobody";

    };

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy";




    axios.get(queryUrl).then(
        function (response) {
            var jsonData = response.data;

            var movieData = [
                "Show: " + jsonData.Title,
                "Debut Year: " + jsonData.Year,
                "Rating: " + jsonData.imdbRating,
                "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors,
            ].join('\n\n');

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

            fs.appendFile("log.txt", movieData + divider, function (err) {
                if (err) throw err;
            });
        });
}

function concertThis(search) {
    var axios = require("axios");
    var artist = search;
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



    axios.get(queryUrl).then(
        function (response) {
            var jsonData = response.data;

            for (var i = 0; i < jsonData.length; i++) {

                var artistData = [
                    "Venue name: " + jsonData[i].venue.name,
                    "Venue location: " + jsonData[i].venue.city + ", " + jsonData[i].venue.region + ", " + jsonData[i].venue.country,
                    "Date: " + moment(jsonData[i].datetime).format('L'),
                ].join('\n\n');
                // this is formatting the words and dates


                console.log("=======================");
                console.log("The name of the venue is: " + jsonData[i].venue.name);
                console.log("The location of the venue is: " + jsonData[i].venue.city + ", " + jsonData[i].venue.region + ", " + jsonData[i].venue.country);
                console.log("The date of the event is: " + moment(jsonData[i].datetime).format('L'));
                console.log("=======================");
            }

            fs.appendFile("log.txt", artistData + divider, function (err) {
                if (err) throw err;
            });

        });

}


function spotifyThisSong(search) {
    var song = search;

    if (!song) {
        song = "The Sign Ace of Base";
    }

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        data = data.tracks.items[0];

        var songData = [
            "Artist(s): " + data.artists[0].name,
            "Song Name: " + data.name,
            "Preview Link: " + data.external_urls,
            "Album: " + data.album.name,
        ].join('\n\n');


        console.log("Artist(s): " + JSON.stringify(data.artists[0].name));
        console.log("Song Name: " + JSON.stringify(data.name));
        console.log("Preview Link: " + JSON.stringify(data.external_urls));
        console.log("Album: " + JSON.stringify(data.album.name));

        fs.appendFile("log.txt", songData + divider, function (err) {
            if (err) throw err;
        });


    });

}




function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        var dataArr = data.split(",");
        console.log(dataArr);

        var info = dataArr[0];
        var search = dataArr[1];


        switch (info) {
            case "concert-this":
                concertThis(search);
                break;

            case "spotify-this-song":
                spotifyThisSong(search);
                break;

            case "movie-this":
                movieThis(search);
                break;

            default: console.log("Please use a valid command!");
                return;

        };



        if (error) {
            return console.log(error);
        }
        console.log(data);
    });


}