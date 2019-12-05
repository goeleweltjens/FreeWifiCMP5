/*
 * map initialiseren
 */
 var mymap = L.map('mapje', {
   center: [51.2236, 4.405219999999986],
   zoom: 14
 });

/*
 * map activeren door een achtergrond toe te voegen
 */
var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});
basicmap.addTo(mymap);


var pinDefault = L.icon({
    iconUrl: '../images/grijs.png',
    iconSize:     [33,57],
});
var pinRed = L.icon({
    iconUrl: '../images/rood.png',
    iconSize:     [33,57],
});
var pinYellow = L.icon({
    iconUrl: '../images/geel.png',
    iconSize:     [33,57],
});
var pinBlue = L.icon({
    iconUrl: '../images/blauw.png',
    iconSize:     [33,57],
});
var pinBordeaux = L.icon({
    iconUrl: '../images/bordeaux.png',
    iconSize:     [33,57],
});

var pinKaki = L.icon({
    iconUrl: '../images/kaki.png',
    iconSize:     [33,57],
});

var pinLila = L.icon({
    iconUrl: '../images/lila.png',
    iconSize:     [33,57],
});

var pinOrange = L.icon({
    iconUrl: '../images/oranje.png',
    iconSize:     [33,57],
});

var pinPurple = L.icon({
    iconUrl: '../images/paars.png',
    iconSize:     [33,57],
});
var pinGreen = L.icon({
    iconUrl: '../images/groen.png',
    iconSize:     [33,57],
});


mymap.locate({setView: true, maxZoom: 17} );
