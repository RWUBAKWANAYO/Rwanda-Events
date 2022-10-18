import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker} from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "Amahoro National Stadium",
    position: { lat: -1.9539325612788778, lng: 30.114897078331765 }
  },
  {
    id: 2,
    name: "Kigali Convertional Centre",
    position: { lat: -1.9544376500314284, lng: 30.093853396648587 }
  },
  {
    id: 3,
    name: "Kigali Conference and Exhibition Village (KCEV)",
    position: { lat: -1.9551493837118716, lng: 30.06289634468224 }
  },
  {
    id: 4,
    name: "Intare Conference Arena",
    position: { lat: -1.9801843845572218, lng: 30.19840822520037 }
  }
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const google = window.google
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}




export default function GMap() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyDnBk5c_y5axG9H-TusZtaNxG0dsEiJX0s"
    });
  
    return isLoaded ? <Map /> : null;
}
