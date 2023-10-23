//script del mapa en el about
let map;
    function initMap() {
        const myLatLng = { lat: 13.980860, lng: -89.559607 };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: myLatLng
        });
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Nuestra Ubicación'
        });
    }
    initMap();

//script del navbar
customElements.define('yus-html',
class extends HTMLElement {
    constructor() {
    super();
    }
    connectedCallback() {
    fetch(this.getAttribute("src"))
    .then(r => r.text())
    .then(t => {
    let parser = new DOMParser();
    let html = parser.parseFromString(t, "navbar.html");
    this.innerHTML = html.body.innerHTML;
    }).catch(e => console.error(e));
    }
});




/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('navbar-container').innerHTML = "<p>Si puedes ver esto, el JavaScript está funcionando correctamente.</p>";
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('../navbar.html') // ajusta la ruta según sea necesario
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la barra de navegación");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error("Error en fetch:", error);
        });
});

/*document.addEventListener("DOMContentLoaded", function() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});*/

