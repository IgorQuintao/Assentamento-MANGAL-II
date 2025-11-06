ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([662982.390096, 8586452.609592, 682255.037351, 8594634.209592]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_2MpanRGBNRECORTADOMANGALII_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2M-panRGBN-RECORTADO-MANGAL-II<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2MpanRGBNRECORTADOMANGALII_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4843353.610124, -1435889.963410, -4830394.332843, -1419726.352156]
        })
    });
var lyr_NDVIMANGALII_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI-MANGAL-II<br />\
    <img src="styles/legend/NDVIMANGALII_2_0.png" /> <= 0,10<br />\
    <img src="styles/legend/NDVIMANGALII_2_1.png" /> 0,10 - 0,15<br />\
    <img src="styles/legend/NDVIMANGALII_2_2.png" /> 0,15 - 0,20<br />\
    <img src="styles/legend/NDVIMANGALII_2_3.png" /> 0,20 - 0,45<br />\
    <img src="styles/legend/NDVIMANGALII_2_4.png" /> > 0,45<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIMANGALII_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4843346.527066, -1435884.658132, -4830401.615929, -1419731.156884]
        })
    });
var format_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3 = format_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.readFeatures(json_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.addFeatures(features_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3);
var lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3, 
                style: style_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3,
                popuplayertitle: 'Poligono Confrontante presente no SNCI - FAZENDA RURAL BREJOLÂNDIA',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.png" /> Poligono Confrontante presente no SNCI - FAZENDA RURAL BREJOLÂNDIA'
            });
var format_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4 = format_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.readFeatures(json_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.addFeatures(features_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4);
var lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4, 
                style: style_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4,
                popuplayertitle: 'Poligono Confrontante presente no SNCI - FAZENDA AGUA BRANCA',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.png" /> Poligono Confrontante presente no SNCI - FAZENDA AGUA BRANCA'
            });
var format_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5 = format_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.readFeatures(json_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.addFeatures(features_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5);
var lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5, 
                style: style_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5,
                popuplayertitle: 'Poligono Confrontante presente no BDN - NOVA ESPERANCA',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.png" /> Poligono Confrontante presente no BDN - NOVA ESPERANCA'
            });
var format_PoligonoConfrontantepresentenoBDNMANGALI_6 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoBDNMANGALI_6 = format_PoligonoConfrontantepresentenoBDNMANGALI_6.readFeatures(json_PoligonoConfrontantepresentenoBDNMANGALI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoBDNMANGALI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoBDNMANGALI_6.addFeatures(features_PoligonoConfrontantepresentenoBDNMANGALI_6);
var lyr_PoligonoConfrontantepresentenoBDNMANGALI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoBDNMANGALI_6, 
                style: style_PoligonoConfrontantepresentenoBDNMANGALI_6,
                popuplayertitle: 'Poligono Confrontante presente no BDN - MANGAL I',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoBDNMANGALI_6.png" /> Poligono Confrontante presente no BDN - MANGAL I'
            });
var format_PoligonoConfrontantepresentenoBDNVALEVERDE_7 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoBDNVALEVERDE_7 = format_PoligonoConfrontantepresentenoBDNVALEVERDE_7.readFeatures(json_PoligonoConfrontantepresentenoBDNVALEVERDE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoBDNVALEVERDE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoBDNVALEVERDE_7.addFeatures(features_PoligonoConfrontantepresentenoBDNVALEVERDE_7);
var lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoBDNVALEVERDE_7, 
                style: style_PoligonoConfrontantepresentenoBDNVALEVERDE_7,
                popuplayertitle: 'Poligono Confrontante presente no BDN - VALE VERDE',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoBDNVALEVERDE_7.png" /> Poligono Confrontante presente no BDN - VALE VERDE'
            });
