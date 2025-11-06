ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([651410.674575, 8586132.027934, 685083.565469, 8600426.801272]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVIMANGALII_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI-MANGAL-II<br />\
    <img src="styles/legend/NDVIMANGALII_1_0.png" /> <= 0,10<br />\
    <img src="styles/legend/NDVIMANGALII_1_1.png" /> 0,10 - 0,15<br />\
    <img src="styles/legend/NDVIMANGALII_1_2.png" /> 0,15 - 0,20<br />\
    <img src="styles/legend/NDVIMANGALII_1_3.png" /> 0,20 - 0,45<br />\
    <img src="styles/legend/NDVIMANGALII_1_4.png" /> > 0,45<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIMANGALII_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4843346.527066, -1435884.658132, -4830401.615929, -1419731.156884]
        })
    });
var format_pontosINCRA_2 = new ol.format.GeoJSON();
var features_pontosINCRA_2 = format_pontosINCRA_2.readFeatures(json_pontosINCRA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_pontosINCRA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontosINCRA_2.addFeatures(features_pontosINCRA_2);
var lyr_pontosINCRA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pontosINCRA_2, 
                style: style_pontosINCRA_2,
                popuplayertitle: 'pontos-INCRA',
                interactive: true,
                title: '<img src="styles/legend/pontosINCRA_2.png" /> pontos-INCRA'
            });
var format_linhasINCRALIMITECONSIDERAR_3 = new ol.format.GeoJSON();
var features_linhasINCRALIMITECONSIDERAR_3 = format_linhasINCRALIMITECONSIDERAR_3.readFeatures(json_linhasINCRALIMITECONSIDERAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_linhasINCRALIMITECONSIDERAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linhasINCRALIMITECONSIDERAR_3.addFeatures(features_linhasINCRALIMITECONSIDERAR_3);
var lyr_linhasINCRALIMITECONSIDERAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linhasINCRALIMITECONSIDERAR_3, 
                style: style_linhasINCRALIMITECONSIDERAR_3,
                popuplayertitle: 'linhas-INCRA-LIMITE-CONSIDERAR',
                interactive: true,
                title: '<img src="styles/legend/linhasINCRALIMITECONSIDERAR_3.png" /> linhas-INCRA-LIMITE-CONSIDERAR'
            });
var format_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4 = format_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.readFeatures(json_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.addFeatures(features_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4);
var lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4, 
                style: style_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4,
                popuplayertitle: 'Poligono Confrontante presente no SNCI - FAZENDA RURAL BREJOLÂNDIA',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.png" /> Poligono Confrontante presente no SNCI - FAZENDA RURAL BREJOLÂNDIA'
            });
var format_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5 = format_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.readFeatures(json_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.addFeatures(features_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5);
var lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5, 
                style: style_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5,
                popuplayertitle: 'Poligono Confrontante presente no SNCI - FAZENDA AGUA BRANCA',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.png" /> Poligono Confrontante presente no SNCI - FAZENDA AGUA BRANCA'
            });
var format_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6 = format_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.readFeatures(json_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.addFeatures(features_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6);
var lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6, 
                style: style_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6,
                popuplayertitle: 'Poligono Confrontante presente no BDN - NOVA ESPERANCA',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.png" /> Poligono Confrontante presente no BDN - NOVA ESPERANCA'
            });
var format_PoligonoConfrontantepresentenoBDNMANGALI_7 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoBDNMANGALI_7 = format_PoligonoConfrontantepresentenoBDNMANGALI_7.readFeatures(json_PoligonoConfrontantepresentenoBDNMANGALI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoBDNMANGALI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoBDNMANGALI_7.addFeatures(features_PoligonoConfrontantepresentenoBDNMANGALI_7);
var lyr_PoligonoConfrontantepresentenoBDNMANGALI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoBDNMANGALI_7, 
                style: style_PoligonoConfrontantepresentenoBDNMANGALI_7,
                popuplayertitle: 'Poligono Confrontante presente no BDN - MANGAL I',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoBDNMANGALI_7.png" /> Poligono Confrontante presente no BDN - MANGAL I'
            });
