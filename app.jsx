// Map

var map = L.map("map").setView([43.8021, 40.9968], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>",
    maxZoom: 20,
}).addTo(map);

// Markers

var marker = L.marker([50.8503396, 4.351710300000036]).addTo(map);
marker.bindPopup("<b>Starting point!</b><br>Departure on Sunday 3 February").openPopup();

var marker = L.marker([48.1351, 11.5820]).addTo(map);
marker.bindPopup('<a href="https://medium.com/road-to-the-rising-sun/were-off-the-beginning-of-a-new-chapter-60fb434c6771" target="_blank"><b>We’re off! The beginning of a new chapter</b></a><br>17 February in Munich: First blog post').openPopup();

var Istanbul = L.marker([41.0082376, 28.97835889999999]).bindPopup("This is Istanbul!"),
    Tbilisi = L.marker([41.7151377, 44.82709599999998]).bindPopup("This is Tbilisi!"),
    Tehran = L.marker([35.6891975, 51.388973599999986]).bindPopup("This is Tehran!"),
    Bishkek = L.marker([42.8746212, 74.56976170000007]).bindPopup("This is Bishkek!"),
    Tokyo = L.marker([35.708409939046184, 139.73015854843743]).bindPopup("This is Tokyo!");

var cities = L.layerGroup([Istanbul, Tbilisi, Tehran, Bishkek, Tokyo]);

map.addLayer(cities);

var overlayMaps = {
    "Cities we will take some rest": cities
};

L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

// Itinerary

function getColor(m) {
    switch (m) {
        case "February": return "#d53e4f";
        case "March": return "#f46d43";
        case "April": return "#fdae61";
        case "May": return "#fee08b";
        case "June": return "#ffffbf";
        case "July": return "#e6f598";
        case "August": return "#abdda4";
        case "September": return "#66c2a5";
        case "October": return "#3288bd";
        default: return "orange";
    };
}

function style(feature) {
    return {
        weight: 5,
        opacity: 1,
        color: "orange",
        dashArray: "10",
        fillOpacity: 0.7
    };
}

// Interactivity map

function highlightFeature(e) {
    info.update(e.target.feature.properties);
    e.target.setStyle({
        weight: 15,
        color: "orange",
        dashArray: "",
        fillOpacity: 0.7
    });
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

var geojson = null;

var req = new window.XMLHttpRequest();
req.open("GET", "./biketour.json", false);
req.onreadystatechange = function () {
    if (req.readyState !== 4) return;
    if (req.status === 200) {
        geojson = L.geoJson(JSON.parse(req.response), {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);
    }
};
req.send(null);

// Custom info control

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = "<h4>Expected time to be there</h4>" + (props ? props.month : "Hover over our itinerary");
};

info.addTo(map);

// real GPX data

var gpx_options = {
    async: false,
    marker_options: {
        startIconUrl: null,
        endIconUrl: null,
        shadowUrl: null
    }
}

new L.GPX("GPX/1. Brussels-Namur.gpx", gpx_options).addTo(map);
new L.GPX("GPX/2. Cortil-Wodon - Nassogne.gpx", gpx_options).addTo(map);
new L.GPX("GPX/3. Nassogne-Vaux.gpx", gpx_options).addTo(map);
new L.GPX("GPX/4. Vaux-Luxemburg.gpx", gpx_options).addTo(map);
new L.GPX("GPX/5. Luxemburg - Saarbrucken.gpx", gpx_options).addTo(map);
new L.GPX("GPX/6. Saarbrucken - Pirmasens.gpx", gpx_options).addTo(map);
new L.GPX("GPX/7. Pirmasens - Wilden.gpx", gpx_options).addTo(map);
new L.GPX("GPX/8. Wilden - Eisingen.gpx", gpx_options).addTo(map);
new L.GPX("GPX/9. Eisingen - Stuttgart.gpx", gpx_options).addTo(map);
new L.GPX("GPX/10. Stuttgart - Heidenheim.gpx", gpx_options).addTo(map);
new L.GPX("GPX/11. Heidenheim - Augsburg.gpx", gpx_options).addTo(map);
new L.GPX("GPX/12. Augsburg - Munich.gpx", gpx_options).addTo(map);
new L.GPX("GPX/13. Munich - Gerzen.gpx", gpx_options).addTo(map);
new L.GPX("GPX/14. Gerzen - Passau.gpx", gpx_options).addTo(map);
new L.GPX("GPX/15. Passau - Linz.gpx", gpx_options).addTo(map);
new L.GPX("GPX/16. Linz - Wetzelsdorf.gpx", gpx_options).addTo(map);
new L.GPX("GPX/17. Wetzelsdorf - Krems an der Donau.gpx", gpx_options).addTo(map);
new L.GPX("GPX/18. Krems an der Donau - Vienna.gpx", gpx_options).addTo(map);

// Icon we"re here

var bikeIcon = L.icon({
    iconUrl: "https://image.flaticon.com/icons/svg/10/10440.svg",
    iconSize: [40, 120], // size of the icon
});

L.marker([48.1205, 16.2692], { icon: bikeIcon }).addTo(map);