var format_poligonoestradaseccionanteperimetro_8 = new ol.format.GeoJSON();
var features_poligonoestradaseccionanteperimetro_8 = format_poligonoestradaseccionanteperimetro_8.readFeatures(json_poligonoestradaseccionanteperimetro_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_poligonoestradaseccionanteperimetro_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonoestradaseccionanteperimetro_8.addFeatures(features_poligonoestradaseccionanteperimetro_8);
var lyr_poligonoestradaseccionanteperimetro_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligonoestradaseccionanteperimetro_8, 
                style: style_poligonoestradaseccionanteperimetro_8,
                popuplayertitle: 'poligono-estrada-seccionante-perimetro',
                interactive: true,
                title: '<img src="styles/legend/poligonoestradaseccionanteperimetro_8.png" /> poligono-estrada-seccionante-perimetro'
            });
var format_MANGALIISECCIONAMENTOPERIMETRO_9 = new ol.format.GeoJSON();
var features_MANGALIISECCIONAMENTOPERIMETRO_9 = format_MANGALIISECCIONAMENTOPERIMETRO_9.readFeatures(json_MANGALIISECCIONAMENTOPERIMETRO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MANGALIISECCIONAMENTOPERIMETRO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGALIISECCIONAMENTOPERIMETRO_9.addFeatures(features_MANGALIISECCIONAMENTOPERIMETRO_9);
var lyr_MANGALIISECCIONAMENTOPERIMETRO_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGALIISECCIONAMENTOPERIMETRO_9, 
                style: style_MANGALIISECCIONAMENTOPERIMETRO_9,
                popuplayertitle: 'MANGAL-II-SECCIONAMENTO-PERIMETRO',
                interactive: true,
                title: '<img src="styles/legend/MANGALIISECCIONAMENTOPERIMETRO_9.png" /> MANGAL-II-SECCIONAMENTO-PERIMETRO'
            });
var format_BA161estradaseccionanteperimetro_10 = new ol.format.GeoJSON();
var features_BA161estradaseccionanteperimetro_10 = format_BA161estradaseccionanteperimetro_10.readFeatures(json_BA161estradaseccionanteperimetro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BA161estradaseccionanteperimetro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA161estradaseccionanteperimetro_10.addFeatures(features_BA161estradaseccionanteperimetro_10);
var lyr_BA161estradaseccionanteperimetro_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BA161estradaseccionanteperimetro_10, 
                style: style_BA161estradaseccionanteperimetro_10,
                popuplayertitle: 'BA-161-estrada-seccionante-perimetro',
                interactive: true,
                title: '<img src="styles/legend/BA161estradaseccionanteperimetro_10.png" /> BA-161-estrada-seccionante-perimetro'
            });
var format_MANGALIIVERTICESPERIMETRO_11 = new ol.format.GeoJSON();
var features_MANGALIIVERTICESPERIMETRO_11 = format_MANGALIIVERTICESPERIMETRO_11.readFeatures(json_MANGALIIVERTICESPERIMETRO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MANGALIIVERTICESPERIMETRO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGALIIVERTICESPERIMETRO_11.addFeatures(features_MANGALIIVERTICESPERIMETRO_11);
var lyr_MANGALIIVERTICESPERIMETRO_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGALIIVERTICESPERIMETRO_11, 
                style: style_MANGALIIVERTICESPERIMETRO_11,
                popuplayertitle: 'MANGAL-II-VERTICES-PERIMETRO',
                interactive: true,
                title: '<img src="styles/legend/MANGALIIVERTICESPERIMETRO_11.png" /> MANGAL-II-VERTICES-PERIMETRO'
            });
var group_PERIMETROSECCIONADO = new ol.layer.Group({
                                layers: [lyr_poligonoestradaseccionanteperimetro_8,lyr_MANGALIISECCIONAMENTOPERIMETRO_9,lyr_BA161estradaseccionanteperimetro_10,lyr_MANGALIIVERTICESPERIMETRO_11,],
                                fold: 'open',
                                title: 'PERIMETRO-SECCIONADO'});
