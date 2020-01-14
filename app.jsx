// Map

var map = L.map("map").setView([43.8021, 40.9968], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>",
    maxZoom: 20,
}).addTo(map);

// Markers

var Brussels = L.marker([50.8503396, 4.351710300000036]).bindPopup("<b>Starting point!</b><br>Departure on Sunday 3 February"),
    Munich = L.marker([48.1351, 11.5820]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/were-off-the-beginning-of-a-new-chapter-60fb434c6771" target="_blank"><b>We’re off! The beginning of a new chapter</b></a><br>17 February in Munich: First blog post'),
    Bratislava = L.marker([48.1486, 17.1077]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/bye-bye-to-western-europe-hello-to-the-east-e76549c9f94a?fbclid=IwAR0K2A50F23NcOvo1wyIlqQWmmsMSbB60Hisw0o-HbxS-Bjrnsyel2FLpnk" target="_blank"><b>Bye bye to Western Europe, hello to the East!</b></a><br>3 March in Bratislava: blog post with video'),
    Belgrade = L.marker([44.7866, 20.4489]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/fewer-cycling-paths-more-fascinating-inside-stories-and-stray-dogs-af11f5567bc1" target="_blank"><b>Fewer cycling paths, more fascinating inside stories and stray dogs</b></a><br>18 March in Belgrade: blog post with video'),
    Sofia = L.marker([42.6977, 23.3219]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/impressed-by-the-beauty-of-the-balkans-cycling-from-belgrade-to-sofia-239482c65aca" target="_blank"><b>Impressed by the beauty of the Balkans: cycling from Belgrade to Sofia</b></a><br>31 March in Sofia: blog post with video'),
    Izmir = L.marker([38.4237, 27.1428]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/turkey-the-country-that-made-us-change-our-travel-itinerary-199e32a3b0bd" target="_blank"><b>Turkey: the country that made us change our travel itinerary</b></a><br>1 May in Izmir: blog post'),
    Silopi = L.marker([37.3055, 42.4983]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/the-end-of-our-2-unforgettable-months-in-turkey-d959fcf43f79" target="_blank"><b>The end of our 2 unforgettable months in Turkey!</b></a><br>29 May in Silopi: blog post with video'),
    Sulaymaniyah = L.marker([35.5558, 45.4351]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/exploring-the-unthinkable-iraqi-kurdistan-f98960587747" target="_blank"><b>Exploring the unthinkable: Iraqi Kurdistan</b></a><br>5 June in Sulaymaniyah: blog post'),
    Mashhad = L.marker([36.2605, 59.6168]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/cycling-through-iran-a-very-intense-yet-extremely-rewarding-experience-b1c43f29591b" target="_blank"><b>Cycling through Iran: a very intense yet extremely rewarding experience</b></a><br>9 July in Mashhad: blog post'),
    Turkmenabad = L.marker([39.0041, 63.5688]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/tour-of-turkmenistan-race-against-time-5db84b508a06" target="_blank"><b>Tour of Turkmenistan: race against time</b></a><br>15 July in Turkmenabad: blog post'),
    Osh = L.marker([40.5140, 72.8161]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/one-month-of-nature-in-its-purest-form-in-tajikistan-kyrgyzstan-dbcd5d310e9b" target="_blank"><b>One month of nature in its purest form in Tajikistan & Kyrgyzstan</b></a><br>18 August in Osh: blog post + video'),
    Bishkek = L.marker([42.8746, 74.5698]).bindPopup('<a href="https://velotourfestival.be/" target="_blank"><b>Great news! We are going to organise the first Velo Tour Festival in Belgium next year!</b></a><br>Announcement: 1 September in Bishkek'),
    Guilin = L.marker([25.2345, 110.1800]).bindPopup('<a><b>First-hand experience of the Great Firewall of China: impossible to publish blog posts</b></a><br>15 October in Guilin: digital detox'),
    Beijing = L.marker([39.9042, 116.4074]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/china-a-country-with-multiple-faces-our-journey-and-impressions-on-the-bicycle-4c38e9a638ab" target="_blank"><b>China, a country with multiple faces: our journey and impressions on the bicycle</b></a><br>29 October in Beijing: blog post'),
    Busan = L.marker([35.1796, 129.0756]).bindPopup('<a href="https://medium.com/road-to-the-rising-sun/autumn-cycling-in-south-korea-4c754d76fb71" target="_blank"><b>Autumn cycling in South Korea</b></a><br>14 November in Busan: blog post');

var posts = L.layerGroup([Brussels, Munich, Bratislava, Belgrade, Sofia, Izmir, Silopi, Sulaymaniyah, Mashhad, Turkmenabad, Osh, Bishkek, Guilin, Beijing, Busan]);

map.addLayer(posts);

var overlayMaps = {
    "Our blog posts": posts
};

L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

/*
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

*/

// real GPX data

var gpx_options = {
    async: false,
    marker_options: {
        startIconUrl: null,
        endIconUrl: null,
        shadowUrl: null
    }
}

new L.GPX("GPX/Europa.gpx", gpx_options).addTo(map);
new L.GPX("GPX/Turkey1.gpx", gpx_options).addTo(map);
/*new L.GPX("GPX/Turkey2.gpx", gpx_options).addTo(map);*/
/*new L.GPX("GPX/Turkey3.gpx", gpx_options).addTo(map);*/
/*new L.GPX("GPX/Kurdistan.gpx", gpx_options).addTo(map);*/
new L.GPX("GPX/Izmir-Qazvin.gpx", gpx_options).addTo(map);
new L.GPX("GPX/Iran-Dushanbe.gpx", gpx_options).addTo(map);
new L.GPX("GPX/Pamir-Highway.gpx", gpx_options).addTo(map);
new L.GPX("GPX/Osh-Dali.gpx", gpx_options).addTo(map);
new L.GPX("GPX/China-Seoul.gpx", gpx_options).addTo(map);
new L.GPX("GPX/Seoul-Nagasaki.gpx", gpx_options).addTo(map);
new L.GPX("GPX/Nagasaki-Tokyo.gpx", gpx_options).addTo(map);

// data collected during our travel

/*

new L.GPX("GPX/Recommendations-locals.gpx", {
  async: true,
  marker_options: {
    shadowUrl: 'https://image.flaticon.com/icons/svg/616/616489.svg',
    shadowSize: [15, 14]
  }
}).on('loaded', function (e) {
  var gpx = e.target;
  map.fitBounds(gpx.getBounds());
}).addTo(map);

*/

/*

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
new L.GPX("GPX/36. Negotin - Belogradchik.gpx", gpx_options).addTo(map);
new L.GPX("GPX/37. Belogradchik - Berkovitsa.gpx", gpx_options).addTo(map);
new L.GPX("GPX/38. Berkovitsa - Sofia.gpx", gpx_options).addTo(map);
new L.GPX("GPX/39. Sofia - Plovdiv.gpx", gpx_options).addTo(map);
new L.GPX("GPX/40. Plovdiv - Svilengrad.gpx", gpx_options).addTo(map);
new L.GPX("GPX/41. Svilengrad - Edirne.gpx", gpx_options).addTo(map);
new L.GPX("GPX/42. Edirne - Kirklareli.gpx", gpx_options).addTo(map);
new L.GPX("GPX/43. Kirklareli - Saray.gpx", gpx_options).addTo(map);
new L.GPX("GPX/44. Saray - Arnavutkoy.gpx", gpx_options).addTo(map);
new L.GPX("GPX/45. Arnavutkoy - Ortakoy.gpx", gpx_options).addTo(map);
new L.GPX("GPX/46. Ortakoy - Kadikoy.gpx", gpx_options).addTo(map);
new L.GPX("GPX/47. Kadikoy - Denizkent.gpx", gpx_options).addTo(map);
new L.GPX("GPX/48. Denizkent - Lapseki.gpx", gpx_options).addTo(map);
new L.GPX("GPX/49. Lapseki - Canakkale.gpx", gpx_options).addTo(map);
new L.GPX("GPX/50. Canakkale - Troy.gpx", gpx_options).addTo(map);
new L.GPX("GPX/51. Troy - Iskele.gpx", gpx_options).addTo(map);
new L.GPX("GPX/52. Iskele - Ayvalik.gpx", gpx_options).addTo(map);
new L.GPX("GPX/53. Ayvalik - Bergama.gpx", gpx_options).addTo(map);
new L.GPX("GPX/54. Bergama - Aliaga.gpx", gpx_options).addTo(map);
new L.GPX("GPX/55. Aliaga - Izmir.gpx", gpx_options).addTo(map);
new L.GPX("GPX/57. Aksaray - Belisirma.gpx", gpx_options).addTo(map);
new L.GPX("GPX/58. Belisirma - White Valley.gpx", gpx_options).addTo(map);
new L.GPX("GPX/59. White Valley - Swords Valley.gpx", gpx_options).addTo(map);
new L.GPX("GPX/60. Swords Valley - Nevsehir.gpx", gpx_options).addTo(map);
*/

// Icon we"re here

var bikeIcon = L.icon({
    iconUrl: "https://image.flaticon.com/icons/png/512/1505/1505465.png",
    iconSize: [40, 40], // size of the icon
});

var marker = L.marker([35.6762, 139.6503], { icon: bikeIcon }).addTo(map);
marker.bindPopup('<b>WE MADE IT TO TOKYO! 🇯🇵</b><p>What started out as a crazy idea turned out to be the journey of a lifetime across different cultures - a journey that would not have been possible without all the amazing people we met on our way. 🙏🏻<p>We feel incredibly thankful to everyone who was part of this intense journey. Now it is our turn to welcome cyclists and other travelers at our place. You can <a href="https://www.warmshowers.org/users/driesvr" target="_blank"><b>find us on Warmshowers</b></a>. Happy cycling! ❤️<p>P.S.: You are all invited to the <a href="https://www.velotourfestival.be" target="_blank"><b>VeloTour Festival</b></a> we are going to organise in Belgium from 1 to 3 May 2020.').openPopup();