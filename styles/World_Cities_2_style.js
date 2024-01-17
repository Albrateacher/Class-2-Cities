var size = 0;
var placement = 'point';

var style_World_Cities_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("POP");
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    if (value >= 0.000000 && value <= 770027.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.593)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,177,97,0.593)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 770027.000000 && value <= 2693976.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.593)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,177,97,0.593)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2693976.000000 && value <= 6772000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.593)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,177,97,0.593)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6772000.000000 && value <= 14167000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.799999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.593)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,177,97,0.593)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 14167000.000000 && value <= 26121000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 17.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.593)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,177,97,0.593)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
