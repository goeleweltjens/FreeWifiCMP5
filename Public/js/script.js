
var mymap = L.map('mapje', {
  center: [51.2236, 4.405219999999986],
  zoom: 14
});


var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});
basicmap.addTo(mymap);