var group_ConfrontantesGeorreferenciados = new ol.layer.Group({
                                layers: [lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3,lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4,lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5,lyr_PoligonoConfrontantepresentenoBDNMANGALI_6,lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_7,],
                                fold: 'open',
                                title: 'Confrontantes Georreferenciados'});
var group_SATCBERS_4A = new ol.layer.Group({
                                layers: [lyr_2MpanRGBNRECORTADOMANGALII_1,lyr_NDVIMANGALII_2,],
                                fold: 'open',
                                title: 'SAT-CBERS_4A'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_2MpanRGBNRECORTADOMANGALII_1.setVisible(false);lyr_NDVIMANGALII_2.setVisible(false);lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.setVisible(true);lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.setVisible(true);lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.setVisible(true);lyr_PoligonoConfrontantepresentenoBDNMANGALI_6.setVisible(true);lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_7.setVisible(true);lyr_poligonoestradaseccionanteperimetro_8.setVisible(true);lyr_MANGALIISECCIONAMENTOPERIMETRO_9.setVisible(true);lyr_BA161estradaseccionanteperimetro_10.setVisible(true);lyr_MANGALIIVERTICESPERIMETRO_11.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_SATCBERS_4A,group_ConfrontantesGeorreferenciados,group_PERIMETROSECCIONADO];
lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.set('fieldAliases', {'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.set('fieldAliases', {'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_PoligonoConfrontantepresentenoBDNMANGALI_6.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_7.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_poligonoestradaseccionanteperimetro_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_Lote': 'ID_Lote', 'Cod_PA': 'Cod_PA', 'Grupo': 'Grupo', 'Numero': 'Numero', 'Cod_lote': 'Cod_lote', 'Descricao': 'Descricao', 'Nome_lote': 'Nome_lote', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Obs': 'Obs', 'CNS': 'CNS', 'MAT': 'MAT', 'CPF': 'CPF', 'Nome_Prop': 'Nome_Prop', 'Tipo_lote': 'Tipo_lote', 'Ocupantes': 'Ocupantes', 'numero_num': 'numero_num', });
lyr_MANGALIISECCIONAMENTOPERIMETRO_9.set('fieldAliases', {'fid': 'fid', 'ID_Original': 'ID_Original', });
lyr_BA161estradaseccionanteperimetro_10.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'Id_Referen': 'Id_Referen', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Tipo_Reves': 'Tipo_Reves', 'Convenio': 'Convenio', 'MP082': 'MP082', 'Jurisdicao': 'Jurisdicao', 'Referencia': 'Referencia', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', });
lyr_MANGALIIVERTICESPERIMETRO_11.set('fieldAliases', {'fid': 'fid', 'Arquivo_Origem': 'Arquivo_Origem', 'Vertice': 'Vertice', 'Longitude_GMS': 'Longitude_GMS', 'Sigma_Lon': 'Sigma_Lon', 'Latitude_GMS': 'Latitude_GMS', 'Sigma_Lat': 'Sigma_Lat', 'Altitude': 'Altitude', 'Sigma_Alt': 'Sigma_Alt', 'Metodo': 'Metodo', 'Tipo_Limite': 'Tipo_Limite', 'cns': 'cns', 'Matricula': 'Matricula', 'Descricao': 'Descricao', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.set('fieldImages', {'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.set('fieldImages', {'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoBDNMANGALI_6.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_7.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_poligonoestradaseccionanteperimetro_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ID_Lote': 'TextEdit', 'Cod_PA': 'TextEdit', 'Grupo': 'TextEdit', 'Numero': 'TextEdit', 'Cod_lote': 'TextEdit', 'Descricao': 'TextEdit', 'Nome_lote': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Obs': 'TextEdit', 'CNS': 'TextEdit', 'MAT': 'TextEdit', 'CPF': 'TextEdit', 'Nome_Prop': 'TextEdit', 'Tipo_lote': 'TextEdit', 'Ocupantes': 'TextEdit', 'numero_num': 'Range', });
lyr_MANGALIISECCIONAMENTOPERIMETRO_9.set('fieldImages', {'fid': 'TextEdit', 'ID_Original': 'TextEdit', });
lyr_BA161estradaseccionanteperimetro_10.set('fieldImages', {'fid': '', 'id_cide': '', 'Id_Referen': '', 'Codigo_Rod': '', 'Tipo_Trech': '', 'Unidade_Fe': '', 'Codigo_SNV': '', 'Codigo_SRE': '', 'Local_Inic': '', 'Local_Fim': '', 'Quilometra': '', 'Quilometr0': '', 'Extensao': '', 'Superficie': '', 'Tipo_Reves': '', 'Convenio': '', 'MP082': '', 'Jurisdicao': '', 'Referencia': '', 'dt_ini': '', 'dt_fim': '', });
lyr_MANGALIIVERTICESPERIMETRO_11.set('fieldImages', {'fid': 'TextEdit', 'Arquivo_Origem': 'TextEdit', 'Vertice': 'TextEdit', 'Longitude_GMS': 'TextEdit', 'Sigma_Lon': 'TextEdit', 'Latitude_GMS': 'TextEdit', 'Sigma_Lat': 'TextEdit', 'Altitude': 'TextEdit', 'Sigma_Alt': 'TextEdit', 'Metodo': 'TextEdit', 'Tipo_Limite': 'TextEdit', 'cns': 'TextEdit', 'Matricula': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_3.set('fieldLabels', {'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_4.set('fieldLabels', {'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_5.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_PoligonoConfrontantepresentenoBDNMANGALI_6.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_7.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_poligonoestradaseccionanteperimetro_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ID_Lote': 'no label', 'Cod_PA': 'no label', 'Grupo': 'no label', 'Numero': 'no label', 'Cod_lote': 'no label', 'Descricao': 'no label', 'Nome_lote': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Obs': 'no label', 'CNS': 'no label', 'MAT': 'no label', 'CPF': 'no label', 'Nome_Prop': 'no label', 'Tipo_lote': 'no label', 'Ocupantes': 'no label', 'numero_num': 'no label', });
lyr_MANGALIISECCIONAMENTOPERIMETRO_9.set('fieldLabels', {'fid': 'no label', 'ID_Original': 'no label', });
lyr_BA161estradaseccionanteperimetro_10.set('fieldLabels', {'fid': 'no label', 'id_cide': 'no label', 'Id_Referen': 'no label', 'Codigo_Rod': 'no label', 'Tipo_Trech': 'no label', 'Unidade_Fe': 'no label', 'Codigo_SNV': 'no label', 'Codigo_SRE': 'no label', 'Local_Inic': 'no label', 'Local_Fim': 'no label', 'Quilometra': 'no label', 'Quilometr0': 'no label', 'Extensao': 'no label', 'Superficie': 'no label', 'Tipo_Reves': 'no label', 'Convenio': 'no label', 'MP082': 'no label', 'Jurisdicao': 'no label', 'Referencia': 'no label', 'dt_ini': 'no label', 'dt_fim': 'no label', });
lyr_MANGALIIVERTICESPERIMETRO_11.set('fieldLabels', {'fid': 'no label', 'Arquivo_Origem': 'no label', 'Vertice': 'no label', 'Longitude_GMS': 'no label', 'Sigma_Lon': 'no label', 'Latitude_GMS': 'no label', 'Sigma_Lat': 'no label', 'Altitude': 'no label', 'Sigma_Alt': 'no label', 'Metodo': 'no label', 'Tipo_Limite': 'no label', 'cns': 'no label', 'Matricula': 'no label', 'Descricao': 'no label', });
lyr_MANGALIIVERTICESPERIMETRO_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});