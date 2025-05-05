'use client';

import { Box, Text, SimpleGrid, Button, HStack } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

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

//random math shit help (chat god)
function haversineDistance(pos1: [number, number], pos2: [number, number]) {
	const R = 6371e3;
	const toRad = (deg: number) => (deg * Math.PI) / 180;
	const [lat1, lon1] = pos1;
	const [lat2, lon2] = pos2;
	const φ1 = toRad(lat1), φ2 = toRad(lat2);
	const Δφ = toRad(lat2 - lat1);
	const Δλ = toRad(lon2 - lon1);
	const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
	return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

interface LiveMapProps {
	showUserLocation?: boolean;
	showNavigationButtons?: boolean;
}

const LiveMap = ({ showUserLocation = false, showNavigationButtons = false }: LiveMapProps) => {
	const [canSatPosition, setCanSatPosition] = useState<[number, number]>([0, 0]);
	const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch('/sensor-data/latest')
				.then((res) => res.json())
				.then((data) => {
					if (data.latitude && data.longitude) {
						const lat = parseFloat(data.latitude);
						const lon = parseFloat(data.longitude);
						setCanSatPosition([lat, lon]);
					}
				})
				.catch((err) => console.error('Map fetch error:', err));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!showUserLocation) return;
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				setUserPosition([pos.coords.latitude, pos.coords.longitude]);
			},
			(err) => console.warn('Geolocation error:', err),
			{ enableHighAccuracy: true }
		);
	}, [showUserLocation]);

	const distance = showUserLocation && userPosition
		? haversineDistance(userPosition, canSatPosition)
		: null;

	const openGoogleMaps = () => {
		window.open(`https://www.google.com/maps?q=${canSatPosition[0]},${canSatPosition[1]}`, '_blank');
	};

	const openMapyCz = () => {
		window.open(`https://mapy.cz/zakladni?x=${canSatPosition[1]}&y=${canSatPosition[0]}&z=17`, '_blank');
	};

	return (
		<>
			<Box width="100%" height="60vh" p={4} borderRadius="2xl" boxShadow="lg" bg="blackAlpha.100">
				<Text fontSize="2xl" fontWeight="bold" mb={4} color="gray.700">Lokace CanSatu</Text>
				<MapContainer center={canSatPosition} zoom={13} scrollWheelZoom={true} style={{ height: '100%', borderRadius: '1rem' }}>
					<TileLayer
						attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<MapCenterer position={canSatPosition} />
					<Marker position={canSatPosition} />
					{showUserLocation && userPosition && (
						<>
							<Marker position={userPosition} />
							<Polyline positions={[userPosition, canSatPosition]} color="red" />
						</>
					)}
				</MapContainer>
			</Box>

			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} pt="3rem">
				<Box p={4} borderRadius="md" boxShadow="md" bg="white">
					<Text fontSize="lg" fontWeight="bold" color="gray.600">Zeměpisná šířka</Text>
					<Text fontSize="xl" fontWeight="bold" color="blue.500">{canSatPosition[0]}</Text>
				</Box>
				<Box p={4} borderRadius="md" boxShadow="md" bg="white">
					<Text fontSize="lg" fontWeight="bold" color="gray.600">Zeměpisná délka</Text>
					<Text fontSize="xl" fontWeight="bold" color="blue.500">{canSatPosition[1]}</Text>
				</Box>
			</SimpleGrid>
			{distance && (
				<Box
					p={4}
					borderRadius="md"
					boxShadow="md"
					bg="white"
					textAlign="center"
					width="100%"
				>
					<Text fontSize="lg" fontWeight="bold" color="gray.600">Vzdálenost</Text>
					<Text fontSize="xl" fontWeight="bold" color="purple.500">{(distance).toFixed(2)} m</Text>
				</Box>
			)}

			{showNavigationButtons && (
				<Box mt={8} mb={8} display="flex" flexDirection="column" alignItems="center" gap={4}>
					<Button colorScheme="blue" size="lg" width="50vw" onClick={openGoogleMaps}>Otevřít v Google Maps</Button>
					<Button colorScheme="green" size="lg" width="50vw" onClick={openMapyCz}>Otevřít v Mapy.cz</Button>
				</Box>
			)}
		</>
	);
};

export default LiveMap;
