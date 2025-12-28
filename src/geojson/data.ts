import type {Feature, FeatureCollection, LineString, Point} from 'geojson';
import {lodz, lowicz, warsaw, zyrardow} from "./cities.ts";
import {pinType} from "../leaflet/PinType.ts";

const warsawZyrardowLowiczLodzList: number[][] = [
    warsaw,
    zyrardow,
    lowicz,
    lodz
]

const warsawLodzList: number[][] = [
    warsaw,
    lodz
]

// geojson

const lowiczPoint: Feature<Point> = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: lowicz
    },
    properties: {
        desc: "Łowicz"
    }
}

const zyrardowPoint: Feature<Point> = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: zyrardow
    },
    properties: {
        desc: "Żyrardów"
    }
}

const warsawPoint: Feature<Point> = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: warsaw
    },
    properties: {
        desc: "Okęcie Airport",
        type: pinType.Airport
    }
}

const lodzPoint: Feature<Point> = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: lodz
    },
    properties: {
        desc: "Lublinek Airport",
        type: pinType.Airport
    }
}

const warsawZyrardowLowiczLodzLineString: Feature<LineString> = {
    type: "Feature",
    geometry: {
        type: "LineString",
        coordinates: warsawZyrardowLowiczLodzList
    },
    properties: {
        desc: "Warsaw to Zarardow to Lowicz to Lodz Line String"
    }
}

const warsawLodzLineString: Feature<LineString> = {
    type: "Feature",
    geometry: {
        type: "LineString",
        coordinates: warsawLodzList
    },
    properties: {
        desc: "Warsaw to Lodz Line String"
    }
}

// routes

export const complexRoute: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        warsawPoint,
        zyrardowPoint,
        lowiczPoint,
        lodzPoint,
        warsawZyrardowLowiczLodzLineString
    ]
}

export const simpleRoute: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        warsawPoint,
        lodzPoint,
        warsawLodzLineString
    ]
}

export const emptyRoute: FeatureCollection = {
    type: "FeatureCollection",
    features: []
}
