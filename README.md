# npm project preparation 
```
npm install leaflet
npm install react-leaflet
npm install -D @types/leaflet
npm install geojson

npm install object-hash
npm install -D @types/object-hash

npm install leaflet-rotate
npm install -D @types/leaflet-rotate
```

# Flight Radar Links
* https://egghead.io/lessons/react-interface-with-the-react-leaflet-map-api-with-the-useref-and-useeffect-react-hooks
* https://codesandbox.io/p/sandbox/react-leaflet-geojson-773y5?file=%2Fsrc%2Findex.js%3A47%2C25
* https://datatracker.ietf.org/doc/html/rfc7946
* https://ourairports.com/data/
* https://en.wikipedia.org/wiki/List_of_airports_by_ICAO_code:_A
* https://openflights.org/data
* https://raw.githubusercontent.com/jpatokal/openflights/master/data/countries.dat
* https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat
* https://leaflet-extras.github.io/leaflet-providers/preview/
* https://rstudio.github.io/leaflet.providers/

# Typescript Links:
* https://oida.dev/erasable-syntax-only/
* https://medium.com/@robmanganelly/farewell-to-enums-in-typescript-then-what-09dcbe987020

# Tile Layer Sources
* https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
* https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png
* https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png
  * https://github.com/CartoDB/basemap-styles

# Tile Sources for Performance:
* Stadia Maps Alidade Smooth
* CartoDB Positron
* OpenTopoMap (minimal, for topography)
* Stamen Toner Lite

# Ideas
* Simplify GeoJSON: Employ tools like mapshaper.org to simplify polygons or lines.

# Technical Backlog


# Functional Backlog
* add layer control 
  * https://react-leaflet.js.org/docs/example-layers-control/