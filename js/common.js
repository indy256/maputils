function addMapSelector(map) {
    var osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: ""});
    var yandexLayer = new L.Yandex("map");
    var yandexTrafficLayer = new L.Yandex("map", {traffic: true});
    var yandexSatelliteLayer = new L.Yandex("satellite");
    var googleLayer = new L.Google("ROADMAP");
    var googleSatelliteLayer = new L.Google("SATELLITE");
    var bingLayer = new L.BingLayer("LfO3DMI9S6GnXD7d0WGs~bq2DRVkmIAzSOFdodzZLvw~Arx8dclDxmZA0Y38tHIJlJfnMbGq5GXeYmrGOUIbS2VLFzRKCK0Yv_bAl6oe-DOc", {type: "Road"});
    var bingSatelliteLayer = new L.BingLayer("LfO3DMI9S6GnXD7d0WGs~bq2DRVkmIAzSOFdodzZLvw~Arx8dclDxmZA0Y38tHIJlJfnMbGq5GXeYmrGOUIbS2VLFzRKCK0Yv_bAl6oe-DOc", {type: "Aerial"});

    map.addLayer(osmLayer);
    map.addControl(new L.Control.Layers({
        "OpenStreetMap": osmLayer,
        "Google": googleLayer,
        "Bing": bingLayer,
        "Yandex": yandexLayer,
        "Yandex-jams": yandexTrafficLayer,
        "Yandex-satellite": yandexSatelliteLayer,
        "Google-satellite": googleSatelliteLayer,
        "Bing-satellite": bingSatelliteLayer
    }, {}));
}
