var map = L.map('map').setView([-6.767665, -38.229675], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-6.767665, -38.229675]).addTo(map);
var popup = L.popup();

var newlocal;

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

    newlocal= e.latlng;
    console.log(newlocal)
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    var formData = {

            nome: nome,
            email: email,
            type: "Point",
            coordinates: [newlocal.lng, newlocal.lat]
        
    };

    var formDataJson = JSON.stringify(formData);

    console.log(formDataJson)
    
    document.getElementById('showJSON').textContent = formDataJson;

});
    
map.on('click', onMapClick);