///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'georgeb3.d7840c36'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZ2VvcmdlYjMiLCJhIjoiX0tMNFUzbyJ9.Jvnds8KazGwP5dQJh2TgqQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
