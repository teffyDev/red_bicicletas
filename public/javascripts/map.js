// Crear un mapa centrado en Bogotá, Colombia
var map = L.map('main_map').setView([4.7110, -74.0721], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result); // Imprime el objeto result en la consola del navegador
        result.bicicletas.forEach(function(bici) {
            console.log(bici.ubicacion); // Imprime la ubicación de cada bicicleta
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
});

