var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "smallMap": {},
  "export": {
    "enabled": true,
    "position": "bottom-right"
  },
  "listeners": [{
    "event": "clickMapObject",
    "method": function(e) {
      // deselect the area by assigning all of the dataProvider as selected object
      map.selectedObject = map.dataProvider;

      // toggle showAsSelected
      e.mapObject.showAsSelected = !e.mapObject.showAsSelected;

      // bring it to an appropriate color
      map.returnInitialColor(e.mapObject);

      // let's build a list of currently selected states
      var states = [];
      for (var i in map.dataProvider.areas) {
        var area = map.dataProvider.areas[i];
        if (area.showAsSelected) {
          states.push(area.title);
        }
      }
    }
  }]
});