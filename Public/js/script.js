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


var pin = L.icon({
    iconUrl: 'images/pin.png',
    iconSize:     [30,45],
});


var marker = L.marker([50.8951415, 4.3419077], {icon: pin}).addTo(mymap);

var marker = L.marker([51.2199687, 4.4016123], {icon: pin}).addTo(mymap);


var polygon = L.polygon([
	[50.8951415, 4.3419077],
	[51.2199687, 4.4016123],
]).addTo(mymap);


polygon.setStyle({color: 'green'});



mymap.fitWorld();
mymap.locate({setView: true, maxZoom: 15});
