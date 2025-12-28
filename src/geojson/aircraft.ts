import type {Feature, FeatureCollection, MultiPoint} from 'geojson';

const aircraft_48af07: number[] = [20.224085, 51.998855];

const aircraftMultiPoint: Feature<MultiPoint> = {
    type: "Feature",
    geometry: {
        type: "MultiPoint",
        coordinates: [
            aircraft_48af07
        ]
    },
    properties: {
        desc: "Boeing 737 MAX 8"
    }
}

export const aircraftCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        aircraftMultiPoint
    ]
}
