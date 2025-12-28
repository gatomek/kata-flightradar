import {GeoJSON, MapContainer, TileLayer} from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';
import L, {LatLng, type LatLngTuple, Layer} from "leaflet";
import type {Feature, FeatureCollection} from 'geojson';
import {useState} from "react";
import hash from 'object-hash';
import {skierniewice} from "./geojson/cities.ts";
import {stadiaMapsTileLayer} from "./components/tileLayers.ts";
import {aircraftCollection} from "./geojson/aircraft.ts";
import 'leaflet-rotate'
import type {CustomTileLayer} from "./components/CustomTileLayer.ts";
import {airplaneIcon} from "./leaflet/icon/airplaneIcon.ts";
import {pinIcon} from "./leaflet/icon/pinIcon.ts";
import {airportPinIcon} from "./leaflet/icon/airportPinIcon.ts";
import {MapControls} from "./components/MapControls.tsx";
import {SetViewCommand} from "./components/SetViewCommand.tsx";
import {pinType} from "./leaflet/PinType.ts";

function SetTileLayer(props: Readonly<CustomTileLayer>) {
    return (
        <TileLayer
            url={props.url}
            attribution={props.attribution}
            detectRetina={false}
        />
    );
}

const routeStyle: Record<string, string | number> = {
    color: "blue",
    weight: 1
};

const aircraftStyle: Record<string, string | number> = {
    color: "red",
    weight: 1,
    fillColor: "orange",
    radius: 5,
    minRadius: 3,
    opacity: 0.5,
    fillOpacity: 0.1
};

type ShowGeoJsonObjectProps = {
    geoJsonCollection: FeatureCollection,
    pointToLayer: ((geoJsonPoint: Feature, latLng: LatLng) => Layer) | undefined,
    style?: Record<string, string | number>;
}

function routePointToLayer(feature: Feature, latLng: LatLng) {
    const icon = feature.properties?.type === pinType.Airport ? airportPinIcon : pinIcon;
    return L.marker(latLng, {icon: icon})
        .bindTooltip(feature.properties?.desc, {permanent: false, direction: 'top', opacity: 0.75})
}

function degreeToRadians(degree: number): number {
    return degree * Math.PI / 180;
}

function aircraftPointToLayer(feature: Feature, latLng: LatLng) {
    return L.marker(latLng, {icon: airplaneIcon, rotation: degreeToRadians(-45)})
        .bindTooltip(feature.properties?.desc, {permanent: false, direction: 'top', opacity: 0.75});
}

function ShowGeoJsonObject(props: Readonly<ShowGeoJsonObjectProps>) {
    return (
        <GeoJSON
            key={hash(props.geoJsonCollection)}
            data={props.geoJsonCollection}
            style={props.style}
            pointToLayer={props.pointToLayer}
        />
    );
}

const position: LatLngTuple = [skierniewice[1], skierniewice[0]];

function App() {
    const [marker, setMarker] = useState<number[] | undefined>();
    const [geoJsonRoute, setGeoJsonRoute] = useState<FeatureCollection | undefined>();
    const [tileLayer, setTileLayer] = useState<CustomTileLayer>(stadiaMapsTileLayer);

    return (
        <div className="App">
            <MapControls
                setMarker={setMarker}
                setGeoJsonRoute={setGeoJsonRoute}
                setTileLayer={setTileLayer}
            />
            <MapContainer
                center={position}
                zoom={9}
                scrollWheelZoom={true}
            >
                <SetTileLayer url={tileLayer.url} attribution={tileLayer.attribution}/>
                {geoJsonRoute && <ShowGeoJsonObject geoJsonCollection={geoJsonRoute}
                                                    pointToLayer={routePointToLayer}
                                                    style={routeStyle}/>}
                <ShowGeoJsonObject geoJsonCollection={aircraftCollection}
                                   pointToLayer={aircraftPointToLayer}
                                   style={aircraftStyle}/>
                {marker && <SetViewCommand marker={marker}/>}
            </MapContainer>
        </div>
    )
}

export default App;