var format_PoligonoConfrontantepresentenoBDNVALEVERDE_8 = new ol.format.GeoJSON();
var features_PoligonoConfrontantepresentenoBDNVALEVERDE_8 = format_PoligonoConfrontantepresentenoBDNVALEVERDE_8.readFeatures(json_PoligonoConfrontantepresentenoBDNVALEVERDE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonoConfrontantepresentenoBDNVALEVERDE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoConfrontantepresentenoBDNVALEVERDE_8.addFeatures(features_PoligonoConfrontantepresentenoBDNVALEVERDE_8);
var lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonoConfrontantepresentenoBDNVALEVERDE_8, 
                style: style_PoligonoConfrontantepresentenoBDNVALEVERDE_8,
                popuplayertitle: 'Poligono Confrontante presente no BDN - VALE VERDE',
                interactive: true,
                title: '<img src="styles/legend/PoligonoConfrontantepresentenoBDNVALEVERDE_8.png" /> Poligono Confrontante presente no BDN - VALE VERDE'
            });
var format_MASCARARECORTEReservaeConfrontantes_9 = new ol.format.GeoJSON();
var features_MASCARARECORTEReservaeConfrontantes_9 = format_MASCARARECORTEReservaeConfrontantes_9.readFeatures(json_MASCARARECORTEReservaeConfrontantes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MASCARARECORTEReservaeConfrontantes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASCARARECORTEReservaeConfrontantes_9.addFeatures(features_MASCARARECORTEReservaeConfrontantes_9);
var lyr_MASCARARECORTEReservaeConfrontantes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASCARARECORTEReservaeConfrontantes_9, 
                style: style_MASCARARECORTEReservaeConfrontantes_9,
                popuplayertitle: 'MASCARA-RECORTE - Reserva e Confrontantes',
                interactive: true,
                title: '<img src="styles/legend/MASCARARECORTEReservaeConfrontantes_9.png" /> MASCARA-RECORTE - Reserva e Confrontantes'
            });
var format_poligonoestradaseccionanteperimetro_10 = new ol.format.GeoJSON();
var features_poligonoestradaseccionanteperimetro_10 = format_poligonoestradaseccionanteperimetro_10.readFeatures(json_poligonoestradaseccionanteperimetro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_poligonoestradaseccionanteperimetro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonoestradaseccionanteperimetro_10.addFeatures(features_poligonoestradaseccionanteperimetro_10);
var lyr_poligonoestradaseccionanteperimetro_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligonoestradaseccionanteperimetro_10, 
                style: style_poligonoestradaseccionanteperimetro_10,
                popuplayertitle: 'poligono-estrada-seccionante-perimetro',
                interactive: true,
                title: '<img src="styles/legend/poligonoestradaseccionanteperimetro_10.png" /> poligono-estrada-seccionante-perimetro'
            });
var format_MANGALIISECCIONAMENTOPERIMETRO_11 = new ol.format.GeoJSON();
var features_MANGALIISECCIONAMENTOPERIMETRO_11 = format_MANGALIISECCIONAMENTOPERIMETRO_11.readFeatures(json_MANGALIISECCIONAMENTOPERIMETRO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MANGALIISECCIONAMENTOPERIMETRO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGALIISECCIONAMENTOPERIMETRO_11.addFeatures(features_MANGALIISECCIONAMENTOPERIMETRO_11);
var lyr_MANGALIISECCIONAMENTOPERIMETRO_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGALIISECCIONAMENTOPERIMETRO_11, 
                style: style_MANGALIISECCIONAMENTOPERIMETRO_11,
                popuplayertitle: 'MANGAL-II-SECCIONAMENTO-PERIMETRO',
                interactive: true,
                title: '<img src="styles/legend/MANGALIISECCIONAMENTOPERIMETRO_11.png" /> MANGAL-II-SECCIONAMENTO-PERIMETRO'
            });
