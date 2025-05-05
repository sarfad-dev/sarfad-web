'use client';

import { Box, Text } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x.src,
	iconUrl: markerIcon.src,
	shadowUrl: markerShadow.src,
});

const MapCenterer = ({ position }: { position: [number, number] }) => {
	const map = useMap();
	useEffect(() => {
		map.setView(position, map.getZoom());
	}, [position, map]);
	return null;
};

const LiveMap = () => {
	const [position, setPosition] = useState<[number, number]>([0, 0]);
	const [path, setPath] = useState<[number, number][]>([]);
	const markerRef = useRef<L.Marker<any>>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch('/sensor-data/latest')
				.then((res) => res.json())
				.then((data) => {
					if (data.latitude && data.longitude) {
						const lat = parseFloat(data.latitude);
						const lon = parseFloat(data.longitude);
						const newPos: [number, number] = [lat, lon];
						setPosition(newPos);
						setPath((prev) => [...prev.slice(-100), newPos]);
					}
				})
				.catch((err) => console.error('Map fetch error:', err));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Box width="100%" height="60vh" p={4} borderRadius="2xl" boxShadow="lg" bg="blackAlpha.100">
			<Text fontSize="2xl" fontWeight="bold" mb={4} color="gray.700">Live Location</Text>
			<MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', borderRadius: '1rem' }}>
				<TileLayer
					attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapCenterer position={position} />
				<Marker position={position} ref={markerRef}></Marker>
				<Polyline positions={path} color="blue" />
			</MapContainer>
		</Box>
	);
};

export default LiveMap;
