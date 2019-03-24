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

var marker = L.marker([48.1486, 17.1077]).addTo(map);
marker.bindPopup('<a href="https://medium.com/road-to-the-rising-sun/bye-bye-to-western-europe-hello-to-the-east-e76549c9f94a?fbclid=IwAR0K2A50F23NcOvo1wyIlqQWmmsMSbB60Hisw0o-HbxS-Bjrnsyel2FLpnk" target="_blank"><b>Bye bye to Western Europe, hello to the East!</b></a><br>3 March in Bratislava: blog post with video').openPopup();

var marker = L.marker([44.7866, 20.4489]).addTo(map);
marker.bindPopup('<a href="https://medium.com/road-to-the-rising-sun/fewer-cycling-paths-more-fascinating-inside-stories-and-stray-dogs-af11f5567bc1" target="_blank"><b>Fewer cycling paths, more fascinating inside stories and stray dogs</b></a><br>18 March in Belgrade: blog post with video').openPopup();

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
new L.GPX("GPX/19. Vienna - Bratislava.gpx", gpx_options).addTo(map);
new L.GPX("GPX/20. Bratislava - Gyor.gpx", gpx_options).addTo(map);
new L.GPX("GPX/21. Gyor - Zirc.gpx", gpx_options).addTo(map);
new L.GPX("GPX/22. Zirc - Balatonfured.gpx", gpx_options).addTo(map);
new L.GPX("GPX/23. Balatonfured - Nagykanizsa.gpx", gpx_options).addTo(map);
new L.GPX("GPX/24. Nagykanizsa - Ferdinandovac.gpx", gpx_options).addTo(map);
new L.GPX("GPX/25. Ferdinandovac - Pecs.gpx", gpx_options).addTo(map);
new L.GPX("GPX/26. Pecs - Mohacs.gpx", gpx_options).addTo(map);
new L.GPX("GPX/26. Pecs - Mohacs.gpx", gpx_options).addTo(map);
new L.GPX("GPX/27. Mohacs - Bezdan.gpx", gpx_options).addTo(map);
new L.GPX("GPX/28. Bezdan - Bac.gpx", gpx_options).addTo(map);
new L.GPX("GPX/29. Bac - Novi Sad.gpx", gpx_options).addTo(map);
new L.GPX("GPX/30. Novi Sad - Belgrade.gpx", gpx_options).addTo(map);
new L.GPX("GPX/31. Belgrade - Vrsac.gpx", gpx_options).addTo(map);
new L.GPX("GPX/32. Vrsac - Veliko Gradiste.gpx", gpx_options).addTo(map);
new L.GPX("GPX/33. Veliko Gradiste - Donji Milanovac.gpx", gpx_options).addTo(map);
new L.GPX("GPX/34. Donji Milanovac - Kladovo.gpx", gpx_options).addTo(map);
new L.GPX("GPX/35. Kladovo - Negotin.gpx", gpx_options).addTo(map);



// Icon we"re here

var bikeIcon = L.icon({
    iconUrl: "https://image.flaticon.com/icons/svg/10/10440.svg",
    iconSize: [40, 120], // size of the icon
});

L.marker([44.2289, 22.5311], { icon: bikeIcon }).addTo(map);
