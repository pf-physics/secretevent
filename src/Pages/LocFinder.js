import React from 'react';
import { useState, useEffect } from "react";

const findDiff = (lat1, lon1, lat2, lon2) => {  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d * 1000); // meters
}

const LocFinder = (p) => {
	const [loc, setLoc] = useState({})
	const [perm, setPerm] = useState(true)
	const [load, setLoad] = useState(false)
	const [diff, setDiff] = useState()
	//const secretCoords = {latitude: 45.514043, longitude: -73.586374}
	const secretCoords = {latitude: 45.512684, longitude: -73.584963}

	const geoSuccess = ({coords, timestamp}) => {
		setLoc(coords)
		setLoad(false)
		setDiff(findDiff(coords.latitude, coords.longitude, secretCoords.latitude, secretCoords.longitude))
	}

	const geoFailure = (props) => {
		setLoad(false)
		setPerm(false)
	}

	const loadLocation = () => {
		setLoad(true)
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure); 
		}
	}

	return <div>
		{loc['latitude'] && <h3>You are at {loc.latitude} {loc.longitude}</h3>}
		{diff && <h3>You are {diff}m away</h3>}
		{load && <h2>Loading...</h2>}
		{ !perm && <h2>You must accept location to proceed (please refresh page)</h2>}
		<div><button onClick={loadLocation}>Load location</button></div>
	</div>
}

export const LocComponent = (allD, setAllD, inp) => {
	//const secretCoords = {latitude: 45.514043, longitude: -73.586374}
	//const secretCoords = {latitude: 45.512689, longitude: -73.585076}
	// 45.512684, -73.584963
	const secretCoords = {latitude: 45.512684, longitude: -73.584963}

	const geoSuccess = ({coords, timestamp}) => {
		const diff = findDiff(coords.latitude, coords.longitude, secretCoords.latitude, secretCoords.longitude)
		if (diff < 100 || inp == "test") {
			setAllD(allD.concat({text:"Close enough!"}))
		} else {
			setAllD(allD.concat({text:`You are ${findDiff(coords.latitude, coords.longitude, secretCoords.latitude, secretCoords.longitude)}m away!`, component: LocComponent}))
		}
	}

	const geoFailure = (props) => {
		setAllD(allD.concat({text:"You have to accept for this to work... Please refresh", component: LocComponent}))
	}

	const loadLocation = () => {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure); 
		}
		setAllD(allD.concat({text: "Finding your location...", component: LocComponent}))
	}

	loadLocation()

}

export default LocFinder