// javascript

let map = L.map('map').setView([51.505, -0.09], 13);

let osm_url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
let attributes = {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org copyright">OpenStreetMap</a>'
}

let osm_layer = L.tileLayer(osm_url, attributes)

osm_layer.addTo(map);

let circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
})

circle.addTo(map);


let geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

L.geoJSON(geojsonFeature).addTo(map);







