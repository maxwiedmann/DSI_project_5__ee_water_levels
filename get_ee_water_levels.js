// https://developers.google.com/earth-engine/tutorials/community/modis-ndvi-time-series-animation

// Sugar Land TX
var geometry =
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-95.67167658232255, 29.626700842662462],
          [-95.67167658232255, 29.559828487751545],
          [-95.54327387236161, 29.559828487751545],
          [-95.54327387236161, 29.626700842662462]]], null, false);

var landsat8= ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA').filterBounds(geometry);
var waterThreshold = 0; // Threshold for NDWI Band to be used when creating the binary waterArea Band

var waterfunction = function(image){
  // This function adds two bands to a an ee.Image: NDWI and waterArea
  // NDWI is just the normalized difference of Band 3 and Band 5

  //add the NDWI band to the image
  var ndwi = image.normalizedDifference(['B3', 'B5']).rename('NDWI');
  //get pixels above the threshold
  var water01 = ndwi.gt(waterThreshold);
  //mask those pixels from the image
  image = image.updateMask(water01).addBands(ndwi);

  var area = ee.Image.pixelArea();
  var waterArea = water01.multiply(area).rename('waterArea');

  image = image.addBands(waterArea);

  var stats = waterArea.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: geometry,
    scale: 30,
  });

  return image.set(stats);
};
var collection = landsat8.map(waterfunction);
print(collection);

var chart = ui.Chart.image.series({
  imageCollection: collection.select('waterArea'),
  region: geometry,
  reducer: ee.Reducer.mean(),
  scale: 30,
});
print(chart);



var landsat82 = ee.ImageCollection('LANDSAT/LC8_L1T_TOA').filterBounds(geometry);

var waterfunction2 = function(image){
  //add the NDWI band to the image
  var ndwi2 = image.normalizedDifference(['B3', 'B5']).rename('NDWI');
  var water02 = ndwi2.gt(waterThreshold+1);
  return image.updateMask(water02).addBands(ndwi2);
};

var col = landsat82.map(waterfunction2).select('NDWI');
var region = geometry;

col = col.map(function(img) {
  var doy = ee.Date(img.get('system:time_start')).getRelative('week', 'year');
  return img.set('doy', doy);
});

var distinctDOY = col.filterDate('2013-01-01', '2020-12-31');


var filter = ee.Filter.equals({leftField: 'doy', rightField: 'doy'});

var join = ee.Join.saveAll('doy_matches');

var joinCol = ee.ImageCollection(join.apply(distinctDOY, col, filter));

var comp = joinCol.map(function(img) {
  var doyCol = ee.ImageCollection.fromImages(
    img.get('doy_matches')
  );
  return doyCol.reduce(ee.Reducer.median());
});


var visParams = {
  palette: [
    'D4D0F6',	'CCC7F4',	'C3BEF3',	'BBB5F1',
'B1ACEF',	'A6A3EB',	'969AE6',	'8290DF',
'6F88D7',	'597DCC',	'4774C0',	'396BB1',
'3064A3',	'2A5C95',	'275186',	'27467A',
'283B6E',	'293265',	'2A295B',	'2B1E51',
]
};

var rgbVis = comp.map(function(img) {
  return img.visualize(visParams);
});

var gifParams = {
  'region': region,
  'dimensions': 300,
  'framesPerSecond': 12,
  'format': 'gif'
};

print(rgbVis.getVideoThumbURL(gifParams));

print(ui.Thumbnail(rgbVis, gifParams));
