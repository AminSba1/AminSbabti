document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([51.2194, 4.4025], 13); // Coördinaten van Antwerpen

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.2194, 4.4025]).addTo(map)
        .bindPopup('Antwerpen<br> De stad van diamant en haven.')
        .openPopup();
});