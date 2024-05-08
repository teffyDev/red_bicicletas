// Crear un mapa centrado en Bogotá, Colombia
var map = L.map('main_map').setView([4.7110, -74.0721], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([4.5743, -74.1243]).addTo(map).bindPopup('Parque El Tunal');
L.marker([4.6681, -74.0832]).addTo(map).bindPopup('Parque Simón Bolívar');
L.marker([4.5981, -74.0758]).addTo(map).bindPopup('Plaza de Bolívar');