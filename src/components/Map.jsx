import { useGeolocated } from "react-geolocated";
import Mapbox, { Marker, Popup } from "react-map-gl";

export default function Map({ children }) {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    });
  const latitude = coords?.latitude || 40;
  const longitude = coords?.longitude || 40;
  return (
    <Mapbox
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude,
        latitude,
        zoom: 3.5
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {children}
    </Mapbox>
  );
}
