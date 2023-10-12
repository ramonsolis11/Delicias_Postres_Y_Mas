//script del mapa en el about
let map;
        function initMap() {
            const myLatLng = { lat: 13.980860, lng: -89.559607 }; // Latitud y longitud de la ubicación
            const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15, // Nivel de zoom
                center: myLatLng
            });
            const marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Mi Ubicación'
            });
        }

        initMap();