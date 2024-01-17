var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_worldadministrativeboundaries1_1 = new ol.format.GeoJSON();
var features_worldadministrativeboundaries1_1 = format_worldadministrativeboundaries1_1.readFeatures(json_worldadministrativeboundaries1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldadministrativeboundaries1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldadministrativeboundaries1_1.addFeatures(features_worldadministrativeboundaries1_1);
var lyr_worldadministrativeboundaries1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_worldadministrativeboundaries1_1, 
                style: style_worldadministrativeboundaries1_1,
                interactive: false,
                title: '<img src="styles/legend/worldadministrativeboundaries1_1.png" /> world-administrative-boundaries (1)'
            });
var format_World_Cities_2 = new ol.format.GeoJSON();
var features_World_Cities_2 = format_World_Cities_2.readFeatures(json_World_Cities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_World_Cities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_World_Cities_2.addFeatures(features_World_Cities_2);
var lyr_World_Cities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_World_Cities_2, 
                style: style_World_Cities_2,
                interactive: false,
    title: 'World_Cities<br />\
    <img src="styles/legend/World_Cities_2_0.png" /> 0 - 770027<br />\
    <img src="styles/legend/World_Cities_2_1.png" /> 770027 - 2693976<br />\
    <img src="styles/legend/World_Cities_2_2.png" /> 2693976 - 6772000<br />\
    <img src="styles/legend/World_Cities_2_3.png" /> 6772000 - 14167000<br />\
    <img src="styles/legend/World_Cities_2_4.png" /> 14167000 - 26121000<br />'
        });

lyr_EsriDarkGray_0.setVisible(true);lyr_worldadministrativeboundaries1_1.setVisible(true);lyr_World_Cities_2.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_worldadministrativeboundaries1_1,lyr_World_Cities_2];
lyr_worldadministrativeboundaries1_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'continent': 'continent', 'region': 'region', 'iso_3166_1_alpha_2_codes': 'iso_3166_1_alpha_2_codes', 'french_short': 'french_short', });
lyr_World_Cities_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'OBJECTID': 'OBJECTID', 'CITY_NAME': 'CITY_NAME', 'GMI_ADMIN': 'GMI_ADMIN', 'ADMIN_NAME': 'ADMIN_NAME', 'FIPS_CNTRY': 'FIPS_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'STATUS': 'STATUS', 'POP': 'POP', 'POP_RANK': 'POP_RANK', 'POP_CLASS': 'POP_CLASS', 'PORT_ID': 'PORT_ID', 'LABEL_FLAG': 'LABEL_FLAG', 'POP_SOURCE': 'POP_SOURCE', });
lyr_worldadministrativeboundaries1_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1_alpha_2_codes': 'TextEdit', 'french_short': 'TextEdit', });
lyr_World_Cities_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'FID': 'Range', 'OBJECTID': 'Range', 'CITY_NAME': 'TextEdit', 'GMI_ADMIN': 'TextEdit', 'ADMIN_NAME': 'TextEdit', 'FIPS_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'STATUS': 'TextEdit', 'POP': 'Range', 'POP_RANK': 'Range', 'POP_CLASS': 'TextEdit', 'PORT_ID': 'Range', 'LABEL_FLAG': 'Range', 'POP_SOURCE': 'TextEdit', });
lyr_worldadministrativeboundaries1_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_alpha_2_codes': 'no label', 'french_short': 'no label', });
lyr_World_Cities_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'OBJECTID': 'no label', 'CITY_NAME': 'no label', 'GMI_ADMIN': 'no label', 'ADMIN_NAME': 'no label', 'FIPS_CNTRY': 'no label', 'CNTRY_NAME': 'no label', 'STATUS': 'no label', 'POP': 'no label', 'POP_RANK': 'no label', 'POP_CLASS': 'no label', 'PORT_ID': 'no label', 'LABEL_FLAG': 'no label', 'POP_SOURCE': 'no label', });
lyr_World_Cities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});