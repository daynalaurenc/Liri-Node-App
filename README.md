
# LIRI NODE APP
LIRI: Language Interpretation and Recognition Interface. 
Liri will be a command line node app that takes in parameters and gives user back data.

## Description
User is able to access information from multiple APIs.

Typing "concert-this" + the name of an artist will render upcoming tour info for that artist. [Venue name, location, and dates] This command uses the Bands In Town API. Moment.js is used to format the dates.

Typing "spotify-this-song" + title of a song will render specifics for that song. [Artist name, Song name, Live Spotify preview link, and Album title] This command uses the Spotify API.

Typing "movie-this" + title of a movie will render specifics for that movie. [Movie title, Debut year, Rating, Rotten Tomatoes rating, Country, Langage, Plot, Actors] This command uses the IMDb API.

Typing "do-what-it-says"  will display the song in random.txt file, and then run the 'spotify-this-song' parameters. [Artist name, Song name, Spotify preview link, and Album title] This command uses the Spotify API.

+ The data searched in the Terminal is output to a .txt file called log.txt, here all of the commands are appended.
 

## Sample View

![Liri-Node-App Screenshot](/images/screenshot1.jpg/)
![Liri-Node-App Screenshot](/images/screenshot2.jpg/)



## Technology

+ Javascript
+ NODE
+ Moment.js


## API List

+ Spotify
+ OMDb
+ Bands In Town 