var format_BA161estradaseccionanteperimetro_12 = new ol.format.GeoJSON();
var features_BA161estradaseccionanteperimetro_12 = format_BA161estradaseccionanteperimetro_12.readFeatures(json_BA161estradaseccionanteperimetro_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BA161estradaseccionanteperimetro_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA161estradaseccionanteperimetro_12.addFeatures(features_BA161estradaseccionanteperimetro_12);
var lyr_BA161estradaseccionanteperimetro_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BA161estradaseccionanteperimetro_12, 
                style: style_BA161estradaseccionanteperimetro_12,
                popuplayertitle: 'BA-161-estrada-seccionante-perimetro',
                interactive: true,
                title: '<img src="styles/legend/BA161estradaseccionanteperimetro_12.png" /> BA-161-estrada-seccionante-perimetro'
            });
var format_MANGALIIVERTICESPERIMETRO_13 = new ol.format.GeoJSON();
var features_MANGALIIVERTICESPERIMETRO_13 = format_MANGALIIVERTICESPERIMETRO_13.readFeatures(json_MANGALIIVERTICESPERIMETRO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MANGALIIVERTICESPERIMETRO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGALIIVERTICESPERIMETRO_13.addFeatures(features_MANGALIIVERTICESPERIMETRO_13);
var lyr_MANGALIIVERTICESPERIMETRO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGALIIVERTICESPERIMETRO_13, 
                style: style_MANGALIIVERTICESPERIMETRO_13,
                popuplayertitle: 'MANGAL-II-VERTICES-PERIMETRO',
                interactive: true,
                title: '<img src="styles/legend/MANGALIIVERTICESPERIMETRO_13.png" /> MANGAL-II-VERTICES-PERIMETRO'
            });
var group_PERIMETROSECCIONADO = new ol.layer.Group({
                                layers: [lyr_poligonoestradaseccionanteperimetro_10,lyr_MANGALIISECCIONAMENTOPERIMETRO_11,lyr_BA161estradaseccionanteperimetro_12,lyr_MANGALIIVERTICESPERIMETRO_13,],
                                fold: 'open',
                                title: 'PERIMETRO-SECCIONADO'});
var group_ConfrontantesGeorreferenciados = new ol.layer.Group({
                                layers: [lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4,lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5,lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6,lyr_PoligonoConfrontantepresentenoBDNMANGALI_7,lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_8,],
                                fold: 'close',
                                title: 'Confrontantes Georreferenciados'});
var group_FiscalINCRA = new ol.layer.Group({
                                layers: [lyr_pontosINCRA_2,lyr_linhasINCRALIMITECONSIDERAR_3,],
                                fold: 'close',
                                title: 'Fiscal INCRA'});
