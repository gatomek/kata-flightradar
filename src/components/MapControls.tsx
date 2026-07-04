import {lodz, skierniewice, warsaw} from '../geojson/cities.ts';
import {complexRoute, emptyRoute, simpleRoute} from '../geojson/data.ts';
import {basemapsTileLayer, openstreetTileLayer, stadiaMapsTileLayer} from './tileLayers.ts';
import * as React from 'react';
import type {FeatureCollection} from 'geojson';
import type {CustomTileLayer} from './CustomTileLayer.ts';

export type MapControlsProps = {
    setMarker: React.Dispatch<React.SetStateAction<number[] | undefined>>;
    setGeoJsonRoute: React.Dispatch<React.SetStateAction<FeatureCollection | undefined>>;
    setTileLayer: React.Dispatch<React.SetStateAction<CustomTileLayer>>;
};

export function MapControls(props: Readonly<MapControlsProps>) {
    return (
        <div className="sidebar">
            <h2>Cities</h2>
            <p>
                <button onClick={() => props.setMarker(lodz)}>Łódź</button>
                <button onClick={() => props.setMarker(warsaw)}>Warszawa</button>
                <button onClick={() => props.setMarker(skierniewice)}>Skierniewice</button>
            </p>

            <h2>Routes</h2>
            <p>
                <button onClick={() => props.setGeoJsonRoute(emptyRoute)}>Hide</button>
                <button onClick={() => props.setGeoJsonRoute(simpleRoute)}>Simple Route</button>
                <button onClick={() => props.setGeoJsonRoute(complexRoute)}>Complex Route</button>
            </p>

            <h2>Map Layers</h2>
            <p>
                <button onClick={() => props.setTileLayer(stadiaMapsTileLayer)}>Stadia Maps</button>
                <button onClick={() => props.setTileLayer(openstreetTileLayer)}>OpenStreetMap</button>
                <button onClick={() => props.setTileLayer(basemapsTileLayer)}>Basemaps</button>
            </p>
        </div>
    );
}