var group_FiscalizaodeCampoUFVTecJosias = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Fiscalização de Campo - UFV - Tec. Josias'});
var group_SATCBERS_4A = new ol.layer.Group({
                                layers: [lyr_NDVIMANGALII_1,],
                                fold: 'close',
                                title: 'SAT-CBERS_4A'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_NDVIMANGALII_1.setVisible(false);lyr_pontosINCRA_2.setVisible(true);lyr_linhasINCRALIMITECONSIDERAR_3.setVisible(true);lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.setVisible(true);lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.setVisible(true);lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.setVisible(true);lyr_PoligonoConfrontantepresentenoBDNMANGALI_7.setVisible(true);lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_8.setVisible(true);lyr_MASCARARECORTEReservaeConfrontantes_9.setVisible(false);lyr_poligonoestradaseccionanteperimetro_10.setVisible(false);lyr_MANGALIISECCIONAMENTOPERIMETRO_11.setVisible(true);lyr_BA161estradaseccionanteperimetro_12.setVisible(true);lyr_MANGALIIVERTICESPERIMETRO_13.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_SATCBERS_4A,group_FiscalINCRA,group_ConfrontantesGeorreferenciados,lyr_MASCARARECORTEReservaeConfrontantes_9,group_PERIMETROSECCIONADO];
lyr_pontosINCRA_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'DOCE1': 'DOCE1', 'DOCE2': 'DOCE2', });
lyr_linhasINCRALIMITECONSIDERAR_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'DOC1': 'DOC1', 'DOC2': 'DOC2', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.set('fieldAliases', {'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', 'USE': 'USE', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.set('fieldAliases', {'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_PoligonoConfrontantepresentenoBDNMANGALI_7.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_8.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_MASCARARECORTEReservaeConfrontantes_9.set('fieldAliases', {'fid': 'fid', 'Cod_PA': 'Cod_PA', 'Municipio': 'Municipio', 'DOC': 'DOC', 'USE': 'USE', });
lyr_poligonoestradaseccionanteperimetro_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_Lote': 'ID_Lote', 'Cod_PA': 'Cod_PA', 'Grupo': 'Grupo', 'Numero': 'Numero', 'Cod_lote': 'Cod_lote', 'Descricao': 'Descricao', 'Nome_lote': 'Nome_lote', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Obs': 'Obs', 'CNS': 'CNS', 'MAT': 'MAT', 'CPF': 'CPF', 'Nome_Prop': 'Nome_Prop', 'Tipo_lote': 'Tipo_lote', 'Ocupantes': 'Ocupantes', 'numero_num': 'numero_num', });
lyr_MANGALIISECCIONAMENTOPERIMETRO_11.set('fieldAliases', {'fid': 'fid', 'ID_Original': 'ID_Original', });
lyr_BA161estradaseccionanteperimetro_12.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'Id_Referen': 'Id_Referen', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Tipo_Reves': 'Tipo_Reves', 'Convenio': 'Convenio', 'MP082': 'MP082', 'Jurisdicao': 'Jurisdicao', 'Referencia': 'Referencia', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', });
lyr_MANGALIIVERTICESPERIMETRO_13.set('fieldAliases', {'fid': 'fid', 'Arquivo_Origem': 'Arquivo_Origem', 'Vertice': 'Vertice', 'Longitude_GMS': 'Longitude_GMS', 'Sigma_Lon': 'Sigma_Lon', 'Latitude_GMS': 'Latitude_GMS', 'Sigma_Lat': 'Sigma_Lat', 'Altitude': 'Altitude', 'Sigma_Alt': 'Sigma_Alt', 'Metodo': 'Metodo', 'Tipo_Limite': 'Tipo_Limite', 'cns': 'cns', 'Matricula': 'Matricula', 'Descricao': 'Descricao', });
lyr_pontosINCRA_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'DOCE1': 'ExternalResource', 'DOCE2': 'ExternalResource', });
lyr_linhasINCRALIMITECONSIDERAR_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'DOC1': 'ExternalResource', 'DOC2': 'ExternalResource', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.set('fieldImages', {'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', 'USE': 'ExternalResource', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.set('fieldImages', {'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoBDNMANGALI_7.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_8.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_MASCARARECORTEReservaeConfrontantes_9.set('fieldImages', {'fid': 'TextEdit', 'Cod_PA': 'TextEdit', 'Municipio': 'TextEdit', 'DOC': 'ExternalResource', 'USE': 'ExternalResource', });
lyr_poligonoestradaseccionanteperimetro_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ID_Lote': 'TextEdit', 'Cod_PA': 'TextEdit', 'Grupo': 'TextEdit', 'Numero': 'TextEdit', 'Cod_lote': 'TextEdit', 'Descricao': 'TextEdit', 'Nome_lote': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Obs': 'TextEdit', 'CNS': 'TextEdit', 'MAT': 'TextEdit', 'CPF': 'TextEdit', 'Nome_Prop': 'TextEdit', 'Tipo_lote': 'TextEdit', 'Ocupantes': 'TextEdit', 'numero_num': 'Range', });
lyr_MANGALIISECCIONAMENTOPERIMETRO_11.set('fieldImages', {'fid': 'TextEdit', 'ID_Original': 'TextEdit', });
lyr_BA161estradaseccionanteperimetro_12.set('fieldImages', {'fid': '', 'id_cide': '', 'Id_Referen': '', 'Codigo_Rod': '', 'Tipo_Trech': '', 'Unidade_Fe': '', 'Codigo_SNV': '', 'Codigo_SRE': '', 'Local_Inic': '', 'Local_Fim': '', 'Quilometra': '', 'Quilometr0': '', 'Extensao': '', 'Superficie': '', 'Tipo_Reves': '', 'Convenio': '', 'MP082': '', 'Jurisdicao': '', 'Referencia': '', 'dt_ini': '', 'dt_fim': '', });
lyr_MANGALIIVERTICESPERIMETRO_13.set('fieldImages', {'fid': 'TextEdit', 'Arquivo_Origem': 'TextEdit', 'Vertice': 'TextEdit', 'Longitude_GMS': 'TextEdit', 'Sigma_Lon': 'TextEdit', 'Latitude_GMS': 'TextEdit', 'Sigma_Lat': 'TextEdit', 'Altitude': 'TextEdit', 'Sigma_Alt': 'TextEdit', 'Metodo': 'TextEdit', 'Tipo_Limite': 'TextEdit', 'cns': 'TextEdit', 'Matricula': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_pontosINCRA_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', });
lyr_linhasINCRALIMITECONSIDERAR_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDARURALBREJOLNDIA_4.set('fieldLabels', {'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_PoligonoConfrontantepresentenoSNCIFAZENDAAGUABRANCA_5.set('fieldLabels', {'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_PoligonoConfrontantepresentenoBDNNOVAESPERANCA_6.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_PoligonoConfrontantepresentenoBDNMANGALI_7.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_PoligonoConfrontantepresentenoBDNVALEVERDE_8.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_MASCARARECORTEReservaeConfrontantes_9.set('fieldLabels', {'fid': 'hidden field', 'Cod_PA': 'no label', 'Municipio': 'no label', });
lyr_poligonoestradaseccionanteperimetro_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ID_Lote': 'hidden field', 'Cod_PA': 'hidden field', 'Grupo': 'no label', 'Numero': 'hidden field', 'Cod_lote': 'hidden field', 'Descricao': 'no label', 'Nome_lote': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Obs': 'hidden field', 'CNS': 'hidden field', 'MAT': 'hidden field', 'CPF': 'hidden field', 'Nome_Prop': 'hidden field', 'Tipo_lote': 'hidden field', 'Ocupantes': 'hidden field', 'numero_num': 'hidden field', });
lyr_MANGALIISECCIONAMENTOPERIMETRO_11.set('fieldLabels', {'fid': 'hidden field', 'ID_Original': 'no label', });
lyr_BA161estradaseccionanteperimetro_12.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'hidden field', 'Id_Referen': 'hidden field', 'Codigo_Rod': 'no label', 'Tipo_Trech': 'no label', 'Unidade_Fe': 'no label', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'no label', 'Local_Inic': 'hidden field', 'Local_Fim': 'hidden field', 'Quilometra': 'hidden field', 'Quilometr0': 'hidden field', 'Extensao': 'hidden field', 'Superficie': 'no label', 'Tipo_Reves': 'no label', 'Convenio': 'no label', 'MP082': 'no label', 'Jurisdicao': 'no label', 'Referencia': 'hidden field', 'dt_ini': 'no label', 'dt_fim': 'no label', });
lyr_MANGALIIVERTICESPERIMETRO_13.set('fieldLabels', {'fid': 'hidden field', 'Arquivo_Origem': 'hidden field', 'Vertice': 'no label', 'Longitude_GMS': 'no label', 'Sigma_Lon': 'no label', 'Latitude_GMS': 'no label', 'Sigma_Lat': 'no label', 'Altitude': 'no label', 'Sigma_Alt': 'no label', 'Metodo': 'no label', 'Tipo_Limite': 'no label', 'cns': 'no label', 'Matricula': 'no label', 'Descricao': 'no label', });
lyr_MANGALIIVERTICESPERIMETRO_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});